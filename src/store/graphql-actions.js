import { flow, getType, recordPatches } from 'mobx-state-tree';
import client from '../graphql/client';

const updateQuery = async (node, data) => {
  const type = getType(node).name;
  const keys = Object.keys(data);
  const response = await client.request(
    `
    mutation update($id: ID!, ${keys.map(k => `$${k}: String`).join(', ')}) {
      update${type}(
        id: $id
        ${keys.map(k => `${k}: $${k}`).join(', ')}
      ) {
        id
      }
    }
  `,
    { id: node.id, ...data },
  );
  return response[`update${type}`];
};

export default self => ({
  update: flow(function* update(data) {
    const patches = recordPatches(self);
    try {
      Object.assign(self, data);
      patches.stop(self);
      yield updateQuery(self, data);
    } catch (error) {
      console.error(error);
      patches.undo(self);
    }
  }),
});
