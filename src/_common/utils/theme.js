import { createTheme } from "@material-ui/core/styles";
// import image from "../../assets/bg1.jpg";
import modalBackground from "../../assets/modal.png";

const textColor = "#727272";
const blue = "#036998";
const lightBlue = "#05C7F2";
// const blue = "#05C7F2";

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },

    // MuiButton: {
    //   root: {
    //     // background: "red !important",
    //     Mui: {
    //       disabled: {
    //         background: "red !important",
    //       },
    //     },
    //   },
    // },

    MuiInputBase: {
      root: {
        // height: 50,
        background: "white",
        // border: "1px solid rgba(5, 199, 242, 0.5)",
      },
    },

    MuiStepper: {
      // Nome da regra
      root: {
        // Algum CSS
        background: "transparent",
        paddingTop: 0,
      },
    },
  },

  typography: {
    fontFamily: "Nunito",
    fontSize: 16,
    fontWeight: "normal",
    textDecoration: "none",
    color: textColor,
  },

  animations: {
    translatePageContainer: {
      animation: `$translate .6s ease-out forwards`,
      keyframeName: "@keyframes translate",
      keyframeValue: {
        to: {
          opacity: 1,
          paddingLeft: "4vw",
        },
      },
    },
  },

  palette: {
    // status: {
    //   red: "#EC4A2C",
    //   yellow: "#FFA922",
    //   green: "#0F9D58",
    //   gray: "#5E5E5E",
    //   blue: "#41ADCF",
    // },
    primary: {
      light: "#A1C3ED",
      main: blue,
      dark: "#286090",
      contrastText: "#FFFFFF",
    },

    // gradient: `linear-gradient(151.49deg, #032557 2.75%, #05C7F2 130.9%)`,
    // gradientMenu: {},

    gradient: {
      image: `url(${modalBackground})`,
      default: `linear-gradient(151.49deg, #032557 2.75%, #05C7F2 130.9%)`,
    },

    yellow: "#FFA900",
    white: "#FFF",
    red: "#FF5251",
    blue: blue,
    lightBlue: lightBlue,
    main: blue,

    purple: "#9746FF",
    green: "#69BF41",
    errorMessage: "#f44336",
    secondary: {
      light: "#F5F5F5",
      main: blue,
      dark: "#9E9E9E",
      contrastText: "#FFFFFF",
    },
    // primary1Color: "#3d69a0",
    // primary2Color: "#394554",
    // primary3Color: "#a1c3ed",
    // accent1Color: "#f5845e",
    // accent2Color: grey100,
    // accent3Color: grey500,
    // textColor: darkBlack,
    // clockCircleColor: fade(darkBlack, 0.07),
    // secondaryTextColor: fade(darkBlack, 0.54),
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.38),
    // pickerHeaderColor: white,
    // shadowColor: fullBlack,
    // backgroundRowHover: "#f7f7f7",
    text: {
      primary: textColor,
      // darkPrimaryText: darkBlack,
      // darkSecondaryText: fade(darkBlack, 0.54),
      // darkHintText: fade(darkBlack, 0.38),
      // darkDividers: fade(darkBlack, 0.12),
      // lightPrimaryText: white,
      // lightSecondaryText: fade(white, 0.7),
      // lightHintText: fade(white, 0.5),
      // lightDividers: fade(white, 0.12),
    },
    icons: {
      // darkFocusedIcon: fade(darkBlack, 0.87),
      // darkActiveIcon: fade(darkBlack, 0.54),
      // darkInactiveIcon: fade(darkBlack, 0.38),
      // lightFocusedIcon: white,
      // lightActiveIcon: fade(white, 0.7),
      // lightInactiveIcon: fade(white, 0.5),
    },
    // background: "#F7F7F7",
    background: {
      paper: "#fff",
      default: "#F7F7F7",
    },
    // background: "#E5E5E5", F7F7F7
  },

  space: {
    globalPadding: "0px 30px 0px 30px",
    unit: 8,
    padding: "0px 30px 0px 30px",
    margin: 8,
  },

  MuiButton: {
    // Name of the rule
    text: {
      // Some CSS
      // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
  },
});
