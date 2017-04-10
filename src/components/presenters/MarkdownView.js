import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

let MarkdownView = ({parsedMarkdown}) => (
  <div className="view" dangerouslySetInnerHTML={{__html: parsedMarkdown}}></div>
)

MarkdownView.propTypes = {
  parsedMarkdown: PropTypes.string
}

const mapStateToProps = (state) => ({
  parsedMarkdown: state.text
})

MarkdownView = connect(mapStateToProps)(MarkdownView)

export default MarkdownView
