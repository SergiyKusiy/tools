module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: ["babel-loader"],
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", 'sass-loader'],
      },
      {
        test: /.(jpg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8,
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
};
