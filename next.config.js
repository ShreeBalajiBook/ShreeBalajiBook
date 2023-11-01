/** @type {import('next').NextConfig} */


module.exports = {
  webpack: (config, { isServer }) => {
    // Add the mp4 file loader
    config.module.rules.push({
      test: /\.(mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/files",
            outputPath: "static/files",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};
