import { ColorModeButton } from "@/components/color-mode"
import {
  Box,
  ClientOnly,
  Skeleton,
} from "@chakra-ui/react"

export default function Page() {
  return (
    <Box pos="absolute" top="4" right="4">
      <ColorModeButton />
    </Box>
  )
}