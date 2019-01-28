import { types } from 'mobx-state-tree';

export const Package = types.model('Package', {
  id: types.identifier,
  name: types.string,
  namespace: types.string,
});

export const Setting = types.model('Setting', {
  id: types.identifier,
  active: types.boolean,
  package: types.reference(Package),
  data: types.frozen(),
});

export const Site = types.model('Site', {
  id: types.identifier,
  siteId: types.string,
  url: types.string,
  settings: types.array(Setting),
});

export const User = types.model('User', {
  id: types.identifier,
  name: types.string,
  email: types.string,
  sites: types.array(Site),
});
