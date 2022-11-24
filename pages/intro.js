import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Intro = (props) => {
  return (
    <>
      <div className="intro-container">
        <Head>
          <title>
            intro - Startpee: Start para Começar o Seu Próprio Negócio
          </title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:title"
            content="intro - Startpee: Start para Começar o Seu Próprio Negócio"
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
        <div className="intro-div">
          <DangerousHTML
            html={`<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.63021247021!2d-46.592954500000005!3d-23.545798999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda743ac39c6f5538!2sStartpee!5e0!3m2!1spt-BR!2sbr!4v1665524002890!5m2!1spt-BR!2sbr"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>

`}
          ></DangerousHTML>
        </div>
        <div className="intro-div1">
          <DangerousHTML
            html={`<script
  src="https://fast.wistia.com/embed/medias/h509o0kknc.jsonp"
  async
></script>
<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
<div
  class="wistia_responsive_padding"
  style="padding:56.25% 0 0 0;position:relative;"
>
  <div
    class="wistia_responsive_wrapper"
    style="height:100%;left:0;position:absolute;top:0;width:100%;"
  >
    <div
      class="wistia_embed wistia_async_h509o0kknc videoFoam=true"
      style="height:100%;position:relative;width:100%"
    >
      <div
        class="wistia_swatch"
        style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"
      >
        <img
          src="https://fast.wistia.com/embed/medias/h509o0kknc/swatch"
          style="filter:blur(5px);height:100%;object-fit:contain;width:100%;"
          alt=""
          aria-hidden="true"
          onload="this.parentNode.style.opacity=1;"
        />
      </div>
    </div>
  </div>
</div>
`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .intro-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .intro-div {
            top: NaNpx;
            left: NaNpx;
            width: 703px;
            height: 567px;
            position: absolute;
            margin-right: Infinitypx;
          }
          .intro-div1 {
            top: 485px;
            right: 95px;
            width: var(--dl-size-size-xlarge);
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default Intro
