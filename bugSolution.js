```javascript
//Correct usage of $inc operator with $setOnInsert for handling cases where the field may not exist initially
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{
  $setOnInsert:{"field":0},
  $inc:{field:value}
});
```