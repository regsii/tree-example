import Ember from 'ember';

export default Ember.Component.extend({

  nextNestingLevel: Ember.computed('nestingLevel', function() {
    return this.get('nestingLevel') + 1;
  }),

  actions: {
    labelClicked(node) {
      this.get('onLabelClicked')( node );
    }
  }

});
