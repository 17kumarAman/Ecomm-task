<template>
  <!-- Main container -->
  <div class="container mx-auto pt-40 py-10 text-black">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Item cards loop -->
      <div
        v-for="item in data"
        :key="item.id"
        class="bg-white shadow-md rounded-lg p-4"
      >
        <!-- Router link to item detail -->
        <router-link :to="'/item/' + item.name">
          <img
            :src="baseUrl + item.image"
            :alt="item.name"
            class="w-full h-48 object-cover mb-4"
          />
        </router-link>

        <!-- Item details -->
        <h3 class="text-lg font-semibold mb-2">{{ item.name }}</h3>
        <p class="text-gray-600">{{ item.description }}</p>
        <p class="mt-2 text-lg font-semibold">${{ item.price }}</p>

        <!-- Add to cart button and goto cart link -->
        <div class="mt-8 flex justify-between items-center">
          <!-- Add to cart button -->
          <button
            @click="addToCart(item.name)"
            :disabled="loading"
            class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {{ loading ? "Adding..." : "Add to Cart" }}
            <!-- Loading spinner -->
            <div
              v-if="loading"
              class="animate-spin text-center rounded-full h-10 w-10 border-t-2 mx-auto border-b-2 border-white justify-center"
            />
          </button>
          <!-- Goto cart link -->
          <router-link
            class="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            to="/cart"
          >
            Goto Cart
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Reactive variables for loading state and item data
const loading = ref(false);
const data = ref([]);
const baseUrl = "https://qmph.nesscale.com";

// Retrieve key details from local storage
const keyDetails = JSON.parse(localStorage.getItem("key_details"));
const apiKey = keyDetails.api_key;
const apiSecret = keyDetails.api_secret;

// Function to fetch list of items
const getItemsList = async () => {
  try {
    loading.value = true;
    const response = await axios.post(
      "https://qmph.nesscale.com/api/method/ness_commerce.v1.shop.get_item_list",
      { route: "personal-care/others" }
    );
    data.value = response.data.data;
    loading.value = false;
  } catch (error) {
    alert(error.message);
    loading.value = false;
  }
};

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

// Fetch items list on component mounted
onMounted(async () => await getItemsList());
</script>
