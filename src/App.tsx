import './App.css';

function App() {
  return (
    <div className='app'>
      {/* Header */}
      <header className='header'>
        <div className='logo'>
          <span>📚 Matu-Prep</span>
        </div>
        <div className='header-buttons'>
          <button className='sign-in'>Sign In</button>
          <button className='start-learning'>Start learning</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className='hero'>
        <div className='book-icon'>📖</div>
        <h1>Enhance your Maturité preparation</h1>
      </section>

      {/* Features Section */}
      <section className='features'>
        <div className='feature'>
          <div className='feature-icon'>🔍</div>
          <h3>Gain access to all chapters</h3>
          <p>
            You will never miss a subject! Every test a chapter to revise using
            latest news
          </p>
        </div>

        <div className='feature'>
          <div className='feature-icon'>👥</div>
          <h3>Ability to view past students' revision sheets</h3>
          <p>
            You can learn access to past failure papers and find out what went
            wrong to improve yourself
          </p>
        </div>

        <div className='feature'>
          <div className='feature-icon'>🔥</div>
          <h3>Effective learning experience</h3>
          <p>Keep all of your study materials all in one place</p>
        </div>

        <div className='feature'>
          <div className='feature-icon'>📄</div>
          <h3>Full access to all past exam papers</h3>
          <p>
            Review past exam papers and stay on track to reach your goals well
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='testimonials'>
        <h2>Join Matu-Prep community with your fellow students</h2>
        <div className='testimonials-grid'>
          <div className='testimonial'>
            <blockquote>I feel more prepared and confident.</blockquote>
          </div>
          <div className='testimonial'>
            <blockquote>
              This platform boosted my exam performance. Highly
            </blockquote>
          </div>
          <div className='testimonial'>
            <blockquote>Learning made effective</blockquote>
          </div>
          <div className='testimonial'>
            <blockquote>Confidence and focus for exam success</blockquote>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className='subscription'>
        <h2>Get your subscription now!</h2>
        <div className='pricing-card'>
          <div className='pricing-header'>
            <span className='pricing-icon'>💎</span>
            <h3>All In One</h3>
            <div className='price'>CHF 10/ month</div>
          </div>
          <ul className='features-list'>
            <li>✓ Unlimited access to past papers</li>
            <li>✓ Corrections, lessons, revision sheets</li>
            <li>✓ Interactive learning resources</li>
          </ul>
          <button className='subscribe-button'>Subscribe now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-section'>
            <img
              src='/logo.png'
              alt='Matu-prep'
              className='footer-logo'
            />
          </div>
          <div className='footer-section'>
            <h4>About us</h4>
            <ul>
              <li>About Us</li>
              <li>Subscriptions</li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Support</h4>
            <ul>
              <li>Customer service</li>
              <li>FAQ</li>
              <li>Help</li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Join the community</h4>
            <ul>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className='newsletter'>
          <h4>Stay Updated with Our Newsletter</h4>
          <div className='newsletter-form'>
            <input
              type='email'
              placeholder='Enter your email'
            />
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
