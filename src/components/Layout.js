import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="HiStaff" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
