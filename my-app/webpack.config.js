module.exports = {
    // ...other configuration
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // Ensure all resource paths are strings
              plugins: [
                // Example plugin usage
                ["plugin-name", { "resources": ["resource1", "resource2"] }]
              ]
            }
          }
        }
      ]
    }
  };
  