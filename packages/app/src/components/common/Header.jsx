import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: '16px',
    },
    rightHeader: {
        display: 'flex',
        alignItems: 'center',
    },
    headerContent: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px',
    },
    munOneSite: {
        marginLeft: '10px',
    },
    navegation: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    nadvar: {
        display: 'flex',
        marginRight: '20px',
    },
    nadvarItem: {
        marginLeft: '15px',
        textDecoration: 'none',
        color: 'black',
    },
    nadvarItemHover: {
        '&:hover': {
            color: 'red', 
        },
    },
    utils: {
        display: 'flex',
        alignItems: 'center',
    },
    searchIcon: {
        marginRight: '10px',
    },
    userIcon: {
        marginRight: '10px',
    },
    select: {
        marginLeft: '10px',
    },
    navItemsWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
});

const Header = () => {
    const styles = useStyles();
    const [selectedLanguage, setSelectedLanguage] = useState('es');

    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <header className={styles.header}>
            <div className={styles.rightHeader}>
                <img src="" alt="Mapfre" />
                <div className={styles.headerContent}>
                    <p>/</p>
                    <p className={styles.munOneSite}>MunOneSite</p>
                </div>
            </div>
            <div className={styles.navegation}>
                <div className={styles.navItemsWrapper}>
                    <nav className={styles.nadvar}>
                        <NavLink
                            className={`${styles.nadvarItem} ${styles.nadvarItemHover}`}
                            exact to="/inicop">
                            Inicio
                        </NavLink>
                        <NavLink
                            className={`${styles.nadvarItem} ${styles.nadvarItemHover}`}
                            to="/noticias">
                            Noticias
                        </NavLink>
                        <NavLink
                            className={`${styles.nadvarItem} ${styles.nadvarItemHover}`}
                            to="/novedades">
                            Novedades
                        </NavLink>
                        <NavLink
                            className={`${styles.nadvarItem} ${styles.nadvarItemHover}`}
                            to="/principios">
                            Principios
                        </NavLink>
                    </nav>
                    <div className={styles.utils}>
                        <p className={styles.searchIcon}>🔍</p>
                        <img src="" alt="Usuario" className={styles.userIcon} />
                        <select className={styles.select} value={selectedLanguage} onChange={handleChange}>
                            <option value="es">ES</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
