import React from 'react'

import Add from './components/add/add'
import List from './components/list/list'

/*
应用根组件
 */
export default class App extends React.Component {

  state = {
    comments: [
      {username: 'Tom', content: 'React有点难'},
      {username: 'Jack', content: 'React很难'},
      {username: 'Bob', content: 'React So So'}
    ]
  }

  // 添加评论
  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({
      comments
    })
  }

  // 删除指定评论
  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({
      comments
    })
  }


  render() {
    const {comments} = this.state

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论222</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}