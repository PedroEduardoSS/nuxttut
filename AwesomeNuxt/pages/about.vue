<template>
    <div>
        <h2>bem-vindo {{ session.name }}</h2>
        <p>Autenticação {{ session.auth }}</p>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    import { userSession } from '~/stores/session';
    const session = userSession()
</script>

<style scoped>

</style>