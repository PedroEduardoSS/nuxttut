<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    import { userSession } from '~/stores/session';
    const session = userSession()
    const { data: test } = await useFetch('/api/test')

</script>

<template>
    <div>
        <h1>Hello World</h1>
        {{ session.name }}
        {{ test }}
    </div>
</template>

<style>

</style>