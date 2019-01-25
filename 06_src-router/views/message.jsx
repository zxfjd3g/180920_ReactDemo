import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import MessageDetail from './message-detail'

export default class Message extends Component {
  state = {
    messages: []
  }

  pushShow = (id) => {
    this.props.history.push('/home/message/'+id)
  }
  replaceShow = (id) => {
    this.props.history.replace('/home/message/'+id)
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
                &nbsp;&nbsp;<button onClick={() => this.pushShow(m.id)}>push查看</button>
                &nbsp;&nbsp;<button onClick={() => this.replaceShow(m.id)}>replace查看</button>
              </li>
            ))
          }
        </ul>

        <button onClick={() => this.props.history.goBack()}>回退</button>
        <hr/>
        <Route path='/home/message/:id' component={MessageDetail}/>
      </div>

    )
  }
}

/*
a.html
  <a href='b.html'>bbb</a>
  <button onclick="window.location= 'b.html'">bbbbb</button>
b.html
 */