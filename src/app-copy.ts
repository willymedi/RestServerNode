import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.url);

    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.write("<h1>Hello World</h1>")
    // res.end()

    const data = {name: 'Hello World', age: 30, city: "New York"}
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data))
})

server.listen(3000, () => {
    console.log('Server running on port 3000');    
})