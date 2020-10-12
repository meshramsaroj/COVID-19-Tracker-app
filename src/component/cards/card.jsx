import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./card.module.css";
import cn from "classnames";


const Cards = (props) => {
    const data = {
        confirmed: props.data.confirmed,
        recovered: props.data.recovered,
        deaths: props.data.death,
        lastupdate: props.data.lastUpdate
    }

    if (!data.confirmed) {
        return "Loading...";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" variant="m2">
                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.infected)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={data.confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of infected cases due to Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered,)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={data.recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered cases due to Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.death)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Deaths due to Covid-19</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={data.deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of death cases due to Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;