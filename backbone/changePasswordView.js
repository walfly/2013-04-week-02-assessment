var ChangePasswordView = Backbone.View.extend({
  /* Fill out your solution here */
  tagName: 'input',

  events:  {
  	'keyUp': function(e){
  		if(e.keycode !== 13){
  			this.model.set('password', this.$el.val())
  		}
  	}
  },

  initialize: function(){
  	debugger
  	this.render();
  },

  render: function(){
  	return this.$el.html('<input type="text" name="password">');
  }
});
