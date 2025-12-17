import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee ',
  preta: '#111',
  cinza: '#333',
  cizaClaro: '#A3A3A3',
  verde: '#10AC84'
}

export const breakpoint = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto,sans-serif;
    list-style: none;
  }

  body{
    background-color: ${cores.preta};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .container{
    max-width: ${breakpoint.desktop};
    width: 100%;
    margin: 0 auto;

    @media(max-width: ${breakpoint.desktop}){
      max-width: 80%;
    }
  }
`
