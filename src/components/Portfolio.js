import React from "react";
import PortfolioComponent from "./PortfolioComponent";
const Portfolio = () => (
  <section className="page-section portfolio" id="portfolio">
    <div className="container">
      <h2
        className="
            page-section-heading
            text-center text-uppercase text-secondary
            mb-0
          "
      >
        Portfolio
      </h2>

      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-5">
          <PortfolioComponent
            imgSrc="assets/img/portfolio/cabin.png"
            modalTarget="#portfolioModal1"
          />
        </div>

        <div className="col-md-6 col-lg-4 mb-5">
          <PortfolioComponent
            imgSrc="assets/img/portfolio/cake.png"
            modalTarget="#portfolioModal2"
          />
        </div>

        <div className="col-md-6 col-lg-4 mb-5">
          <PortfolioComponent
            imgSrc="assets/img/portfolio/circus.png"
            modalTarget="#portfolioModal3"
          />
        </div>

        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <PortfolioComponent
            imgSrc="assets/img/portfolio/game.png"
            modalTarget="#portfolioModal4"
          />
        </div>

        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
          <PortfolioComponent
            imgSrc="assets/img/portfolio/safe.png"
            modalTarget="#portfolioModal5"
          />
        </div>

        <div className="col-md-6 col-lg-4">
          <PortfolioComponent
            imgSrc="assets/img/portfolio/submarine.png"
            modalTarget="#portfolioModal6"
          />
        </div>
      </div>
    </div>
  </section>
);
export default Portfolio;
