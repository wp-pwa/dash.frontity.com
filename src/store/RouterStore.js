import { types, getParent } from 'mobx-state-tree';

export default types
  .model({
    page: 'sites',
    selectedSiteId: '',
  })
  .views(self => ({
    get currentUrl() {
      switch (self.page) {
        case 'sites':
          return '/';
        case 'new-site':
          return '/new-site';
        case 'site':
          return '/site/' + self.selectedSiteId;
        case 'login':
          return '/login';
        case 'signup':
          return '/signup';
        default:
          return '/404';
      }
    },
    get isLoggedIn() {
      return getParent(self).access.isLoggedIn;
    },
  }))
  .actions(self => ({
    openSitesPage() {
      if (!self.isLoggedIn) return self.openLogInPage();
      self.page = 'sites';
      self.selectedSiteId = '';
    },
    openNewSitePage() {
      if (!self.isLoggedIn) return self.openLogInPage();
      self.page = 'new-site';
      self.selectedSiteId = '';
    },
    openSitePage(site) {
      if (!self.isLoggedIn) return self.openLogInPage();
      self.page = 'site';
      self.selectedSiteId = site.id;
    },
    openSitePageById(id) {
      if (!self.isLoggedIn) return self.openLogInPage();
      self.page = 'site';
      self.selectedSiteId = id;
    },
    openLogInPage() {
      if (self.isLoggedIn) return self.openSitesPage();
      self.page = 'login';
      self.selectedSiteId = '';
    },
    openSignUpPage() {
      if (self.isLoggedIn) return self.openSitesPage();
      self.page = 'signup';
      self.selectedSiteId = '';
    },
  }));
