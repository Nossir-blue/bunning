const server = Bun.serve({
    port: Bun.env.PORT|| 5000,
    fetch(req) {
        return new Response('Bun!');
    },
});

console.log(`Listening in http://127.0.0.1:${server.port}`);