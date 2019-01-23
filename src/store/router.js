import { reaction } from 'mobx';
import route from 'path-match';

export const createRouter = routes => {
  const matchers = Object.keys(routes).map(path => [
    route()(path),
    routes[path],
  ]);
  return function(path) {
    return matchers.some(([matcher, f]) => {
      const result = matcher(path);
      if (result === false) return false;
      f(result);
      return true;
    });
  };
};

export const initRouter = store => {
  reaction(
    () => store.router.currentUrl,
    path => {
      if (window.location.pathname !== path)
        window.history.pushState(null, null, path);
    },
  );

  const router = createRouter({
    '/new-site': store.router.openNewSitePage,
    '/site/:siteId': ({ siteId }) => store.router.openSitePageById(siteId),
    '/login': store.router.openLogInPage,
    '/signup': store.router.openSignUpPage,
    '/': store.router.openSitesPage,
  });

  window.onpopstate = function historyChange({ type }) {
    if (type === 'popstate') router(window.location.pathname);
  };

  router(window.location.pathname);
};
