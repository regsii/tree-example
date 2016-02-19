import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    loadMoreChildren(node) {
      if (!node.children) {
        Ember.set(node, 'children', []);
      }
      node.children.pushObject({label: 'newChild'});
    }

  }

});
