import React from 'react';
import '../../css/main.css';

const Content = ({ children }) => {
    return (
        <div className="content">
            {children}
        </div>
    )
}

export default Content;