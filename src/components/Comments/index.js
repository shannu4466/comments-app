import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialComments = []

class Comments extends Component {
  state = {commentsList: initialComments, name: '', comment: '', count: 0}

  onIncreaseCommentValue = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  commentDelete = id => {
    const {commentsList} = this.state
    const afterDeleteComment = commentsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentsList: afterDeleteComment,
      count: prevState.count - 1,
    }))
  }

  commentIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComm => {
        if (id === eachComm.id) {
          return {...eachComm, isCommentLiked: !eachComm.isCommentLiked}
        }
        return eachComm
      }),
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeDesc = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isCommentLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentsList, name, comment, count} = this.state
    return (
      <div className="container">
        <h1 className="comment-heading">Comments</h1>
        <div className="inner-container">
          <form className="input-data-section" onSubmit={this.addComment}>
            <p className="info">Say something about 4.O Technologies</p>
            <input
              type="text"
              onChange={this.onChangeName}
              value={name}
              placeholder="Your Name"
            />
            <textarea
              rows="10"
              onChange={this.onChangeDesc}
              value={comment}
              placeholder="Your Comment"
            />
            <button
              type="submit"
              className="add-comment-btn"
              onClick={this.onIncreaseCommentValue}
            >
              Add Comment
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="seperator" />
        <ul>
          <div className="count-container">
            <p className="comment-count">{count} </p>
            <p>Comments</p>
          </div>
          {commentsList.map(eachComment => (
            <CommentItem
              eachUser={eachComment}
              key={eachComment.id}
              commentIsLiked={this.commentIsLiked}
              commentDelete={this.commentDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
