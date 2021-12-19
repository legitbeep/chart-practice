import { Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Box, Text } from '@chakra-ui/react'

import { filterData, CHART_COLORS } from 'utils';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({datas}:{datas:Datas}) => {
    const {labels,dataValues} = filterData(datas);
    const data = {
        labels,
        datasets: [
          {
            label: '# of Votes',
            data: dataValues,
            backgroundColor: Object.values(CHART_COLORS),
          },
        ],
      };
    return (
      <Box width="100%" padding={4} borderRadius={10} boxShadow="2xl" margin="10px 0px" textAlign="center">
        <Doughnut data={data} />
        <Text as="h2" fontSize="xl" fontWeight="bold" margin="20px 0px">Doughnut Chart</Text>
      </Box>
    )
}

export default DoughnutChart;