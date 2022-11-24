import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Local = (props) => {
  return (
    <>
      <div className="local-container">
        <Head>
          <title>
            Local - Startpee: Start para Começar o Seu Próprio Negócio
          </title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:title"
            content="Local - Startpee: Start para Começar o Seu Próprio Negócio"
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
        <div className="local-div">
          <DangerousHTML
            html={`<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.63021247021!2d-46.592954500000005!3d-23.545798999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda743ac39c6f5538!2sStartpee!5e0!3m2!1spt-BR!2sbr!4v1665627346864!5m2!1spt-BR!2sbr"
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .local-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .local-div {
            margin-top: var(--dl-space-space-threeunits);
            border-color: #ff2828;
            border-style: solid;
            border-width: 9px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-threeunits);
          }
          @media (max-width: 479px) {
            .local-div {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Local
