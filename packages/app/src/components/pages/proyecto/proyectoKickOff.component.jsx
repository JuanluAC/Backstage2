import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import ImagenProyectoKickOff from "../../../img/proyectoKickOff.png"

const useStiles = makeStyles({

    navegacion: {
        display: 'flex',
        left: '12%'
    },
    rolesImplicados: {
        padding: '15px',
    },
    roles: {
        backgroundColor: '#F5F5F5',
        marginLeft: '20px',
        width: 'max-content',
        padding: '3px',
    },
    tituloRoles: {
        marginLeft: '15px'
    },
    definicion: {
        textAlign: 'center',
        width: '176px',
    },
    InfoPagina: {
        width: '70%',
        listStyleType: 'auto'
    },
    puntosDefinidos: {
        listStyle: 'none',
        textAlign: 'justify',
        marginLeft: '5px',
        fontSize: 'smaller',
    },
    imagen: {
        width: '70%',
        marginTop: '-180px',
    },
    contenidoPagina: {
        width: '70%',
        listStyle: 'auto',
    },
    navegacionPaginas: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '13%',
        paddingLeft: '13%'
    }
})

function ProyectoKickOff() {
    const styles = useStiles();

    return (
        <>
            <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar />

                <div style={{ marginLeft: '12%' }}>
                    <div className={styles.navegacion}>
                        <p style={{ color: 'red' }}>Capa Coordinación</p>
                        <p style={{ marginLeft: '20px' }}>{'>'}</p>
                        <p style={{ marginLeft: '20px', color: 'red' }}>Proyecto</p>
                        <p style={{ marginLeft: '20px' }}>{'>'}</p>
                        <p style={{ marginLeft: '20px' }}>Kickoff y Arranque</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '70%' }}>
                            <h1>Kickoff y Arranque</h1>
                            <p>Se refiere a la concepción inicial o la proposición fundamental que motiva la creación y ejecución del proyecto. Es el punto de partida, la semilla a partir de la cual se desarrollará todo el proyecto.
                                La idea proporciona la dirección y el propósito del proyecto, y generalmente surge en respuesta a una necesidad, oportunidad o problema identificado.</p>
                        </div>
                        <div className={styles.rolesImplicados}>
                            <div className={styles.roles}>
                                <h3 className={styles.tituloRoles}>Roles Implicados</h3>
                                <ul style={{ listStyle: 'none' }}>
                                    <li>Planner</li>
                                    <li>Responsable</li>
                                    <li>Sponsor</li>
                                    <li>Gestor</li>
                                    <li>Experto técnicos</li>
                                </ul>
                            </div>
                            <div className={styles.definicion}>
                                <h3>Definición</h3>
                                <ul className={styles.puntosDefinidos}>
                                    <li>1.Datos administrativos</li>
                                    <li style={{ marginTop: '10px' }}>2.Establecimiento Alcance y Objetivos</li>
                                    <li style={{ marginTop: '10px' }}>3.Comprobar jerarquía de portfolio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <img className={styles.imagen} src={ImagenProyectoKickOff} alt="" />
                    <ul className={styles.InfoPagina} style={{ width: '70%' }}>
                        <li><h3>Kickoff</h3></li>
                        <ul style={{ marginBottom: '30px' }}>
                            <li>El Kick off puede ser una reunión formal o un comunicado mandado a todos los participantes del proyecto.</li>
                            <li>Los contenidos del Kick off del proyecto se podrán adaptar según las necesidades de presentación, pero los aspectos más relevantes son:
                                <ul>
                                    <li>Objetivos</li>
                                    <li>Estrategia de ejecución</li>
                                    <li>Planificación.</li>
                                    <li>Presupuesto.</li>
                                    <li>Organización del proyecto.</li>
                                    <li>Seguimiento y control.</li>
                                    <li>Riesgos generales (Opc)</li>
                                </ul>
                                <li>Se podrá anexar si se considera necesario el Plan de Gestión del Proyecto.</li>
                                <li>Aprobar y comunicar y registrar evidencia del inicio del proyecto/plan.</li>
                                <ul>
                                    <li>Una vez aprobado el comienzo y antes de cambiar el estado del Proyecto a “Activo”</li>
                                    <li>Registrar la evidencia de la aprobación del inicio del proyecto/plan.</li>
                                </ul>
                                <li>Distribuir la información de planificación a los participantes, interesados y equipo</li>
                                <li>Crear línea Base del proyecto (Opc)</li>
                            </li>
                        </ul>
                        <div style={{ display: 'flex' }}>
                            <img src="" alt="lego" />
                            <hr />
                            <p>La condición es la razón por la que se hizo la suposición (ejemplo: falta de interacción del usuario con el producto o caída en el tráfico de la página)</p>
                        </div>
                        <li><h3>Arranque</h3></li>
                        <ul>
                            <li>Requisitos No Funcionales</li>
                            <li>Dependencias</li>
                            <li>Costes y capacidad si fuera necesario</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <hr />
            <div className={styles.navegacionPaginas}>
                <div style={{ width: 'max-content' }}>
                    <h6 style={{ textAlign: 'center' }}>Capítulo Anterior</h6>
                    <NavLink
                        style={{ color: 'red' }}
                        exact to="/proyectoPlanificacion">
                        ⬅ Planificación
                    </NavLink>
                </div>
                <div style={{ width: 'max-content' }}>
                    <h6 style={{ textAlign: 'center' }}>Capítulo Anterior</h6>
                    <NavLink
                        style={{ color: 'red' }}
                        exact to="/proyectoKickOff">
                        Planificación ➞
                    </NavLink>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default ProyectoKickOff;