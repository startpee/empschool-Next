import React from 'react'

import PropTypes from 'prop-types'

const Copyright = (props) => {
  return (
    <>
      <div className={`copyright-copyright ${props.rootClassName} `}>
        <div className="copyright-max-width max-content-container">
          <span className="copyright-text">
            <span>© todos os direitos reservados </span>
            <span>feito por :</span>
            <span> </span>
            <span className="copyright-text4">startpee tecnologia co</span>
            <span> CNPJ: 20.369.543</span>
            <span>/</span>
            <span>0001-98 São Paulo - SP</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .copyright-copyright {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .copyright-max-width {
            align-items: stretch;
          }
          .copyright-text {
            color: var(--dl-color-grays-gray100);
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.5;
          }
          .copyright-text4 {
            text-decoration: underline;
          }
          .copyright-root-class-name {
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
          }
          .copyright-root-class-name1 {
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
          }
          @media (max-width: 991px) {
            .copyright-copyright {
              height: 392px;
              padding-top: 318px;
              padding-bottom: 0px;
            }
            .copyright-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .copyright-copyright {
              height: 200px;
              padding-top: 144px;
            }
          }
          @media (max-width: 479px) {
            .copyright-copyright {
              height: 116px;
              padding-top: var(--dl-space-space-fourunits);
            }
            .copyright-root-class-name {
              margin-top: 18px;
              margin-bottom: 18px;
            }
            .copyright-root-class-name1 {
              margin-top: 18px;
              margin-bottom: 18px;
            }
          }
        `}
      </style>
    </>
  )
}

Copyright.defaultProps = {
  rootClassName: '',
}

Copyright.propTypes = {
  rootClassName: PropTypes.string,
}

export default Copyright
