const {MongoClient} = require('mongodb');

module.exports = (async () => {
  db = await new MongoClient.connect(process.env.MONGO_URL, {useUnifiedTopology: true, poolSize: 10});
  return await db.db('imgApp'); 
})();