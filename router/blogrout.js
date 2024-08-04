const Router=require('express');
const { createabook, getbook, getbyid, update } = require('../handle/logic');
const router=Router()
router.post('/new',createabook)
router.get('/gett',getbook)
router.get('/gett/:id',getbyid)
router.put('/gett/:id',update)
module.exports= router;