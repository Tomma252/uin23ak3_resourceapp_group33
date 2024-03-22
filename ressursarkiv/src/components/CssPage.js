import React from 'react';
import resources from '../ressurser.js';
import Layout from './Layout.js';

const CssPage = ({ category }) => {
    const cssResources = resources.filter(resource => resource.category === 'css');

    return (
        <Layout> {}
            <div>
                <h1>{category ? category.toUpperCase() +' Resources' : 'Resources'}</h1>
                <ul>
                    {cssResources.map((resource, index) => (
                        <li key={index}>
                            <a href={resource.url}>{resource.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default CssPage;