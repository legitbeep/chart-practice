import { useEffect, useState } from 'react';
import { useToast, Flex } from '@chakra-ui/react';

import {TableChart} from './Table';
import Doughnut from './DoughnutChart';
import ProgressChart from './ProgressChart';
import LineChart from './LineChart';

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
    ) : data && (
            <Flex gridGap={4} flexDir="column" >
                <TableChart datas={data} />
                <Flex flexWrap="wrap" justifyContent="space-between" >
                    <Flex width="400px" >
                    <Doughnut datas={data} />
                    </Flex>
                    <Flex width="400px" >
                    <ProgressChart datas={data} />
                    </Flex>
                </Flex>
                    <LineChart datas={data} />
            </Flex>
        )
}