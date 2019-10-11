import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './NavItem.css';
export class NavItem extends Component {
    render() {
        return (


            <li className="Nav-item"><NavLink {... this.props} to={this.props.to} activeClassName="active">{this.props.title}</NavLink></li>


        );
    }
}