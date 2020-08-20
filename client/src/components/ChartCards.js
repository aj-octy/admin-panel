import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    cardColor: {
        backgroundColor: '#f44336',
    }
  });

export default function CardChart() {
    const classes = useStyles();
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
                <Card>
                    <CardContent className={classes.cardColor}>
                        <Typography color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>

    </Grid>
  );
}