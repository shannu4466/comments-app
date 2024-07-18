import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachUser, commentIsLiked, commentDelete} = props
  const {id, name, comment, isCommentLiked} = eachUser

  const onClickLikeChange = () => {
    commentIsLiked(id)
  }

  const deleteComment = () => {
    commentDelete(id)
  }

  const likeOrUnlikeUrls = isCommentLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div className="comment-box">
        <p className="firstname">{name.slice(0, 1)}</p>
        <p className="name">{name}</p>
        <p>{formatDistanceToNow(new Date())}</p>
      </div>
      <p>{comment}</p>
      <div className="delete-container">
        <div className="like">
          <button type="button" onClick={onClickLikeChange}>
            <img src={likeOrUnlikeUrls} className="like-img" alt="like" /> Like
          </button>
        </div>
        <button data-testid="delete" type="button" onClick={deleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="dlt-btn"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
