<template>
  <nav class="fixed top-0 left-0 w-full bg-black text-white bg-opacity-80 border-b-4 border-[#3B058E] z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo or Brand -->
        <div class="flex-shrink-0">
          <router-link to="/" class="font-bold text-lg">
            <img class="w-40 md:w-56" src="https://assets-global.website-files.com/64b3f0b76b91b96438cc2add/655633756c2222cc33ad83ae_StegX_Logo_white_large%20version-p-500.png" alt="StegX Logo"/>
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link to="/" class="font-bold text-lg">Home</router-link>
          <router-link to="/shop" class="font-bold text-lg">Shop</router-link>
          <router-link to="/cart" class="font-bold text-lg">Cart</router-link>
          <router-link to="/login" class="font-bold text-lg">Login</router-link>
          <router-link to="/signup" class="font-bold text-lg">Signup</router-link>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="font-bold text-xl focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Content -->
      <div v-if="isMenuOpen" class="md:hidden bg-gray-700 p-4">
        <router-link to="/" class="block text-white mb-2">Home</router-link>
        <router-link to="/shop" class="block text-white mb-2">Shop</router-link>
        <router-link to="/cart" class="block text-white mb-2">Cart</router-link>
        <router-link to="/login" class="block text-white mb-2">Login</router-link>
        <router-link to="/signup" class="block text-white mb-2">Signup</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const isMenuOpen = menuOpen;

const closeMobileMenu = () => {
  menuOpen.value = false;
};
</script>

<style>
/* Add your custom styles here */
</style>
