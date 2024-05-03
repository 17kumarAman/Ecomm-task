<template>
  <div class="bg-black text-white pt-20">
    
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <div class="md:w-1/2 md:pr-16">
          <h1 class="text-3xl md:text-6xl font-bold px-5 pt-10">
            THE MARKETPLACE CONNECTING THE WORLD OF INSTITUTIONAL REAL ESTATE
          </h1>
          <div class="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-8 mt-8">
            <div class="px-5 pt-5 md:pt-0">
              <h2 class="font-bold text-lg md:text-2xl">Global Marketplace</h2>
              <p class="text-sm md:text-base">Connecting investors with real estate investments globally</p>
            </div>
            <div class="px-5 pt-5 md:pt-0">
              <h2 class="font-bold text-lg md:text-2xl">Life-Cycle Ecosystem</h2>
              <p class="text-sm md:text-base">Connecting the stakeholders along the whole value-chain</p>
            </div>
          </div>
          <div class="mt-8 md:hidden">
            <button class="bg-[#1606AE] px-5 py-2 rounded-lg">SPEAK WITH US</button>
          </div>
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0">
          <img src="https://assets-global.website-files.com/64b3f0b76b91b96438cc2add/65babfe14352419e9a6c2cde_Design%20ohne%20Titel%20(32)-p-1600.png" alt="Image" />
          <div class="hidden md:block mt-4">
            <button class="bg-[#1606AE] px-5 py-2 rounded-lg">SPEAK WITH US</button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 class="text-3xl md:text-5xl font-bold text-center mb-8">
        REDEFINING REAL ESTATE FOR THE DIGITAL AGE
      </h1>
      <p class="text-base md:text-lg text-center mx-auto max-w-3xl">
        StegX is where global opportunities meet digital efficiency. Elevate your real estate portfolio with our state-of-the-art ecosystem, which brings the world's prime real estate opportunities to your fingertips.
      </p>
    </div>

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/3">
          <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image" class="w-full md:h-auto object-cover bg-fixed" />
        </div>
        <div class="overflow-hidden md:flex-1 md:ml-20 mt-8 md:mt-0">
          <div class="h-96 md:h-auto overflow-y-auto no-scrollbar">
            <!-- Cards or content inside second div (Columbus) -->
            <div v-for="(item, index) in 4" :key="index" class="w-full md:w-80 md:h-80 text-white shadow-lg rounded-lg mx-6 my-4 bg-gray-700">
              <div class="text-center uppercase text-xl font-bold mb-4">{{ index + 1 | addZero }}</div>
              <div class="text-center mb-4">
                <h2 class="text-2xl font-semibold">NextGen Marketplace</h2>
                <p class="">
                  StegX marketplace integrates cutting-edge blockchain technology, revolutionizing real estate investing. Experience unparalleled security, transparency, and efficiency in global property transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


