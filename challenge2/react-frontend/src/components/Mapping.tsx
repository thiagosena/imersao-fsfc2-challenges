import classes from '*.module.css';
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Route } from '../utils/models';
import RoomIcon from '@material-ui/icons/Room';

const API_URL = process.env.REACT_APP_API_URL;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    marginRight: '5px',
  },
}));

type Props = {};
export const Mapping = (props: Props) => {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/routes`)
      .then((data) => data.json())
      .then((data) => setRoutes(data));
  }, []);
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Desafio 2 - Backend e frontend</h1>
      </Grid>
      <Grid item xs={12}>
        <List className={classes.root}>
          {routes.map((route, key) => (
            <div key={key}>
              <ListItem value={route._id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    <RoomIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <div>id: {route._id}</div>
                      <div>title: {route.title}</div>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Start Position:
                      </Typography>
                      {route.startPosition.lat}, {route.startPosition.lng}
                      <div>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          End Position:
                        </Typography>
                        {route.startPosition.lat}, {route.startPosition.lng}
                      </div>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {route !== routes[routes.length - 1] ? <Divider /> : null}
            </div>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
