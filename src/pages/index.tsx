import * as React from "react"
import type { HeadFC } from "gatsby"
import * as S from '../styles/main.styled'

const IndexPage = () => {
  return (
    <S.Container>
      <S.Text>10.28.23</S.Text>
    </S.Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Stellie 10.28.23</title>
