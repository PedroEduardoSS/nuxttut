import { userSession } from "~/stores/session"

export default defineNuxtRouteMiddleware((to, from) => {
    const session = userSession()

    if (session.auth === false) {
      return navigateTo('/login')
    }
  })