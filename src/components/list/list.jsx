import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Item from '../item/item'
import './list.css'

/*
列表的组件
 */
export default class List extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired
  }

  render() {
    const {comments} = this.props

    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <Item key={index} comment={comment}/>)
          }
        </ul>
      </div>
    )
  }
}