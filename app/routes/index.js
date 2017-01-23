import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('questions');
  },

  actions: {
    saveQuestion3(params){
      var saveQuestion = this.store.createRecord('questions',params);

      saveQuestion.save();
    }
  }

});
