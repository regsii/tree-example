import Ember from 'ember';

export default Ember.Component.extend({
  treeHandler: Ember.inject.service('tree-handler'),

  nextNestingLevel: Ember.computed('nestingLevel', function() {
    return this.get('nestingLevel') + 1;
  }),

  actions: {
    labelClicked(node) {
      this.get('onLabelClicked')( node );
    },

    toggleExpand(node) {
      this.get('treeHandler').toggleNodeExpanded(node);
    }
  }

});
