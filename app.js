/* =========================================================
   app.js — Refactorizado (Render de contenido)
   - Mobile-first: mantiene el DOM limpio y modular.
   - Solo render: no hay lógica de animaciones o eventos globales.
   - Uso de `const`/`let`, guard checks y funciones pequeñas.
   - Objetos de datos (source of truth) -> render functions.
   ========================================================= */

/* -------------------------------
   Datos principales (source of truth)
   - He mantenido y limpiado el objeto `Personalizacion`
   - Si quieres mover esto a JSON externo, es sencillo después.
---------------------------------*/
const Personalizacion = {
  Rol: "Negel Díaz: Desarrolador FullStack Jr",
  perfil:
    "Tengo experiencia en diferentes partes del desarrollo de software especialmente en el área de FRONTEND, maquetado web y responsive. Busco nuevas oportunidades y participar en proyectos creando soluciones.",
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
    sqlserver: "icon/icons8-servidor-microsoft-sql-50.svg",
  },

  Habilidades_Rol: {
    encabezado: "Habilidades técnicas",
    habilidad: {
      Maquetacion: {
        Principal: "Maquetación CSS",
        Descripccion:
          "Aplicación de estilos y estructura visual para páginas web usando CSS moderno.",
      },
      RestApi: {
        Principal: "Despliegue de API",
        Descripccion:
          "Construcción de lógica de negocio y desarrollo de la lógica detrás del servidor.",
      },
      Responsive: {
        Principal: "Web responsiva",
        Descripccion:
          "Adaptación de interfaces para que funcionen correctamente en cualquier dispositivo.",
      },
      BaseDatos: {
        Principal: "Gestión de base de datos",
        Descripccion:
          "Modelado y administración de bases de datos relacionales y no relacionales.",
      },
      Integracion: {
        Principal: "Integración de sistemas",
        Descripccion:
          "Conexión eficiente entre la interfaz de usuario y la lógica del servidor.",
      },
    },
  },

  Habilidades_Core: {
    PensamientoCritico: {
      encabezado: "Pensamiento crítico",
      icon_url: "icon/usobajo/cachet.svg",
      contedio:
        "Capacidad para analizar problemas complejos y proponer soluciones efectivas. Ejemplo: identificar errores en código y optimizar procesos.",
    },

    AutoDidacta: {
      encabezado: "Autodidacta",
      icon_url: "icon/usobajo/cachet.svg",
      contedio:
        "Aprendizaje autónomo de nuevas tecnologías y herramientas. Ejemplo: dominar frameworks modernos por cuenta propia.",
    },

    MejoraContinua: {
      encabezado: "Mejora continua",
      icon_url: "icon/usobajo/cachet.svg",
      contedio:
        "Búsqueda constante de optimización y actualización profesional. Ejemplo: refactorizar código y aplicar buenas prácticas.",
    },

    TrabajoEquipo: {
      encabezado: "Trabajo en equipo",
      icon_url: "icon/usobajo/cachet.svg",
      contedio:
        "Colaboración efectiva con otros desarrolladores y áreas. Ejemplo: participar en proyectos grupales y compartir conocimientos.",
    },
  },

  EduacionFormal: {
    ITSC: {
      Nombre: "Instituto Técnico Superior Comunitario",
      Acronimo: "ITSC",
      Temporada: "2020-2022",
      Titulo: "Técnico Profesional en Desarrollo Software",
      Estatus: "Terminado",
    },
    UCSD: {
      Nombre: "Universidad Católica de Santo Domingo",
      Acronimo: "UCSD",
      Temporada: { inicio: 2023 },
      Titulo: "Ingeniería en Sistemas Computacionales",
      Estatus: "Tesis",
    },
    Alterna: {
      Nombre: "alterna academy",
      Acronimo: "AA",
      Temporada: { inicio: 2025 },
      Titulo: "JUNIOR FULLSTACK DEVELOPER",
      Estatus: "Estudiando",
    },
  },

  Proyectos: {
    Contenido: "Explora algunos de mis trabajos más relevantes.",
    GrandesProyecto: {
      P1: {
        encabezado: "Abng Consulting",
        contenido:
          "Solución de automatización de reportes IT1 e IR2. Implementación de herramientas para agilizar procesos internos.",
        link: "#",
      },
      P2: {
        encabezado: "SVG-IconFast",
        contenido:
          "Es una API RESTful para la gestión y consumo de íconos SVG, diseñada para ofrecer recursos gráficos dinámicos desde una base de datos",
        link: "#",
      },
      P: {
        encabezado: "EasyInvetory",
        contenido:
          "Es una aplicación móvil y/o web diseñada para pequeños negocios minoristas, que permite llevar un registro contable básico de ventas y gastos, ofreciendo un control sencillo del flujo de dinero.",
        link: "#",
      },
    },
  },

  miniProyectos: {
    p1Url: "",
  },
};

/* =========================================================
   UTIL: Safe selector -> devuelve elemento o null
   - Mejora robustez si el HTML cambia.
========================================================= */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

/* =========================================================
   RENDER: Skills icons
   - Toma los iconos de Personalizacion.habilidadClaves
   - Crea <img> con clases estables (skill-icon)
   - Por qué: separa datos de render, evita duplicar HTML
========================================================= */
function renderSkillIcons() {
  const container = $(".skills-icons");
  if (!container) return; // guard

  // Limpiar antes de render (idempotencia)
  container.innerHTML = "";

  const icons = Object.values(Personalizacion.habilidadClaves);

  icons.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Icono tecnología";
    img.className = "skill-icon"; // clase reutilizable en CSS
    container.appendChild(img);
  });
}

/* =========================================================
   RENDER: Technical skills (cards)
   - Extrae Habilidades_Rol.habilidad y genera .card-tech
   - Por qué: convierte un objeto en un array de items renderizables
========================================================= */
function renderTechnicalSkills() {
  const container = $(".tech-grid");
  if (!container) return;

  container.innerHTML = ""; // idempotencia

  const habilidadesObj = Personalizacion.Habilidades_Rol?.habilidad || {};
  const entries = Object.entries(habilidadesObj);

  entries.forEach(([key, val]) => {
    const card = document.createElement("article");
    card.className = "card-tech card"; // usa las clases del CSS refactor

    const title = document.createElement("h3");
    title.textContent = val.Principal || key;

    const desc = document.createElement("p");
    desc.textContent = val.Descripccion || "";

    card.appendChild(title);
    card.appendChild(desc);

    container.appendChild(card);
  });
}

/* =========================================================
   RENDER: Soft skills
   - Usa Personalizacion.Habilidades_Core
   - Genera .soft-card con icono y texto
   - Por qué: mantener consistencia visual con CSS nuevo
========================================================= */
function renderSoftSkills() {
  const container = $(".soft-grid");
  if (!container) return;

  container.innerHTML = ""; // idempotencia

  const coreObj = Personalizacion.Habilidades_Core || {};
  const entries = Object.entries(coreObj);

  entries.forEach(([key, val]) => {
    const card = document.createElement("div");
    card.className = "soft-card card";

    // wrapper para icono redondo + imagen
    const iconBg = document.createElement("span");
    iconBg.className = "core-icon-bg";
    card.appendChild(iconBg);

    const iconImg = document.createElement("img");
    iconImg.className = "core-icon";
    iconImg.alt = val.encabezado || "Ícono";
    iconImg.src = val.icon_url || "icon/usobajo/exclamation.svg";
    card.appendChild(iconImg);

    const title = document.createElement("h3");
    title.textContent = val.encabezado || key;
    card.appendChild(title);

    const p = document.createElement("p");
    p.textContent = val.contedio || "";
    card.appendChild(p);

    container.appendChild(card);
  });
}

/* =========================================================
   RENDER: Education (timeline + certifications)
   - Timeline usa EduacionFormal
   - Certifications usa imagenes estáticas (si existen)
   - Por qué: separa visualización de datos educativos
========================================================= */
function renderEducation() {
  // timeline
  const timeline = $(".timeline");
  if (timeline) {
    timeline.innerHTML = "";

    const edu = Personalizacion.EduacionFormal || {};
    const entries = Object.values(edu);

    entries.forEach((item) => {
      const li = document.createElement("li");

      const year = document.createElement("p");
      year.className = "year";
      // si existe Temporada.inicio -> mostrar rango aproximado
      if (
        item.Temporada &&
        typeof item.Temporada === "object" &&
        item.Temporada.inicio
      ) {
        year.textContent = `${item.Acronimo || item.Nombre} (${
          item.Temporada.inicio
        }–)`;
      } else {
        year.textContent = item.Temporada || item.Acronimo || item.Nombre;
      }

      const career = document.createElement("p");
      career.className = "career";
      career.textContent = item.Titulo || item.Nombre || "";

      li.appendChild(year);
      li.appendChild(career);

      timeline.appendChild(li);
    });
  }

  // certifications
  const certGrid = $(".cert-grid");
  if (certGrid) {
    certGrid.innerHTML = "";

    // Si has un array de imagenes reales, ideal colocarlas aquí.
    // Por ahora reutilizamos las imágenes ya presentes en el HTML original
    // (si quieres, agrega un array en Personalizacion con rutas).
    const imgs = $$(".cert-img"); // si el HTML incluyó imágenes, las clonamos para mantener orden
    if (imgs.length) {
      imgs.forEach((imgEl) => {
        const img = document.createElement("img");
        img.className = "cert-img";
        img.src = imgEl.src;
        img.alt = imgEl.alt || "Certificación";
        certGrid.appendChild(img);
      });
    } else {
      // fallback: mostrar placeholder si no hay imágenes
      const fallback = document.createElement("p");
      fallback.textContent = "No hay certificaciones agregadas.";
      certGrid.appendChild(fallback);
    }
  }
}

/* =========================================================
   RENDER: Projects
   - Usa Personalizacion.Proyectos.GrandesProyecto
   - Crea project-card con número, título y descripción
   - Por qué: mantiene el contenido dinámico y sencillo de actualizar
========================================================= */
function renderProjects() {
  const container = $(".projects-grid");
  if (!container) return;

  container.innerHTML = "";

  const projects = Personalizacion.Proyectos?.GrandesProyecto || {};
  const entries = Object.entries(projects);

  // Si no hay proyectos, renderizamos un placeholder
  if (entries.length === 0) {
    const placeholder = document.createElement("p");
    placeholder.textContent = "Proyectos próximamente.";
    container.appendChild(placeholder);
    return;
  }

  entries.forEach(([key, val], index) => {
    const article = document.createElement("article");
    article.className = "project-card card";

    const header = document.createElement("div");
    header.className = "project-header";

    const number = document.createElement("span");
    number.className = "project-number";
    // formato 01, 02, ...
    number.textContent = String(index + 1).padStart(2, "0");

    const h3 = document.createElement("h3");
    h3.textContent = val.encabezado || `Proyecto ${index + 1}`;

    header.appendChild(number);
    header.appendChild(h3);

    const p = document.createElement("p");
    p.className = "project-description";
    p.textContent = val.contenido || "";

    // optional image if you later add `img` field to project
    const wrapper = document.createElement("div");
    wrapper.className = "project-img-wrapper";

    if (val.img) {
      const img = document.createElement("img");
      img.className = "project-img";
      img.src = val.img;
      img.alt = val.encabezado || "Imagen proyecto";
      wrapper.appendChild(img);
    } else {
      // si no hay imagen, no añadimos wrapper (evitar contenedores vacíos)
      wrapper.innerHTML = "";
    }

    article.appendChild(header);
    article.appendChild(p);
    if (wrapper.innerHTML) article.appendChild(wrapper);

    container.appendChild(article);
  });
}

/* =========================================================
   MAIN: inicializa todos los renderers
   - Encapsulado para poder llamar manualmente (p. ej. después de fetch)
========================================================= */
function init() {
  renderSkillIcons();
  renderTechnicalSkills();
  renderSoftSkills();
  renderEducation();
  renderProjects();
}

/* ---------------------------------------------------------
   Ejecutar cuando DOM esté listo (seguro)
   - Por qué: asegura que los elementos existen antes de manipularlos
--------------------------------------------------------- */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

/* =========================================================
   SUGERENCIAS / NOTAS (para tu siguiente paso)
   - 1) Mover `Personalizacion` a un JSON externo o endpoint si quieres
        permitir edición sin tocar código.
   - 2) Añadir validaciones más estrictas si los datos vienen desde la red.
   - 3) Para el futuro refactor: separar cada render en módulos (ESM).
   - 4) Es buena idea añadir tests unitarios simples para funciones puras
        (p. ej. formateo de fecha o generación de número de proyecto).
   - 5) Si vas a cambiar nombres de clase en el HTML, actualiza los selectores
        del inicio (o crea un mapping de selectores para mayor resiliencia).
========================================================= */
