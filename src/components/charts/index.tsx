import { useEffect, useState } from 'react';
import {TableChart} from './table';

export default function Charts() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<Datas>({});
 
    const fetchData = async() => {
        fetch("https://card-admin.dev.intuaition.net/chart/data")
            .then(data => data.json())
            .then(data => setData(data))
    }

    useEffect(() => {
        setLoading(true);
        try {
            fetchData();
            setError(false);
        } catch(err) {
            setError(true);
        }
        setLoading(false);
    },[])
    
    return loading ? (
        <h1>Loading...</h1>
    ) : error ? (
        <h1>Error!</h1>
    ) : (
        <TableChart data={data} />
    )
}