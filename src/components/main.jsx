import React, {Component} from 'react'

export default class Main extends Component {

  state = {
    firstView: true,  // 是否显示第一个初始界面
    loading: false, // 是否正在请求中
    errorMsg: '', // 请求出错的提示信息
    users: [], // 需要显示的用户列表
  }

  render() {

    const {firstView, loading, errorMsg, users} = this.state

    if(firstView) {
      return <h2>请输入关键字进行搜索</h2>
    } else if (loading) {
      return <h2>正在请求中...</h2>
    } else if (errorMsg) {
      return <h2 style={{color: 'red'}}>{errorMsg}</h2>
    } else {
      return (
        <div className="row">
          {
            users.map((user, index) => ( // user对象必须有3个履性: url/avatar_url/name
              <div className="card" key={index}>
                <a href={user.url} target="_blank" rel="noopener noreferrer">
                  <img src={user.avatar_url} style={{width: 100}}/>
                </a>
                <p className="card-text">{user.name}</p>
              </div>
            ))
          }
        </div>
      )
    }


  }
}