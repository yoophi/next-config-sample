import config from "../common/config";

export default function Home(props) {
    return (
        <div className='test-container'>
            <h4>publicRuntimeConfig + serverRuntimeConfig</h4>
            <pre>{JSON.stringify(config, null, 2)}</pre>
        </div>
    );
}

