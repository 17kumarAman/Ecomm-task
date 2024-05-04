<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="bg-white text-black p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-3xl font-semibold mb-4 text-center">Login</h2>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>
        <div>
          <label for="password" class="block">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            @click="login()"
          >
            <div class="flex items-center justify-center">
              <div
                v-if="loading"
                class="animate-spin text-center rounded-full h-7 w-7 border-t-2 border-b-2 border-white justify-center"
              />
              {{ loading ? "wait..." : "Login" }}
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"; // Import useRouter

// Reactive variables for email, password, and loading state
const router = useRouter();
const email = ref("");
const password = ref("");
const loading = ref(false);

// Function to handle login action
const login = async () => {
  // Validate email and password
  if (!email.value || !password.value) {
    alert("Please fill all required fields");
    return;
  }

  try {
    // Set loading state to true
    loading.value = true;
    // Make login request
    const response = await axios({
      method: "POST",
      url: baseUrl + "/api/method/ness_commerce.v1.customer.login",
      headers: {},
      data: {
        usr: email.value,
        pwd: password.value,
      },
    });

    // Store response data in local storage
    const responseData = response.data;
    Object.entries(responseData).forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
    });

    // Clear email and password fields
    email.value = "";
    password.value = "";

    // Set loading state to false
    loading.value = false;

    // Log response data and return response
    console.log(response.data);
    alert("Login succesfully");
    router.push("/shop");
    return response;
  } catch (error) {
    // Handle error and set loading state to false
    loading.value = false;
    console.error("Error making request:", error);
    throw error;
  }
};

// Base URL for API requests
const baseUrl = "https://qmph.nesscale.com";
</script>
