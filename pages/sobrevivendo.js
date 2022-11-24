import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Sobrevivendo = (props) => {
  return (
    <>
      <div className="sobrevivendo-container">
        <Head>
          <title>
            sobrevivendo - Startpee: Start para Começar o Seu Próprio Negócio
          </title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:title"
            content="sobrevivendo - Startpee: Start para Começar o Seu Próprio Negócio"
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
        <div className="sobrevivendo-div">
          <DangerousHTML
            html={`<script src="https://fast.wistia.com/embed/medias/dhlouaqaol.jsonp" async></script>
<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
    <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
        <span class="wistia_embed wistia_async_dhlouaqaol popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span>
    </div>
</div>`}
          ></DangerousHTML>
        </div>
        <button className="sobrevivendo-button button">Continuar</button>
      </div>
      <style jsx>
        {`
          .sobrevivendo-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sobrevivendo-div {
            width: 740px;
            height: 416px;
            margin-top: 200px;
            margin-bottom: 200px;
          }
          .sobrevivendo-button {
            color: #ffffff;
            z-index: 100;
            font-size: 29px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            font-family: Arial Black;
            background-color: #3759b3;
          }
          @media (max-width: 479px) {
            .sobrevivendo-div {
              width: 422px;
              height: 264px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Sobrevivendo
