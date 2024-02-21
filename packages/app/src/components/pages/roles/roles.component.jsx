import React from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';
import { makeStyles } from '@material-ui/core';
import Role from '../../../img/Role.png'

const useStyles = makeStyles({
    navegation: {
        display: 'flex',
    },
    navegationItems: {
        marginLeft: '20px'
    },
    indice: {
        marginLeft: 'auto',
        marginTop: '40px',
        width: '200px',
        padding: '20px',
        borderRadius: '5px',
        marginRight: '200px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        listStyle: 'none',

    },
    tiempoLectura: {
        width: 'max-content'
    },
    textHeader: {
        marginLeft: '13%',
        width: '70%',
        marginTop: '-80px',
    },
    titleHeader: {
        fontFamily: 'DM Sans',
        color: '#5D5D5D',
        fontSize: '56px',
        lineHeight: '72px',
    },

});

function Roles() {
    const styles = useStyles();

    return (
        <div className="Roles">
            <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '30px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: '13%' }}>
                            <div className={styles.navegation}>
                                <p className={styles.navegationItems} style={{ color: 'red', marginLeft: '0px' }}>Recursos</p>
                                <p className={styles.navegationItems}>{'>'}</p>
                                <p className={styles.navegationItems}>Roles</p>
                            </div>
                            <div className={styles.tiempoLectura}>
                                <p>🕓 Tiempo estimado de lectura: 12 minutos</p>
                            </div>
                        </div>
                        <div style={{ marginLeft: 'auto' }}>
                            <div className={styles.indice}>
                                <ul style={{ listStyle: 'none', marginBottom: '10px' }}>
                                    <li> Role </li>
                                    <li> Planner </li>
                                    <li> Responsable </li>
                                    <li> Sponsor </li>
                                    <li> Gestor </li>
                                    <li> Experto Técnico </li>
                                    <li> Equipo </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textHeader}>
                        <h1 className={styles.titleHeader}>Roles</h1>

                        <p style={{ width: '70%' }}>Cada miembro del equipo desempeña un rol único que contribuye al logro de los objetivos generales del proyecto. La asignación de roles es fundamental para la organización eficiente del trabajo y para garantizar que todas las tareas necesarias se realicen de manera efectiva.</p>

                        <img style={{ width: '70%' }} src={Role} alt="Roles" />

                        <div style={{ width: '70%' }}>

                            <h1>Planner</h1>
                            Teniendo en cuenta el contexto anterior, y partiendo de las actuales normas al respecto, las principales funciones del rol de Estrategia son:

                            <ul>
                                <li>Diseño: Apoyar al CEO en el desarrollo, formulación y ajuste de la estrategia de la empresa: colaborando en la definición de los objetivos empresariales de acuerdo con su aportación a la ambición corporativa; coordinando la elección de los negocios clave y las renuncias estratégicas; y dando soporte a los responsables en la definición de los retos que es necesario abordar para alcanzar los objetivos parciales que se pretenden alcanzar, favoreciendo la necesaria coordinación con las áreas corporativas para asegurar la cobertura a las necesidades locales y el cumplimiento de las directrices corporativas.
                                </li>
                                <li>
                                    Diseño: Velar por que se incorpore información del entorno, la competencia y el propio análisis interno, para ayudar en la definición y toma de decisión a lo largo de todo el proceso. Y asegurando que las estrategias definidas tengan coherencia con los principios y ambición de la estrategia corporativa de MAPFRE.
                                </li>
                                <li>Ejecución: Colaborar, junto con el resto de los integrantes en el proceso, en la definición de criterios de priorización y alineamiento, así como en la gestión de porfolios avanzada, promoviendo la gestión de proyectos end to end con adaptaciones en función de nivel de certidumbre; y supervisar la identificación del outcome asociado a la ejecución de los proyectos así como la evolución de los proyectos en base a estos criterios, asegurando así, que la ejecución está conectada a la resolución de los problemas que mejoren el negocio de la operación.
                                </li>
                                <li>Ejecución: Participar en las políticas de financiación vigentes que se refieran a proyectos, y conocer tanto las partidas como su consumo, para velar por un adecuado uso de los recursos, velando por el ajuste y correspondencia de las necesidades locales y los esfuerzos corporativos.
                                </li>
                                <li>Medición: Facilitar la toma de decisiones y evolución de los modelos en función del resultado. Entender los análisis cuantitativos para evaluar el impacto de la ejecución. Y supervisar la selección de los indicadores adecuados para analizar el impacto de la estrategia (consecuencia e influencia y la comprensión de sus correlaciones).
                                </li>
                            </ul>

                            <h1>Responsable</h1>
                            Gestiona el proyecto en el día a día y es responsable de la entrega cualitativa del producto. Es conocedor de las técnicas de colaboración y agilidad, estando comprometido con el enfoque ágil de ruptura de silos. Puede provenir de cualquier área dependiendo del propósito.
                            Se encarga de:
                            <ul>
                                <li>
                                    Planificar las actividades y presupuesto de la iniciativa o proyecto
                                </li>
                                <li>
                                    Controlar y mantener la productividad y la evolución de la iniciativa o proyecto.
                                </li>
                                <li>
                                    Organizar y dirigir las actividades de los equipos de trabajo.
                                </li><li>
                                    Coordinar la elaboración de los entregables y proveer información de seguimiento actualizada y veraz conforme a los criterios de seguimiento.
                                </li>
                                <li>
                                    Reportar al Sponsor las eventualidades, problemas o discrepancias surgidas durante el trabajo.
                                </li>
                            </ul>

                            <h1>Sponsor</h1>
                            Rol único, reporta a la capa de gobierno y participa en los comités. Presenta en el Comité de Iniciativas: Las propuestas, cambios y reorientaciones de proyectos y el resultado de la ejecución de los proyectos en cuanto a entregables e indicadores de impacto
                            Se encarga de:
                            <ul><li>
                                Designar el Responsable  y negocia la capacidad de los equipos de trabajo.
                            </li>
                                <li>
                                    Determinar la importancia relativa de los proyectos dentro de las iniciativas
                                </li>
                                <li>
                                    Prioridad de las líneas de acción
                                </li>
                                <li>
                                    Marcar la hoja de ruta para el logro de los objetivos definidos
                                </li><li>
                                    Validar la información de seguimiento, asegurando el cumplimiento de objetivos
                                </li>
                                <li>
                                    Presentar en los órganos de Gobierno competentes:
                                </li>
                                <li>
                                    Las propuestas, cambios y reorientaciones de proyectos
                                </li>
                                <li>
                                    El resultado de la ejecución de los proyectos en cuanto a entregables e indicadores de impacto.
                                </li>
                                <li>
                                    Controlar el cumplimiento del presupuesto asignado.
                                </li>
                                <li>
                                    Controlar la calidad de los entregables y de su documentación
                                </li>
                                <li>
                                    Garantizar los recursos (económicos y humanos ) necesarios para la ejecución
                                </li>
                            </ul>

                            <h1>Gestor</h1>
                            Gestiona la idea en el día a día y es responsable de llevar a cabo todos los estudios, controles e implicar a todos los equipos necesarios para desarrollar las hipótesis de los retos y validarlos tanto técnicamente como económicamente.
                            Se encarga de:
                            <ul>
                                <li>
                                    Planificar las actividades de la Idea.
                                </li>
                                <li>
                                    Gestionar el presupuesto para desarrollar una idea (Opc)
                                </li>
                                <li>
                                    Controlar la evolución y el proceso de la Idea
                                </li>
                                <li>
                                    Organizar y dirigir las actividades de los equipos de trabajo de la Idea
                                </li>
                                <li>
                                    Coordinar la elaboración de los entregables y proveer información de seguimiento actualizada de la Idea
                                </li>
                                <li>
                                    Negociar con el Sponsor las eventualidades, problemas o discrepancias surgidas durante el trabajo.
                                </li>
                            </ul>

                            <h1>Expertos técnicos</h1>
                            Expertos en cada una de las especialidades técnicas (negocio y TI) y garantiza que el resultado esté alineados en todo momento con las directrices y políticas que rigen en su ámbito de su conocimiento. Promueve mejores prácticas.

                            <h1>Equipo</h1>
                            Son los responsables de la obtención de los objetivos marcados en los proyectos​.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Roles;
