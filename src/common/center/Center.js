import React from 'react'
import './Center.css';

export default function Center(props) {
    return (
        <div className="centered">
            {props.children}
        </div>
    )
}
