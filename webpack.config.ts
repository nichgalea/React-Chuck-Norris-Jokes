import { Configuration } from "webpack";
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { TsConfigPathsPlugin } from "awesome-typescript-loader";

const basePath = resolve(__dirname, "src");

const config: Configuration = {
  target: "web",
  entry: `${basePath}/index.tsx`,
  mode: "development",
  resolve: { plugins: [new TsConfigPathsPlugin()] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: `${__dirname}/favicon.png`,
      template: `${basePath}/index.html`
    })
  ]
};

export default config;
