import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

export default function navbar()
{
    return(
        <div>
            <ul>
                <li>
                  <p style={{margin:0}}> <img height='30'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' /> </p>  
                </li>
                <li>
                    <Link className='link' to='/'>  <p style={{fontSize:'1.2rem', margin:1}}>  Home </p>   </Link>
                </li>
                <li>
                <p style={{fontSize:'1.2rem', margin:1}}>  About </p>
                </li>
                <li>
                <Link className='link' to='/explore'> <p style={{fontSize:'1.2rem', margin:1}}>  Explore </p> </Link>
                </li>
            </ul>
            <hr />
        </div>
    )
}