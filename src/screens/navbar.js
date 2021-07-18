import React from 'react'
import '../App.css'

export default function navbar()
{
    return(
        <div>
            <ul>
                <li>
                    <img height='30'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' />
                </li>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Explore
                </li>
            </ul>
            <hr />
        </div>
    )
}