import React from "react";

const PortfolioComponent = ({
  modalTarget = "#portfolioModal1",
  imgSrc = "assets/img/portfolio/cabin.png",
}) => (
  <div
    className="portfolio-item mx-auto"
    data-bs-toggle="modal"
    data-bs-target={modalTarget}
  >
    <div
      className="
                  portfolio-item-caption
                  d-flex
                  align-items-center
                  justify-content-center
                  h-100
                  w-100
                "
    >
      <div className="portfolio-item-caption-content text-center text-white">
        <i className="fas fa-plus fa-3x"></i>
      </div>
    </div>
    <img className="img-fluid" src={imgSrc} alt="..." />
  </div>
);
export default PortfolioComponent;
