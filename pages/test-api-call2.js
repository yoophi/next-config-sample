import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Home(props) {
    const [data, setData] = useState({})
    useEffect(async () => {
        const resp = await axios.get('/api/test2')
        setData(resp.data)
    }, [])
    return (
        <div className='test-container'>
            <h4>API Call - <code>/api/test2</code></h4>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

