import React, { useState } from 'react';
import { Grid, Avatar, Button, TextField, FormControlLabel, Checkbox, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import validator from 'validator';

import LandingPage from '../LandingPage';
import { routes, errorMsg, constants } from '../../config/constants';
import { login } from '../../actions/Authentication.action';
import Loader from '../Loader';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({});
  const { email = '', password = '' } = formValue;
  const [errorValue, setErrorValue] = useState({});
  const { emailError = '' } = errorValue;
  const [loading, setLoading] = useState(false);

  const handleIput = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value.trim() })
    setErrorValue({ ...errorValue, [`${event.target.name}Error`]: '' })
  }

  const signInUser = async () => {
    if (!validator.isEmail(email)) {
      setErrorValue({ ...errorValue, emailError: errorMsg.incorrectEmail });
      return;
    }
    setLoading(true);
    const userInfo = {
      email,
      password
    };
    const loginResponse = await dispatch(login({ userInfo }));
    if (loginResponse?.data?.token) {
      localStorage.setItem(constants.AUTH_TOKEN, loginResponse.data.token);
      setLoading(false);
      history.push(routes.MAIN);
    }
  }
  return (
    <LandingPage>
      {loading && <Loader />}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
          </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleIput}
            value={email}
            helperText={emailError}
            error={emailError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleIput}
            value={password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!email || !password}
            onClick={signInUser}
          >
            Sign In
            </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
                </Link>
          </Grid>
          <Grid item>
            <Link href="javascript:void(0)" variant="body2"
              onClick={() => history.push(routes.SIGNUP)}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </LandingPage>
  );
}