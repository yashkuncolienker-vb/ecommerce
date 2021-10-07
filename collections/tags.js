const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'ecommerce';
const client = new MongoClient(url);

module.exports = {
  create: async function (dataToInsert) {
    await this.errorHandling(async (tags) => {
      if (Array.isArray(dataToInsert)) {
        await tags.insertMany(dataToInsert);
      } else {
        await tags.insertOne(dataToInsert);
      }
      console.log('Successfully written tags');
    });
  },
  read: async function (query) {
    await this.errorHandling(async (tags) => {
      const res = await tags.find(query).toArray();
      console.log('Successfully found tags');
      console.log(res);
    });
  },
  update: async function (fromData, toData) {
    await this.errorHandling(async (tags) => {
      await tags.updateMany(fromData, { $set: toData });
      console.log('Successfully updated tags');
    });
  },
  delete: async function (dataToDelete) {
    await this.errorHandling(async (tags) => {
      await tags.deleteMany(dataToDelete);
      console.log('Successfully deleted tags');
    });
  },
  errorHandling: async function (execFunc) {
    try {
      await client.connect();
      const database = client.db(dbName);
      const tags = database.collection('tags');
      await execFunc(tags);
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
