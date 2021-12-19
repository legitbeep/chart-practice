import { CircularProgress, Box,Text,Flex, Divider } from "@chakra-ui/react";
import { filterData, CHART_COLORS } from "utils";

const ProgressChart = ({datas}:{datas:Datas}) => {
    const {labels, dataValues} = filterData(datas);
    let totalValue = 0;
    dataValues?.forEach((d) => totalValue += d);
    if(!totalValue) totalValue = 1;
    return (
        <Box width="100%" boxShadow="2xl" padding={4} borderRadius={10}>
            <Text as="h2" fontSize="xl" fontWeight="bold">Language Volume</Text>
            <Divider margin="10px 0px" />
            {labels && dataValues && labels.map((label,index) => (
                <Flex justifyContent="space-between" key={label+index} alignItems="center" margin="15px 4px">
                    <Text>{label}</Text>
                    <Text>{ (index+5)*10+"%"} <CircularProgress value={(index+5)*10} color={Object.values(CHART_COLORS)[index]} /></Text>
                </Flex>
            ))}
        </Box>
    )
}
export default ProgressChart;