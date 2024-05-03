<template>
  <!-- Main container -->
  <div class="min-h-screen flex justify-center items-center pt-20">
    <!-- Sign-up form -->
    <div class="bg-white text-black p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-3xl font-semibold mb-4 text-center">Sign Up</h2>
      <!-- Form submission handler -->
      <form @submit.prevent="signup" class="space-y-4">
        <!-- Name input field -->
        <div>
          <label for="name" class="block">Name:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
            class="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>
        <!-- Email input field -->
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
        <!-- Password input field -->
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
        <!-- Signup button -->
        <div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            @click="signup()"
          >
            <!-- Signup button text with loading spinner -->
            <div class="flex items-center justify-center">
              <!-- Loading spinner animation -->
              <div
                v-if="loading"
                class="animate-spin text-center rounded-full h-7 w-7 border-t-2 border-b-2 border-white justify-center"
              />
              {{ loading ? "wait..." : "Signup" }}
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

// Reactive variables for name, email, password, and loading state
const name = ref("");
const email = ref("");
const password = ref("");
const loading = ref(false);

// Signup function to handle form submission
const signup = async () => {
  // Validation check for required fields
  if (!name.value || !email.value || !password.value) {
    alert("Please fill all required fields");
    return;
  }
  try {
    // Set loading state to true during API request
    loading.value = true;
    // Make API request to signup endpoint
    const response = await axios({
      method: "POST",
      url: baseUrl + "/api/method/ness_commerce.v1.customer.signup",
      headers: {},
      // Prepare data payload for signup request
      data: {
        customer_name: name.value,
        email: email.value,
        password: password.value,
        mobile: "9990123456", // Assuming mobile number is static
      },
    });
    // Clear input fields and reset loading state after successful signup
    email.value = "";
    password.value = "";
    loading.value = false;
    return response;
  } catch (error) {
    // Handle error cases
    throw error;
  }
};
</script>
