import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

let MarkdownView = ({parsedMarkdown}) => (
  <div>
    {parsedMarkdown}
  </div>
)

MarkdownView.propTypes = {
  parsedMarkdown: PropTypes.string
}

const mapStateToProps = (state) => ({
  parsedMarkdown: state.text
})

MarkdownView = connect(mapStateToProps)(MarkdownView)

export default MarkdownView
