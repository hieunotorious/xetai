import { Button, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { actions, selectors } from 'redux/reducer';

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const title = useAppSelector(selectors.global.selectTitle);

  return (
    <Stack>
      <Typography>Home</Typography>
      <Link to="/about">
        <Button>To About</Button>
      </Link>
      <TextField
        label="title"
        onChange={(e) => dispatch(actions.global.setTitle(e.target.value))}
        value={title}
        type="text"
      />
    </Stack>
  );
};

export default Home;
