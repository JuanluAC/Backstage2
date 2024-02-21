import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    p: {
        color: '#526570',
        fontSize: '14px',
        borderTop: '2px solid grey',
        padding: '10px',
    }
})

const Footer = () => {

    const styles = useStyles();

    return (
        <p className={styles.p}>MAPFRE © 2024 Lorem ipsum dolor sit amet</p>
    );
};

export default Footer;