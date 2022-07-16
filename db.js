const{mongoClient}=require('mongodb')
let dbConnection


module.export={
    connectToDb:(cb)=>{
        mongoClient.connect('mongodb://localhost:27017/bookstore')
        .then((client)=>{
          dbConnection=  client.db()
          return cb()

        })
        .catch(err=>{
            console.log(err)
            return cb(err)
        })
    },
    getDb:()=> dbConnection
    
}