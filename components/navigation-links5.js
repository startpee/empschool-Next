import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks5 = (props) => {
  return (
    <>
      <nav className={`navigation-links5-nav ${props.rootClassName} `}>
        <span className="navigation-links5-text">{props.text}</span>
        <span className="navigation-links5-text1">{props.text1}</span>
        <span className="navigation-links5-text2">{props.text2}</span>
        <span className="navigation-links5-text3">{props.text3}</span>
        <span className="navigation-links5-text4">{props.text4}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links5-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links5-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links5-text2 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links5-text3 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links5-text4 {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links5-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links5-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links5-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links5-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links5-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links5-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks5.defaultProps = {
  text3: 'Team',
  text1: 'Features',
  text2: 'Pricing',
  rootClassName: '',
  text: 'About',
  text4: 'Blog',
}

NavigationLinks5.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks5
