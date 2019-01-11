import React, {Component} from 'react'
import PropTypes from 'prop-types'

/*
添加的组件
 */
export default class Add extends Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  clickSubmit = () => {
    // 1. 收集输入的数据
    const username = this.refs.username.value.trim()
    const content = this.refs.content.value.trim()

    if(!username || !content) {
      alert('必须输入')
      return
    }

    // 2. 封装成comment对象
    const comment = {
      username,
      content
    }

    // 3. 调用 addComment()添加comment
    this.props.addComment(comment)

    // 4. 清除输入
    this.refs.username.value = ''
    this.refs.content.value = ''
  }

  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref='username'/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref='content'></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.clickSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}