import { types } from 'mobx-state-tree';
import { initRouter } from './router';
import RouterStore from './RouterStore';
import AccessStore from './AccessStore';

const User = types.model('User', {
  name: types.string,
  email: types.string,
});

const Store = types
  .model('Positions', {
    user: types.maybe(User),
    router: types.optional(RouterStore, {}),
    access: types.optional(AccessStore, {}),
  })
  .actions(self => ({
    setUser: user => (self.user = user),
  }));

const store = Store.create({});
initRouter(store);

export default store;
