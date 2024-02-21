import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Roles from '../pages/roles/roles.component';


const useStyles = makeStyles({
  ul: {
    listStyleType: 'none',
    marginLeft: '-20px',
    maxHeight: 'max-contnd',
    fontSize: '14px',
  },
  aside: {
    borderRight: '1px solid grey',
    marginBottom: '8px',
    height: 'fit-content'
  },
  buttonContainer: {
    marginLeft: '150px'
  },
  button: {
    marginLeft: '-20%'
  },
  sublist: {
    display: 'block',
    marginLeft: '-10px',
    listStyleType: 'none'
  },
  hidden: {
    display: 'none',
  },
  title: {
    color: '#121619',
    fontSize: '14px',
    padding: '10px',
    lineHeight: '24px'
  }
});

const Sidebar = () => {
  const styles = useStyles();

  const [openLists, setOpenLists] = useState([true, true, true]);

  const toggleList = (index) => {
    const updatedLists = [...openLists];
    updatedLists[index] = !updatedLists[index];
    setOpenLists(updatedLists);
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.buttonContainer}>
        <input type="button" value="⬅" className={styles.button} />
      </div>
      <ul className={styles.ul}>
        <li style={{ width: 'max-content', marginRight: '12px' }}>
          <NavLink
          to='/inicio'>
            <h2 className={styles.title}>INICIO</h2>
          </NavLink>
          <ul className={styles.ul}>
            <li>
              <h4 onClick={() => toggleList(0)}>Capa Estratégica</h4>
              <ul className={openLists[0] ? styles.sublist : styles.hidden}>
                <NavLink
                  to="/noticias">
                  <li>Negocio clave</li>
                </NavLink>

                <li>Reto</li>
                <li>Recursos</li>
              </ul>
            </li>
            <li>
              <h4 onClick={() => toggleList(1)}>Capa Coordinación</h4>
              <ul className={openLists[1] ? styles.sublist : styles.hidden}>
                <NavLink
                  to="/idea">
                  <li>Idea</li>
                </NavLink>
                <NavLink
                  to="/proyecto">
                  <li>Proyecto</li>
                </NavLink>
                <NavLink
                  to="/evolutivo">
                  <li>Evolutivo</li>
                </NavLink>
              </ul>
            </li>
            <li>
              <h4 onClick={() => toggleList(2)}>Capa Operacional</h4>
              <ul className={openLists[2] ? styles.sublist : styles.hidden}>
                <NavLink
                  to="/compromisos">
                  <li>Compromisos</li>
                </NavLink>
                <NavLink
                  to="/Tareas">
                  <li>Tareas</li>
                </NavLink>
                <NavLink
                  to="/recursos">
                  <li>Recursos</li>
                </NavLink>
              </ul>
            </li>
            <NavLink
              to='/roles'>
              <h4>Roles</h4>
            </NavLink>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
