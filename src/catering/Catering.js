import React from 'react';
import './Catering.css';
// import NavCatering from './NavCatering';

function Catering() {
  return (
    <div>
      {/* navbar를 넣어주니까 위쪽 여백 생김....어떻게 지워? */}
      <nav class="navbar fixed-top navbar-expand-sm">
        {/* <NavCatering /> */}
        <div class="container-fluid shadow-sm p-3 mb-5 bg-white">
          <div >
          <a class="fs-3" href="#">Gourmet au Catering</a>
          </div>
          <ul class="nav">
          <li class="nav-item justify-content-end">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item justify-content-end">
              <a class="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li class="nav-item justify-content-end">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main class="container">
        {/* 메인 이미지 */}
        <div class="card">
          <img class="img-fluid" src="https://www.w3schools.com/w3images/hamburger.jpg" />
          <div class="card-img-overlay d-flex flex-column justify-content-end">
            <h1>Le Catering</h1>
          </div>
        </div>

        {/* about */}
        <div class="row mt-5 pt-5 mx-auto" id="about">
          <div class="col-sm-5 offset-sm-1 yun">
          {/* offset-sm-2은 sm 2개 크기만큼 공간 비운다. */}
            {/* <div class="col-sm-4 offset-sm-2 p-3"> */}
            <img class="img-fluid" src="https://www.w3schools.com/w3images/tablesetting2.jpg" />
          </div>
          <div class="col-sm-5 p-3">
            {/* <div class="col-sm-4 p-3"> */}
            <h3 class="text-center mt-3 mb-5 fs-1">About Catering</h3>
            <h5 class="text-center mb-3">Tradition since 1889</h5>
            <p class="text-center">
              The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet,
              consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.We only use seasonal ingredients.
            </p>
          </div>
        </div>
        <hr />

        {/* menu */}
        <div class="row mt-5 pt-5 mx-auto" id="menu">
          <div class="col-sm-5 offset-sm-1 p-3">
            <h3 class="mt-3 mb-5 fs-1">Our Menu</h3>
            <h5 class="fw-bold">Bread Basket</h5>
            <p class="mb-4">Assortment of fresh baked fruit breads and muffins 5.50</p>

            <h5 class="fw-bold">Honey Almond Granola with Fruits</h5>
            <p class="mb-4">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

            <h5 class="fw-bold">Belgian Waffle</h5>
            <p class="mb-4">Vanilla flavored batter with malted flour 7.50</p>

            <h5 class="fw-bold">Scrambled eggs</h5>
            <p class="mb-4">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>

            <h5 class="fw-bold">Blueberry Pancakes</h5>
            <p class="mb-4">With syrup, butter and lots of berries 8.50</p>
          </div>
          <div class="col-sm-5 p-3">
            <img class="img-fluid" src="https://www.w3schools.com/w3images/tablesetting.jpg" />
          </div>
        </div>
        <hr />

        {/* contact */}
        <div class="mt-3 mb-5 pt-5 px-3" id="contact">
          <h3 class="mt-3 mb-2 fs-1">Contact</h3>
          <p>
            We offer full-service catering for any event, large or small. We understand your needs
            and we will cater the food to satisfy the biggerst criteria of them all, both look and
            taste. Do not hesitate to contact us.
          </p>
          <p>Catering Service, 42nd Living St, 43043 New York, NY</p>
          <p>
            You can also contact us by phone 00553123-2323 or email catering@catering.com, or you
            can send us a message here:
          </p>
          <div>
            <form>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="NAME"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>

              <div class="form-group mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="How Many People"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>

              <div class="form-group mb-3">
                <input
                  type="datetime-local"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Message \ Special requirements"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Message \ Special requirements"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>

              <button type="button" class="btn btn-secondary">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer class="fixed-bottom">
        <div class="shadow-none p-4 bg-light">
          <div class="d-flex flex-row justify-content-center">
          <p>Powered by <a href="">s3.css</a></p>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default Catering;
