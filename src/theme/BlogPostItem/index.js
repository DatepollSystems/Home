/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { MDXProvider } from '@mdx-js/react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const { date, permalink, tags, readingTime } = metadata;
  const { author, title, image, keywords } = frontMatter;
  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL = frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image, { absolute: true });

  const BlogDate = ({ className = "" }) => {
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    return (
      <div className={isBlogPostPage ? 'margin-vert--md' : undefined}>
        <time dateTime={date} className={styles.blogPostDate}>
          {month} {day}, {year}{' '}
          {readingTime && <> · {Math.ceil(readingTime)} min read</>}
        </time>
      </div>
    );
  }

  const Author = () => {
    return (
      <>
        {author && (
          <div className="avatar margin-vert--md">
            {authorImageURL && (
              <a
                className="avatar__photo-link avatar__photo"
                href={authorURL}
                target="_blank"
                rel="noreferrer noopener">
                <img src={authorImageURL} alt={author} />
              </a>
            )}
            <div className="avatar__intro">
              {author && (
                <>
                  <h4 className="avatar__name">
                    <a href={authorURL} target="_blank" rel="noreferrer noopener">
                      {author}
                    </a>
                  </h4>
                  <small className="avatar__subtitle">{authorTitle}</small>
                </>
              )}
            </div>
          </div>
        )}
      </>
    );
  }

  const TagList = () => {
    return (
      <div className="col">
        <strong>Tags:</strong>
        {tags.map(({ label, permalink: tagPermalink }) => (
          <Link
            key={tagPermalink}
            className="margin-horiz--sm"
            to={tagPermalink}>
            {label}
          </Link>
        ))}
      </div>
    );
  }

  const BlogPostPageItem = () => {
    return (
      <article className="margin-bottom--xl">
        <header>
          {image && <img src={image}></img>}
          <h1 className={clsx('margin-bottom--sm', styles.blogPostTitle)}>
            {title}
          </h1>
          <BlogDate />
          <Author />
        </header>
        <section className="markdown">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </section>
        {tags.length > 0 && (
          <footer className="row margin-vert--lg">
            <TagList />
          </footer>
        )}
      </article>
    );
  }

  const BlogListPageItem = () => {
    return (
      <article className="card margin-bottom--lg">
        {image && (
          <div class="card__image">
            <img src={image}></img>
          </div>
        )}
        <div class="card__body">
          <BlogDate />
          <h4>
            <Link to={permalink}>{title}</Link>
          </h4>
          <small className="markdown">
            <MDXProvider components={MDXComponents}>{children}</MDXProvider>
          </small>
        </div>
        {(tags.length > 0 || truncated) && (
          <footer className="card__footer row">
            {tags.length > 0 && (
              <TagList />
            )}
            {truncated && (
              <div className="col text--right">
                <Link
                  to={metadata.permalink}
                  aria-label={`Read more about ${title}`}>
                  <strong>Read More</strong>
                </Link>
              </div>
            )}
          </footer>
        )}
      </article>
    );
  }

  return (
    <>
      <Head>
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta property="twitter:image" content={imageUrl} />}
        {image && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
      </Head>
      {isBlogPostPage ? <BlogPostPageItem /> : <BlogListPageItem />}
    </>
  );
}

export default BlogPostItem;
