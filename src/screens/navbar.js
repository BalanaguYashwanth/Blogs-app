import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

export default function navbar()
{
    return(
        <div>
            <ul>
                <li>
                    <img height='30'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' />
                </li>
                <li>
                    <Link className='link' to='/'> Home </Link>
                </li>
                <li>
                    About
                </li>
                <li>
                <Link className='link' to='/explore'> Explore </Link>
                </li>
            </ul>
            <hr />
        </div>
    )
}