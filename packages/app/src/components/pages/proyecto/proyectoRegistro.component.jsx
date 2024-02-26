import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import ImagenProyectoRegistro from "../../../img/ProyectoRegistro.png"

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

function ProyectoRegistro() {
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
                        <p style={{ marginLeft: '20px', color: 'red' }}>Idea</p>
                        <p style={{ marginLeft: '20px' }}>{'>'}</p>
                        <p style={{ marginLeft: '20px' }}>Registro</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '70%' }}>
                            <h1>Registro</h1>
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
                    <img className={styles.imagen} src={ImagenProyectoRegistro} alt="" />
                    <ul className={styles.InfoPagina} style={{ width: '70%' }}>
                        <li><h3>Registro</h3></li>
                        <p>Datos Administrativos: Crear el objeto de gestión</p>
                        <ul style={{ marginBottom: '30px' }}>
                            <li>Existe a su vez plantillas globales según la Categoría y Ciclo de Vida (Metodología) del elemento de Gestión.
                                <li>El ciclo de vida que se va a utilizar metodología Tradicional o Agile/Hibrido</li>
                                <li>La categoría del proyecto/plan que se requiere (Desarrollo, Consultoría, Infraestructura, Implantación e Innovación) en 🔑 Categorización de Proyectos y Planes.</li>
                                <li>Estimar el tamaño del proyecto:</li>
                                <ul>
                                    <li>Grande `{'>'}` 80.000h Participación terceros y/o TI Alcance global o multi-entidad `{'>'}` un año</li>
                                    <li>Mediano 80.000h-20.000h Participación terceros y/o TI Múltiples geografías Un año – seis meses</li>
                                    <li>Pequeño 20.000h-1.200h Sin costes Local `{'>'}` 6 meses</li>
                                </ul>
                                <li>Según las características del proyecto se debe establecer el tipo:</li>
                                <li>Dar un nombre: es un texto limitado lo suficientemente descriptivo que sirva como identificador claro del elemento.</li>
                                <li>Rellenar Fecha Inicio y Fecha Fin estimado en este momento.</li>
                                <li>Rellenar el nombre de: Gestor, Responsable y Sponsor.</li>
                            </li>
                        </ul>
                        <div style={{ display: 'flex', marginBottom: '30px' }}>
                            <img src="" alt="Lego" />
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo purus, placerat vitae velit sit amet, tincidunt tempor elit. Lorem ipsum dolor sit amet. Fusce leo purus, placerat vitae velit sit amet, tincidunt tempor elit.</p>
                        </div>
                        <li><h3>Establecimiento alcance y objetivos</h3></li>
                        <ul style={{ marginBottom: '40px' }}>
                            <li>Comprobar que se cubre el alcance sobre aspectos relevantes:</li>
                            <ul>
                                <li>Funcional y de Negocio: aspectos relacionados con las necesidades que se deben cubrir</li>
                                <li>Técnicos y/o Tecnológicos: aspectos no funcionales y de seguridad</li>
                                <li>Gestión del Cambio: En el caso de que los objetivos del proyecto requieran la adopción de cambios por parte de los empleados. La función de Gestión del Cambio, responsable de realizar este acompañamiento, corresponde siempre al área de Recursos Humanos y en concreto a la Oficina Local de Gestión del Cambio en aquellos países y unidades de negocio que cuenten con ella.</li>
                            </ul>

                            <li>Identificar Objetivos es relevante en la información que se debe registrar en el Proyecto procedente de la Idea `{'<Enlace a Hipótesis y Objetivos de Business Case de Idea>'}`</li>
                            <li>Ver valor</li>
                            <li>Revisar los objetivos y si fuera necesario recalcular o definir nuevos objetivos</li>
                            <li>La definición de un objetivo debe venir acompañado de la formula o cómo se va a obtener el valor de medición</li>
                        </ul>
                        <li><h3>Comprobar jerarquía portfolio</h3></li>
                        <ul style={{ marginBottom: '40px' }}>
                            <li>Comprobar que los atributos que determinan la agrupación de los porfolios es correcta</li>
                            <li>Relacionar los elementos de gestión dentro de la estructura del portfolio (Ideas y Proyectos)</li>
                            <ul>
                                <li>Elementos No iniciados: no deben estar en la jerarquía, se gestionarán como ideas de forma independiente a la estructura. El presupuesto de los elementos no iniciados debe quedarse sin asignar (en el propio de Clarity), del elemento de gestión padre, hasta que los elementos se arranquen. No obstante, si para un elemento no iniciado ya está definido y aprobado el presupuesto, planificación y compromisos, queda al criterio del responsable y gestor del mismo crearlo directamente como elemento de gestión sin pasar por crear una idea.</li>
                                <li>Elementos iniciados: desde el elemento padre debemos asignar los elementos hijos con la funcionalidad de jerarquía de la herramienta corporativa Clarity, indicando el % de adjudicación en función del reparto de presupuesto.</li>
                            </ul>
                            <li>El presupuesto de los elementos no iniciados debe quedarse en el propio de la iniciativa hasta que los elementos se arranquen.</li>
                            <li>Si los elementos hijos no tienen la misma partición (elementos de gestión de diferentes países) que los elementos padres, la asignación de elementos para formar la estructura debe realizarse desde el enlace “Add Investments”. (independientemente de que sea una iniciativa, programa, proyecto o plan lo que se desea asignar).</li>
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
                        exact to="/proyecto">
                        ⬅ Proyecto / Evolutivo
                    </NavLink>
                </div>
                <div style={{ width: 'max-content' }}>
                    <h6 style={{ textAlign: 'center' }}>Capítulo Anterior</h6>
                    <NavLink
                        style={{ color: 'red' }}
                        exact to="/proyectoPlanificacion">
                        Planificación ➞
                    </NavLink>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default ProyectoRegistro;