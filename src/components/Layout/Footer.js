import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer
    style={{
      textAlign: 'center',
    }}
  >
    Created by <a target="_blank" rel="noreferrer" href='https://www.aleaitsolutions.com/'>Alea</a>
  </Footer>
  )
}

export default FooterComponent;