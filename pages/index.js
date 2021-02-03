export default function Home() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <h3>React Component 내에서 처리</h3>
                    <iframe src="/test1" style={{height: '100vh'}}></iframe>
                </div>
                <div className="col-md-4">
                    <h3>`getServerSideProps()` 내에서 동적 `import`로 처리</h3>
                    <iframe src="/test2" style={{height: '100vh'}}></iframe>
                </div>
                <div className="col-md-4">
                    <h3>`getServerSideProps()` 내에서 일반적인 `import`로 처리</h3>
                    <iframe src="/test3" style={{height: '100vh'}}></iframe>
                </div>
            </div>
        </div>
    );
}
