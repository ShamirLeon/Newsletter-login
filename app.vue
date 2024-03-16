<template>
  <div :class="classes.container">
    <div :class="classes.card.container">
      <div :class="classes.card.grid">
        <div :class="classes.card.leftColumn">
          <h1 :class="classes.card.title">Stay updated!</h1>
          <p :class="classes.card.paragraph">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul :class="classes.card.list">
            <li v-for="item in items" :class="classes.card.listItem">
              <img src="./assets/images/icon-list.svg" :class="classes.card.listIcon">
              {{ item }}
            </li>
          </ul>
          <form :class="classes.card.form">
            <label for="email" :class="classes.card.label">Email address</label>
            <input v-model="email" type="email" name="email" id="" placeholder="email@company.com" :class="classes.card.input">
            <button @click.prevent="handleModal" :class="classes.card.submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>
      <div>
        <img src="./assets/images/illustration-sign-up-desktop.svg" alt="Sing up" />
      </div>
    </div>

    <Modal v-if="modalShow" :email="email" @dissmiss="handleModal" />
  </div>
</template>

<script setup>
import Modal from './components/modal/Modal.vue'
import { ref } from 'vue'

/* Refs variables */
let email = ref('')
const modalShow = ref(false)

const items = ['Product discovery and building what matters', 'Measuring to ensure updates are a success', 'And much more!']

/* Classes styles */
const classes = {
  container: 'flex justify-center items-center h-[100vh] bg-DarkSlateGrey',
  card: {
    container: 'flex bg-white p-8 rounded-[24px] gap-8',
    grid: 'grid font-Roboto place-content-center w-[500px]',
    leftColumn: 'w-[90%]',
    title: 'text-DarkSlateGrey text-6xl font-bold mb-8',
    paragraph: 'mb-8',
    list: 'mb-8',
    listItem: 'mb-3',
    listIcon: 'inline-block mr-3',
    image: 'inline-block mr-3',
    form: 'flex flex-col gap-2',
    label: 'font-bold text-sm',
    input: 'py-4 px-6 rounded-lg border mb-4 focus:outline-none',
    submit: 'btn'
  },
}

/* Methods */
const handleModal = () => {
  modalShow.value = !modalShow.value
}


</script>
