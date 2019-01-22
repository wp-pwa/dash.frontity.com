import { types, onSnapshot } from 'mobx-state-tree';

const Store = types
  .model('Positions', {
    isEnabled: false,
  })
  .actions(self => ({
    toggleEnabled: () => (self.isEnabled = !self.isEnabled),
  }));

const store = Store.create(
  JSON.parse(window.localStorage.getItem('mst-store')) || {},
);

onSnapshot(store, snapshot => {
  window.localStorage.setItem('mst-store', JSON.stringify(snapshot));
});

export default store;
