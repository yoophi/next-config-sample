import Link from 'next/link'
export default function Home() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <h1>실험 1</h1>
                    <p>
                    <code>serverRuntimeConfig</code>와 <code>publicRuntimeConfig</code>를 분리하여 사용
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <a href="#"><Link href='/test1'>/test1</Link></a>
                    </div>
                    <iframe src="/test1" className="test"></iframe>
                </div>
                <div className="col-md-6">
                    <div>
                        <a href="#"><Link href='/test2'>/test2</Link></a>
                    </div>
                    <iframe src="/test2" className="test"></iframe>
                </div>
                <div className="col-md-6">
                    <div>
                        <a href="#"><Link href='/test3'>/test3</Link></a>
                    </div>
                    <iframe src="/test3" className="test"></iframe>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>실험 2</h1>
                    <p>
                        <code>serverRuntimeConfig</code>와 <code>publicRuntimeConfig</code>를 분리하지 않고 사용
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <a href="#"><Link href='/test5'>/test5</Link></a>
                    </div>
                    <iframe src="/test5" className="test"></iframe>
                </div>
                <div className="col-md-6">
                    <div>
                        <a href="#"><Link href='/test4'>/test4</Link></a>
                    </div>
                    <iframe src="/test4" className="test"></iframe>
                </div>
                <div className="col-md-6">
                    <div>
                        <a href="#"><Link href='/test6'>/test6</Link></a>
                    </div>
                    <iframe src="/test6" className="test"></iframe>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>실험 3</h1>
                    <p>
                        API Call
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <a href="#"><Link href='/test-api-call'>/test-api-call</Link></a>
                    </div>
                    <iframe src="/test-api-call" className="test"></iframe>
                </div>
                <div className="col-md-6">
                    <div>
                        <a href="#"><Link href='/test-api-call2'>/test-api-call2</Link></a>
                    </div>
                    <iframe src="/test-api-call2" className="test"></iframe>
                </div>
            </div>
        </div>
    );
}
