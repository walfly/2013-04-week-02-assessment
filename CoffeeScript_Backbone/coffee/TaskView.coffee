class window.TaskView extends Backbone.View

  template: _.template "<div class='task'><%= title %></div>"

  render: ->
    if @model.get "completionStatus" then @$el.addClass 'crossed-out'
    @$el.html @template @model.attributes
