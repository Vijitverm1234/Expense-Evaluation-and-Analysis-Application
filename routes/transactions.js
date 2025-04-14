const { addIncome, getIncomes, deleteIncome } = require('../controller/income.js')

const routes=require('express').Router()
routes.post('/add-income',addIncome) .get('/get-incomes', getIncomes) .delete('/delete-income/:id',deleteIncome)
module.exports=routes