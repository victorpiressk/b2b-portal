import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const DemoContainer = styled.section`
  .container {
    padding: 80px 0;
    border-top: 1px solid ${colors.white};
  }
`

export const IntroContainer = styled.div`
  padding: 40px 64px;

  p {
    margin-bottom: 16px;
    line-height: 22px;
  }
`

export const DemoContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 0 64px;

  p {
    text-align: center;
    line-height: 22px;
  }
`
