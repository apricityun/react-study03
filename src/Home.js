import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <div class="bg-primary text-white text-center">
        <h1>My First bootstrap5 Page</h1>
        <p>반응형 웹 지원됨</p>
      </div>

      {/* navigation */}
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* main */}
      <div class="container mt-5">
        <div class="row">
          {/* sidebar  */}
          <div class="col-sm-4">
            <h2>About me</h2>
            <h5>Photo of me:</h5>
            <div className="fakeimg">Fake image</div>
            <p>Hello Bootstrap World</p>

            <h3 class="mt-4">Some Links</h3>
            <p>Hello Bootstrap World</p>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <hr class="d-sm-none"></hr>
          </div>

          {/* main content */}
          <div class="col-sm-8">
            <h2>Title Heading</h2>
            <h5>Title description, 2022.4.27</h5>
            <div className="fakeimg">Fake images</div>
            <p>아무 글자 입력..</p>
            <p>.........................................................</p>

            <h2 class="mt-5">제목</h2>
            <h5>글 설명, 2022.4.27</h5>
            <div className="fakeimg">Fake images</div>
            <p>아무 글자 입력..</p>
            <p>.........................................................</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div class="mt-5 p-4 bg-dark text-white text-center">Footer</div>
    </div>
  );
}

export default Home;
