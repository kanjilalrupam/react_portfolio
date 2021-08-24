import React from "react";

const Modal = ({ modalId = "portfolioModal1", title, imgSrc }) => (
  <div
    class="portfolio-modal modal fade"
    id={modalId}
    tabindex="-1"
    aria-labelledby={modalId}
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center pb-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                {/* <!-- Portfolio Modal - Title--> */}
                <h2
                  class="
                      portfolio-modal-title
                      text-secondary text-uppercase
                      mb-0
                    "
                >
                  {title}
                </h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Modal - Image--> */}
                <img class="img-fluid rounded mb-5" src={imgSrc} alt="..." />
                {/* <!-- Portfolio Modal - Text--> */}
                <p class="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia neque assumenda ipsam nihil, molestias magnam,
                  recusandae quos quis inventore quisquam velit asperiores,
                  vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                  Nam.
                </p>
                <button
                  class="btn btn-primary"
                  href="#!"
                  data-bs-dismiss="modal"
                >
                  <i class="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Modal;
