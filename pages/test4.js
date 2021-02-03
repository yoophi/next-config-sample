import config from "../common/config";

export default function Home(props) {
    return (
        <div className='test-container'>
            <h4>publicRuntimeConfig + serverRuntimeConfig</h4>
            <pre>{JSON.stringify(props.config, null, 2)}</pre>
        </div>
    );
}

export const getServerSideProps = async () => {
    return {
        props: {
            config
        },
    };
};
