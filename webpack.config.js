const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";
  return {
    entry: {
      demo: {
        filename: "demo.js",
        import: "./src/demo.tsx"
      },
      index: {
        import: "./src/index.tsx",
        filename: "index.js"
      },
      jquery: {
        import: "./src/jquery.tsx",
        filename: "jQueryRoomGallery.js",
        library: {
          type: "umd",
          name: "RoomGallery",
          export: "default"
        }
      },
      RoomGallery: {
        import: "./src/RoomGallery.tsx",
        filename: "RoomGallery.js",
        library: {
          type: "umd",
          name: "RoomGallery",
          export: "default"
        }
      }
    },
    output: {
      path: path.join(__dirname, "dist"),
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.(png|jp(e*)g|gif)$/,
          type: "asset/resource",
          generator: {
            filename : "img/[name][ext][query]",
          }
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        },
        {
          test: /\.([cm]?ts|tsx)$/,
          use: ["ts-loader"]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]",
                },
                sourceMap: isDevelopment,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".scss"],
    },
    externals: {
      "jQuery": "jQuery"
    },
    target: "web",
    node: {
      __dirname: false,
    },
    stats: {
      warnings: false,
    },
    devServer: {
      static: path.join(__dirname, "public"),
      compress: true,
      port: 3011,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "RoomGallery.css"
      })
    ]
  }
};
