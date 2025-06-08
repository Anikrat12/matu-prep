import './App.css';

function App() {
  return (
    <div className='app'>
      {/* Header Section */}
      <header className='header'>
        <div className='header-content'>
          <div className='logo'>
            <span className='logo-icon'>🎓</span>
            <span className='logo-text'>Matu-Prep</span>
          </div>
          <div className='header-actions'>
            <button className='sign-in-btn'>Sign in</button>
            <button className='start-learning-btn'>Start learning</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className='hero'>
        <div className='hero-content'>
          <div className='hero-icon'>
            <svg
              width='120'
              height='120'
              viewBox='0 0 120 120'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20 25C20 22.7909 21.7909 21 24 21H56C58.2091 21 60 22.7909 60 25V95C60 97.2091 58.2091 99 56 99H24C21.7909 99 20 97.2091 20 95V25Z'
                fill='currentColor'
              />
              <path
                d='M60 25C60 22.7909 61.7909 21 64 21H96C98.2091 21 100 22.7909 100 25V95C100 97.2091 98.2091 99 96 99H64C61.7909 99 60 97.2091 60 95V25Z'
                fill='currentColor'
              />
              <path
                d='M60 21V99'
                stroke='currentColor'
                strokeWidth='2'
              />
            </svg>
          </div>
          <h1 className='hero-title'>
            Enhance your Maturité
            <br />
            preparation
          </h1>
        </div>
      </main>
    </div>
  );
}

export default App;
