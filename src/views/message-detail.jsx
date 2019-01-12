import React, {Component} from 'react'

const allDetails = [
  {id: 1, title: 'message001', content: 'content001'},
  {id: 3, title: 'message003', content: 'content003'},
  {id: 5, title: 'message005', content: 'content005'}
]
export default class MessageDetail extends Component {
  render() {
    const id = this.props.match.params.id * 1
    const detail = allDetails.find((m, index) => m.id===id)

    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {detail.title}</li>
        <li>CONTENT: {detail.content}</li>
      </ul>
    )
  }
}