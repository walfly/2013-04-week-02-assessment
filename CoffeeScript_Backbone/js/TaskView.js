// Generated by CoffeeScript 1.6.2
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TaskView = (function(_super) {
    __extends(TaskView, _super);

    function TaskView() {
      _ref = TaskView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TaskView.prototype.template = _.template("<div class='task'><%= title %></div>");

    TaskView.prototype.events = {
      "click": function() {
        this.model.complete();
        return this.render();
      }
    };

    TaskView.prototype.render = function() {
      if (this.model.get("completionStatus")) {
        this.$el.addClass('crossed-out');
      }
      return this.$el.html(this.template(this.model.attributes));
    };

    return TaskView;

  })(Backbone.View);

}).call(this);
