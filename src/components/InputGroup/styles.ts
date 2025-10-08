import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const InputGroupContainer = styled.div`
  margin: 8px 0;

  label {
    margin-bottom: 4px;
    color: ${colors.white};
  }

  input,
  select,
  textarea {
    width: 100%;
    margin-bottom: 8px;
    padding: 8px;
    border: 1px solid ${colors.navyBlue};
    border-radius: 4px;

    &:focus {
      outline-color: ${colors.blue};
    }
  }

  textarea {
    resize: none;
    height: 180px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      width: 5%;
    }
  }

  &.error input,
  &.error select,
  &.error textarea {
    border-color: red;
  }
`
