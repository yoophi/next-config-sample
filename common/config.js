import getConfig from "next/config";

const { publicRuntimeConfig , serverRuntimeConfig } = getConfig();

export default {
  mySecret: serverRuntimeConfig.mySecret,
  secondSecret: serverRuntimeConfig.secondSecret,
  staticFolder: publicRuntimeConfig.staticFolder,
};
