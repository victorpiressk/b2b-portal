import styled from 'styled-components'
import { colors } from '../../../globalStyles'

export const CommerceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 16px;
  border-bottom: 1px solid ${colors.white};

  p {
    display: flex;
    align-items: center;
  }

  button {
    margin-right: 16px;
    padding: 8px 0;
    border: 2px solid ${colors.white};
    background-color: ${colors.white2};
  }
`
