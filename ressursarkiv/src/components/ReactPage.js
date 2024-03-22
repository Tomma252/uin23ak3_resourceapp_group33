import React from 'react';
import resources from '../ressurser.js';
import Layout from './Layout.js';

const ReactPage = ({ category }) => {
    const reactResources = resources.filter(resource => resource.category === 'react');

    return (
        <Layout> {}
            <div>
                <h1>{category ? category.toUpperCase() +' Resources' : 'Resources'}</h1>
                <ul>
                    {reactResources.map((resource, index) => (
                        <li key={index}>
                            <a href={resource.url}>{resource.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default ReactPage;