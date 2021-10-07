const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'ecommerce';
const client = new MongoClient(url);

module.exports = {
  create: async function (dataToInsert) {
    await this.errorHandling(async (users) => {
      if (Array.isArray(dataToInsert)) {
        await users.insertMany(dataToInsert);
      } else {
        await users.insertOne(dataToInsert);
      }
      console.log('Successfully written users');
    });
  },
  read: async function (query) {
    await this.errorHandling(async (users) => {
      const res = await users.find(query).toArray();
      console.log('Successfully found users');
      console.log(res);
    });
  },
  update: async function (fromData, toData) {
    await this.errorHandling(async (users) => {
      await users.updateMany(fromData, { $set: toData });
      console.log('Successfully updated users');
    });
  },
  delete: async function (dataToDelete) {
    await this.errorHandling(async (users) => {
      await users.deleteMany(dataToDelete);
      console.log('Successfully deleted users');
    });
  },
  errorHandling: async function (execFunc) {
    try {
      await client.connect();
      const database = client.db(dbName);
      const users = database.collection('users');
      await execFunc(users);
    } catch (e) {
      console.log('An Error Occured');
      console.log(e);
    } finally {
      console.log('Closing Connection');
      console.log('================================');
      await client.close();
    }
  },
};
