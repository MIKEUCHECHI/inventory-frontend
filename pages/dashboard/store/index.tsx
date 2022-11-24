import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import DrawerComponent from '../../../components/DrawerComponent';
import DashboardLayout from '../../../layout/dashboard';
export default function Chain() {
  const data: any = [1];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DashboardLayout>
      <div className="relative px-4 w-full min-h-[1px] leading-5 text-left text-gray-500 md:flex-shrink-0 md:flex-grow-0 box-border">
        <div className="flex relative shadow-[rgba(0,_0,_0,_0.05)_0px_0px_0px_1px] flex-col mb-8 min-w-0 text-left break-words bg-clip-border bg-white rounded-sm box-border">
          <div className="flex items-center rounded-[3px_3px_0px_0px] min-h-[70px] self-center py-4 px-6 mb-0 w-full leading-7 bg-transparent border-b border-solid box-border border-stone-50 justify-between flex-row">
            <h4 className="pr-2 my-0  font-bold box-border text-xl">Store</h4>
            <div className="flex flex-row">
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    onChange={(event: any) => {
                      console.log(event.target.value || undefined);
                    }}
                    placeholder="Search"
                    className="bg-white pl-6 border-gray-300 rounded-md border-2"
                  />
                </InputGroup>
              </FormControl>

              <button
                onClick={() => {}}
                className="px-3 ml-4  bg-primary w-full hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg disabled:cursor-not-allowed disabled:bg-slate-500"
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex-auto py-5 px-6 text-gray-500 bg-transparent box-border">
            <div className="block overflow-x-auto w-full break-words box-border">
              <div className="mt-10">
                {data && (
                  <>
                    <TableContainer>
                      <Table variant="striped">
                        <Thead>
                          <Tr>
                            <Th>S/N</Th>
                            <Th>TItle1</Th>
                            <Th>TItle2</Th>
                            <Th>Title3</Th>
                            <Th>Title4</Th>
                            <Th></Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {data.map((order: any, index: number) => (
                            <Tr key={`order-${order.id}`}>
                              <Td>{index + 1}</Td>
                              <Td>{'Hello'}</Td>
                              <Td>{'Hello'}</Td>
                              <Td>{'Helllo'}</Td>
                              <Td>{'Hello'}</Td>
                              <Td>
                                <button
                                  className="px-3 py-2 ml-4  bg-primary w-full hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg disabled:cursor-not-allowed disabled:bg-slate-500"
                                  onClick={() => {
                                    onOpen();
                                  }}
                                >
                                  View Details
                                </button>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DrawerComponent
        header={
          <Tabs size="md" variant="enclosed-colored">
            <TabList>
              <Tab>Stroe Info</Tab>
              <Tab>Users</Tab>
              <Tab>Inventory</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        }
        isOpen={isOpen}
        onClose={onClose}
      >
        <></>
      </DrawerComponent>
    </DashboardLayout>
  );
}
