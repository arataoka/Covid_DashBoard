import React, {useEffect} from 'react';
import {
    makeStyles,
    Typography,
    AppBar,
    Toolbar,
    Container,
    Grid
} from "@material-ui/core";
import PieChart from "../PieChart/PieChart";
import SwitchCountry from "../SwitchCountry/SwitchCountry";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncGetDaily, selectDaily} from "../covidSlice";
import Style from "./DashBoard.module.css"

const useStyles = makeStyles((() => ({
    title: {
        flexGrow: 1,
    },
    content: {
        marginTop: 85
    }
})))

const DashBoard: React.FC = () => {
    const classes = useStyles();
    const daily = useSelector(selectDaily)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncGetDaily("japan"));
    }, [dispatch])
    return (
        <div>
            <AppBar position="absolute">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Covid 19 live Dashboard
                    </Typography>
                    <div>
                        <Typography variant="body1">
                            {new Date(daily[daily.length - 1].Date).toDateString()}
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <Container className={classes.content}>
                <div className={Style.container}>
                    <SwitchCountry/>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Cards/>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Chart/>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <PieChart/>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default DashBoard;
