import React from 'react';

const features = [
  {
    icon: '🔍',
    title: 'Gain access to all chapters',
    description: 'You will never worry again about having lost a chapter or not having taken notes',
  },
  {
    icon: '👥',
    title: `Ability to view past students' revision sheets`,
    description: 'You can have access to past revision sheets and not be bothered making new ones yourself',
  },
  {
    icon: '🔥',
    title: 'Effective learning experience',
    description: 'Have all of your study materials all in one place',
  },
  {
    icon: '⬇️',
    title: 'Full access to all past exam papers',
    description: 'Review past exam papers and their corrections to better prepare yourself',
  },
];

const FeaturesSection = () => (
  <section className="features">
    <div className="features-grid">
      {features.map((feature, idx) => (
        <div className="feature" key={idx}>
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection; 