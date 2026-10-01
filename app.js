const http = require("http");

const PORT = process.env.PORT || 3000;

function createServer() {
    return http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello! Node.js CI/CD Demo App is running 🚀");
    });
}

if (require.main === module) {
    const server = createServer();

    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = { createServer };