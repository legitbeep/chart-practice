import {Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Flex} from '@chakra-ui/react';
import {CHART_COLORS, getRadius} from "../../utils";

const DrawCircle = ({data,id}:{data:Data, id:number}) => {
  const colorIndex = id % Object.values(CHART_COLORS).length;
  const backgroundColor = Object.values(CHART_COLORS)[colorIndex] as string;
  const radius = getRadius(data.value,10000);
  return (
    <Flex borderRadius="full" margin="0 auto" backgroundColor={backgroundColor} height={Math.max(radius*15,50)+ "px"} width={Math.max(radius*15,50)+ "px"} alignItems="center" justifyContent="center">
      {data.value >= 1000 ? Math.floor(data.value / 1000) + "K" : data.value}
    </Flex>
  )
}

export const TableChart = ({datas}:{datas:Datas}) => {
  console.log(datas.data)
    return (
        <Table variant='simple'>
  <TableCaption>Data Representation in Table format</TableCaption>
  <Thead>
    <Tr>
      <Th>Keywords</Th>
      <Th>Facebook</Th>
      <Th>Twitter</Th>
      <Th>Youtube</Th>
      <Th>Instagram</Th>
      <Th>Reddit</Th>
      <Th>Others</Th>
    </Tr>
  </Thead>
 {
   datas.data && 
   (<Tbody>
        <Tr>
          <Td >{datas.data && datas.data[0].keyword}</Td>
        {datas.data && datas.data.map((d,index) => {
            if(d.keyword === "keyword1"){
              return <Td key={index} ><DrawCircle id={index}  data={d} key={index} /></Td>
            }
          })}
        </Tr>
        <Tr>
          <Td >{datas.data && datas.data[1].keyword}</Td>
        {datas.data && datas.data.map((d,index) => {
            if(d.keyword === "keyword2"){
              return <Td key={index} ><DrawCircle id={index}  data={d} key={index} /></Td>
            }
          })}
</Tr>
        <Tr>
          <Td >{datas.data && datas.data[2].keyword}</Td>
        {datas.data && datas.data.map((d,index) => {
            if(d.keyword === "keyword3"){
              return <Td key={index} ><DrawCircle id={index}  data={d} key={index} /></Td>
            }
          })}
</Tr>
        <Tr>
          <Td >{datas.data && datas.data[3].keyword}</Td>
        {datas.data && datas.data.map((d,index) => {
            if(d.keyword === "keyword4"){
              return <Td key={index} ><DrawCircle id={index}  data={d} key={index} /></Td>
            }
          })}
</Tr>
        <Tr>
          <Td >{datas.data && datas.data[4].keyword}</Td>
        {datas.data && datas.data.map((d,index) => {
            if(d.keyword === "keyword5"){
              return <Td key={index} ><DrawCircle id={index}  data={d} key={index} /></Td>
            }
          })}
</Tr>
</Tbody>)}
</Table>
    )
}

