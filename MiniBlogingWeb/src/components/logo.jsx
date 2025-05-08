import React from 'react'
import ramaba from '../assets/ramaba.jpg';

function Logo({width = '100px'}) {
    return (
        <img src={ramaba} alt="Logo" style={{ width }} />
    )
}

export default Logo
