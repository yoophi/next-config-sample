import publicRuntimeConfig from "../common/publicRuntimeConfig";
import serverRuntimeConfig from "../common/serverRuntimeConfig";

export default function Home(props) {
    return (
        <div>
            <h4>publicRuntimeConfig</h4>
            <pre>{JSON.stringify(publicRuntimeConfig, null, 2)}</pre>
            <h4>serverRuntimeConfig</h4>
            <pre>{JSON.stringify(props.serverRuntimeConfig, null, 2)}</pre>
            <p>의외로 <code>/test2</code>와 같은 결과. <code>import</code> 구문의 위치는 상관이 없나?</p>
        </div>
    );
}

export const getServerSideProps = async () => {
    return {
        props: {
            serverRuntimeConfig: serverRuntimeConfig
        },
    };
};
