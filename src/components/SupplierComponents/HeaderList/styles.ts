import styled from 'styled-components'
import { colors } from '../../../globalStyles'

export const HeadeContainer = styled.div`
  border-bottom: 1px solid ${colors.white};
  h3,
  h4 {
    font-weight: normal;
  }
`
export const HeaderContent = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
`

export const Label = styled.label`
  padding: 6px;
  background-color: ${colors.white2};
  border: 1px solid ${colors.white};
  border-radius: 8px;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  margin-left: 8px;
  background-color: ${colors.white2};
  border: none;
  font-size: 12px;

  &:focus {
    outline: none;
  }
`

export const ListTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 16px;
  text-align: center;
`
