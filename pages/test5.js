export default function Home(props) {
    return (
        <div className='test-container'>
            <h3>하나의 `config.js`를 동적 `import`하여 사용</h3>
            <h4>publicRuntimeConfig + serverRuntimeConfig</h4>
            <pre>{JSON.stringify(props.config, null, 2)}</pre>
        </div>
    );
}

export const getServerSideProps = async () => {
    const config = await import("../common/config")

    return {
        props: {
            config: config.default
        },
    };
};
