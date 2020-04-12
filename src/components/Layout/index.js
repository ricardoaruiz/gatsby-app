import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Profile from "../Profile"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <aside>
        <Profile />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.section`
  display: flex;
`

const LayoutMain = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 0 3.75rem a 20rem;
  background: #162202;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
