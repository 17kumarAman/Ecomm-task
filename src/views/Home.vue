<template>
  <div class="bg-gradient-to-br from-banner-darker to-banner-lighter text-white pt-20 ">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <div class="md:w-1/2 md:pr-16">
          <h1 class="text-3xl md:text-6xl font-bold px-5 pt-10">
            THE MARKETPLACE CONNECTING THE WORLD OF INSTITUTIONAL REAL ESTATE
          </h1>
          <div class="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-8 mt-8">
            <div class="px-5 pt-5 md:pt-0">
              <h2 class="font-bold text-lg md:text-2xl">Global Marketplace</h2>
              <p class="text-sm md:text-base">
                Connecting investors with real estate investments globally
              </p>
            </div>
            <div class="px-5 pt-5 md:pt-0">
              <h2 class="font-bold text-lg md:text-2xl">
                Life-Cycle Ecosystem
              </h2>
              <p class="text-sm md:text-base">
                Connecting the stakeholders along the whole value-chain
              </p>
            </div>
          </div>
          <div class="mt-8 md:hidden">
            <button class="bg-[#1606AE] px-5 py-2 rounded-lg">
              SPEAK WITH US
            </button>
          </div>
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://assets-global.website-files.com/64b3f0b76b91b96438cc2add/65babfe14352419e9a6c2cde_Design%20ohne%20Titel%20(32)-p-1600.png"
            alt="Image"
          />
          <div class="hidden md:block mt-4">
            <button class="bg-[#1606AE] px-5 py-2 rounded-lg">
              SPEAK WITH US
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 class="text-3xl md:text-5xl font-bold text-center mb-8">
        REDEFINING REAL ESTATE FOR THE DIGITAL AGE
      </h1>
      <p class="text-base md:text-lg text-center mx-auto max-w-3xl">
        StegX is where global opportunities meet digital efficiency. Elevate
        your real estate portfolio with our state-of-the-art ecosystem, which
        brings the world's prime real estate opportunities to your fingertips.
      </p>
    </div>

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 class="text-3xl md:text-5xl font-bold text-center mb-8">
        CONNECTING REAL ESTATE'S LIFECYCLE
      </h1>
      <p class="text-base md:text-lg text-center mx-auto max-w-3xl">
        Bridging the traditional with the transformative, StegX is an end-to-end
        solution for the whole life cycle of real estate investments,
        <span class="font-bold"
          >connecting every stage, every stakeholder.</span
        >
      </p>
    </div>

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="flex flex-col lg:flex-row gap-x-10 ">
        <div class="lg:w-1/2 ">
          <div
            v-for="(item, index) in 5"
            :key="index"
            class="bg-gray-600 text-white rounded-lg shadow-lg py-12 px-4 my-4 shadow-green-500 "
          >
            <div class="flex items-center lg:items-start gap-5">
              <div class="bg-green-400 h-20 w-20 text-2xl rounded-full flex items-center justify-center">
                <div class="text-2xl font-bold">+</div>
              </div>
              <div>
                <h1 class="text-2xl font-bold">ASSET MANAGER</h1>
                <p class="text-xl">every stage, every stakeholde</p>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 mx-6 lg:mx-10 my-5  border-green-400 lg:border-l-8 lg:mt-0 lg:pt-5">
          <div class="mx-4 my-5">
            <div class="mx-5 lg:mx-10">
              <h1 class="text-3xl lg:text-5xl font-bold">UNLEASH NEW OPPORTUNITIES</h1>
              <p class="text-lg lg:text-2xl mt-5 lg:mt-10">With StegX, partners tap into a vast network, unlocking new business avenues and fostering collaborations that drive growth and innovation in real estate. Access a unique platform to expand your reach and to showcase your solution to a global network of investment professionals.</p>

              <ul class="p-4 text-base lg:text-xl py-5 lg:py-7">
                <li v-for="(item, index) in 5" :key="index" class="flex items-center gap-5">
                  <p>{{ item }}</p>
                  <p>Showcase your services to a global audience.</p>
                </li>
              </ul>

              <div class="flex flex-col lg:flex-row">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-2 lg:mb-0 lg:mr-2">Learn More</button>
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">Join Ecosystem</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
