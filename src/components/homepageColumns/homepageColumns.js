import React from 'react';
import clsx from 'clsx';
import styles from './homepageColumns.module.css';

const FeatureList = [
  {
    title: 'What Is This?',
    description: (
      <>
        This is the website for a discord bot TheMootBot.
      </>
    ),
  },
  {
    title: 'Why am I Here?',
    description: (
      <>
        I honestly I have no clue. My first guess its that you got here by using the help command. It is possible that you somehow found this website just online though, and in that case you are most likely very confused.
      </>
    ),
  },
  {
    title: 'Where are the Commands?',
    description: (
      <>
        You see that button below? I would recommend clicking on it. How knows what will happen.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}