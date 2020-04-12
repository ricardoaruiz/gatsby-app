import React from "react"

import icons from "./icons"
import links from "./contents"

import * as S from "./styled"

const SocialLinks = () => {
  const renderItems = () => {
    return links.map((link, index) => {
      const Icon = icons[link.label]

      return (
        <S.SocialLinksItem key={index}>
          <S.SocialLinksLink
            href={link.url}
            title={link.label}
            targer="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
          </S.SocialLinksLink>
        </S.SocialLinksItem>
      )
    })
  }

  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>{renderItems()}</S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}

export default SocialLinks
