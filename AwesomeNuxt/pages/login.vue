<template>
    <div>
        <form @submit.prevent="submit">
            <p>Name: <input type="text" required v-model="name"></p>
            <button type="submit">Log in</button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { userSession } from '~/stores/session';
    const session = userSession()
    
    const name = useState('name', () => '')

    async function submit(){
        session.startSession(name.value)
        const action = await $fetch('/api/test', {
            method: 'POST',
            body: {
                name: name.value
            }
        })
        navigateTo('/')
    }

</script>

<style scoped>

</style>