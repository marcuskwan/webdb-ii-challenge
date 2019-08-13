// require server js
const server = require('./api/server.js');

// port in env or default port 5000
const port = process.env.PORT || 5000;

// server msg
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
