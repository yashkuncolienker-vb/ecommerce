const categories = require('./collections/categories');
const roles = require('./collections/roles');
const tags = require('./collections/tags');
const users = require('./collections/users');

(async () => {
  // await roles.create([
  //   { slug: 'B1', name: 'user' },
  //   { slug: 'hello', name: 'admin' },
  // ]);
  // await roles.create({ slug: 'BP1', name: 'premiumuser' });
  // await roles.update({ name: 'admin' }, { slug: 'A1' });
  // await roles.delete({ name: 'admin' });
  // await roles.read({});
  // await tags.create([
  //   { slug: 'hor', name: 'horror' },
  //   { slug: 'com', name: 'comedy' },
  // ]);
  // await roles.update({ name: 'horror' }, { slug: 'horr' });
  // await roles.read({});
  // await tags.delete({ name: 'comedy' });
  // await tags.create([
  //   { slug: 'hor', name: 'horror' },
  //   { slug: 'com', name: 'comedy' },
  // ]);
  // await roles.update({ name: 'horror' }, { slug: 'horr' });
  // await roles.read({});
  // await tags.delete({ name: 'comedy' });
  // await users.create([
  //   {
  //     firstname: 'jan',
  //     lastname: 'smith',
  //     email: 'js@gmail.com',
  //     profileimage: 'xxx',
  //     role: 'admin',
  //   },
  //   {
  //     firstname: 'tyler',
  //     lastname: 'vaz',
  //     email: 'tv@gmail.com',
  //     profileimage: 'xxx',
  //     role: 'customer',
  //   },
  // ]);
  // await users.update({ firstname: 'jan' }, { firstname: 'january' });
  // await users.read({});
  // await users.delete({ firstname: 'tyler' });
  // await categories.create([
  //   {
  //     name: 'home appliances',
  //     slug: 'h-a',
  //     image: 'xxx',
  //     description: 'lorem ipsum',
  //   },
  //   {
  //     name: 'electronics',
  //     slug: 'el',
  //     image: 'xxx',
  //     description: 'lorem ipsum',
  //   },
  // ]);
  // await categories.update({ slug: 'jan' }, { name: 'household appliances' });
  // await categories.read({});
  // await categories.delete({ slug: 'el' });
})().catch(console.dir);
