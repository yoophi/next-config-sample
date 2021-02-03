import publicRuntimeConfig from "../common/publicRuntimeConfig";
import serverRuntimeConfig from "../common/serverRuntimeConfig";

export default function Home() {
    return (
        <div>
            <h4>publicRuntimeConfig</h4>
            <pre>{JSON.stringify(publicRuntimeConfig, null, 2)}</pre>
            <h4>serverRuntimeConfig</h4>
            <pre>{JSON.stringify(serverRuntimeConfig, null, 2)}</pre>
            <p><code>curl</code> 등을 이용하여 호출해보면 값이 노출되지만, javascript 실행 후 빈값으로 대체됨. (안전하지 않음)</p>
            <p>전달(render)도 불확실 (기대와 다름)</p>
        </div>
    );
}