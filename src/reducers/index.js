import marked from 'marked'

marked.setOptions({sanitize: true})

const markdwonPreviewer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_MARKDOWN':
      return {text: marked(action.text)}
    default:
      return state
  }
}

export default markdwonPreviewer
