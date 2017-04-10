import marked from 'marked'
import highlightjs from 'highlight.js'

marked.setOptions({
  sanitize: true,
  highlight: function (code) {
    return highlightjs.highlightAuto(code).value
  }
})

const markdwonPreviewer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_MARKDOWN':
      return {text: marked(action.text)}
    default:
      return state
  }
}

export default markdwonPreviewer
