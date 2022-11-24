import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <a
          href="https://startpee.site/"
          className="navigation-links-link navbar-link"
        >
          {props.text}
        </a>
        <Link href="/start">
          <a className="navigation-links-link1 navbar-link">{props.text1}</a>
        </Link>
        <a
          href="https://api.whatsapp.com/send?phone=5511993619129"
          className="navigation-links-link2 navbar-link"
        >
          {props.text2}
        </a>
        <a
          href="https://blog.startpee.site/"
          target="_blank"
          rel="noreferrer noopener"
          className="navigation-links-link3 navbar-link"
        >
          {props.text3}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            text-decoration: none;
          }
          .navigation-links-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          .navigation-links-root-class-name10 {
            align-self: center;
          }
          .navigation-links-root-class-name11 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .navigation-links-root-class-name10 {
              margin: 7px;
            }
          }
          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-links-nav {
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Fale conosco',
  text3: 'Blog',
  rootClassName: '',
  text: 'Home',
  text1: 'Quem somos',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
