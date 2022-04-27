import React from 'react';

function Main() {
  return (
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
          <h2>TEST 1</h2>
          <h5>TEST TITLE, 2022.4.27</h5>
          <div className="fakeimg">Fake images</div>
          <p>아무 글자 입력..</p>
          <p>.........................................................</p>

          <h2 class="mt-5">TEST 2</h2>
          <h5>글 설명, 2022.4.27</h5>
          <div className="fakeimg">Fake images</div>
          <p>아무 글자 입력..</p>
          <p>.........................................................</p>
        </div>
      </div>
    </div>
  );
}
export default Main;
