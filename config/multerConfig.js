const multer = require('multer')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.env.PATHMULTER)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})

const uploadSingle = multer({
    storage: storage
}).single("imagem")

const uploadArray = multer({
    storage: storage
}).array("images")


module.exports = {
    uploadSingle,
    uploadArray
}