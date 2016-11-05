import React from 'react'
import Posts from '../UIComponents/CustomComponents/blog/posts.jsx'
import Post from '../UIComponents/CustomComponents/blog/post.jsx'
import Categories from '../UIComponents/CustomComponents/blog/categories.jsx'
import axios from 'axios'

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singlePostMode: this.props.params.postid || ''
        }
    }
    componentWillMount() {
        axios.get('http://api.igor.im/api/blog/posts')
            .then(function (response) {
                this.setState({
                    blog_posts: response.data
                });
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.params.postid != this.props.params.postid)
            this.setState({
                singlePostMode: nextProps.params.postid,
                content: this.state.blog_posts.filter((v) => {
                    if(v && v.id === parseInt(nextProps.params.postid)) 
                        return true;
                })
            })
    }
    render() {
        return <div id="blog-page">
            <h1>Blog</h1>
            <div className="content-container"><Categories />
            <div className="posts-container">
                {this.state.singlePostMode ? <Post postContent={this.state.content[0]} /> : ''}
                {this.state.blog_posts && !this.state.singlePostMode ? <Posts conf={this.state.blog_posts} /> : ''}
            </div>
            </div>
        </div>;
    }
}