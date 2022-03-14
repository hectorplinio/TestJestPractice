var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
const AddBBDD = (form, area) => {
  if (area) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myObjt = { nameOfForm: form, area: area };
      dbo.collection("areas").insertOne(myObjt, function (err, res) {
        if (err) throw err;
        db.close();
      });
    });
    return "OK";
  }
  return null;
};
module.exports = { AddBBDD };
