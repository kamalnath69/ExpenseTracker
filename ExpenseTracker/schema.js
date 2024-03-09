const mongoose = require('mongoose')

const ExpenseT = new mongoose.Schema //Schema 
(
    {
        amount:{
            type : Number
        },
        category : {
            type : String
        },
        date:{
            type: String
        }
    }
)

const Expense = mongoose.model('expense-details' , ExpenseT) //first letter caps for model

module.exports = {Expense} 