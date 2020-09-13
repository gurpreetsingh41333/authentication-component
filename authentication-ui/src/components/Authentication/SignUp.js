import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Grid, Avatar, Button, TextField, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

import LandingPage from '../LandingPage';
import { routes, errorMsg } from '../../config/constants';
import { createNewUser } from '../../actions/Authentication.action';
import Loader from '../Loader';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    display: 'flex',
    flexWrap: 'wrap',
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

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({});
  const { firstname = '', lastname = '', email = '', password = '', confirmPassword = '' } = formValue;
  const [errorValue, setErrorValue] = useState({});
  const { firstnameError = '', lastnameError = '', emailError = '', passwordError = '', confirmPasswordError = '' } = errorValue;
  const [loading, setLoading] = useState(false);

  const handleIput = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value.trim() })
    setErrorValue({ ...errorValue, [`${event.target.name}Error`]: '' })
  }

  const signUpUser = async () => {
    if (!validator.isEmail(email)) {
      setErrorValue({ ...errorValue, emailError: errorMsg.incorrectEmail });
      return;
    }
    if (password !== confirmPassword) {
      setErrorValue({ ...errorValue, passwordError: errorMsg.passwordShouldBeSame, confirmPasswordError: errorMsg.passwordShouldBeSame });
      return;
    }
    setLoading(true);
    const userInfo = {
      name: firstname + ' ' + lastname,
      email,
      password
    };
    await dispatch(createNewUser({ userInfo }));
    setLoading(false);
  }
  return (
    <LandingPage>
      {loading && <Loader />}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
          </Typography>
        <form className={classes.form}>
          <div className={classes.name}>
            <TextField
              className='MuiGrid-grid-xs-12 MuiGrid-grid-sm-6'
              variant="outlined"
              margin="normal"
              required
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
              onChange={handleIput}
              value={firstname}
              helperText={firstnameError}
              error={firstnameError}
            />
            <TextField
              className='MuiGrid-grid-xs-12 MuiGrid-grid-sm-6'
              variant="outlined"
              margin="normal"
              required
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              onChange={handleIput}
              value={lastname}
              helperText={lastnameError}
              error={lastnameError}
            />
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            onChange={handleIput}
            value={password}
            helperText={passwordError}
            error={passwordError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="confirmPassword"
            type="password"
            id="confirmPassword"
            onChange={handleIput}
            value={confirmPassword}
            helperText={confirmPasswordError}
            error={confirmPasswordError}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!firstname || !lastname || !email || !password || !confirmPassword}
            onClick={signUpUser}
          >
            Sign Up
            </Button>
          <Grid container>
            <Grid item>
              <Link href="javascript:void(0)" variant="body2"
                onClick={() => history.push(routes.SIGNIN)}>
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </LandingPage>
  );
}