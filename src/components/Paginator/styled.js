import styled from "styled-components"
import { Link } from "gatsby"

export const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const PaginatorLink = styled(Link)`
  text-decoration: none;
  color: #8899a6;

  &:hover {
    color: #2aa1f1;
  }
`

export const PaginatorControl = styled.p`
  color: #8899a6;
`
