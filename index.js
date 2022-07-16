


const express = require ('express')
const{getDb,connectToDb } = require('./db')
const app =express()

// db connectin

let db

connectToDb((err) => {
    if(!err) {
        app.listen(3000,()=>{
            console.log('listening to port 3000')
        })
        db = getDb()
    }

})


app.get('/books',(req,res)=>{

    let books =[]
    db.collection('books')
    .find()
    .sort({author:1})
    .forEach(book =>books.push(book))
    .then(()=>{
        res.statusCode(200).json(books)
    })
    .catch((err)=>{
        res.status(500).json({err:'Could not fetch the docoments'})

    })
})