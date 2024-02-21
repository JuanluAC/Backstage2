import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import ImagenProyecto from "../../../img/Proyecto.png"

const useStiles = makeStyles({

    navegacion: {
        display: 'flex',
        left: '12%'
    },
    rolesImplicados: {
        padding: '15px'
    },
    seleccionTamaño: {
        display: 'flex',
        paddingTop: '30px'
    },
    botonTamaño: {
        padding: '16px',
        backgroundColor: '#FFFFFF',
        border: '1px solid black',
        marginLeft: '3%',
        borderRadius: '12px'
    },
    margenes: {
        padding: '5px',
        border: '1px solid black'
    }
})

function Proyecto() {
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
                        <p style={{ marginLeft: '20px' }}>Idea</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '70%' }}>
                            <h1>Proyecto / Evolutivo</h1>
                            <p>Se refiere a la concepción inicial o la proposición fundamental que motiva la creación y ejecución del proyecto. Es el punto de partida, la semilla a partir de la cual se desarrollará todo el proyecto.
                                La idea proporciona la dirección y el propósito del proyecto, y generalmente surge en respuesta a una necesidad, oportunidad o problema identificado.</p>
                        </div>
                        <div className={styles.rolesImplicados}>
                            <h3>Roles Implicados</h3>
                            <ul style={{ marginLeft: '-10px' }}>
                                <li>Planner</li>
                                <li>Responsable</li>
                                <li>Sponsor</li>
                                <li>Experto técnicos</li>
                            </ul>
                        </div>
                    </div>
                    <img style={{ width: '90%' }} src={ImagenProyecto} alt="" />

                    <div className={styles.seleccionTamaño}>
                        <h3>Filtrar por tamaño de proyecto:</h3>
                        <button className={styles.botonTamaño} type="button">Tamaño S</button>
                        <button className={styles.botonTamaño} type="button">Tamaño M</button>
                        <button className={styles.botonTamaño} type="button">Tamaño L</button>
                    </div>

                    <div style={{ display: 'flex', paddingTop: '20px' }}>
                        <div>
                            <div style={{ display: 'flex', width: '900px' }}>
                                <div className={styles.margenes}>L</div>
                                <div className={styles.margenes}>
                                    <ul>
                                        <li>Registro</li>
                                        <ul>
                                            <li>Dato Administrativos</li>
                                            <li>Establecimiento Alcance y Objetivos</li>
                                            <li>Comprobar jerarrquía de Portafolio</li>
                                        </ul>
                                        <li>Planificacioón</li>
                                        <ul>
                                            <li>Plan de Proyecto</li>
                                            <li>Plan Financiero
                                                <li>
                                                    Asociacion de contratos
                                                </li>
                                            </li>
                                            <li>
                                                Establecimiento de Planes de Gestion
                                            </li>
                                        </ul>
                                        <li>Equipo</li>
                                        <ul>
                                            <li>Listar Participantes</li>
                                            <li>Incorporar capacidad del equipo</li>
                                        </ul>
                                        <li>KickOff</li>

                                        <li>Arrance</li>
                                    </ul>
                                </div>
                                <div className={styles.margenes}>
                                    <ul>
                                        <li>Seguimiento Plan</li>
                                        <ul>
                                            <li>Revisar Hitos, Compromisos</li>
                                            <li>Revisar Entregas y Plan Estabilización</li>
                                            <li>Seguimiento Económico</li>
                                            <li>Seguimiento Riesgos</li>
                                            <li>Generación Informe periódico</li>
                                        </ul>
                                        <li>Medición Valor</li>
                                        <li>Gestión Cambio</li>
                                        <ul>
                                            <li>Solicitud</li>
                                            <li>Aprobación y Ejecución Cambios</li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className={styles.margenes}>
                                    <ul>
                                        <li>Cierre</li>
                                        <ul>
                                            <li>Cierre Plan</li>
                                            <li>Cierre financiero</li>
                                            <li style={{ color: 'grey' }}>Leciones aprendidas(Opc)</li>
                                            <li>Informe final cierre</li>
                                            <li>Traspaso Operación</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>

                            <div style={{ display: 'flex', width: '900px' }}>
                                <div className={styles.margenes}>M</div>
                                <div className={styles.margenes}>
                                    <ul>
                                        <li>Registro</li>
                                        <ul>
                                            <li>Dato Administrativos</li>
                                            <li>Establecimiento Alcance y Objetivos</li>
                                            <li>Comprobar jerarrquía de Portafolio</li>
                                        </ul>
                                        <li>Planificacioón</li>
                                        <ul>
                                            <li>Plan de Proyecto</li>
                                            <li>Plan Financiero
                                                <li>
                                                    Asociacion de contratos
                                                </li>
                                            </li>
                                            <li style={{ color: 'grey' }}>
                                                Establecimiento de Planes de Gestion(Opc)
                                            </li>
                                        </ul>
                                        <li>Equipo</li>
                                        <ul>
                                            <li>Listar Participantes</li>
                                            <li>Incorporar capacidad del equipo</li>
                                        </ul>
                                        <li>KickOff</li>

                                        <li>Arrance</li>
                                    </ul>
                                </div>
                                <div className={styles.margenes}>
                                    <ul>
                                        <li>Seguimiento Plan</li>
                                        <ul>
                                            <li>Revisar Hitos, Compromisos</li>
                                            <li>Revisar Entregas y Plan Estabilización</li>
                                            <li>Seguimiento Económico</li>
                                            <li>Seguimiento Riesgos</li>
                                            <li>Generación Informe periódico</li>
                                        </ul>
                                        <li>Medición Valor</li>
                                        <li>Gestión Cambio</li>
                                        <ul>
                                            <li style={{ color: 'grey' }}>Solicitud(Opc)</li>
                                            <li>Aprobación y Ejecución Cambios</li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className={styles.margenes}>
                                    <ul>
                                        <li>Cierre</li>
                                        <ul>
                                            <li>Cierre Plan</li>
                                            <li>Cierre financiero</li>
                                            <li style={{ color: 'grey' }}>Leciones aprendidas(Opc)</li>
                                            <li style={{ color: 'grey' }}>Informe final cierre(Opc)</li>
                                            <li>Traspaso Operación</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                            <div style={{ display: 'flex', width: '900px' }}>
                                <div className={styles.margenes}>S</div>
                                <div className={styles.margenes}>
                                    <ul>
                                        <li>Registro</li>
                                        <ul>
                                            <li>Dato Administrativos</li>
                                            <li>Establecimiento Alcance y Objetivos</li>
                                            <li style={{ color: 'grey' }}>Comprobar jerarrquía de Portafolio(Opc)</li>
                                        </ul>
                                        <li>Planificacioón</li>
                                        <ul>
                                            <li>Plan de Proyecto</li>
                                            <li style={{ color: 'grey' }}>Plan Financiero(Opc)
                                                <li style={{ color: 'grey' }}>
                                                    Asociacion de contratos
                                                </li>
                                            </li>
                                            <li style={{ color: 'grey' }}>
                                                Establecimiento de Planes de Gestion(Opc)
                                            </li>
                                        </ul>
                                        <li style={{ color: 'grey' }}>Equipo(Opc)</li>
                                        <ul style={{ color: 'grey' }}>
                                            <li>Listar Participantes</li>
                                            <li>Incorporar capacidad del equipo</li>
                                        </ul>
                                        <li style={{ color: 'grey' }}>KickOff(Opc)</li>

                                        <li style={{ color: 'grey' }}>Arrance(Opc)</li>
                                    </ul>
                                </div>
                                <div className={styles.margenes}>
                                    <ul>
                                        <li>Seguimiento Plan</li>
                                        <ul>
                                            <li>Revisar Hitos, Compromisos</li>
                                            <li>Revisar Entregas y Plan Estabilización</li>
                                            <li style={{ color: 'grey' }}>Seguimiento Económico(Opc)</li>
                                            <li style={{ color: 'grey' }}>Seguimiento Riesgos(Opc)</li>
                                            <li style={{ color: 'grey' }}>Generación Informe periódico(Opc)</li>
                                        </ul>
                                        <li>Medición Valor</li>
                                        <li style={{ color: 'grey' }}>Gestión Cambio(Opc)</li>
                                        <ul style={{ color: 'grey' }}>
                                            <li style={{ color: 'grey' }}>Solicitud(Opc)</li>
                                            <li>Aprobación y Ejecución Cambios</li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className={styles.margenes}>
                                    <ul>
                                        <li>Cierre</li>
                                        <ul>
                                            <li>Cierre Plan</li>
                                            <li>Cierre financiero</li>
                                            <li style={{ color: 'grey' }}>Leciones aprendidas(Opc)</li>
                                            <li style={{ color: 'grey' }}>Informe final cierre(Opc)</li>
                                            <li style={{ color: 'grey' }}>Traspaso Operación(Opc)</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ padding: '0px' }} className={styles.margenes}>
                                <li style={{marginTop: '490px'}}>Cierre administrativo Proyecto</li>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Proyecto;