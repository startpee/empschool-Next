import React from 'react'
import Head from 'next/head'

const Chat = (props) => {
  return (
    <>
      <div className="chat-container">
        <Head>
          <title>
            Chat - Startpee: Start para Começar o Seu Próprio Negócio
          </title>
          <meta
            name="description"
            content="Somos uma startup BizDev desenvolvedora de novos negócios"
          />
          <meta
            property="og:title"
            content="Chat - Startpee: Start para Começar o Seu Próprio Negócio"
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
      </div>
      <style jsx>
        {`
          .chat-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Chat
