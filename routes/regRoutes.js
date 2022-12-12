const router = require('express').Router()
const multer = require('multer')

const StudentModel = require('../model/StudentModel')

//Configuring multer for image upload
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads")
    }, 
    filename: (req, file, cb) => {
        // cb(null, file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

//instantiating a variable to store multer's functionality
var upload = multer({storage: storage})

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/',  upload.single("studentPhoto"), async (req,res) => {
    
    const registerStudents = new StudentModel(req.body)

    registerStudents.studentPhoto = req.file.path;

    console.log(registerStudents)
    res.redirect('back')
})


module.exports = router