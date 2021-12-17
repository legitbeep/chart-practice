import {Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot} from '@chakra-ui/react';

export const TableChart = ({data}:{data:Datas}) => {
    return (
        <Table variant='simple'>
  <TableCaption>Imperial to metric conversion factors</TableCaption>
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
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td isNumeric>25.4</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td isNumeric>30.48</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td isNumeric>0.91444</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>
    )
}