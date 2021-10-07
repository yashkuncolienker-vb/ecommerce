const cart = require('./collections/cart');
const categories = require('./collections/categories');
const products = require('./collections/products');
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
  //     profile_image: 'xxx',
  //     role: 'admin',
  //   },
  //   {
  //     firstname: 'tyler',
  //     lastname: 'vaz',
  //     email: 'tv@gmail.com',
  //     profile_image: 'xxx',
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
  // await products.create([
  //   {
  //     name: 'kenstar oven',
  //     thumbnail: 'xxx',
  //     product_gallery: ['xxx', 'yyy', 'zzz'],
  //     description: 'lorem ipsum',
  //     baseprice: 12,
  //     sellprice: 15,
  //     category_name: ['a', 'b', 'c'],
  //     tags: ['x', 'y'],
  //     additional_information: 'lorem ipsum',
  //   },
  //   {
  //     name: 'fivestar oven',
  //     thumbnail: 'xxx',
  //     product_gallery: ['xxx1', 'yyy2', 'zzz3'],
  //     description: 'lorem ipsum',
  //     baseprice: 12,
  //     sellprice: 15,
  //     category_name: ['a1', 'b2', 'c3'],
  //     tags: ['x1', 'y2'],
  //     additional_information: 'lorem ipsum',
  //   },
  // ]);
  // await products.update({ name: 'kenstar oven' }, { tags: ['b'] });
  // await products.read({});
  // await products.delete({ name: 'fivestar oven' });
  // await cart.create([
  //   {
  //     user: 'timmy',
  //     products: [1, 2, 3],
  //     product_qty: 0,
  //     baseprice: 12,
  //     sellprice: 15,
  //     totalprice: 10,
  //   },
  //   {
  //     user: 'jacky',
  //     products: [3, 5],
  //     product_qty: 0,
  //     baseprice: 121,
  //     sellprice: 151,
  //     totalprice: 101,
  //   },
  // ]);
  // await cart.update({ user: 'timmy' }, { products: [] });
  // await cart.read({});
  // await cart.delete({ user: 'timmy' });
  await cart.create([
    {
      user: 'timmy',
      products: [1, 2, 3],
      product_qty: 0,
      baseprice: 12,
      sellprice: 15,
      totalprice: 10,
    },
    {
      user: 'jacky',
      products: [3, 5],
      product_qty: 0,
      baseprice: 121,
      sellprice: 151,
      totalprice: 101,
    },
  ]);
  await cart.update({ user: 'timmy' }, { products: [] });
  await cart.read({});
  await cart.delete({ user: 'timmy' });
})().catch(console.dir);
