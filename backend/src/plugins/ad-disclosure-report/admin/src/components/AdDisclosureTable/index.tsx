import React from 'react';
import type { ReactElement } from 'react';
import {
  Avatar,
  BaseCheckbox,
  Box,
  Flex,
  IconButton,
  Table,
  Tbody,
  Td,
  TFooter,
  Th,
  Thead,
  Tr,
  Typography,
  VisuallyHidden,
} from '@strapi/design-system';
import { Trash, Pencil, Plus } from '@strapi/icons';

const ROW_COUNT = 6;
const COL_COUNT = 10;
const entries = [
  {
    id: 1,
    cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
    description: 'Chez Léon is a human sized Parisian',
    category: 'French cuisine',
    contact: 'Leon Lafrite'
  },
  {
    id: 2,
    cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
    description: 'Chez Léon is a human sized Parisian',
    category: 'French cuisine',
    contact: 'Leon Lafrite'
  },
  {
    id: 3,
    cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
    description: 'Chez Léon is a human sized Parisian',
    category: 'French cuisine',
    contact: 'Leon Lafrite'
  },
  {
    id: 4,
    cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
    description: 'Chez Léon is a human sized Parisian',
    category: 'French cuisine',
    contact: 'Leon Lafrite'
  },
  {
    id: 5,
    cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
    description: 'Chez Léon is a human sized Parisian',
    category: 'French cuisine',
    contact: 'Leon Lafrite'
  },
  {
    id: 6,
    cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
    description: 'Chez Léon is a human sized Parisian',
    category: 'French cuisine',
    contact: 'Leon Lafrite'
  }
];

const AdDisclosureTable = (): ReactElement => {
  return (
    <Box padding={8} background="neutral100">
      <Table colCount={COL_COUNT} rowCount={ROW_COUNT} footer={<TFooter icon={<Plus />}>Add another field to this collection type</TFooter>}>
        <Thead>
          <Tr>
            <Th>
              <BaseCheckbox aria-label="Select all entries" />
            </Th>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Cover</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Description</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Categories</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Contact</Typography>
            </Th>
            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {entries.map(entry => <Tr key={entry.id}>
              <Td>
                <BaseCheckbox aria-label={`Select ${entry.contact}`} />
              </Td>
              <Td>
                <Typography textColor="neutral800">{entry.id}</Typography>
              </Td>
              <Td>
                <Avatar src={entry.cover} alt={entry.contact} />
              </Td>
              <Td>
                <Typography textColor="neutral800">{entry.description}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">{entry.category}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">{entry.contact}</Typography>
              </Td>
              <Td>
                <Flex>
                  <a href="https://www.google.com" target="_blank" rel="noreferrer">
                    G
                  </a>
                  <IconButton onClick={() => console.log('edit')} label="Edit" noBorder icon={<Pencil />} />
                  <Box paddingLeft={1}>
                    <IconButton onClick={() => console.log('delete')} label="Delete" noBorder icon={<Trash />} />
                  </Box>
                </Flex>
              </Td>
            </Tr>)}
        </Tbody>
      </Table>
    </Box>
  )
}

export default AdDisclosureTable;
