import { types } from 'mobx-state-tree';
import { initRouter } from './router';
import RouterStore from './RouterStore';
import AccessStore from './AccessStore';

const Store = types.model('Positions', {
  router: types.optional(RouterStore, {}),
  access: types.optional(AccessStore, {}),
});

// const store = Store.create(
//   JSON.parse(window.localStorage.getItem('mst-store')) || {},
// );

// onSnapshot(store, snapshot => {
//   window.localStorage.setItem('mst-store', JSON.stringify(snapshot));
// });

const store = Store.create({});
initRouter(store);

export default store;
