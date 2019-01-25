import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default function MyNavLink(props) {
  return <NavLink {...props} className='list-group-item' activeClassName='activeClass'/>
}