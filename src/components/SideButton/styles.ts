import styled from 'styled-components'
import { colors } from '../../globalStyles'

type Props = {
  active: boolean
}

export const ButtonContainer = styled.button<Props>`
  width: 100%;
  padding: 16px 0;
  background-color: ${(props) =>
    props.active ? `${colors.white}` : 'transparent'};
  border: none;
  cursor: pointer;
  font-weight: normal;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`
