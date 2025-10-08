import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  padding: 16px;
  background-color: ${colors.purple};
  color: ${colors.white};

  h3,
  p {
    margin-bottom: 16px;
  }
`
