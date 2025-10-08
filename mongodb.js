/* 

MongoDB kya hai
MongoDB ek NoSQL database hai jisme data ko documents ke form mein store kiya jata hai — JSON (JavaScript Object Notation) format mein.

MongoDB mein indexing
Indexing se query fast hoti hai. Agar kisi field pe index laga diya jaaye (jaise email), to us field par search jaldi hoti hai.
db.users.createIndex({ email: 1 })

MongoDB mein Aggregation Pipeline 
Aggregation Pipeline ek powerful query system hai jo multiple steps mein data ko filter, transform, group karta hai — like SQL’s GROUP BY.

Common Stages
$match → Filter kare documents (SQL WHERE ki tarah)
$group → Documents ko group kare aur aggregate kare (SQL GROUP BY)
$project → Specific fields ko include/exclude kare (SQL SELECT)
$sort → Sort kare (SQL ORDER BY)
$limit → Limited number of documents de (SQL LIMIT)
$skip → Skip kare certain number of documents (pagination ke liye)
$lookup → Join kare dusre collection ke saath (SQL JOIN)
$unwind → Array ko flatten kare (array ke elements ko alag documents me tod de)

db.orders.aggregate([
  // 1️⃣ Filter (only PAID orders)
  { $match: { status: "PAID" } },
  // 2️⃣ Group by customer and sum amount
  { $group: { 
      _id: "$customer", 
      totalAmount: { $sum: "$amount" } 
  }},
  // 3️⃣ Sort by totalAmount (descending)
  { $sort: { totalAmount: -1 } }
])

db.users.aggregate([
  {
    $lookup: {
      from: "userDetail",
      localField: "_id",
      foreignField: "user_id",
      as: "userDetails"
    }
  }
])

Common Aggregation Functions:
$sum	-- Total nikalne ke liye
$avg	-- 	Average
$min	-- 	Minimum
$max	-- 	Maximum
$push		-- Array bana ke values rakhne ke liye
$addToSet	-- 	Unique values ka array

db.getCollection("users").aggregate([
  {
    $group: {
      _id: "$name",           // group by name
      totalUsers: { $sum: 1 } // count users
    } 
  }
])


Sharding kya hoti hai?
Sharding ek method hai large data ko multiple servers pe divide karke rakhne ka — isse performance improve hoti hai.

Mongoose :
Mongoose ek ODM (Object Data Modeling) library hai Node.js ke liye — jo schema define karne, validations, aur relationships ko manage karta hai.

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number
});

MongoDB Important Operators

$gt / $lt	 ----  Greater than / Less than
$in	 ----  	Value is in array
$and, $or		 ----  Logical operators
$set	 ----  	Update value
$push	 ----  	Add value in array
$addToSet	 ----  	Add unique value in array
$group	 ----  	Grouping in aggregation
$match	 ----  	Filter stage in aggregation

upsert -
Upsert ek aisa operation hota hai jisme agar document exist karta hai to update, warna naya insert hota hai.


Projection ka Matlab Kya Hota Hai?
Jab aap MongoDB se data find() karte ho, to projection ka use hota hai decide karne ke liye ki kaunse fields chahiye aur kaunse nahi.

User.find({}, { name: 1, email: 1,_id: 0 }) // sirf name aur email chahiye, _id nahi;
*/
