const COLORS = {
    primary: "aqua",
    secondary: "yellow",
    accent: "#dcdcdc",
}

const SIZES = {
    padding: 20,
    borderRadius: 10,
    textBoxRadius: 24,
    h1: 24,
    h2: 20,
}

const FONTS = {

    h1_semiBold: {fontSize: SIZES.h1, fontFamily:"ShantellSans_SemiBold"},
    h2_semiBold: {fontSize: SIZES.h1, fontFamily:"ShantellSans_SemiBold"},

}

const SHADOW = {
    elevation: 7,
    shadowColor: COLORS.secondary,
    shadowOffset: {width: 3, height: 10},
    shadowRadius: 10,
}

export {COLORS, SIZES, FONTS, SHADOW}