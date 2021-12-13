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
import { makeStyles } from '@material-ui/core/styles';
// import { statusVariants, titleVariants, departmentVariants } from './utils';

const useStyles = makeStyles((theme) => ({
  bolden:{
      fontWeight: '600'
  },
  item: {
    'fontWeight': '800',
    'fontFamily': 'Dosis',
    'fontSize': '18px'
  }
}));

export const OrdersTable = (props) => {
  const { data } = props;
  const classes = useStyles();

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
                <span className={classes.item}> First name </span>
              </TableCell>
              <TableCell>
              <span className={classes.item}> Last name </span>
              </TableCell>
              <TableCell>
               <span className={classes.item}> Title </span>
              </TableCell>
              <TableCell>
               <span className={classes.item}> Rank </span>
              </TableCell>
              <TableCell>
               <span className={classes.item}> Department </span>
              </TableCell>
              <TableCell>
               <span className={classes.item}> File number </span>
              </TableCell>
              <TableCell>
               <span className={classes.item}> Status </span>
              </TableCell>
              <TableCell>
               <span className={classes.item}>View</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((employee) => {
              return (
                <TableRow key={employee.id}>
                  <TableCell>
                    <Link
                      color={employee.notify_leave ? "error" : "inherit"}
                      className={employee.notify_leave ? classes.bolden : null}
                      component={RouterLink}
                      to="#"
                      underline="none"
                      variant="subtitle2">
                        <Typography
                            color={employee.notify_leave ? "error" : "inherit"}
                            variant="inherit">
                          {employee.first_name}
                        </Typography>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        color={employee.notify_leave ? "error" : "inherit"}
                        className={employee.notify_leave ? classes.bolden : null}
                        variant="inherit"
                      >
                        {employee.last_name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        color={employee.notify_leave ? "error" : "inherit"}
                        className={employee.notify_leave ? classes.bolden : null}
                        variant="inherit"
                      >
                        {employee.title}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        color={employee.notify_leave ? "error" : "inherit"}
                        className={employee.notify_leave ? classes.bolden : null}
                        variant="inherit"
                      >
                        {employee.rank}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        color={employee.notify_leave ? "error" : "inherit"}
                        className={employee.notify_leave ? classes.bolden : null}
                        variant="inherit"
                      >
                        {employee.department}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        color={employee.notify_leave ? "error" : "inherit"}
                        className={employee.notify_leave ? classes.bolden : null}
                        variant="inherit"
                      >
                        {employee.file_number}
                      </Typography>
                    </Box>
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
                    {
                     employee.status === 'On leave' ? (
                      <Chip
                        sx={{ 'color' : 'orange', 'fontWeight' : 'bold' }}
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
