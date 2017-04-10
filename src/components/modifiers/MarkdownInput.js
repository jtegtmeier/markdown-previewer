import React from 'react'
import {connect} from 'react-redux'
import {updateMarkdown} from '../../actions'

let MarkdownInput = ({dispatch}) => {
  let input

  const handleInput = (e) => {
    e.preventDefault()
    dispatch(updateMarkdown(input.value))
  }

  return (
    <div>
      <textarea ref={node => input = node} onInput={handleInput} placeholder="Type in some markdown..." />
    </div>
  )
}

MarkdownInput = connect()(MarkdownInput)

export default MarkdownInput
