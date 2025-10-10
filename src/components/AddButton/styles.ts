import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const Circle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
  border: none;
  border-radius: 50%;
  background-color: ${colors.navyBlue};
  color: ${colors.white};
  font-size: 32px;
  cursor: pointer;
  margin: 16px 0;

  &:hover {
    background-color: ${colors.blue};
  }
`
