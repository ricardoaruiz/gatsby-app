import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItem = props => {
  const {
    background,
    slug,
    category,
    date,
    timeToRead,
    title,
    description,
  } = props

  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemTag background={background}>{category}</S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} - {timeToRead}
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

PostItem.propTypes = {
  background: PropTypes.string,
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

PostItem.defaultProps = {
  background: "#1fa1f2",
}

export default PostItem
