import React from 'react'
import Head from 'next/head'

const Contratar = (props) => {
  return (
    <>
      <header
        page='&lt;html&gt;   &lt;head&gt;     &lt;meta charset="UTF-8"&gt;     &lt;meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;     &lt;title&gt;Empreende.chat&lt;/title&gt;   &lt;/head&gt;   &lt;body&gt;     &lt;script SameSite="None; Secure" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.js"&gt;&lt;/script&gt;     &lt;script&gt;       var myLandbot = new Landbot.Fullpage(&#123;         configUrl: &apos;https://storage.googleapis.com/landbot.online/v3/H-1382194-D7SJO1Z7SNH7WUTD/index.json&apos;,       &#125;);     &lt;/script&gt;   &lt;/body&gt; &lt;/html&gt;'
        className="contratar-container"
      >
        <Head>
          <title>
            Contratar - Startpee: Start para Começar o Seu Próprio Negócio
          </title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:title"
            content="Contratar - Startpee: Start para Começar o Seu Próprio Negócio"
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
        <iframe
          src="https://landbot.online/v3/H-1382194-D7SJO1Z7SNH7WUTD/index.html"
          allowFullScreen
          className="contratar-iframe"
        ></iframe>
      </header>
      <style jsx>
        {`
          .contratar-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contratar-iframe {
            width: 100%;
            height: var(--dl-size-size-maxwidth);
          }
          @media (max-width: 991px) {
            .contratar-iframe {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contratar-iframe {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .contratar-iframe {
              width: 100%;
              height: var(--dl-size-size-maxwidth);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contratar
