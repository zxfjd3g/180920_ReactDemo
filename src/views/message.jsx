import React, {Component} from 'react'

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
      <ul>
        {
          messages.map(m => (
            <li key={m.id}>
              <a href="???">{m.title}</a>
            </li>
          ))
        }
      </ul>
    )
  }
}