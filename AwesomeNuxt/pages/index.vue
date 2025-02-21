<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    import { useCounter } from '~/composables/useCounter';
    import { userSession } from '~/stores/session';
    const session = userSession()
    const { data: test } = await useFetch('/api/test')

    const {counter, setCounter} = useCounter()

</script>

<template>
    <div>
        <h1>Hello World</h1>
        {{ session.name }}
        {{ test }}
        <p>Contador: {{ counter }}</p>
        <button @click="counter++">+</button>
    </div>
</template>

<style>

</style>