import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Immerse in Wonderland',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Dive into a reimagined Wonderland with "Alice: Cards of Wonder," a game where strategy and narrative combine. Players explore enchanting landscapes, meet iconic characters, and solve the puzzles of a whimsically evolved world. It's perfect for players of all ages seeking a magical adventure.
      </>
    ),
  },
  {
    title: 'Strategic Card Play',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Master the use of Creature, Artifact, Action, and Environment cards as you refine gems and outsmart your opponents. "Alice: Cards of Wonder" offers deep strategic gameplay that encourages thoughtful decisions and clever combinations.
      </>
    ),
  },
  {
    title: 'Engaging for Everyone',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Whether you're a seasoned card gamer or new to tabletop adventures, "Alice: Cards of Wonder" provides an engaging experience with easy-to-learn rules and the potential for complex strategy. The game grows with you, making each playthrough uniquely challenging.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
