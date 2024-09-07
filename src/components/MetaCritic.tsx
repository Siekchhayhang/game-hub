import { Badge } from "@chakra-ui/react"


interface Props {
    score: number;
}
const MetaCritic = ({score}: Props) => {
  return (
    <Badge fontSize={16} paddingX={2} borderRadius={5} colorScheme={score> 75 ? "green" : score> 60 ? "yellow" : "red"}>{score}</Badge>
  )
}

export default MetaCritic