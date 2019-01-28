import { types, flow } from 'mobx-state-tree';
import { initRouter } from './router';
import RouterStore from './router-store';
import * as access from './access-actions';
import { User } from './graphql-models';
import client from '../graphql/client';

const Store = types
  .model('Dashboard', {
    user: types.maybeNull(User),
    router: types.optional(RouterStore, {}),
  })
  .volatile(() => ({
    isWaitingForUser: true,
  }))
  .views(self => ({
    get isLoggedIn() {
      return !!self.user;
    },
  }))
  .actions(self => ({
    updateUser: flow(function* updateUser() {
      self.isWaitingForUser = true;
      const { user } = yield client.request(
        `
          query getUser {
            user {
              id
              name
              email
              sites {
                id
                siteId
                url
                settings {
                  id
                  active
                  data
                  package {
                    id
                    name
                    namespace
                  }
                }
              }
            }
          }
        `,
      );
      self.user = user;
      self.isWaitingForUser = false;
    }),
    afterCreate: () => self.updateUser(),
  }))
  .volatile(access.volatile)
  .actions(access.actions);

const store = Store.create({});
initRouter(store);

export default store;
