import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header></header>
            <main>
                <article>
                    {children}
                </article>
            </main>
            <footer></footer>
        </div>
    );
};

export default Layout;