const {
  roles,
  tags,
  users,
  categories,
  products,
  carts,
  orders,
} = require('./collections');
const seedData = require('./seeddata.json');
(async () => {
  //Roles CRUD
  await roles.create(seedData.roles);
  await roles.update({ name: 'admin' }, { name: 'administrator' });
  await roles.delete({ name: 'analyst' });
  await roles.read({});
  //Tags CRUD
  await tags.create(seedData.tags);
  await tags.update({ slug: 'D-30' }, { slug: 'discount_30percent' });
  await tags.delete({ slug: 'D-50' });
  await tags.read({});
  //Users CRUD
  await users.create(seedData.users);
  await users.update({ firstname: 'Vina' }, { firstname: 'Jane' });
  await users.read({});
  await users.delete({ firstname: 'Van' });
  //Categories CRUD
  await categories.create(seedData.categories);
  await categories.update({ slug: 'wo-r' }, { description: 'modified' });
  await categories.read({});
  await categories.delete({ slug: 'to-s' });
  //Products CRUD
  await products.create(seedData.products);
  await products.update({ name: 'Mens Cotton Jacket' }, { tags: ['modified'] });
  await products.read({});
  await products.delete({ name: 'Mens Casual Slim Fit' });
  //Carts CRUD
  await carts.create(seedData.carts);
  await carts.update({ user: 'Hailey Gandy' }, { products: ['modified'] });
  await carts.read({});
  await carts.delete({ user: 'Justina Hanshaw' });
  //Orders CRUD
  await orders.create(seedData.orders);
  await orders.update({ user_id: '57JZ04' }, { products: ['modified'] });
  await orders.read({});
  await orders.delete({ user_id: '38KX32' });
})().catch(console.dir);
