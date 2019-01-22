import store from '..';

it('saves changes in localStorage', () => {
  expect(store).toMatchSnapshot();
  expect(window.localStorage.getItem('mst-store')).toMatchSnapshot();

  store.toggleSelected();

  expect(store).toMatchSnapshot();
  expect(window.localStorage.getItem('mst-store')).toMatchSnapshot();
});
