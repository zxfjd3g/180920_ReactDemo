import React from 'react'
import { Button, message} from 'antd'

/*
应用根组件
 */
export default class App extends React.Component {

  render() {
    return <Button type="primary" onClick={() => message.info('响应点击')}>Primary</Button>
  }
}