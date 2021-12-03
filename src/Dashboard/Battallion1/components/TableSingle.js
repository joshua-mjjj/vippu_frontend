
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
import { Scrollbar } from '../../GlobalComponents/scrollbar';
// import { statusVariants, titleVariants, departmentVariants } from '../../GlobalComponents/utils';

export default function TableSingle(props){
  const { employee } = props;

  const viewDetail = (id) => {
    props.send_detail_id(id)
  }

  // const statusVariant = statusVariants.find(
  //   (variant) => variant.value === employee.status
  // );

  // const titleVariant = titleVariants.find(
  //   (variant) => variant.value === employee.title
  // );

  // const departmentVariant = departmentVariants.find(
  //   (variant) => variant.value === employee.department
  // );

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
                        {employee.title}
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
                        {employee.department}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {employee.file_number}
                  </TableCell>
                  <TableCell>
                   {
                    employee.status === 'Active' ? (
                      <Chip
                        sx={{ 'color' : 'green', 'fontWeight' : 'bold' }}
                        label={employee.status}
                        variant="outlined"
                      />): null
                    }
                    {
                     employee.status === 'Transfered' ? (
                      <Chip
                        sx={{ 'color' : 'green', 'fontWeight' : 'bold' }}
                        label={employee.status}
                        variant="outlined"
                      />): null
                    }
                    {
                     employee.status === 'Sick' ? (
                      <Chip
                        sx={{ 'color' : 'orange', 'fontWeight' : 'bold' }}
                        label={employee.status}
                        variant="outlined"
                      />): null
                    }
                    {
                     employee.status === 'Dead' ? (
                      <Chip
                        sx={{ 'color' : 'orange', 'fontWeight' : 'bold' }}
                        label={employee.status}
                        variant="outlined"
                      />): null
                    }
                    {
                     employee.status === 'Suspended' ? (
                      <Chip
                        sx={{ 'color' : 'red', 'fontWeight' : 'bold' }}
                        label={employee.status}
                        variant="outlined"
                      />): null
                    }
                    {
                     employee.status === 'Dismissed' ? (
                      <Chip
                        sx={{ 'color' : 'red', 'fontWeight' : 'bold' }}
                        label={employee.status}
                        variant="outlined"
                      />): null
                    }
                    {
                     employee.status === 'Deserted' ? (
                      <Chip
                        sx={{ 'color' : 'red', 'fontWeight' : 'bold' }}
                        label={employee.status}
                        variant="outlined"
                      />): null
                    }
                    {
                     employee.status === 'In court' ? (
                      <Chip
                        sx={{ 'color' : 'orange', 'fontWeight' : 'bold' }}
                        label={employee.status}
                        variant="outlined"
                      />): null
                    }
                    {
                     employee.status === 'On course' ? (
                      <Chip
                        sx={{ 'color' : 'green', 'fontWeight' : 'bold' }}
                        label={employee.status}
                        variant="outlined"
                      />): null
                    }
                    {
                     employee.status === 'Absent' ? (
                      <Chip
                        sx={{ 'color' : 'red', 'fontWeight' : 'bold' }}
                        label={employee.status}
                        variant="outlined"
                      />): null
                    }
                    {
                     employee.status === 'On mission' ? (
                      <Chip
                        sx={{ 'color' : 'green', 'fontWeight' : 'bold' }}
                        label={employee.status}
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
          </TableBody>
        </Table>
      </Scrollbar>
    </div>
  );
};

TableSingle.propTypes = {
  data: PropTypes.array.isRequired
};
