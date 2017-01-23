import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveQuestion1() {
      var params = {
        question: this.get('question')
      }
      
      this.sendAction('saveQuestion2', params);
    }
  }
});
