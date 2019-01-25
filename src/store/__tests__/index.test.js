import { unprotect } from 'mobx-state-tree';
import store from '..';

unprotect(store);

it('has the right properties', () => {
  expect(store).toMatchSnapshot();
});

it('changes window location after using openPage actions', () => {
  // Before login
  store.router.openSitesPage();
  expect(window.location.pathname).toBe('/login');
  store.router.openNewSitePage();
  expect(window.location.pathname).toBe('/login');
  store.router.openSitePage({ id: 'blog-frontity-com' });
  expect(window.location.pathname).toBe('/login');
  store.router.openSitePageById('test-frontity-io');
  expect(window.location.pathname).toBe('/login');
  store.router.openLogInPage();
  expect(window.location.pathname).toBe('/login');
  store.router.openSignUpPage();
  expect(window.location.pathname).toBe('/signup');

  store.access.isLoggedIn = true;

  // After login
  store.router.openSitesPage();
  expect(window.location.pathname).toBe('/');
  store.router.openNewSitePage();
  expect(window.location.pathname).toBe('/new-site');
  store.router.openSitePage({ id: 'blog-frontity-com' });
  expect(window.location.pathname).toBe('/site/blog-frontity-com');
  store.router.openSitePageById('test-frontity-io');
  expect(window.location.pathname).toBe('/site/test-frontity-io');
  store.router.openLogInPage();
  expect(window.location.pathname).toBe('/');
  store.router.openSignUpPage();
  expect(window.location.pathname).toBe('/');
});
