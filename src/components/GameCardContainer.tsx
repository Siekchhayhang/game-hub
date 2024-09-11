import { Box } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode
}

const GameCardContainer = ({children}: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden"> 
    {children}
    </Box>
  )
}

export default GameCardContainer