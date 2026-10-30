import { createClient } from "redis";

const redis = createClient({
    socket: {
        host: "localhost",
        port: 6379
    }
}).on('error', function(err){
    console.log(err)
})

await redis.connect()
console.log("Redis connected")

export default redis