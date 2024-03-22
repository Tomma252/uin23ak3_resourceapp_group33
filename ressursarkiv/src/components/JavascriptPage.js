import React from 'react';
import resources from '../ressurser.js';
import Layout from './Layout.js';

const JavascriptPage = ({ category }) => {
    const javascriptResources = resources.filter(resource => resource.category === 'javascript');

    return (
        <Layout> {}
            <div>
                <h1>{category ? category.toUpperCase() +' Resources' : 'Resources'}</h1>
                <ul>
                    {javascriptResources.map((resource, index) => (
                        <li key={index}>
                            <a href={resource.url}>{resource.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default JavascriptPage;