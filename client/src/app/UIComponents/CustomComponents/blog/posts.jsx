import React from 'react'
import {Link} from 'react-router'

export default class Posts extends React.Component {
    render() {
        return <div className="'posts">
            {this.props.conf.map((v) => { return <div className="mini-post" key={v.id}>
                     <Link to={'blog/posts/' + v.id} ><h3>{v.title}</h3></Link>
                     <div className="post-desc">{v.short_desc}</div>
                     <div className="cat-tag-div"><div className="post-categories">{v.categories}</div><div className="post-tags">{v.tags}</div>
                     </div>
                </div> })}
        </div>
    }
}