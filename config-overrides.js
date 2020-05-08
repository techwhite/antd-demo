const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override (
    fixBabelImports('antd', {
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        getLessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#1DA57A'
            },
        },
    }),
);