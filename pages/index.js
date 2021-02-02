import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

console.log(process.env.MY_STEP);

export default function Home(props) {
  const config = {
    serverRuntimeConfig: {
      mySecret: serverRuntimeConfig.mySecret,
      secondSecret: serverRuntimeConfig.secondSecret,
    },
    publicRuntimeConfig: {
      staticFolder: publicRuntimeConfig.staticFolder,
    },
  };

  return (
    <div>
      <pre>props: {JSON.stringify(props, null, 2)}</pre>
      <pre>publicConfig: {JSON.stringify(config, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      getServerSideProps: {
        serverRuntimeConfig: {
          mySecret: serverRuntimeConfig.mySecret,
          secondSecret: serverRuntimeConfig.secondSecret,
        },
        publicRuntimeConfig: {
          staticFolder: publicRuntimeConfig.staticFolder,
        },
      },
    },
  };
};
