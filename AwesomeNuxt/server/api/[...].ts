const router = createRouter()

router.get('/test', defineEventHandler((event) => {
    const test = "Funcionou"
    return test
}))

router.post('/test', defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)
    return body
}))

export default useBase('/api', router.handler)