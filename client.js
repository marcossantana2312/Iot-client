const axios = require("axios");

axios.get("http://localhost:4000/?message=Hello Server", { mmessage: "Hello server" }).then(res => console.log(res.data))