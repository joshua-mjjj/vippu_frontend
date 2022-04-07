import * as React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Card, Typography } from '@mui/material';

export const Summary = (props) => {
  const { content, icon: Icon, label } = props;

  return (
    <Card sx={{ height: '100%' }} variant="outlined">
      {/* eslint-disable-next-line*/}
    <a>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            p: 1
          }}
          onClick={(e) => props.get_section(label)}
        >
          {Icon && (
            <Box
              sx={{
                display: 'flex',
                mr: 2
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  height: 56,
                  width: 56
                }}
              >
                <Icon sx={{ color: 'primary.contrastText' }} />
              </Avatar>
            </Box>
          )}
          <div>
            <Typography color="textSecondary" variant="overline">
              {label} :  {content}
            </Typography>
          </div>
        </Box>
      </a>
    </Card>
  );
};

Summary.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired
};
