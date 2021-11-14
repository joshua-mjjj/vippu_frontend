import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Chip,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  ToggleButton,
} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Scrollbar } from './scrollbar';

const statusVariants = [
  {
    label: 'Active',
    value: 'active'
  },
  {
    label: 'Absent (AWOL)',
    value: 'absent'
  },
  {
    label: 'Transfered',
    value: 'transfered'
  },
  {
    label: 'Sick',
    value: 'sick'
  },
  {
    label: 'Dead',
    value: 'dead'
  },
  {
    label: 'Suspended',
    value: 'suspended'
  },
  {
    label: 'Dismissed',
    value: 'dismissed'
  },
  {
    label: 'In court',
    value: 'in_court'
  },
  {
    label: 'Deserted',
    value: 'deserted'
  },
  {
    label: 'On course',
    value: 'on_course'
  },
  {
    label: 'On mission',
    value: 'on_mission'
  }
];

const titleVariants = [
  {
    label: 'Commandant',
    value: 'commandant'
  },
  {
    label: 'Deputy commandant',
    value: 'deputy_commandant'
  },
  {
    label: 'Staff officier',
    value: 'staff_officer'
  },
  {
    label: 'Head of operations',
    value: 'head_of_operations'
  },
  {
    label: 'Head of armoury',
    value: 'head_of_armoury'
  },
  {
    label: 'Supervisor',
    value: 'supervisor'
  },
  {
    label: 'In charge',
    value: 'in_Charge'
  },
  {
    label: '2nd in charge',
    value: '2nd_in_charge'
  },
  {
    label: 'Driver',
    value: 'driver'
  }
];

const departmentVariants = [
  {
    label: 'Embassy',
    value: 'embassy'
  },
  {
    label: 'Consolate',
    value: 'consolate'
  },
  {
    label: 'High commission',
    value: 'high_commission'
  },
  {
    label: 'Other diplomats',
    value: 'other_diplomats'
  },
  {
    label: 'Administration',
    value: 'administration'
  }
];

export const OrdersTable = (props) => {
  const { data } = props;

  const viewDetail = (id) => {
    // console.log(id)
    props.send_detail_id(id)
  }

  return (
    <div>
      <Scrollbar>
        <Table sx={{ minWidth: 1000 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <span style={{ 
                  'fontWeight': '800',
                  'fontFamily': 'Dosis',
                  'fontSize': '18px',
                }}> First name </span>
              </TableCell>
              <TableCell>
              <span style={{ 
                  'fontWeight': '800',
                  'fontFamily': 'Dosis',
                  'fontSize': '18px',
                }}> Last name </span>
              </TableCell>
              <TableCell>
               <span style={{ 
                  'fontWeight': '800',
                  'fontFamily': 'Dosis',
                  'fontSize': '18px',
                }}> Title </span>
              </TableCell>
              <TableCell>
               <span style={{ 
                  'fontWeight': '800',
                  'fontFamily': 'Dosis',
                  'fontSize': '18px',
                }}> Rank </span>
              </TableCell>
              <TableCell>
               <span style={{ 
                  'fontWeight': '800',
                  'fontFamily': 'Dosis',
                  'fontSize': '18px',
                }}> Department </span>
              </TableCell>
              <TableCell>
               <span style={{ 
                  'fontWeight': '800',
                  'fontFamily': 'Dosis',
                  'fontSize': '18px',
                }}> File number </span>
              </TableCell>
              <TableCell>
               <span style={{ 
                  'fontWeight': '800',
                  'fontFamily': 'Dosis',
                  'fontSize': '18px',
                }}> Status </span>
              </TableCell>
              <TableCell>
               <span style={{ 
                  'fontWeight': '800',
                  'fontFamily': 'Dosis',
                  'fontSize': '18px',
                }}>View</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((employee) => {
              const statusVariant = statusVariants.find(
                (variant) => variant.value === employee.status
              );

              const titleVariant = titleVariants.find(
                (variant) => variant.value === employee.title
              );

              const departmentVariant = departmentVariants.find(
                (variant) => variant.value === employee.department
              );

              return (
                <TableRow key={employee.id}>
                  <TableCell>
                    <Link
                      color="inherit"
                      component={RouterLink}
                      to="#"
                      underline="none"
                      variant="subtitle2">
                        <Typography
                            color="inherit"
                            variant="inherit">
                          {employee.first_name}
                        </Typography>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        color="inherit"
                        variant="inherit"
                      >
                        {employee.last_name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        color="inherit"
                        variant="inherit"
                      >
                        {titleVariant.label}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        color="inherit"
                        variant="inherit"
                      >
                        {employee.rank}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        color="inherit"
                        variant="inherit"
                      >
                        {departmentVariant.label}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {employee.file_number}
                  </TableCell>
                  <TableCell>
                   {
                    statusVariant.value === 'active' ? (
                      <Chip
                        sx={{ 'color' : 'green', 'fontWeight' : 'bold' }}
                        label={statusVariant.label}
                        variant="outlined"
                      />): null
                    }
                    {
                     statusVariant.value === 'transfered' ? (
                      <Chip
                        sx={{ 'color' : 'green', 'fontWeight' : 'bold' }}
                        label={statusVariant.label}
                        variant="outlined"
                      />): null
                    }
                    {
                     statusVariant.value === 'sick' ? (
                      <Chip
                        sx={{ 'color' : 'orange', 'fontWeight' : 'bold' }}
                        label={statusVariant.label}
                        variant="outlined"
                      />): null
                    }
                    {
                     statusVariant.value === 'dead' ? (
                      <Chip
                        sx={{ 'color' : 'orange', 'fontWeight' : 'bold' }}
                        label={statusVariant.label}
                        variant="outlined"
                      />): null
                    }
                    {
                     statusVariant.value === 'suspended' ? (
                      <Chip
                        sx={{ 'color' : 'red', 'fontWeight' : 'bold' }}
                        label={statusVariant.label}
                        variant="outlined"
                      />): null
                    }
                    {
                     statusVariant.value === 'dismissed' ? (
                      <Chip
                        sx={{ 'color' : 'red', 'fontWeight' : 'bold' }}
                        label={statusVariant.label}
                        variant="outlined"
                      />): null
                    }
                    {
                     statusVariant.value === 'deserted' ? (
                      <Chip
                        sx={{ 'color' : 'red', 'fontWeight' : 'bold' }}
                        label={statusVariant.label}
                        variant="outlined"
                      />): null
                    }
                  </TableCell>
                  <TableCell>
                    <ToggleButton value="table">
                      <ViewListIcon
                        onClick={() => viewDetail(employee.id)}
                        fontSize="small"
                        sx={{ color: 'rgba(35, 45, 55, 0.38)' }}
                      />
                  </ToggleButton>
                  </TableCell>
                </TableRow>
              );
            }).reverse()}
          </TableBody>
        </Table>
      </Scrollbar>
    </div>
  );
};

OrdersTable.propTypes = {
  data: PropTypes.array.isRequired
};
