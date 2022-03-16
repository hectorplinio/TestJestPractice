const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const url = process.env.MONGO_DB_URI
const AddBBDD = (myObjt, collection) => {
  if (myObjt.Area == null) return null
  if (myObjt) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err
      const dbo = db.db('mydb')
      dbo.collection(collection).insertOne(myObjt, function (err, res) {
        if (err) throw err
        db.close()
      })
    })
    return 'OK'
  }
  return null
}
module.exports = { AddBBDD }
