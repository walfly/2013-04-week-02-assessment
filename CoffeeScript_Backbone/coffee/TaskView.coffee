class window.TaskView extends Backbone.View

  template: _.template "<div class='task'><%= title %></div>"

  events:
    "click": ->
      @model.complete()
      @render()

  render: ->
    if @model.get "completionStatus" then @$el.addClass 'crossed-out'
    @$el.html @template @model.attributes
