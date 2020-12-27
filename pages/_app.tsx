// import { wrapper } from '../store'
import {FunctionComponent, ComponentProps} from "react"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import DefaultLayout from "../layouts/DefaultLayout"
import { NextComponentType } from 'next'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const theme = {
  colors: {
    primary: '#0070f3',
  },
}
type Props = {
  Component: NextComponentType<FunctionComponent>,
  pageProps: ComponentProps<any>
}
const App = ({ Component, pageProps}: Props): JSX.Element => {
  const Layout = Component.Layout || DefaultLayout
  return (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
)}
export default App

