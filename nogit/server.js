import { createServer } from 'node:http' //visivelmente, isso importa o servidor do node
const app = createServer

const server = createServer(() => {
    console.log('vantuba')
})

server.listen(3232)     //localhost > 3232