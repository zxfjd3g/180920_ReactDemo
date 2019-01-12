import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import MessageDetail from './message-detail'

export default class Message extends Component {
  state = {
    messages: []
  }

  componentDidMount () {
    // 模拟异步请求获取数据
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 3, title: 'message003'},
        {id: 5, title: 'message005'}
      ]

      this.setState({
        messages
      })
    }, 1000)
  }

  render() {

    const {messages} = this.state

    return (
      <div>
        <ul>
          {
            messages.map(m => (
              <li key={m.id}>
                <Link to={'/home/message/'+m.id}>{m.title}</Link>
              </li>
            ))
          }
        </ul>
        <hr/>
        <Route path='/home/message/:id' component={MessageDetail}/>
      </div>

    )
  }
}