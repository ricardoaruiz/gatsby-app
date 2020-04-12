import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import GlobalStyle from "../../styles/global"
import Profile from "../Profile"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyle />

      <aside>
        <Profile />
      </aside>

      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
