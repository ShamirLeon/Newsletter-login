<template>
  <div class="flex justify-center items-center h-[100vh] bg-DarkSlateGrey">
    <div class="flex bg-white p-8 rounded-[24px] gap-8 ">
      <div class="grid font-Roboto place-content-center  w-[500px]">
        <div class="w-[90%]">
          <h1 class="text-DarkSlateGrey text-6xl font-bold mb-8">Stay updated!</h1>
          <p class="mb-8">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul class="mb-4">
            <li v-for="item in items" class="mb-3">
              <img src="./assets/images/icon-list.svg" class="inline-block mr-3">
              {{ item }}
            </li>
          </ul>
          <form action="" class="flex flex-col gap-2">
            <label for="email" class="font-bold text-sm">Email address</label>
            <input type="email" name="email" id="" placeholder="email@company.com" class="py-4 px-6 rounded-lg border mb-4 focus:outline-none">
            <button type="submit" class="bg-DarkSlateGrey text-white py-4 rounded-lg border border-DarkSlateGrey hover:bg-gradient-to-r hover:from-Pink  hover:to-Orange hover:border-transparent transition ease-in-out">Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>
      <div>
        <img src="./assets/images/illustration-sign-up-desktop.svg" alt="Sing up" />
      </div>
    </div>
  </div>
</template>

<script setup>

const items = ['Product discovery and building what matters', 'Measuring to ensure updates are a success', 'And much more!']

</script>
