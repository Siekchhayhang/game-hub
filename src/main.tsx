import { render } from 'preact'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { App } from './app.tsx'
import theme from './theme.ts'
import './index.css'

render(
    <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </ChakraProvider>
    , document.getElementById('app')!)
