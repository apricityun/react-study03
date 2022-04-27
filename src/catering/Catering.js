import React from 'react';
// import './Catering.css';
// import NavCatering from './NavCatering';

function Catering() {
  return (
    <div>
      <nav class="fixed-top">
        {/* <NavCatering /> */}
        <div class="shadow-sm p-4 mb-4 bg-white">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Gourmet au Catering
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main class="container">
        {/* 메인 이미지 */}
        <div>
          <img src="https://www.w3schools.com/w3images/hamburger.jpg" />
          <div>
            <h1>Le Catering</h1>
          </div>
        </div>

        {/* about */}
        <div class="row mx-auto" id="about">
          <div class="col-sm-4">
            {/* <div class="col-sm-4 offset-sm-2 p-3"> */}
            <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" />
          </div>
          <div class="col-sm-4 p-3">
            {/* <div class="col-sm-4 p-3"> */}
            <h3>About Catering</h3>
            <h5>Tradition since 1889</h5>
            <p>
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
        <div class="row mx-auto" id="menu">
          <div class="col-sm-4 offset-sm-2 p-3">
            <h3>Our Menu</h3>
            <h5>Bread Basket</h5>
            <p>Assortment of fresh baked fruit breads and muffins 5.50</p>

            <h5>Honey Almond Granola with Fruits</h5>
            <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

            <h5>Belgian Waffle</h5>
            <p>Vanilla flavored batter with malted flour 7.50</p>

            <h5>Scrambled eggs</h5>
            <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>

            <h5>Blueberry Pancakes</h5>
            <p>With syrup, butter and lots of berries 8.50</p>
          </div>
          <div class="col-sm-4 p-3">
            <img src="https://www.w3schools.com/w3images/tablesetting.jpg" />
          </div>
        </div>
        <hr />

        {/* contact */}
        <div class="" id="contact">
          <h3>Contact</h3>
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
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="NAME"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="How Many People"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Message \ Special requirements"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <button type="submit" class="btn btn-primary">
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
          Powered by <a href="">s3.css</a>
        </div>
      </footer>
    </div>
  );
}

export default Catering;
