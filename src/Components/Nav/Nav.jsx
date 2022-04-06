import React, { Component } from 'react'
import logo from '../../images/logo.svg'
import Apply from './Apply/Apply';
import Menu from './Menu/Menu';
import './Nav.css';

export default class Nav extends Component {

  state = {
    status: false 
  }

  render() {

    window.onscroll = () => {
      let scrollTop = window.scrollY
      
      if(scrollTop >= 100){
        this.setState({
          status: true
        })
      }else{
        this.setState({
          status: false
        })
      }
    }
    
    return (
      <nav className={`${this.state.status ? "fixed" : ""}`}>
        <img src={logo} alt="logo" />
        <Menu />
        <Apply name="Գրանցվել" />
      </nav>
    )
  }
}