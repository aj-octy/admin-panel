import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {LineChart,BarChart,AreaChart,Area, Bar,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,} from 'recharts';

const useStyles = makeStyles({
    cardColor: {
        // backgroundColor: '#f44336',
        textAlign: 'center',
    },
    card: {
        borderRadius:'10px',
        borderBottom: '2px solid #F2FBF7'
    }
  });

  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];


export default function CardChart() {

    const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.cardColor}>
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Post
                    </Typography>
                    <Typography variant="h5" component="h2">
                        32550
                    </Typography>
                </CardContent>  
                <CardActions>
                <ResponsiveContainer width="100%" height={70}>
                        <LineChart  data={data}>
                            <Tooltip />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" fill="#82ca9d" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Post
                    </Typography>
                    <Typography variant="h5" component="h2">
                        32550
                    </Typography>
                </CardContent>
                <CardActions>
                <ResponsiveContainer width="100%" height={70}>
                    <BarChart data={data}>
                        <Tooltip />
                        <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Post
                    </Typography>
                    <Typography variant="h5" component="h2">
                        32550
                    </Typography>
                </CardContent>
                <CardActions>
                <ResponsiveContainer width="100%" height={70}>
                    <AreaChart data={data}>
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Post
                    </Typography>
                    <Typography variant="h5" component="h2">
                        32550
                    </Typography>
                </CardContent>
                <CardActions>
                <ResponsiveContainer width="100%" height={70}>
                    <LineChart  data={data}>
                        <Tooltip />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
                </CardActions>
            </Card>
        </Grid>

    </Grid>
  );
}