const SubscriptionSection = () => (
  <section className='subscription'>
    <h2 className='subscription-title'>Get your subscription now!</h2>
    <div className='subscription-content'>
      <div className='pricing-card'>
        <div className='pricing-header'>
          <span className='pricing-icon'>◆</span>
          <span className='pricing-title'>
            <b>All in One</b>
          </span>
        </div>
        <div className='price'>CHF 10/ month</div>
        <ul className='features-list'>
          <li>✔ Unlimited access to past papers</li>
          <li>✔ Corrections, lessons, revision sheets</li>
          <li>✔ Interactive learning resources</li>
        </ul>
        <button className='subscribe-button'>Subscribe now</button>
      </div>
    </div>
  </section>
);

export default SubscriptionSection;
