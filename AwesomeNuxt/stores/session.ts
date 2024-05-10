export const userSession = defineStore('userSession', {
    state: () => ({
        name: '',
        auth: false
    }),
    actions: {
        startSession(name: string){
            this.name = name
            this.auth = true
        },
        closeSession(){
            this.name = ''
            this.auth = false
        }
    }
})