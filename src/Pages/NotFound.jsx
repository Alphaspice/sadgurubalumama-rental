import React from "react";

function NotFound() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column' 
        }}>
            <div>
                <h1>404 - Not Found</h1>
            </div>
            <div>
                <h3>The page you are looking for does not exist.</h3>
            </div>
        </div>
    );
}

export default NotFound;
