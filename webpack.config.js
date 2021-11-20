// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './src/App.jsx',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  // match the output 'publicPath'
    // publicPath: '/',
    // fallback to root for other urls
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    static: {
      publicPath: '/build/',
    },
    host: 'localhost',
    port: 8080,
    // match the output path
    // contentBase: path.resolve(__dirname, 'dist'),
    // enable HMR on the devServer
    hot: true,
    
    historyApiFallback: true,

    headers: { 'Access-Control-Allow-Origin': '*' },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
        '/api': 'http://localhost:3000/',
      },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
               {
                 // Using file-loader for these files
                 loader: "file-loader",
  
                 // In options we can set different things like format
                 // and directory to save
                 options: {
                   outputPath: 'images'
                 }
               }
             ]
      }  
  ],
}, 
  resolve: {
    extensions: ['.ts', '.jsx', '.js', '.svg', '.png']
  },
  
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
