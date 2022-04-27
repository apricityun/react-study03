import React from 'react';
import './Home';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Home2() {
  return (
    <div>
      <div class="bg-primary text-white text-center">
        <h1>My First bootstrap5 Page</h1>
        <p>반응형 웹 지원됨</p>
      </div>
      {/* nav */}
      <Header />
      {/* main */}
      <Main />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home2;
