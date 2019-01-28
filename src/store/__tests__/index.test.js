import store from '..';

it('has the right properties', () => {
  expect(store).toMatchSnapshot();
});
