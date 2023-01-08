const express = require("express");
const cors = require('cors')


//brings all routes
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");




const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())

app.use(cors({
    origin:"http://localhost:3000",
    methods: ["GET","POST"]
}));


// Actual routes

app.use("/api/posts", postRoutes)
app.use("/api/auth",authRoutes)



// app.get('/test',(req,res)=>{
//     res.json("testing")
// })






app.listen(port, () => console.log(`server is running at port ${port}`));