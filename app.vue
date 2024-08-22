<template>
  <div :class="classes.container">
    <div :class="classes.card.container">
      <div :class="classes.card.grid">
        <div :class="classes.card.leftColumn">
          <h1 :class="classes.card.title">Stay updated!</h1>
          <p :class="classes.card.paragraph">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul :class="classes.card.list">
            <li v-for="item in items" :key="item" :class="classes.card.listItem">
              <img src="./assets/images/icon-list.svg" :class="classes.card.listIcon">
              {{ item }}
            </li>
          </ul>
          <form :class="classes.card.form" @submit.prevent="submiteForm()">
            <div :class="classes.card.texts">
              <label for="email" :class="classes.card.label">Email address</label>
              <span class="text-sm text-Orange">{{ errorMessage }}</span>
            </div>
            <input
              v-model="email"
              name="email"
              id=""
              placeholder="email@company.com"
              :class="!errorMessage ? classes.card.input : `${classes.card.input} border-Tomato bg-Orange bg-opacity-25 text-Tomato placeholder-Tomato`"
            />
            <button type="submit" :class="classes.card.submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>
      <div :class="classes.card.image">
        <img :src="urlImg" alt="Sign up" />
      </div>
    </div>

    <Modal v-if="modalShow" :email="email" @dissmiss="handleModal()" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Modal from './components/modal/Modal.vue'

// Refs variables
const email = ref('')
const errorMessage = ref('')
const modalShow = ref(false)

// Definir una referencia reactiva para el ancho de la pantalla
const screenWidth = ref(0)

// Función para manejar el cambio de tamaño de la ventana
const handleResize = () => {
  screenWidth.value = window.innerWidth
}

// Inicializar el ancho de la pantalla solo en el navegador
onMounted(() => {
  if (typeof window !== 'undefined') {
    screenWidth.value = window.innerWidth
    window.addEventListener('resize', handleResize)
  }
})

// Eliminar el listener antes de destruir el componente
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
})

// Computed para la URL de la imagen basada en el ancho de la pantalla
const urlImg = computed(() => {
  return `./images/illustration-sign-up-${screenWidth.value < 768 ? 'mobile' : 'desktop'}.svg`
})

const items = ['Product discovery and building what matters', 'Measuring to ensure updates are a success', 'And much more!']

const classes = {
  container: 'sm:flex sm:justify-center items-center h-[100vh] bg-DarkSlateGrey',
  card: {
    container: 'flex flex-col-reverse relative md:flex-row bg-white p-8 lg:rounded-[24px] gap-8 w-full h-full md:w-auto md:h-auto',
    grid: 'grid font-Roboto lg:place-content-center lg:w-[500px]',
    leftColumn: 'w-full md:w-[90%] mt-72 lg:mt-0',
    title: 'text-DarkSlateGrey text-4xl lg:text-6xl font-bold mb-8',
    paragraph: 'mb-8',
    list: 'mb-8',
    listItem: 'mb-3',
    listIcon: 'inline-block mr-3',
    image: 'inline-block mr-3',
    form: 'flex flex-col gap-2',
    label: 'font-bold text-sm',
    input: 'py-4 px-6 rounded-lg border mb-4 focus:outline-none transition-all',
    submit: 'btn',
    texts: 'flex flex justify-between',
    image: 'absolute left-0 top-0 md:relative'
  }
}

// Métodos
const submiteForm = () => {
  if (validateEmail()) {
    handleModal()
    errorMessage.value = ''
  } else {
    errorMessage.value = 'Please enter a valid email address'
  }
}

const handleModal = () => {
  modalShow.value = !modalShow.value
}

// Validar correo electrónico
const validateEmail = () => {
  const re = /\S+@\S+\.\S+/
  return re.test(email.value)
}
</script>
