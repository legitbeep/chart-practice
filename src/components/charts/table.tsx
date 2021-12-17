import {Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Flex} from '@chakra-ui/react';
import * as Utils from "../../utils/utils";

const DrawCircle = ({data,id}:{data:Data, id:number}) => {
  const colorIndex = id % Object.values(Utils.CHART_COLORS).length;
  const backgroundColor = Object.values(Utils.CHART_COLORS)[colorIndex] as string;
  return (
    <Flex borderRadius="full" backgroundColor={backgroundColor}>
      {data.value}
    </Flex>
  )
}

export const TableChart = ({datas}:{datas:Datas}) => {
  let curData = datas?.data && datas.data[0].keyword;
  let curIndex = 0;
    return (
        <Table variant='simple'>
  <TableCaption>Data Representation</TableCaption>
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
     {
       datas.data.map((d,index) => {
        if (d.keyword === curData){
          curIndex++;
          return (
            <DrawCircle data={d} key={index} id={index} />
          )
        } else {
          curIndex++;
          curData = d.keyword;
        }
      })
     }
   </Tr>
   <Tr>
     {
       datas.data.map((d, index) => {
         if(index >= curIndex){
            if (d.keyword === curData){
              curIndex++;
              return (
                <DrawCircle data={d} />
              )
            } else {
              curIndex++;
              curData = d.keyword;
            }
         }
      })
     }
   </Tr>
   <Tr>
     {
       datas.data.map((d, index) => {
         if(index >= curIndex){
            if (d.keyword === curData){
              curIndex++;
              return (
                <DrawCircle data={d} />
              )
            } else {
              curIndex++;
              curData = d.keyword;
            }
         }
      })
     }
   </Tr>
   <Tr>
     {
       datas.data.map((d, index) => {
         if(index >= curIndex){
            if (d.keyword === curData){
              curIndex++;
              return (
                <DrawCircle data={d} />
              )
            } else {
              curIndex++;
              curData = d.keyword;
            }
         }
      })
     }
   </Tr>
   <Tr>
     {
       datas.data.map((d, index) => {
         if(index >= curIndex){
            if (d.keyword === curData){
              curIndex++;
              return (
                <DrawCircle data={d} />
              )
            } else {
              curIndex++;
              curData = d.keyword;
            }
         }
      })
     }
   </Tr>
 </Tbody>)}
</Table>
    )
}