<template>
    <div :class="classes.container">
        <div :class="classes.card.container">
            <!-- Modal content goes here -->
            <img src="../../assets/images/icon-success.svg" :class="classes.card.icon">
            <h2 :class="classes.card.title">Thanks for subscribing!</h2>
            <p :class="classes.card.paragraph">
                A confirmation email has been sent to <span :class="classes.card.span">{{ email }}</span>. Please open it and click the button inside to confirm your subscription.
            </p>
            <button @click="dissmiss" :class="classes.card.button">Dissmiss mesage</button>
        </div>
    </div>
</template>

<script setup>
/* Define props */
const props = defineProps({
    email: String,
})

/* Define emits */
const emits = defineEmits(['dissmiss'])

/* Classes styles */
const classes = {
    container: 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm',
    card: {
        container: 'bg-white p-8 rounded-3xl max-w-96',
        icon: 'w-[20%] mb-6',
        title: 'text-DarkSlateGrey text-4xl font-bold mb-8',
        span: 'font-bold',
        paragraph: 'mb-6',
        button: 'btn w-full'
    }
}

/* Methods */
const dissmiss = () => {
    emits('dissmiss', false)
}
</script>