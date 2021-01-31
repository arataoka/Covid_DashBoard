import React from 'react';
import {useSelector} from "react-redux";
import styles from "./Cards.module.css"
import {selectDaily} from "../covidSlice";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import CountUp from "react-countup";
import {AiFillLike, GiHastyGrave, MdLocalHospital} from "react-icons/all";

const Cards: React.FC = () => {
    const daily = useSelector(selectDaily);
    return (
        <div className={styles.container}>
            <Grid container spacing={1} justify="center">
                <Grid item xs={12} md={3} component={Card}
                      className={styles.infected}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <MdLocalHospital/>
                            感染者
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={daily[daily.length - 1].Confirmed}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card}
                      className={styles.recovered}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <AiFillLike/>
                            回復者
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={daily[daily.length - 1].Recovered}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card}
                      className={styles.deaths}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <GiHastyGrave/>
                            死亡者
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={daily[daily.length - 1].Deaths}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
