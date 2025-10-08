import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const ContactContainer = styled.section`
  display: block;

  .container {
    background-color: ${colors.purple};
    color: ${colors.white};
    padding: 16px;
  }

  .contact-methods {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    padding: 32px;
  }

  .social-links {
    margin-bottom: 128px;

    ul {
      display: flex;
      gap: 8px;
    }
  }

  .social-links,
  .data {
    h3 {
      margin-bottom: 8px;
    }
  }

  img {
    height: 32px;
  }
`
