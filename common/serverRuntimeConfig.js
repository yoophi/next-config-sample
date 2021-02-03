import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export default {
  mySecret: serverRuntimeConfig.mySecret,
  secondSecret: serverRuntimeConfig.secondSecret,
};
