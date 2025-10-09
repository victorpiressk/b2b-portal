import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const FooterContainer = styled.footer`
  padding: 16px 0;
  background-color: ${colors.purple};
  color: ${colors.white};

  .social-links,
  .data {
    margin-bottom: 32px;

    h3 {
      margin-bottom: 8px;
    }
  }

  ul {
    display: flex;
    gap: 8px;
  }

  img {
    height: 32px;
  }
`
