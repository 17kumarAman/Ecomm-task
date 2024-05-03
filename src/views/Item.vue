<template>
  <div class="container mx-auto pt-40 pb-20">
    <div
      v-if="item"
      class="bg-white shadow-md rounded-lg p-4 border border-gray-200"
    >
      <img
        :src="baseUrl + item.image"
        :alt="item.name"
        class="w-fit h-60 object-cover mb-4 mx-auto"
      />
      <h2 class="text-xl font-semibold mb-2">{{ item.name }}</h2>
      <p class="text-gray-600 text-sm mb-2">{{ item.description }}</p>

      <p class="text-lg font-semibold text-blue-500">${{ item.price }}</p>

      <button
        @click="addToCart(item.name)"
        :disabled="loading"
        class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {{ loading ? "Adding..." : "Add to Cart" }}
        <div
          v-if="loading"
          class="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full ml-2"
        ></div>
      </button>
    </div>
    <div v-else class="text-center text-red-500">Item not found</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const loading = ref(false);
const item = ref(null);
const baseUrl = "https://qmph.nesscale.com";
const itemName = useRouter().currentRoute.value.params.name;

// Retrieve key details from local storage
const keyDetails = JSON.parse(localStorage.getItem("key_details"));
const apiKey = keyDetails.api_key;
const apiSecret = keyDetails.api_secret;

// Function to fetch item details
async function getItem() {
  try {
    loading.value = true;
    const response = await axios.get(
      `${baseUrl}/api/method/ness_commerce.v1.shop.get_item`,
      {
        params: { name: itemName },
      }
    );
    // Set item details and update loading state
    item.value = response.data.data;
    loading.value = false;
  } catch (error) {
    // Handle error cases
    loading.value = false;
    console.error("Error fetching item:", error);
  }
}

// Function to add item to cart
async function addToCart(element) {
  try {
    loading.value = true;
    const response = await axios.post(
      "https://qmph.nesscale.com/api/method/ness_commerce.v1.cart.add_to_cart",
      { item_code: `${element}`, qty: "2" },
      {
        headers: {
          Authorization: `token ${apiKey}:${apiSecret}`,
        },
      }
    );
    loading.value = false;
    console.log(response);
    if (response.status == 200) {
      alert("Item added to cart successfully");
    }
    return response.data;
  } catch (error) {
    loading.value = false;
    console.error("Error adding item to cart:", error);
    throw error;
  }
}

// Fetch item details when component is mounted
onMounted(async () => await getItem());
</script>
