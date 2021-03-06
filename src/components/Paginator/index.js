import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Paginator = props => {
  const { numPages, currentPage, isFirst, isLast, prevPage, nextPage } = props

  return (
    <S.PaginatorWrapper>
      {!isFirst && (
        <S.PaginatorLink to={prevPage}>pagina anterior</S.PaginatorLink>
      )}
      <S.PaginatorControl>
        página {currentPage} de {numPages}
      </S.PaginatorControl>

      {!isLast && (
        <S.PaginatorLink to={nextPage}>próxima página</S.PaginatorLink>
      )}
    </S.PaginatorWrapper>
  )
}

Paginator.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  prevPage: PropTypes.string.isRequired,
  nextPage: PropTypes.string.isRequired,
}

export default Paginator
