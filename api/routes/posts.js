const express =require ('express');
const { addPost } = require('../controllers/post.js');


const router = express.Router();


router.get("/test",addPost)

module.exports = router;