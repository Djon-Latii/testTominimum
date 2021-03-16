import React from 'react'

export default function Preload() {
    const contentStyle = {
        display: 'grid',
        gridAutoFlow: 'column',
        width: '120px',
        margin: '0 auto',
    }
    const contentImg = {
        width: '20px'
    }
    return (
        <div style={contentStyle}>
            <p>Загружаю...</p>
            <img style={contentImg} src="/images/Loading.gif" alt="...Loading" />
        </div>
    );
}