const path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(path.resolve(__dirname, '../'));
    
    /*config.module.rules.push({
      test: /\.sass$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });*/

    config.module.rules.push({
      test: /\.sass$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: "[name]_[local]__[hash:base64:5]",
          }
        }
      }, 
      
      {
        loader: "postcss-loader",
        options: {
        
          postcssOptions: {
            plugins: [
              "tailwindcss",
              "autoprefixer"
            ]
          }
        }
      },
      'sass-loader',
    ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}