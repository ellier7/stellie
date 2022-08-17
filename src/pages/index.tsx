import * as React from "react"
import type { HeadFC } from "gatsby"
import * as S from '../css/main.styled'

const IndexPage = () => {
  return (
    <S.PageStyles>
      <main >
        <span> 10.28.23</span>
      </main>
    </S.PageStyles>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Stellie 10.28.23</title>
