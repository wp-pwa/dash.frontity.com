import { types, flow } from 'mobx-state-tree';
import { initRouter } from './router';
import RouterStore from './router-store';
import * as access from './access-actions';
import { User, Site, Package } from './graphql-models';
import client from '../graphql/client';

const Store = types
  .model('Dashboard', {
    user: types.maybeNull(User),
    sites: types.array(Site),
    packages: types.array(Package),
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
    updatePackages: flow(function* updatePackages() {
      const { allPackages } = yield client.request(
        `
          query getPackages {
            allPackages {
              id
              name
              namespace
            }
          }
        `,
      );
      self.packages = allPackages;
    }),
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
                  }
                }
              }
            }
          }
        `,
      );

      if (user) {
        const { sites, ...otherUserProps } = user;
        // Init sites
        self.sites = user.sites.map(({ settings, ...otherSiteProps }) => ({
          settings: settings.map(
            ({ package: { id }, ...otherSettingProps }) => ({
              package: id,
              ...otherSettingProps,
            }),
          ),
          ...otherSiteProps,
        }));
        // Init user
        self.user = {
          sites: self.sites.map(({ id }) => id),
          ...otherUserProps,
        };
      } else {
        self.sites.clear();
      }
      self.isWaitingForUser = false;
    }),
    afterCreate: flow(function* storeAfterCreate() {
      yield self.updatePackages();
      yield self.updateUser();
    }),
  }))
  .volatile(access.volatile)
  .actions(access.actions);

const store = Store.create({});
initRouter(store);

export default store;
