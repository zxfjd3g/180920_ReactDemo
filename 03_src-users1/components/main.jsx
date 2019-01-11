import React, {Component} from 'react'

import axios from 'axios'

export default class Main extends Component {

  state = {
    firstView: true,  // 是否显示第一个初始界面
    loading: false, // 是否正在请求中
    errorMsg: '', // 请求出错的提示信息
    users: [], // 需要显示的用户列表
  }

  // 初始时是不会调用的, 后面再接收到新的标签属性就会自动调用
  async componentWillReceiveProps (newProps) {
    console.log('componentWillReceiveProps()', newProps)
    // 更新状态(请求中)
    this.setState({
      firstView: false,
      loading: true
    })
    // 发异步ajax请求, 获取users数据
    const url = `https://api.github.com/search/users2?q=${newProps.searchName}`
    /*axios.get(url)
      .then(response => {

        const result = response.data
        const users = result.items.map(item => ({
          name: item.login,
          avatar_url: item.avatar_url,
          url: item.html_url
        }))
        // 成功了, 更新状态(成功)
        this.setState({
          users,
          loading: false
        })
      })
      .catch(error => {
        // 失败了, 更新状态(失败)
        this.setState({
          loading: false,
          errorMsg: '请求出错了!!!'
        })
      })*/

    try {
      const response = await axios.get(url)
      const result = response.data
      const users = result.items.map(item => ({
        name: item.login,
        avatar_url: item.avatar_url,
        url: item.html_url
      }))
      // 成功了, 更新状态(成功)
      this.setState({
        users,
        loading: false
      })
    } catch (e) {
      // 失败了, 更新状态(失败)
      this.setState({
        loading: false,
        errorMsg: '请求出错了!!!'
      })
    }
  }

  /*
  async/await的作用?
    简化promise的使用: 不用通过then()来指定异步的回调函数
    以同步编码方式实现异步流程
  哪里写await?
    在返回promise对象的表达式左侧指定await, 这样就可以直接promise异步返回的结果
  哪里写async?
    await所在函数定义的左侧
   */

  render() {

    const {firstView, loading, errorMsg, users} = this.state

    if(firstView) {
      return <h2>请输入关键字进行搜索  {this.props.searchName}</h2>
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