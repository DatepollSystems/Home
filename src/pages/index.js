import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;  
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <main>
        <h1>DatePoll - Manage your Club</h1>
      </main>
    </Layout>
  );
}

export default Home;