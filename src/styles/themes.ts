import { extendTheme, ThemeOverride } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    scissors: {
      100: "hsl(40, 84%, 53%)",
      300: "hsl(39, 89%, 44%)"
    },
    paper: {
      100: "hsl(230, 89%, 65%)",
      300: "hsl(230, 89%, 57%)",
    },
    rock: {
      100: "hsl(349, 70%, 56%)",
      300: "hsl(349, 71%, 47%)",
    },
    lizard: {
      100: "hsl(261, 72%, 63%)",
      300: "hsl(261, 73%, 55%)"
    },
    cyan: {
      100: "hsl(189, 58%, 57%)",
      300: "hsl(189, 59%, 48%)"
    }
  },
  textStyles: {
    darkText: {
      color: "hsl(229, 25%, 31%)"
    },
    scoreText: {
      color: "hsl(229, 64%, 46%)"
    }
  },
  fonts: {
    body:`'Barlow Semi Condensed', sans-serif`,
    heading:`'Barlow Semi Condensed', sans-serif`,
  },
  styles: {
    global: {
      color: "#fff"
    }
  }
} as ThemeOverride)