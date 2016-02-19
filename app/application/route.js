import Ember from 'ember';

export default Ember.Route.extend({
  treeHandler: Ember.inject.service('tree-handler'),

  setupController(controller) {
    var fetchedTree = {
      children: [
        {
          label: 'one',
          id: 1,
          children: [
            {
              id: 2,
              label: 'one.1'
            }, {
              id: 3,
              label: 'one.2',
              children: [
                {
                  id: 4,
                  label: 'one.2.1'
                }
              ]
            }
          ]
        },
        {
          id: 5,
          label: 'two'
        }
      ]
    };

    this.get('treeHandler').preprocessTreeNode(fetchedTree);

    controller.set('tree', fetchedTree);
  }

});
