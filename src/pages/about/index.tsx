import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { selectors } from 'redux/reducer';

type Props = {};

const About = (props: Props) => {
  const navigate = useNavigate();
  const title = useAppSelector(selectors.global.selectTitle);

  return (
    <Stack>
      <Typography>About</Typography>
      <Typography fontSize="xl">{title}</Typography>

      <Button onClick={() => navigate('/')}>To Home</Button>
    </Stack>
  );
};

export default About;
