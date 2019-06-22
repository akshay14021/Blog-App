import React, { Component } from 'react';
import moment from 'moment';

class BlogForm extends Component {

    state = {
        title: this.props.blog ? this.props.blog.title : '',
        body: this.props.blog ? this.props.blog.body : '',
        createdAt: moment(),
        error: ''
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        if (this.state.title && this.state.body) {
            this.props.onSubmit(this.state.title, this.state.body, this.state.createdAt.valueOf())
            this.setState({ error: '' })
        } else {
            this.setState({ error: 'Please provide body and title for blog' })
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState({ title })
    }

    onBodyChange = (e) => {
        const body = e.target.value
        this.setState({ body })
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmitHandler}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text" 
                    placeholder="Blog Title" 
                    value={this.state.title} 
                    onChange={this.onTitleChange}
                    className="form__textinput"
                />
                <textarea 
                    placeholder="Blog Body" 
                    value={this.state.body} 
                    onChange={this.onBodyChange}
                    className="form__textarea"    
                >
                </textarea>
                <div>
                    {this.props.blog ? <button className="button button--createlink">Edit Blog</button> : <button className="button button--createlink">Create Blog</button>}
                </div>
            </form>
        );
    }
}

export default BlogForm;