// Generated by CoffeeScript 1.6.2
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Tasks = (function(_super) {
    __extends(Tasks, _super);

    function Tasks() {
      _ref = Tasks.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Tasks.prototype.model = Task;

    Tasks.prototype.tasksRemaining = function() {};

    Tasks.prototype.incompleteItems = function() {};

    return Tasks;

  })(Backbone.Collection);

}).call(this);