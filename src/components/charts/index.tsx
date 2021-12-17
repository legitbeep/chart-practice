import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import {TableChart} from './Table';

export default function Charts() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<Datas>({});
 
    const fetchData = async() => {
        setLoading(true);
        fetch("https://card-admin.dev.intuaition.net/chart/data")
            .then(data => data.json())
            .then(data => setData(data))
            .catch(err => {
                setError(true);
                useToast({
                    title: 'Error Occured.',
                    description: "Unable to fetch data from server.",
                    status: 'error',
                    duration: 10000,
                    isClosable: true,
                  })
            })
        setLoading(false);
    }

    useEffect(() => {
       fetchData();
    },[])
    
    return loading ? (
        <h1>Loading...</h1>
    ) : error ? (
        <h1>Error!</h1>
    ) : (
        <TableChart datas={data} />
    )
}