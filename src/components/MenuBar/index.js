import React from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-solid/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-solid/UpArrowAlt"
import { LightBulb as Light } from "@styled-icons/entypo/LightBulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"

import * as S from "./styled"

function MenuBar() {
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para home">
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search" title="Pesquisar">
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem title="Mudar o tema">
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar visualização">
          <Grid />
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
