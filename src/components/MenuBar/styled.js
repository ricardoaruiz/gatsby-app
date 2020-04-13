import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  position: fixed;
  right: 0;
  height: 100vh;
  width: 3.75rem;

  border-left: 1px solid #38444d;
  background: #192734;
  padding: 0.8rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #8899a6;
  display: block;
  width: 3.75rem;
  height: 3.75rem;
  padding: 1.1rem;
  cursor: pointer;
`
