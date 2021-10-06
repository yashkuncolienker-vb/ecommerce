const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'ecommerce';
const client = new MongoClient(url);

module.exports = {
  create: async function (dataToInsert) {
    await this.errorHandling(async (roles) => {
      if (Array.isArray(dataToInsert)) {
        await roles.insertMany(dataToInsert);
      } else {
        await roles.insertOne(dataToInsert);
      }
      console.log('Successfully written role');
    });
  },
  read: async function (query) {
    await this.errorHandling(async (roles) => {
      const res = await roles.find(query).toArray();
      console.log('Successfully found roles');
      console.log(res);
    });
  },
  update: async function (fromData, toData) {
    await this.errorHandling(async (roles) => {
      await roles.updateMany(fromData, { $set: toData });
      console.log('Successfully updated role');
    });
  },
  delete: async function (dataToDelete) {
    await this.errorHandling(async (roles) => {
      await roles.deleteMany(dataToDelete);
      console.log('Successfully deleted role');
    });
  },
  errorHandling: async function (execFunc) {
    try {
      await client.connect();
      const database = client.db(dbName);
      const roles = database.collection('roles');
      await execFunc(roles);
    } catch (e) {
      console.log('An Error Occured');
      console.log(e);
    } finally {
      console.log('Closing Connection');
      await client.close();
    }
  },
};
