<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
    <div class="mt-12">
      <h2 class="text-lg font-medium leading-6 text-white -900">
        Shopping Cart
      </h2>
      <div v-if="loading" class="mt-4 text-white -600">Loading...</div>
      <div v-else>
        <div v-if="cartItems.length === 0" class="mt-4 text-gray-600">
          Your cart is empty.
        </div>
        <div v-else>
          <div
            v-for="(item, index) in cartItems"
            :key="index"
            class="flex items-center border-b border-gray-200 py-4"
          >
            <div class="flex-shrink-0">
              <router-link :to="'/item/' + item.item_name">
              <img
                :src="baseUrl + item.image"
                :alt="item.title"
                class="w-40 h-fit"
              />
            </router-link>
            </div>
            <div class="flex flex-col flex-grow ml-4">
              <h3 class="text-2xl font-bold text-white">
                {{ item.item_name }}
              </h3>
              <p class="text-sm text-white">{{ item.itemCode }}</p>
              <p class="text-sm text-white">{{ item.modified }}</p>
              <p class="text-sm text-white">{{ item.brand }}</p>
              <p class="text-sm text-white">$: {{ item.amount }}</p>

              <div class="mt-1 flex items-center">
                <span class="text-sm text-white mr-2">Qty:</span>
                <input
                  type="number"
                  v-model="item.qty"
                  class="w-12 text-sm border text-black border-gray-300 rounded py-1 px-2"
                />
              </div>
            </div>
            <div class="ml-4">
              <span class="text-sm font-medium text-white">{{
                item.price
              }}</span>
              
            </div>
          </div>
          <div class="mt-8 flex justify-between items-center">
            <button class="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
              Proceed to Checkout
            </button>

            <router-link class="text-red-500 hover:underline" to="/cart">
              Goto Cart
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const cartItems = ref([]);
const loading = ref(true);
const baseUrl = "https://qmph.nesscale.com";

// Retrieve key details from local storage
const keyDetails = JSON.parse(localStorage.getItem("key_details"));
const apiKey = keyDetails.api_key;
const apiSecret = keyDetails.api_secret;

// Function to fetch cart items
async function fetchCartItems() {
  try {
    const response = await axios.get(
      "https://qmph.nesscale.com/api/method/ness_commerce.v1.cart.get_cart",
      {
        headers: {
          Authorization: `token ${apiKey}:${apiSecret}`,
        },
      }
    );
    cartItems.value = response.data.data.items;
    console.log((cartItems.value[2]));
    loading.value = false;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    loading.value = false;
  }
}

// Call fetchCartItems when the component is mounted
onMounted( async()=> await fetchCartItems());


</script>
