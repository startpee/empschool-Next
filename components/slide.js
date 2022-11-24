import React from 'react'

import PropTypes from 'prop-types'

const Slide = (props) => {
  return (
    <>
      <div
        data-type="slide"
        className={`slide-slide slide ${props.rootClassName} `}
      >
        <div className="slide-max-width max-content-container">
          <div className="slide-left-side">
            <div className="slide-decorations-container">
              <img
                alt="image"
                src="/playground_assets/union-200h.png"
                className="slide-dots"
              />
              <div className="slide-squares-container">
                <div className="slide-light-green"></div>
                <div className="slide-orange"></div>
              </div>
            </div>
            <div className="slide-image-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="slide-image"
              />
            </div>
          </div>
          <div className="slide-right-side">
            <span className="slide-testimonial">{props.Testimonial}</span>
            <span className="slide-author">{props.Author}</span>
            <span className="slide-role">{props.Role}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .slide-slide {
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
            background-color: #151618;
          }
          .slide-max-width {
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .slide-left-side {
            width: 50%;
            display: flex;
            align-items: stretch;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .slide-decorations-container {
            flex: 1;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .slide-dots {
            width: 126px;
            height: 126px;
            margin-top: 21px;
            object-fit: cover;
            margin-right: 21px;
          }
          .slide-squares-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .slide-light-green {
            flex: 0 0 auto;
            width: 54px;
            height: 54px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .slide-orange {
            flex: 0 0 auto;
            width: 108px;
            height: 108px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-backgrounds-primary);
          }
          .slide-image-container {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .slide-image {
            width: 100%;
            height: 485px;
            object-fit: cover;
          }
          .slide-right-side {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .slide-testimonial {
            color: var(--dl-color-grays-white100);
            font-size: 27px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.5;
            margin-bottom: 42px;
          }
          .slide-author {
            color: var(--dl-color-grays-white100);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.5;
          }
          .slide-role {
            color: var(--dl-color-grays-white60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.7;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .slide-root-class-name {
            margin-top: 12px;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          @media (max-width: 991px) {
            .slide-left-side {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .slide-max-width {
              flex-direction: column;
            }
            .slide-left-side {
              width: 100%;
              padding-right: 0px;
            }
            .slide-image {
              max-width: 700px;
            }
            .slide-right-side {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .slide-slide {
              height: 994px;
              margin-top: 22px;
              margin-bottom: 17px;
              padding-bottom: 46px;
            }
            .slide-max-width {
              height: 915px;
              margin-bottom: 159px;
            }
            .slide-dots {
              width: 60px;
              height: 60px;
            }
            .slide-light-green {
              width: 36px;
              height: 36px;
            }
            .slide-orange {
              width: 75px;
              height: 75px;
            }
            .slide-image {
              margin-top: 10px;
              margin-left: 10px;
              margin-right: 10px;
              margin-bottom: 10px;
            }
            .slide-right-side {
              height: 337px;
            }
            .slide-root-class-name {
              margin: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

Slide.defaultProps = {
  Author: 'Francisco Júnior',
  Testimonial:
    '“Eu sempre sonhei em ter minha própria empresa, hoje eu vejo que é possível fazer oque eu amo e ajudar outras pessoas com a tecnologia" ”',
  rootClassName: '',
  image_src:
    '/playground_assets/img_20221004_110625-removebg-preview%20%5B1%5D-700w.png',
  image_alt: 'image',
  Role: 'CEO Startpee',
}

Slide.propTypes = {
  Author: PropTypes.string,
  Testimonial: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Role: PropTypes.string,
}

export default Slide
