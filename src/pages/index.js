import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import RandomQuote from '@site/src/components/quote.js';
import HomepageFeatures  from '@site/src/components/homepageColumns/homepageColumns.js';

//picture
import iconPicture from '@site/static/img/homePageIcon.png';

//css
import styles from '@site/src/css/index.module.css';

export default function Home()
{
  return (
    <Layout title={`Home`}>
      <div className={styles.centered}>
        <img className={styles.circleImage} src={iconPicture} alt="My Icon" />
        <h1 className="hero__title">{"TheMootBot"}</h1>

        {/*quote stuff*/}
        <div className={styles.quoteContainer}>
          <RandomQuote />
        </div>

        {/*Columns to explain how the site works*/}
        <HomepageFeatures />

      {/*Button to update page */}
        <div className={styles.buttonCenter}>
          <Link
            className={styles.buttonsStyle}
            to="docs/update/">
            Commands
          </Link>
        </div>
      </div>
    </Layout>
  );
}
