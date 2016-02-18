import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller) {
    var fetchedTree = {
      children: [
        {
          label: 'one',
          children: [
            {
              label: 'one.1'
            }, {
              label: 'one.2',
              children: [
                {
                  label: 'one.2.1'
                }
              ]
            }
          ]
        },
        {
          label: 'two'
        }
      ]
    };

    controller.set('tree', fetchedTree);
  }

});
