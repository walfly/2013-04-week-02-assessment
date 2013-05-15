var User = Backbone.Model.extend({

  initialize: function() {
  },

  changePassword: function(newPassword) {
    if (newPassword.length < 8) {
      alert('Password not long enough!');
    } else {
      this.set('password', newPassword);
    }
  }

});
