import Ember from 'ember';

export default Ember.Service.extend({

  preprocessTreeNode(node) {
    var allExpanded = this._getExpandedNodesListFromLS();
    node.isExpanded = allExpanded[node.id] || false;

    (node.children || []).forEach( (child)=> {
      this.preprocessTreeNode(child);
    });
  },

  _getExpandedNodesListFromLS() {
    var allExpanded = localStorage.getItem('expandedNodes');
    return allExpanded ? JSON.parse(allExpanded) : {};
  },

  _setExpandedNodesListToLS(allExpanded) {
    localStorage.setItem('expandedNodes', JSON.stringify(allExpanded) );
  },

  toggleNodeExpanded(node) {
    Ember.set(node, 'isExpanded', !node.isExpanded);
    var nodeId = node.id;
    var nodeIsExpanded = node.isExpanded;
    var allExpanded = this._getExpandedNodesListFromLS();
    allExpanded[nodeId] = nodeIsExpanded;
    this._setExpandedNodesListToLS(allExpanded);
  }

});
