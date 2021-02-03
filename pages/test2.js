import publicRuntimeConfig from "../common/publicRuntimeConfig";

export default function Home(props) {
    return (
        <div>
            <h4>publicRuntimeConfig</h4>
            <pre>{JSON.stringify(publicRuntimeConfig, null, 2)}</pre>
            <h4>serverRuntimeConfig</h4>
            <pre>{JSON.stringify(props.serverRuntimeConfig, null, 2)}</pre>
            <p>값 전달에 문제없음. (논리적으로 문제없는 방식일 것으로 추정)</p>
        </div>
    );
}

export const getServerSideProps = async () => {
    const serverRuntimeConfig = await import("../common/serverRuntimeConfig")

    return {
        props: {
            serverRuntimeConfig: serverRuntimeConfig.default
        },
    };
};
