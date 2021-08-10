const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "primary-color": "#222",
                            "secondary-color": "#278232",
                            "menu-bg": "#222",
                            "link-color": "#278232",
                            "menu-highlight-color": "#C83C41",
                            "dropdown-selected-color": "#d0d0d0",
                            "menu-item-active-bg": "#cacaca"
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};