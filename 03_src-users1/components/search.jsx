import React, {Component} from 'react'

export default class Search extends Component {

  search = () => {
    // 得到输入
    const searchName = this.refs.searchName.value.trim()
    if(searchName) {
      this.props.setSearchName(searchName)
      this.refs.searchName.value = ''
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref='searchName'/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}