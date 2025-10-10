import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const Aside = styled.aside`
  padding-top: 16px;
  height: 80vh;
  border-right: 1px solid ${colors.white};

  h3 {
    font-weight: normal;
    margin-bottom: 8px;
  }

  div {
    margin-bottom: 8px;
  }
`

export const AsideTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  margin-bottom: 24px;
`
