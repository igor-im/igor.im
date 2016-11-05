import React from 'react'
import Markdown from 'react-remarkable'

export default class Post extends React.Component {
    render() {
        return <div className="post">
        	<h2>{this.props.postContent.title}</h2>
        	<h3>Published on: {this.props.postContent.date_published}</h3>
        	<Markdown source={this.props.postContent.full_body} />
        </div>;
    }
}