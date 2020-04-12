import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`
export const MenuLinksItem = styled.li``

export const MenuLinksLink = styled(Link)`
  display: inline-block;
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  padding: 0.5rem 0;

  &.active {
    color: #1fa1f2;
  }

  &:hover {
    color: #1fa1f2;
  }
`
