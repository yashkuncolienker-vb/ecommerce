const roles = require('./collections/roles.js');

(async () => {
  await roles.create([
    { slug: 'B1', name: 'user' },
    { slug: 'hello', name: 'admin' },
  ]);
  await roles.create({ slug: 'BP1', name: 'premiumuser' });
  await roles.update({ name: 'admin' }, { slug: 'A1' });
  await roles.delete({ name: 'admin' });
  await roles.read({});
})();
