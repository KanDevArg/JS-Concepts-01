const express = require("express")
const path = require("path")

const app = express();

console.log(app);

app.use("/static", express.static(path.resolve(__dirname,"fe", "static")))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "fe", "main.html"));
});

app.listen(process.env.PORT || 6002, ()=> console.log("Server running..."));
