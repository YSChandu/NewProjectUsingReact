import React from 'react';
import './App.css'; // Import the CSS file for styles

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Mental Health Matters</h1>
        <p>Your journey to better mental health starts here.</p>
      </header>
      
      <main className="main-content">
        <section className="introduction">
          <h2>Welcome</h2>
          <p>
            Mental health is just as important as physical health. It affects how we think, feel, and act.
            This website aims to provide resources and support for individuals seeking help and guidance.
          </p>
        </section>

        <section className="resources">
          <h2>Resources</h2>
          <ul>
            <li><a>Crisis Hotline</a></li>
            <li><a>Therapist Directory</a></li>
            <li><a>Mental Health Articles</a></li>
            <li><a>Support Groups</a></li>
          </ul>
        </section>

        <section className="footer">
          <p>&copy; 2024 Mental Health Awareness. All Rights Reserved.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
