const path = require ('path')

module.exports = {
    entry: "/js/fail.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}