const express = require("express");
const redis = require("redis");

//redis client 생성
const client = redis.createClient({
    socket: {
        host: 'redis-server',
        port: '6379'
    }
})

const port = 8080;

//APP
const app = express();

app.get('/', async (req, res) => {

await client.connect();

let number = await client.get('number');

if (number === null) {

number = 0;

}

console.log('Number: ' + number);

res.send("숫자가 1씩 올라갑니다. 숫자: " + number)

await client.set("number", parseInt(number) + 1)

await client.disconnect();;;

})

app.listen(port);
console.log("Server is Running");