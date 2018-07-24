/*
 * @Author: HideOnBush 
 * @Date: 2018-07-24 14:34:14 
 * @Last Modified by: HideOnBush
 * @Last Modified time: 2018-07-24 16:45:32
 */
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
export default class Nav extends Component{
    render(){
        return (
            <nav>
                <h2 className="header">
                    导航
                </h2>
                <ul>
                    {
                        this.props.navList.map(item=><li key={item.name}><Link to={`/${item.url}`}>{item.name}</Link></li>)
                    }
                </ul>
            </nav>
        )
    }
}
