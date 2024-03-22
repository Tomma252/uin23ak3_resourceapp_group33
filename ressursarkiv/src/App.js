import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './css/sass/style.scss';
import resources from './ressurser';
import Layout from './components/Layout';
import CssPage from './components/CssPage.js';
import HtmlPage from './components/HtmlPage.js';
import JavascriptPage from './components/JavascriptPage.js';
import ReactPage from './components/ReactPage.js';
import SanityPage from './components/SanityPage.js';

const App = () => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    return () => {
      };
  }, []);

  const handleTabClick = (category) => {
    setActiveTab((prevTab) => (prevTab === category ? null : category));
  };

  const uniqueCategories = Array.from(new Set(resources.map(resource => resource.category)));

  return (
    <Router>
      <Layout>
        <div>
          <section id="center-container">
            <nav id="tabs">
              {uniqueCategories.map((category, index) => (
                <Link
                key={index}
                to={`/${category}`}
                className={`tab ${category === activeTab ? 'active' : ''}`}
                onClick={() => handleTabClick(category)}
                >
                  {category}
                </Link>
              ))}
            </nav>
            <section id="resources-container">
              <Routes>
                <Route path="/css" element={<CssPage />} />
                <Route path="/html" element={<HtmlPage />} />
                <Route path="/javascript" element={<JavascriptPage />} />
                <Route path="/react" element={<ReactPage />} />
                <Route path="/headless-cms" element={<SanityPage />} />
              </Routes>
            </section>
          </section>
        </div>
      </Layout>
    </Router>
  );
};

export default App;