###
=========================
DO NOT EDIT THIS FILE!!!!
=========================
###
class window.TaskView extends Backbone.View

  template: _.template "<div class='task'><%= title %></div>"

  events:
    "click": ->
      @model.complete()
      @render()

  render: ->
    @$el.html @template @model.attributes
