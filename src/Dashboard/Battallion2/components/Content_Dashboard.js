import * as React from 'react';
import { Box, Container, Grid } from '@mui/material'
import { SummaryItem } from './summary-item';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FlagIcon from '@mui/icons-material/Flag';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const stats = [
  {
    content: '3450',
    icon: AccountBalanceIcon,
    label: 'Embassy'
  },
  {
    content: '3456',
    icon: HouseSidingIcon,
    label: 'Consulate'
  },
  {
    content: '3456',
    icon: FlagIcon,
    label: 'High Commission'
  },
  {
    content: '3356',
    icon: MenuBookIcon,
    label: 'Other Diplomats'
  }
];

export default function Content_Dashboard(){
  return (
          <Box
            sx={{
              backgroundColor: 'background.default',
              pb: 3,
              pt: 3
            }}
          >
            <Container maxWidth="lg">
              <Grid
                container
                spacing={1}
              >
                {stats.map((item) => (
                  <Grid
                    item
                    key={item.label}
                    md={4}
                    xs={12}
                  >
                    <SummaryItem
                      content={item.content}
                      icon={item.icon}
                      label={item.label}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
    )
}

