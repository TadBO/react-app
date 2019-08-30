const AUTOPREFIXER_BROWSERS = [
    "> 1%",
    "last 2 versions",
    "ie >= 9",
]

module.exports = ({ env }) => ({
    plugins: {
        autoprefixer: {
            browsers: AUTOPREFIXER_BROWSERS,
        },
    },
});