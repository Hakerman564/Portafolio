// Data Initial.


/*




Educación
Educacion Formal
Institucto técnico comunitario 2020 – 2022: técnico en desarrollo software
Universidad católica de Santo Domingo 2023 – termino: Ingenieria en sistemas Computacionales.
Eduacacion especializada
talengin 2024- 2025  intelegencia artificial generativa.


*/
Personalizacion = {
    Rol: "Negel Diaz: Desarrolador FullStack Jr",
    perfil: "Tengo experiencia en diferente parte del desarrollo de software especialmente en el área de FRONTEND espacialmente en el en maquetado de Web y Web responsive, estoy en busca de nuevas oportunidades Profesionales, Y participar en proyecto creando soluciones.",
    habilidadClaves: {
        html5: "icon/html5.svg",
        css: "icon/css.svg",
        js: "icon/javascript.svg",
        git: "icon/git.svg",
        json: "icon/json.svg",
        net: "icon/dotnet.svg",
        vs: "icon/visualstudiocode.svg",
        github: "icon/github.svg",
        api: "icon/openapiinitiative.svg",
        mysql: "icon/mysql.svg",
        sqlserver: "icon/icons8-servidor-microsoft-sql-50.svg"
    },

    Habilidades_Rol: {
        encabezado: "Capacidades de Desarrollo FullStack",

        habilidad: {
            Maquetacion: {
                Principal: "Maquetacion css",
                Descripccion: "Aplicación de estilos y estructura visual para páginas web usando CSS moderno."
            },
            RestApi: {
                Principal: "Desarrollo con Rest Api y Open-api",
                Descripccion: "Creación y consumo de APIs RESTful para conectar el frontend y backend de aplicaciones."
            },
            Responsive: {
                Principal: "Web responsivo",
                Descripccion: "Adaptación de interfaces para que funcionen correctamente en cualquier dispositivo."
            },
            BaseDatos: {
                Principal: "gestion de base de datos",
                Descripccion: "Modelado y administración de bases de datos relacionales y no relacionales."
            },
            Integracion: {
                Principal: "Integracion Frontend-Backend",
                Descripccion: "Conexión eficiente entre la interfaz de usuario y la lógica del servidor."
            }
        }

    },

    Habilidades_Core: {

        PensamientoCritico: {
            encabezado: "Pensamiento critico",
            icon_url: "icon/usobajo/cachet.svg",
            contedio: "Capacidad para analizar problemas complejos y proponer soluciones efectivas. Ejemplo: identificar errores en código y optimizar procesos.",

        },

        AutoDidacta: {
            encabezado: "autoDidacta",
            icon_url: "icon/usobajo/cachet.svg",
            contedio: "Aprendizaje autónomo de nuevas tecnologías y herramientas. Ejemplo: dominar frameworks modernos por cuenta propia.",

        },

        MejoraContinua: {
            encabezado: "Mejora Continua",
            icon_url: "icon/usobajo/cachet.svg",
            contedio: "Búsqueda constante de optimización y actualización profesional. Ejemplo: refactorizar código y aplicar buenas prácticas.",

        },

        TrabajoEquipo: {
            encabezado: "Trabajo en equipo",
            icon_url: "icon/usobajo/cachet.svg",
            contedio: "Colaboración efectiva con otros desarrolladores y áreas. Ejemplo: participar en proyectos grupales y compartir conocimientos.",

        },



    },

    EduacionFormal:
    {
        ITSC:
        {
            Nombre: "Institucto Tecnico Superior Comunitario",
            Acronimo: "ITSC",
            Temporada: "2020-2022",
            Titulo: "Tecnico Profecional En desarrollo Software",
            Estatus: "Terminado"
        },
        UCSD:
        {
            Nombre: "Universidad católica de Santo Domingo",
            Acronimo: "UCSD",
            Temporada: { inicio: 2023 },
            Titulo: "TIngenieria en sistemas Computacionales",
            Estatus: "Tesis"
        },

        BIA: {
            Nombre: "Telengin",
            Acronimo: "Bia",
            Temporada: "2024-2025",
            Titulo: "Boostcamp en Inteligencia Artificial Generativa",
            Estatus: "Terminado"
        }
    },
    Certificado:
    {
        Htlm5Url: ""
    },

    Proyectos: {
        Contenido: "Explora algunos de mis trabajos más relevantes, donde aplico mis habilidades para resolver problemas y crear soluciones innovadoras.",
        GrandesProyecto: {
            P1: {
                encabezado: "",
                contenido: "",
                link: "",
            }
        }
    },

    miniProyectos: {
        p1Url: ""
    }


}


/* Elementos traidos Del Dom*/

const tituloSetp2 = document.querySelector('.step2')

const Herramientas = tituloSetp2.children[2]

const iconoHerramientas = Personalizacion.habilidadClaves

const clave = Object.keys(iconoHerramientas);
const valores = Object.values(iconoHerramientas)



valores.forEach(element => {
    const img = document.createElement('img')
    img.src = element;
    img.alt = 'Herramienta'
    img.className = 'icon-tecn'
    Herramientas.appendChild(img);
});

/* step 3*/

const step3 = document.querySelector('.step3')
const tituloH1 = step3.children[0]
const contenedorHabilidad = step3.children[1]
const Habilidades_Rol = Personalizacion.Habilidades_Rol.habilidad

const Conjuntos_Rol = Object.entries(Habilidades_Rol)

tituloH1.innerHTML = Personalizacion.Habilidades_Rol.encabezado


Conjuntos_Rol.forEach(element => {
    console.log(element)
    const bloque = document.createElement('div');
    const subEncabezado = document.createElement('h3')
    const texto = document.createElement('p')
    // propiedad de bloque
    bloque.className = 'block-rol'

    subEncabezado.innerText = element[1].Principal
    texto.innerText = element[1].Descripccion

    bloque.appendChild(subEncabezado)
    bloque.appendChild(texto)

    contenedorHabilidad.appendChild(bloque)
});

// setp 4

