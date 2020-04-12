import React from "react"

import itemsMenu from "./content"
import * as S from "./styled"

const MenuLinks = () => {
  const renderItemsMenu = () => {
    return itemsMenu.map((item, index) => (
      <S.MenuLinksItem key={index}>
        <S.MenuLinksLink to={item.to} activeClassName="active">
          {item.label}
        </S.MenuLinksLink>
      </S.MenuLinksItem>
    ))
  }

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>{renderItemsMenu()}</S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks
