import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#ecf0f1',
  white2: '#f9fbff',
  black: '#000',
  purple: '#511f8b',
  blue: '#6486e2',
  navyBlue: '#182c61'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    }

  body, button, a {
    font-family: 'Bungee', sans-serif;
  }

  p, label {
    font-family: 'roboto', sans-serif;v
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px auto;
`

export const MainContainer = styled.main`
  padding: 20px 40px;
  height: 80vh;
`
