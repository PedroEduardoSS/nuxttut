<template>
    <div>
        <h2>bem-vindo {{ session.name }}</h2>
        <p>Autenticação {{ session.auth }}</p>
        <p>Contador: {{ counter }}</p>
        <button @click="counter++">+</button>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    import { useCounter } from '~/composables/useCounter';
    import { userSession } from '~/stores/session';
    const session = userSession()

    const {counter, setCounter} = useCounter()
</script>

<style scoped>

</style>