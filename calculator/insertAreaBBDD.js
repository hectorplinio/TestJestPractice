var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
const AddBBDD = (myObjt, collection) => {
  if (myObjt.Area == null) return null
  if (myObjt) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection(collection).insertOne(myObjt, function (err, res) {
        if (err) throw err;
        db.close();
      });
    });
    return "OK";
  }
  return null;
};
module.exports = { AddBBDD };
