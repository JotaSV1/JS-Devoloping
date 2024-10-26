import {createServer} from 'node:http'
const app = createServer

const server = createServer(() => {
    console.log('Snake')
})

server.listen(3333)