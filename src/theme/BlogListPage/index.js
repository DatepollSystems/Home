/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogSidebar from '@theme/BlogSidebar';

function BlogListPage(props) {
    const {metadata, items, sidebar} = props;
    const {
        siteConfig: {title: siteTitle},
    } = useDocusaurusContext();
    const {blogDescription, blogTitle, permalink} = metadata;
    const isBlogOnlyMode = permalink === '/';
    const title = isBlogOnlyMode ? siteTitle : blogTitle;
    return (
        <Layout
            title={title}
            description={blogDescription}
            wrapperClassName="blog-wrapper">
            <div className="container margin-vert--lg">
                <div className="row">
                    <div className="col col--2">
                        <BlogSidebar sidebar={sidebar}/>
                    </div>
                    <main className="col col--8">
                        <div className="row">
                            {items.map(({content: BlogPostContent}) => (
                                <div className="col col--6">
                                    <BlogPostItem
                                        key={BlogPostContent.metadata.permalink}
                                        frontMatter={BlogPostContent.frontMatter}
                                        metadata={BlogPostContent.metadata}
                                        truncated={BlogPostContent.metadata.truncated}>
                                        <BlogPostContent/>
                                    </BlogPostItem>
                                </div>
                            ))}
                        </div>
                        <BlogListPaginator metadata={metadata}/>
                    </main>
                </div>
            </div>
        </Layout>
    );
}

export default BlogListPage;
