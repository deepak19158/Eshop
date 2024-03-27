import React from "react";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/product/FeatureProduct";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import carousel1 from "./utils/Carousel1.jpg";
import carousel2 from "./utils/Carousel2.jpg";
import carousel3 from "./utils/Carousel3.jpg";
import "./styles/Home.css";

const Home = () => {
  return (
    <>
      <div
        className=""
        // style={{ height: "600px", overflow: "hidden" }}
      >
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src={carousel1}
            alt="..."
          >
            <h1>Decorative Wardrobes</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src={carousel2}
            alt="..."
          >
            <h1>Cool Design Furniture</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src={carousel3}
            alt="..."
          >
            <h1>Multiple Colors</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      {/* <HeroSection myData={data} /> */}
      <FeatureProduct />
      <div className="trendingCategories">
        <h3>Trending Categories</h3>
        <h5>
          There are many variations passages Lorem Ipsum available majority
        </h5>
        <br />
        <br />
        <div className="categoryCards">
          <div className="categoryCard">
            <div className="categoryCardImg">
              <img src={carousel2} alt="" />
            </div>
            <div className="categoryCardText">
              <h4>Shop By Piece</h4>
              <br />
              <ul>
                <li>Chairs</li>
                <li>Tables</li>
                <li>Sofas</li>
                <li>Desks</li>
              </ul>
              <br />
              <a href="/products" className="categoryCardLink">
                View Categories
              </a>
            </div>
          </div>
          <div className="categoryCard">
            <div className="categoryCardImg">
              <img src={carousel3} alt="" />
            </div>
            <div className="categoryCardText">
              <h4>Shop By Piece</h4>
              <br />
              <ul>
                <li>Chairs</li>
                <li>Tables</li>
                <li>Sofas</li>
                <li>Desks</li>
              </ul>
              <br />
              <a href="/products" className="categoryCardLink">
                View Categories
              </a>
            </div>
          </div>
          <div className="categoryCard">
            <div className="categoryCardImg">
              <img src={carousel1} alt="" />
            </div>
            <div className="categoryCardText">
              <h4>Shop By Piece</h4>
              <br />
              <ul>
                <li>Chairs</li>
                <li>Tables</li>
                <li>Sofas</li>
                <li>Desks</li>
              </ul>
              <br />
              <a href="/products" className="categoryCardLink">
                View Categories
              </a>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <div className="featured"></div>
      {/* <div className="exploreDept">
        <h3>Explore All Department</h3>
        <h5>
          There are many variations passages Lorem Ipsum available majority
        </h5>
        <div className="exploreDeptGrid"></div>
        <button>Browse All Departments</button>
      </div> */}
      <Trusted />
    </>
  );
};

export default Home;
