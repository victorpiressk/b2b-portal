import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../globalStyles'

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  padding: 8px;
  background-color: ${colors.navyBlue};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 8px;
  font-weight: normal;

  &:hover {
    background-color: ${colors.blue};
`

export const ButtonLink = styled(Link)<ButtonProps>`
  width: 100%;
  padding: 8px;
  background-color: ${colors.navyBlue};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 8px;
  text-align: center;
  font-weight: normal;

  &:hover {
    background-color: ${colors.blue};
`
