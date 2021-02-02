import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const config = {
  serverRuntimeConfig: {
    mySecret: serverRuntimeConfig.mySecret,
    secondSecret: serverRuntimeConfig.secondSecret,
  },
  publicRuntimeConfig: {
    staticFolder: publicRuntimeConfig.staticFolder,
  },
};

export default (req, res) => {
  res.status(200).json(config);
};
