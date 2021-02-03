import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default {
  staticFolder: publicRuntimeConfig.staticFolder,
};
