import React from 'react';
import resources from '../ressurser.js';
import Layout from './Layout.js';

const SanityPage = ({ category }) => {
    const sanityResources = resources.filter(resource => resource.category === 'headless-cms');

    return (
        <Layout> {}
            <div>
                <h1>{category ? category.toUpperCase() +' Resources' : 'Resources'}</h1>
                <ul>
                    {sanityResources.map((resource, index) => (
                        <li key={index}>
                            <a href={resource.url}>{resource.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default SanityPage;