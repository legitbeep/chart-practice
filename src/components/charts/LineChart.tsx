import {Box, Text} from "@chakra-ui/react"

import { Line } from "react-chartjs-2";
import { Chart as ChartJS,CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

import { filterData, CHART_COLORS } from "utils";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = ({datas}:{datas:Datas}) => {
    const {labels,values,dataValues} = filterData(datas);
    console.log(values)
    const datasets = ( values && labels) ? labels.map((label,index) => {
        return {
            label,
            data: values[label] || undefined,
            borderColor: Object.values(CHART_COLORS)[index],
            backgroundColor: Object.values(CHART_COLORS)[index],
            cubicInterpolationMode: 'monotone',
            tension: 0.4
        }
    }) : []
    const data = {
        labels,
        datasets
      };
      return (
          <Box width="100%" overflowY="auto" boxShadow="2xl" margin="20px 0px" padding={4} textAlign="center">
          <Line data={data} />
          <Text as="h2" fontSize="lg" fontWeight="bold">Line Graph</Text>
          </Box>
      )
}

export default LineChart;