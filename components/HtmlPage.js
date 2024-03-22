import React from 'react';
import resources from '../ressurser.js';
import Layout from './Layout.js';

const HtmlPage = ({ category }) => {
    const htmlResources = resources.filter(resource => resource.category === 'html');

    return (
        <Layout> {}
            <div>
                <h1>{category ? category.toUpperCase() +' Resources' : 'Resources'}</h1>
                <ul>
                    {htmlResources.map((resource, index) => (
                        <li key={index}>
                            <a href={resource.url}>{resource.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default HtmlPage;