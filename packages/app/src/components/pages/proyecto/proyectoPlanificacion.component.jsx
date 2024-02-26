import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import ImagenProyectoPlanificacion from "../../../img/ProyectoPlanificacion.png"

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
    },
    contedorExplicativo: {
        display: 'flex',
        marginTop: '30px'
    }
})

function ProyectoPlanificacion() {
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
                        <p style={{ marginLeft: '20px' }}>Planificación</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '70%' }}>
                            <h1>Planificación</h1>
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
                    <img className={styles.imagen} src={ImagenProyectoPlanificacion} alt="" />
                    <ul className={styles.InfoPagina} style={{ width: '70%' }}>
                        <li><h3>Plan de proyecto</h3></li>
                        <p>Plan de Proyecto (ver como enlazamos con tradicional/hibrido/agile)</p>
                        <ul style={{ marginBottom: '30px' }}>
                            <li>Común:
                                <ul>
                                    <li>Estimar los recursos, plazos, esfuerzo y capacidad.</li>
                                    <li>Fijar los compromisos (Herramienta de Gestión de Proyectos)</li>
                                    <li>Establecer ponderación de los compromisos. La suma de los pesos ha de ser siempre el 100%, en cambios de alcance aprobados se han de redistribuir 	los pesos garantizando que la suma sea el 100%. El responsable será el encargado de definir esos pesos, y el sponsor los aprobará. (Herramienta de 	Gestión de Proyectos)</li>
                                </ul>
                            </li>
                            <li>Tradicional (Herramienta de Gestión de Proyectos)</li>
                            <ul style={{ marginBottom: '40px' }}>
                                <ul>
                                    <li>Comprobar que se cubre el alcance sobre aspectos relevantes:</li>
                                    <li>Hacer una lista de todas las actividades que puede requerir un proyecto</li>
                                    <li>Generar el cronograma de alto nivel, con las actividades más significativas, así como las principales tareas o hitos de implantación.</li>
                                    <li>Planificar determinando las fechas de inicio fin y dependencias a las tareas e hitos generadas por la plantilla y añadir nuevas tareas e hitos.</li>
                                    <li>Definir tiempos para la realización de cada tarea, prioridades y orden de ejecución.</li>
                                    <li>Identificar dependencias entre elementos que determinarán su orden de ejecución.</li>
                                    <li>Agrupar las actividades por partidas específicas para simplificar la planificación. Debe identificarse lo más importante, ya que será consultado con 	frecuencia. Consultando el avance, aquellas personas involucradas en la gestión, deben tener una idea, lo más clara posible de lo que está sucedien	do en cada momento.</li>
                                    <li>Establecer el camino crítico, es aquel cuyas tareas, si se retrasan, afectan a la fecha de finalización del elemento de gestión y serán las que hay 	que hacer un seguimiento detallado.</li>
                                    <li>Incluir las tareas de Gestión</li>
                                </ul>
                            </ul>
                            <li>Hibrido/Agile:</li>
                            <ul>
                                <li>Realizar Inception a nivel Proyecto</li>
                                <li>Definir roadmap (técnica user story mapping)</li>
                                <li>Definir épicas (Herramienta Gestión Backlog)</li>
                                <li>Definir Historias al menos a corto/medio plazo</li>
                            </ul>

                            <li>Común:</li>
                            <ul>
                                <li>Notificar el cierre de la planificación al gestor del elemento superior para que verifique que las fechas planificadas para los hitos comprometidos 	son correctas</li>
                                <li>Generar la línea de referencia para comprobar la desviación de la planificación y en los compromisos fijados (Opc)</li>
                                <li>Si es necesario formación del equipo de proyecto para ejecutar el proyecto, se debe planificar en el plan de proyecto. Si impacta a personal de 	MAPFRE se debe coordinar con las áreas de Personas y Organización de MAPFE de la entidad.</li>
                            </ul>
                        </ul>
                        <li><h3>Plan financiero</h3></li>
                        <ul>
                            <li>Generar el plan de presupuesto de la iniciativa con el presupuesto total y vamos descontando el presupuesto que distribuimos en los elementos de gestión.</li>
                            <li>Generar el plan de presupuesto de cada uno de los elementos de gestión con el presupuesto total desglosado por tipos de coste.</li>
                            <li>El desglose por tipos de coste se puede ajustar durante la ejecución.</li>
                            <li>El presupuesto total únicamente se puede modificar a través de la gestión del cambio.</li>
                            <li>Si es necesario adquirir e incorporar algún recurso material hay que tenerlo en cuenta en el Plan financiero y en el Plan de Proyecto si afecta a fechas y tareas.</li>
                            <li>Establecer presupuestos contratados.</li>
                            <li>Para los gastos externos que ya dispongamos de número de contrato, se deberá eliminar la cantidad presupuestada en la línea “No Asignado” y especificar en la línea presupuestaria de gasto correspondiente.</li>
                        </ul>

                        <div className={styles.contedorExplicativo}>
                            <img src="" alt="imagen" />
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo purus, placerat vitae velit sit amet, tincidunt tempor elit. Lorem ipsum dolor sit amet. Fusce leo purus, placerat vitae velit sit amet, tincidunt tempor elit.</p>
                        </div>

                        <li><h3>Asociación de contratos</h3></li>
                        <ul>
                            <li>Una vez formalizado el contrato vinculado al proyecto, se Identificará mediante: denominación, tipo de coste, empresa contratada, importe total e importes anuales, fechas de inicio y fin.</li>
                            <li>Asociar dentro del plan presupuestario del proyecto el contrato a la línea de tipo de coste correspondiente desglosado anualmente.</li>
                        </ul>

                        <li><h3>Consideraciones del proyecto</h3></li>
                        <ul>
                            <li>Plan de Comunicaciones</li>
                            <ul>
                                <li>Estructuración de comités y sus funciones</li>

                                <li>Los idiomas utilizados para la comunicación en el proyecto y para la elaboración de la documentación requerida.</li>

                                <li>Tipos de comunicación: cómo se van a comunicar todo lo relacionado con la gestión del proyecto. Típicamente:</li>

                                <ul>
                                    <li>Comunicación y aprobación de entregables del proyecto.</li>
                                    <li>Escalado de incidencias/problemas que no se pueden gestionar a nivel proyecto.</li>
                                    <li>Gestión de Reuniones: condiciones para generar un acta de reunión formal o informal.</li>
                                </ul>

                                <li>Existen varios tipos de plan generales:</li>

                                <ul>
                                    <li>Plan_General_de_Gestion_de_las_Comunicaciones_Proyectos_Agile.doc</li>
                                    <li>Plan_General_de_Gestion_de_las_Comunicaciones_Proyectos_Complejos.doc</li>
                                    <li>Plan_General_de_Gestion_de_las_Comunicaciones_Proyectos_Simples.doc</li>
                                </ul>

                            </ul>

                            <li>Solo si no aplica un plan general es necesario definir un Plan de Comunicación especifico</li>

                            <li>Plan de Gestión de Riesgos: existe la guía global aplicada en MAPFRE Guía de Gestión de Riesgos.</li>

                            <li>Plan de Gestión del Cambio Organizacional En el caso de que los objetivos del proyecto requieran la adopción de cambios por parte de los empleados, se debe contemplar en el alcance del proyecto el diseño y ejecución de un plan de gestión del cambio que facilite dicha adopción. La función de Gestión del Cambio, responsable de realizar este acompañamiento, corresponde siempre al área de Personas y Organización y en concreto a las Oficina Local de Gestión del Cambio en aquellos países y unidades de negocio que cuenten con ella. El Plan de Gestión del Cambio Organizacional se mantiene vivo durante toda la ejecución del Proyecto o Plan.</li>

                            <li>Plan de Estabilización Acciones para asegurar que las entregas del proyecto sean estables. Normalmente, el Plan de Gestión del Estabilización se completa una vez avanzado el proyecto o plan y se mantiene vivo durante toda la ejecución del Proyecto o Plan.</li>

                        </ul>

                        <li><h3>Equipo</h3></li>
                        <ul>
                            <li>Listar participantes, interesados (stakeholders) y equipo</li>

                            <li>Registrar el Equipo inicial de Proyecto en la 🔨 Herramienta Corporativa de Gestión (Clarity).</li>

                            <li>Rellenar el 📦 Listado de Interesados y Participantes y determinar el nivel de participación de cada recurso (Opc)</li>

                            <li>Adicionalmente, si fuera necesario contratar o iniciar adquisiciones de servicios o recursos, se iniciará el proceso de Adquisiciones establecido en la entidad.</li>

                            <li>Identificar áreas o departamentos implicados y las personas que conformarán el equipo de proyecto</li>

                            <li>Solicitar asignación de Recursos</li>

                            <li>Asignar Recursos</li>

                            <li>Formar equipo de proyecto</li>

                            <li>Incorporar capacidad del equipo</li>

                            <li>Se asignan los recursos necesarios a los elementos de gestión de la planificación.</li>

                            <li>Establecida la planificación de las tareas e hitos.</li>
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
                        exact to="/proyectoRegistro">
                        ⬅ Registro
                    </NavLink>
                </div>
                <div style={{ width: 'max-content' }}>
                    <h6 style={{ textAlign: 'center' }}>Capítulo Anterior</h6>
                    <NavLink
                        style={{ color: 'red' }}
                        exact to="/proyectoKickOff">
                        Kickoff y arranque ➞
                    </NavLink>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default ProyectoPlanificacion;