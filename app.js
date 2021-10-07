const {
  roles,
  tags,
  users,
  categories,
  products,
  carts,
  orders,
} = require('./collections');

(async () => {
  await roles.create([
    { slug: 'B1', name: 'user' },
    { slug: 'hello', name: 'admin' },
  ]);
  await roles.create({ slug: 'BP1', name: 'premiumuser' });
  await roles.update({ name: 'admin' }, { slug: 'A1' });
  await roles.delete({ name: 'admin' });
  await roles.read({});
  await tags.create([
    { slug: 'hor', name: 'horror' },
    { slug: 'com', name: 'comedy' },
  ]);
  await tags.update({ name: 'horror' }, { slug: 'horr' });
  await tags.read({});
  await tags.delete({ name: 'comedy' });
  await users.create([
    {
      firstname: 'jan',
      lastname: 'smith',
      email: 'js@gmail.com',
      profile_image: 'xxx',
      role: 'admin',
    },
    {
      firstname: 'tyler',
      lastname: 'vaz',
      email: 'tv@gmail.com',
      profile_image: 'xxx',
      role: 'customer',
    },
  ]);
  await users.update({ firstname: 'jan' }, { firstname: 'january' });
  await users.read({});
  await users.delete({ firstname: 'tyler' });
  await categories.create([
    {
      name: 'home appliances',
      slug: 'h-a',
      image: 'xxx',
      description: 'lorem ipsum',
    },
    {
      name: 'electronics',
      slug: 'el',
      image: 'xxx',
      description: 'lorem ipsum',
    },
  ]);
  await categories.update({ slug: 'jan' }, { name: 'household appliances' });
  await categories.read({});
  await categories.delete({ slug: 'el' });
  await products.create([
    {
      name: 'kenstar oven',
      thumbnail: 'xxx',
      product_gallery: ['xxx', 'yyy', 'zzz'],
      description: 'lorem ipsum',
      baseprice: 12,
      sellprice: 15,
      category_name: ['a', 'b', 'c'],
      tags: ['x', 'y'],
      additional_information: 'lorem ipsum',
    },
    {
      name: 'fivestar oven',
      thumbnail: 'xxx',
      product_gallery: ['xxx1', 'yyy2', 'zzz3'],
      description: 'lorem ipsum',
      baseprice: 12,
      sellprice: 15,
      category_name: ['a1', 'b2', 'c3'],
      tags: ['x1', 'y2'],
      additional_information: 'lorem ipsum',
    },
  ]);
  await products.update({ name: 'kenstar oven' }, { tags: ['b'] });
  await products.read({});
  await products.delete({ name: 'fivestar oven' });
  await carts.create([
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
  await carts.update({ user: 'timmy' }, { products: [] });
  await carts.read({});
  await carts.delete({ user: 'timmy' });
  await orders.create([
    {
      user_id: '1acd',
      products: ['a', 'a', 'c'],
      total_items: 3,
      billing_address: 'xyz',
      shipping_address: 'xyz',
      transaction_status: 'standby',
      payment_mode: 'upi',
      payment_status: false,
      order_status: 'processing',
    },
    {
      user_id: '2acd',
      products: ['a2', '2a', 'c2'],
      total_items: 3,
      billing_address: 'xy2z',
      shipping_address: 'xy2z',
      transaction_status: 'standby',
      payment_mode: 'upi',
      payment_status: false,
      order_status: 'processing',
    },
  ]);
  await orders.update({ user_id: '1acd' }, { products: [] });
  await orders.read({});
  await orders.delete({ user_id: '2acd' });
})().catch(console.dir);
