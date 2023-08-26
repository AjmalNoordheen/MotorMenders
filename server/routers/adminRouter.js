const express        = require('express')
const adminrouter    = express.Router()
const auth           = require('../middleWare/auth')
const adminController = require('../controller/adminController')

adminrouter.post('/login',adminController.adminLogin)
adminrouter.post('/blockuser',auth.verifyToken,adminController.blockuser)
adminrouter.post('/listTypes',auth.verifyToken,adminController.listType)
adminrouter.get('/listTypes',adminController.displayType)
adminrouter.delete('/deleteType',auth.verifyToken,adminController.deleteType)
adminrouter.patch('/editType',auth.verifyToken,adminController.editType)
adminrouter.get('/getuser',auth.verifyToken,adminController.listUsers)
adminrouter.get('/getProfessionals',adminController.listFreelancer)
adminrouter.get('/getMechanic',adminController.getMechanic)



module.exports = adminrouter