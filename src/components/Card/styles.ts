import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const CardContainer = styled.div`
  border-radius: 4px;
  padding: 16px;
  background-color: ${colors.purple};
  color: ${colors.white};

  h3 {
    font-weight: normal;
    margin-bottom: 16px;
  }
`
