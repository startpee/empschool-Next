import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Copyright from '../components/copyright'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Startpee: Start para Começar o Seu Próprio Negócio</title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:title"
            content="Startpee: Start para Começar o Seu Próprio Negócio"
          />
          <meta
            property="og:description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e564a0a1-509d-4da6-8cbf-283b406ad227/62aee562-8aa3-455a-ab50-0bc332a34270?org_if_sml=1"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="home-hero">
          <h1 className="home-text">
            <span>Marketing completo</span>
            <br></br>
          </h1>
          <span className="home-text03">
            Com a nossa ajuda você aumenta suas vendas e cresce muito mais
            Rápido 
          </span>
          <div className="home-btn-group">
            <button className="home-button button">Contratar</button>
            <a
              href="https://www.instagram.com/reel/ClKeuqwIHyy/?utm_source=ig_web_copy_link"
              className="home-link button"
            >
              Ver exemplo
            </a>
          </div>
        </div>
        <div className="home-div">
          <DangerousHTML
            html={`<storifyme-collection url="https://storifyme.com/widgets/g-francisco-junior-70482/widget/custom/6913">
</storifyme-collection>`}
          ></DangerousHTML>
        </div>
        <h1 className="home-text04">Episodio recente do podcast</h1>
        <div className="home-div1">
          <DangerousHTML
            html={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/6v5Qp09reNLm5gWmySugNz?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
          ></DangerousHTML>
        </div>
        <a
          href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz?si=93c32f83e8f0463e"
          className="home-link1"
        >
          <h1 className="home-text05">
            <span className="home-text06">Ver todos</span>
            <span> episodios </span>
          </h1>
        </a>
        <main className="home-main">
          <div className="home-section-six section-container">
            <div className="home-max-width max-content-container">
              <div className="home-content-container">
                <h2 className="home-text08">
                  <span>
                    Se você já  tentou empreender e não deu certo, Acredito que
                    tenha algo que você deve aprender e que podemos te
                    ensinar,saiba que você não está 
                  </span>
                  <span className="home-text10">sozinho.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="home-section-six1 section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-content-container1">
                <h1 className="home-text11">Baixe o nosso app! </h1>
                <span className="home-text12">
                  você vai descobrir que é facil montar seu proprio negócio
                </span>
                <div className="home-input-container">
                  <a
                    href="https://play.google.com/store/apps/details?id=startpee.site.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/playstore-200h.png"
                      className="home-image"
                    />
                  </a>
                </div>
                <div className="home-features-container">
                  <div className="home-feature">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text13">
                      Seus dados Protegido (LGPD). 
                    </span>
                  </div>
                  <div className="home-feature1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon2"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text14">
                      Comece com pouco dinheiro
                    </span>
                  </div>
                  <div className="home-feature2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon4"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text15">
                      nós seremos parceiro de negócios 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name"></Footer>
        <Copyright rootClassName="copyright-root-class-name"></Copyright>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-backgrounds-gray);
          }
          .home-hero {
            width: 100%;
            height: 752px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                113.8deg,
                rgba(255, 76, 92, 0.8) 7.5%,
                rgba(255, 177, 70, 0.8) 94.47%
              ),
              url('/playground_assets/capatrafego-1500h.webp');
          }
          .home-text {
            color: rgb(255, 255, 255);
            font-size: 3rem;
            text-align: center;
          }
          .home-text03 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-button {
            font-size: 0.75rem;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-button:hover {
            transform: scale(1.02);
          }
          .home-link {
            color: rgb(255, 255, 255);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: #ffffff;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: transparent;
          }
          .home-link:hover {
            transform: scale(1.02);
          }
          .home-div {
            width: 100%;
            height: 100%;
            margin-top: 10px;
            margin-left: 3px;
            margin-right: 3px;
            margin-bottom: 20px;
          }
          .home-text04 {
            align-self: center;
            margin-top: 12px;
            font-family: Source Sans Pro;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .home-div1 {
            width: 100%;
            height: 376px;
          }
          .home-link1 {
            display: contents;
          }
          .home-text05 {
            align-self: center;
            margin-top: 12px;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
            text-decoration: none;
            background-color: #fa7930;
          }
          .home-text06 {
            text-decoration: underline;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: 30px;
            margin-right: 30px;
            flex-direction: column;
          }
          .home-section-six {
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
            background-color: #ffffff;
          }
          .home-max-width {
            height: 305px;
            align-items: stretch;
          }
          .home-content-container {
            flex: 1;
            height: 50%;
            display: flex;
            min-width: 60%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text08 {
            width: 676px;
            align-self: center;
            margin-top: 12px;
            text-align: center;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .home-text10 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-section-six1 {
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
            background-color: var(--dl-color-backgrounds-primary);
          }
          .home-max-width1 {
            height: 437px;
            align-items: stretch;
          }
          .home-content-container1 {
            flex: 1;
            display: flex;
            min-width: 60%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text11 {
            align-self: center;
            margin-top: 12px;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .home-text12 {
            color: var(--dl-color-grays-white80);
            align-self: center;
            margin-top: 12px;
            margin-left: 12px;
            margin-bottom: 12px;
          }
          .home-input-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 12px;
            align-items: center;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 12px;
            flex-direction: row;
            justify-content: center;
          }
          .home-link2 {
            display: contents;
          }
          .home-image {
            width: 394px;
            height: 115px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-features-container {
            flex: 0 0 auto;
            width: 330px;
            margin: 12px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .home-icon {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text13 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .home-feature1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .home-icon2 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text14 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .home-feature2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon4 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text15 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .home-hero {
              width: 100%;
              flex-direction: column;
            }
            .home-text {
              text-align: center;
            }
            .home-text03 {
              text-align: center;
            }
            .home-div {
              width: 100%;
              margin-right: 3px;
              margin-bottom: 20px;
            }
            .home-text04 {
              width: 100%;
              text-align: center;
            }
            .home-text05 {
              width: 100%;
              text-align: center;
            }
            .home-section-six {
              height: 450px;
            }
            .home-max-width {
              flex-direction: column;
            }
            .home-section-six1 {
              height: 524px;
              margin-bottom: 0px;
              padding-bottom: 38px;
            }
            .home-max-width1 {
              flex-direction: column;
            }
            .home-text11 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-div {
              width: 100%;
              margin-bottom: 20px;
            }
            .home-text04 {
              margin: 20px;
              text-align: center;
            }
            .home-text05 {
              text-align: center;
            }
            .home-section-six {
              height: 864px;
              padding-top: 0px;
            }
            .home-max-width {
              height: 803px;
              margin: 12px;
            }
            .home-content-container {
              height: 671px;
              padding-top: 0px;
            }
            .home-text08 {
              width: 706px;
              height: 156px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-section-six1 {
              height: 676px;
              padding-top: 44px;
              padding-bottom: 84px;
            }
            .home-max-width1 {
              height: 803px;
              margin: 12px;
            }
            .home-content-container1 {
              height: 630px;
              padding-bottom: 108px;
            }
            .home-text13 {
              color: var(--dl-color-grays-white80);
              font-size: 19px;
              font-style: normal;
              font-weight: 400;
            }
            .home-text14 {
              color: var(--dl-color-grays-white80);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
            }
            .home-text15 {
              color: var(--dl-color-grays-white80);
              font-size: 19px;
              font-style: normal;
              font-weight: 400;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text {
              color: rgb(255, 255, 255);
              font-size: 3rem;
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-link {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-div {
              width: 100%;
              height: 100%;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .home-text04 {
              width: auto;
              margin: 22px;
              font-size: 20px;
              font-style: normal;
              margin-top: 22px;
              text-align: center;
              font-family: Lexend;
              font-weight: 700;
              line-height: 1.3;
              margin-left: 22px;
              margin-right: 22px;
              margin-bottom: 7px;
              text-transform: none;
              text-decoration: none;
            }
            .home-text05 {
              width: auto;
              font-size: 28px;
              font-style: normal;
              text-align: center;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.3;
              text-transform: none;
              text-decoration: none;
            }
            .home-main {
              height: auto;
              z-index: 100;
            }
            .home-section-six {
              width: 342px;
              height: 566px;
              padding: 12px;
              align-items: flex-start;
              padding-top: 0px;
              margin-bottom: 0px;
              flex-direction: column;
              padding-bottom: 69px;
            }
            .home-max-width {
              height: 388px;
              margin-bottom: 0px;
            }
            .home-content-container {
              width: auto;
              height: 558px;
              padding-top: 102px;
              margin-bottom: 99px;
              padding-bottom: 0px;
            }
            .home-text08 {
              width: auto;
              height: 252px;
              font-size: 22px;
              font-style: normal;
              margin-top: 22px;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.3;
              margin-bottom: 22px;
              text-transform: none;
              text-decoration: none;
            }
            .home-text10 {
              color: var(--dl-color-backgrounds-primary);
            }
            .home-section-six1 {
              width: auto;
              height: 621px;
              padding: 33px;
            }
            .home-max-width1 {
              height: 804px;
            }
            .home-content-container1 {
              height: 517px;
            }
            .home-text11 {
              width: auto;
              font-size: 28px;
              font-style: normal;
              text-align: center;
              font-family: Lexend;
              font-weight: 600;
              line-height: 1.3;
              text-transform: none;
              text-decoration: none;
            }
            .home-text12 {
              align-self: center;
              text-align: center;
              margin-right: var(--dl-space-space-unit);
            }
            .home-input-container {
              flex-direction: column;
            }
            .home-image {
              width: 293px;
              height: 90px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
