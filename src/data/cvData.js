// Función helper para manejar las rutas de imágenes en GitHub Pages
const getImagePath = (imageName) => {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? '' 
    : '';
  return `${baseUrl}/images/${imageName}`;
};

export const personalInfo = {
  name: "Clara Contreras Nevares",                   
  title: "Ingeniera de ciberseguridad",             
  email: "ccontrerassn@gmail.com",                  
  phone: "(+34) 685 370 320",                        
  location: "Madrid, España",                       
  linkedin: "linkedin.com/in/ccontrerasn",           
  github: "github.com/Skayara",                      
  website: "https://mypublicinbox.com/Skayara",
  photo: getImagePath('Foto4.jpeg'),
  avatar: getImagePath('Foto4.jpeg'),
  summary: `Soy una persona inquieta, siempre en busca de crecimiento y aprendizaje. A lo largo de mi formación, he demostrado iniciativa y participación en actividades técnicas y de gestión. Me gusta investigar tecnologías y temas por mi cuenta, y suelo formar equipos para desarrollar proyectos personales de manera eficiente.`  // texto bajo \switchcolumn
};

export const timelineData = [
  // Experiencia laboral actual
  {
    id: 1,
    year: 2024,
    title: "Ingeniera de ciberseguridad",
    company: "Siemens Mobility",
    type: "trabajo",
description: `## Ingeniería de Ciberseguridad Ferroviaria

Participación en la creación del área de ciberseguridad de I+D para sistemas ferroviarios, garantizando el cumplimiento de estándares internacionales (IEC 62443, NIST, CRA, ISO) en productos y proyectos críticos.

### Responsabilidades Principales
- Evaluación y mitigación de vulnerabilidades en sistemas de señalización, control y estaciones ferroviarias.
- Asesoría en la integración de medidas de ciberseguridad en nuevos desarrollos y obras ferroviarias.
- Revisión y verificación de requisitos de ciberseguridad durante el ciclo de vida de productos y soluciones.
- Desarrollo e impartición de formación interna, incluyendo un curso de 10 horas sobre Secure Coding para equipos de desarrollo.`,
achievements: [
  "Creación y puesta en marcha del área de ciberseguridad aplicada a I+D ferroviaria",
  "Certificación de sistemas críticos bajo estándares internacionales (IEC 62443, NIST, ISO)",
  "Diseño e impartición de un programa formativo interno en Secure Coding"
],
tags: ["Ciberseguridad", "SCADA", "Infraestructura Crítica", "Ferroviario", "IEC 62443", "NIST", "En curso"]

  },
  {
    id: 2,
    year: 2025,
    title: "Profesora Asociada Ciberseguridad",
    company: "URJC",
    type: "trabajo",
    description: `## Docencia Universitaria en Ciberseguridad

Profesora asociada en la Universidad Rey Juan Carlos, responsable del diseño e impartición de asignaturas de ciberseguridad, incluyendo actualización de contenidos teóricos y prácticos según los planes oficiales del Ministerio.

### Asignaturas Impartidas
- Malware y Amenazas Dirigidas
- Inteligencia de la Seguridad
- Seguridad Informática

### Responsabilidades Principales
- Diseño de planes formativos, temarios y laboratorios virtuales de ciberseguridad para asignaturas especializadas.
- Impartición de clases, laboratorios y exámenes.
- Dirección de Trabajos Fin de Grado (TFG) y asesoría académica a estudiantes.
- Integración de metodologías innovadoras como gamificación para fomentar el aprendizaje práctico.`,
    achievements: [
      "Creación de laboratorios virtuales para análisis de malware y ciberinteligencia",
      "Actualización de contenidos teórico-prácticos alineados con los nuevos planes de estudio",
      "Dirección de 12-15 TFGs anuales con alta satisfacción en encuestas docentes"
    ],
    tags: ["Docencia", "Universidad", "Ciberseguridad", "Malware", "Ciberinteligencia", "Gamificación", "En curso"]
  },
  {
    id: 3,
    year: 2024,
    title: "Profesora Curso Especialización Ciberseguridad",
    company: "Linkia FP",
    type: "trabajo",
    description: `## Formación Profesional Especializada en Ciberseguridad

Profesora en el curso de especialización en ciberseguridad de Linkia FP, responsable del diseño e impartición de asignaturas prácticas en Seguridad Web y Seguridad Android para técnicos superiores.

### Responsabilidades Principales
- Desarrollo completo de temarios, materiales y laboratorios prácticos para las asignaturas del curso.
- Impartición de clases con enfoque 100% práctico, incluyendo demostraciones y proyectos reales.
- Evaluación de estudiantes y seguimiento personalizado para su desarrollo profesional.
- Coordinación de charlas con empresas y fomento del contacto con la industria.`,
    achievements: [
      "Diseño desde cero de los contenidos y laboratorios prácticos de Seguridad Web y Seguridad Android",
      "Implementación de un enfoque educativo basado en proyectos prácticos y demostraciones en vivo",
      "Formación de la primera promoción del curso con alta inserción laboral en el sector"
    ],
    tags: ["Docencia", "Formación Profesional", "Ciberseguridad", "Seguridad Web", "Seguridad Android", "Educación Práctica", "Finalizado"]
  },
  {
    id: 4,
    year: 2023,
    title: "Investigadora en DICYME",
    company: "URJC",
    type: "trabajo",
    description: `## Dynamic Industrial Cyberrisk Modelling based on Evidence (DICYME)

Investigación aplicada en modelado dinámico de riesgos cibernéticos industriales, combinando análisis de exposición pública de sistemas OT con técnicas de Machine Learning para predecir probabilidad de ataques.

### Responsabilidades Principales
- Gestión integral del proyecto, incluyendo investigación técnica, desarrollo de prototipos y coordinación con la empresa colaboradora.
- Diseño e implementación de modelos predictivos para cuantificar la exposición de infraestructuras industriales y su riesgo de ataque.
- Desarrollo de pruebas de concepto y validación en entornos reales junto a la empresa colaboradora.
- Publicación de resultados en conferencias científicas y preparación de artículos para revistas especializadas.`,
    achievements: [
      "Desarrollo de varios prototipos para modelar y cuantificar riesgos cibernéticos en entornos OT",
      "Validación de resultados y transferencia de avances tecnológicos a la empresa colaboradora",
      "Publicación de 1 paper en congreso internacional y envío de 1 artículo a revista científica"
    ],
    tags: ["Proyecto", "Investigación", "Europa", "Machine Learning", "Ciberseguridad Industrial", "OT", "Python", "TensorFlow", "Scikit-learn", "Finalizado"]
  },
  {
    id: 5,
    year: 2023,
    title: "Mentora STEM",
    company: "STEM Talent Girl",
    type: "voluntariado",
description: `## Mentoría en Tecnología y Ciberseguridad

Participación en el programa STEM Talent Girl como mentora para fomentar la presencia femenina en carreras tecnológicas, ofreciendo acompañamiento personalizado en ciberseguridad y orientación profesional.

### Responsabilidades Principales
- Mentoría individual de estudiantes de secundaria y universidad, incluyendo orientación académica y profesional.
- Diseño e impartición de talleres prácticos y sesiones de shadowing en ciberseguridad.
- Elaboración de material propio y coordinación de actividades con empresas y universidades colaboradoras.`,
    achievements: [
      "Mentoría personalizada a 2 estudiantes durante un curso académico completo",
      "Organización de sesiones de shadowing grupales con una media de 6 participantes",
      "Diseño de materiales y talleres prácticos aplicados a ciberseguridad"
    ],
    tags: ["STEM", "Mentoría", "Ciberseguridad", "Voluntariado", "Educación", "Finalizado"]
  },
  {
    id: 6,
    year: 2022,
    title: "Analista de ciberinteligencia",
    company: "Entelgy Innotec Security",
    type: "trabajo",
    description: `## Análisis de Amenazas y Ciberinteligencia

Trabajo en equipo de ciberinteligencia enfocado en la identificación, seguimiento y análisis de amenazas avanzadas, colaborando estrechamente con el SOC y otros equipos de seguridad para la mitigación de riesgos.

### Responsabilidades Principales
- Monitoreo y análisis de IOCs, TTPs y huellas digitales de actores APT.
- Investigación de amenazas emergentes y campañas de malware mediante OSINT, dark web y feeds privados.
- Generación de alertas y elaboración de informes de inteligencia para apoyar operaciones del SOC.
- Colaboración en la identificación de medidas preventivas y estrategias de mitigación.`,
    achievements: [
      "Generación de 10-12 informes de ciberinteligencia y 3-4 alertas diarias para operaciones del SOC",
      "Análisis de campañas de malware y amenazas avanzadas que derivaron en medidas preventivas efectivas",
      "Uso de herramientas como MISP, Maltego, VirusTotal, YARA y Splunk para automatizar procesos de inteligencia"
    ],
    tags: ["Threat Intelligence", "OSINT", "Malware Analysis", "APT", "Ciberinteligencia", "SOC", "Finalizado"]
  },
  {
    id: 7,
    year: 2021,
    title: "Responsable/Coordinadora Infraestructuras",
    company: "SeekNHack",
    type: "voluntariado",
    description: `## Coordinación y Gestión de Infraestructura

Responsable técnica y logística en la organización de eventos y competiciones de ciberseguridad, incluyendo la planificación de entornos, despliegue de infraestructura y coordinación de equipos voluntarios.

### Responsabilidades Principales
- Diseño y despliegue de infraestructuras cloud para competiciones CTF.
- Administración de entornos web y plataformas de competición durante los eventos.
- Coordinación de 10-12 voluntarios técnicos y soporte en tiempo real durante las actividades.
- Supervisión de aspectos logísticos y técnicos para garantizar la continuidad de los eventos.`,
    achievements: [
      "Implementación de infraestructura cloud estable y escalable para entornos de competición",
      "Coordinación efectiva de equipos técnicos voluntarios"
    ],
    tags: ["Proyecto", "DevOps", "Eventos", "CTF", "Cloud", "Infraestructura", "Coordinación", "Finalizado"]
  },
  {
    id: 8,
    year: 2020,
    title: "Ponente/Formadora",
    company: "Profesora particular",
    type: "trabajo",
    description: `## Formación Académica Personalizada

Impartición de clases particulares de apoyo académico en ciencias, humanidades y programación para estudiantes de educación secundaria y universitaria.

### Responsabilidades Principales
- Tutorías individuales orientadas a refuerzo académico y preparación de exámenes.
- Diseño de material de estudio y ejercicios prácticos adaptados al nivel de cada alumno.
- Enseñanza de múltiples disciplinas: Matemáticas, Física, Química, Biología, Lengua, Historia, Economía, Inglés y Piano.
- Apoyo en programación en Python, C y Java, con enfoque práctico para proyectos y ejercicios académicos.`,
    achievements: [
      "Formación individualizada a 10-12 estudiantes de secundaria y universidad",
      "Alta tasa de aprobados en asignaturas técnicas y científicas",
      "Desarrollo de metodología flexible adaptada al perfil y necesidades de cada estudiante"
    ],
    tags: ["Docencia", "Tutorías", "Programación", "Educación Académica", "Clases Particulares", "Finalizado"]
  },

  // Educación
  {
    id: 9,
    year: 2024,
    title: "Doctorado en Ciberseguridad",
    company: "URJC",
    type: "estudios",
    description: `## Programa Doctoral en Ciberseguridad Industrial

Investigación enfocada en el modelado predictivo de amenazas y el análisis de vulnerabilidades en entornos industriales críticos, con especial atención a sistemas ICS/SCADA.

### Línea de Investigación
- Modelado predictivo de amenazas cibernéticas en entornos OT
- Análisis de vulnerabilidades en infraestructuras críticas
- Evaluación de riesgos cibernéticos industriales
- Aplicación de técnicas de Machine Learning y simulación
`,
    achievements: [
      "Avance en metodologías de modelado predictivo para amenazas industriales",
      "Formación avanzada en ciberseguridad industrial y análisis de riesgos"
    ],
    tags: ["Doctorado", "Investigación", "Machine Learning", "Ciberseguridad Industrial", "En curso"]
  },
  {
    id: 10,
    year: 2024,
    title: "Máster Formación del Profesorado",
    company: "URJC",
    type: "estudios",
    description: `## Especialización en Tecnología e Informática

Máster en curso.

Máster oficial en formación del profesorado para la enseñanza de informática y tecnología en secundaria, bachillerato y formación profesional, aplicable también a docencia universitaria.

### Competencias Desarrolladas
- Gamificación, Aprendizaje Basado en Proyectos (ABP) y flipped classroom
- Evaluación por competencias y diseño de unidades didácticas
- Uso de TIC y metodologías activas en entornos educativos
- Elaboración de planes de clase, actividades y rúbricas`,
    achievements: [
      "Prácticas docentes en aula aplicando metodologías activas",
      "Diseño de unidades didácticas y material educativo propio",
      "Habilitación oficial para docencia en secundaria y bachillerato en curso"
    ],
    tags: ["Pedagogía", "Innovación Educativa", "TIC", "En curso"]
  },
  {
    id: 11,
    year: 2023,
    title: "Máster Ciberseguridad y Privacidad",
    company: "UOC",
    type: "estudios",
    description: `## Especialización específica en Ciberseguridad

Programa de posgrado finalizado en ciberseguridad y privacidad, con un enfoque eminentemente práctico en ofensiva, criptografía, biometría, análisis forense y cumplimiento normativo.

### Áreas de Especialización
- Pentesting y ciberseguridad ofensiva
- Análisis forense digital y respuesta a incidentes
- Criptografía.
- Biometría y autenticación.
- ML y análisis de datos en ciberseguridad
- Auditoría de seguridad y cumplimiento GDPR
- Gestión integral de la privacidad y protección de datos`,
    achievements: [
      "TFM enfocado en ciberseguridad ofensiva",
      "Desarrollo de múltiples proyectos prácticos en pentesting y análisis",
      "Aplicación de conocimientos en entornos profesionales e investigación"
    ],
    tags: ["Máster", "Ciberseguridad", "Privacidad", "GDPR", "Finalizado"]
  },
  {
    id: 12,
    year: 2019,
    title: "Ingeniería de la Ciberseguridad",
    company: "URJC",
    type: "estudios",
    description: `## Grado en Ingeniería de la Ciberseguridad

Título oficial de la URJC (240 ECTS), impartido en el campus de Móstoles, pionero en España, con formación integral centrada en tecnología, procesos y normativa para entornos críticos.

### Plan de Estudios (selección destacada)
- Criptografía
- Técnicas de Hacking y Pentesting
- Seguridad en Sistemas y Redes 
- Malware y Amenazas Dirigidas
- Inteligencia Artificial y Visión Artificial aplicada a ciberseguridad  
- Auditoría, Análisis de Riesgos, y Protección de Infraestructuras Críticas
- Inteligencia de la Ciberseguridad  
- Programa de mentoring-empresa desde primeros cursos con interacción real con el sector`,
    achievements: [
      "TFG: comparación de técnicas de Machine Learning para detección de ataques DDoS",
      "Participación activa en competiciones universitarias de CTF, incluida la Liga de Ciberseguridad URJC",
      "Realización de prácticas externas en entidad del sector de ciberseguridad"
    ],
    tags: ["Grado", "Ciberseguridad", "Redes", "Pentesting", "CTF", "Criptografía", "Finalizado"]
  },
  {
    id: 13,
    year: 2014,
    title: "Grado Medio Piano",
    company: "C. Manuel de Falla",
    type: "estudios",
    description: `## Formación Musical Profesional

Estudios musicales profesionales de grado medio con especialización en piano, desarrollando competencias artísticas y disciplina personal.

### Competencias Musicales
- Técnica pianística avanzada
- Teoría musical y armonía
- Historia de la música
- Interpretación y expresión artística`,
    achievements: [
      "Recitales públicos anuales",
      "Participación en conciertos regionales",
      "Desarrollo de disciplina y constancia aplicable a otros ámbitos"
    ],
    tags: ["Música", "Piano", "Disciplina", "Arte", "Finalizado"]
  },
  {
    id: 14,
    year: 2017,
    title: "Bachillerato Científico-Tecnológico",
    company: "Salesianos Atocha",
    type: "estudios",
    description: `## Formación Preuniversitaria Técnica

Bachillerato con orientación científico-tecnológica, sentando las bases matemáticas y científicas para estudios superiores en ingeniería.

### Materias de Especialización
- Matemáticas avanzadas
- Física aplicada
- Química general
- Informática
- Tecnología industrial`,
    achievements: [
      "Nota media superior a 8.5"
    ],
    tags: ["Bachillerato", "Ciencias", "Matemáticas", "Tecnología", "Finalizado"]
  },
  {
    id: 15,
    year: 2024,
    title: "Mentoring Disadvantaged Young People",
    company: "European Youth Foundation",
    type: "certificacion",
    description: `## Certificación Internacional en Mentoría Juvenil

Programa especializado en técnicas de mentoría para jóvenes en situación de vulnerabilidad.

### Competencias Certificadas
- Técnicas de coaching y mentoría
- Desarrollo de soft skills en jóvenes
- Metodologías de inclusión social
- Evaluación de impacto social`,
    achievements: [
      "Aplicación práctica con jóvenes mentorizados",
      "Desarrollo de programa de mentoría personalizado",
      "Colaboración con 3 ONGs europeas"
    ],
    tags: ["Mentoría", "Juventud", "STEM", "Inclusión Social", "Finalizado"]
  },
  {
    id: 16,
    year: 2021,
    title: "Cyber Security Foundation Professional Certificate",
    company: "CertNexus",
    type: "certificacion",
    description: `## Certificación Profesional en Fundamentos de Ciberseguridad

Certificación internacional que valida conocimientos fundamentales en ciberseguridad, incluyendo gestión de riesgos, tecnologías de seguridad y mejores prácticas.

### Áreas de Conocimiento Certificadas
- Principios fundamentales de ciberseguridad
- Gestión de riesgos y amenazas
- Tecnologías de protección y detección
- Respuesta ante incidentes y recuperación`,
    achievements: [
      "Aprobación en primer intento con calificación sobresaliente",
      "Aplicación inmediata en proyectos profesionales",
      "Base sólida para otras certificaciones"
    ],
    tags: ["CSFPC", "Fundamentos", "Ciberseguridad", "Certificación Internacional", "Finalizado"]
  },
  {
    id: 17,
    year: 2021,
    title: "TOEIC 905/990 puntos",
    company: "Educational Testing Service",
    type: "certificacion",
    description: `## Certificación de Competencia en Inglés Profesional

Evaluación estandarizada de competencias en inglés para entornos profesionales, obteniendo una puntuación que certifica nivel B2 avanzado.

### Habilidades Evaluadas
- Comprensión auditiva en contextos profesionales
- Comprensión lectora de documentos técnicos
- Comunicación efectiva en inglés técnico
- Vocabulario especializado en tecnología`,
    achievements: [
      "Puntuación 905/990 (equivalente a B2 avanzado)",
      "Capacidad para trabajar en entornos internacionales",
      "Acceso a documentación técnica en inglés sin limitaciones"
    ],
    tags: ["Inglés", "B2", "Comunicación", "Internacional", "Finalizado"]
  },
  {
    id: 18,
    year: 2021,
    title: "NDG Linux Essentials",
    company: "CISCO Networking Academy",
    type: "certificacion",
    description: `## Certificación en Fundamentos de Linux

Certificación oficial de Cisco que valida competencias fundamentales en administración de sistemas Linux y línea de comandos.

### Competencias Técnicas Certificadas
- Administración básica de sistemas Linux
- Gestión de archivos y permisos
- Configuración de red básica
- Scripting y automatización básica`,
    achievements: [
      "Dominio de línea de comandos Linux",
      "Capacidad para administrar servidores básicos",
      "Base sólida para certificaciones avanzadas en Linux"
    ],
    tags: ["Linux", "CISCO", "Administración", "Sistemas", "Finalizado"]
  },
  {
    id: 19,
    year: 2021,
    title: "Offensive Hacking Unfolded",
    company: "Security Academy",
    type: "certificacion",
    description: `## Certificación en Hacking Ético Avanzado

Programa intensivo de formación en técnicas ofensivas de ciberseguridad, pentesting y análisis de vulnerabilidades.

### Técnicas y Herramientas Certificadas
- Metodologías de pentesting profesional
- Explotación de vulnerabilidades web y de red
- Uso avanzado de herramientas como Metasploit
- Técnicas de post-explotación y pivoting`,
    achievements: [
      "Completación de laboratorios prácticos complejos",
      "Aplicación en auditorías reales de seguridad",
      "Desarrollo de exploits personalizados"
    ],
    tags: ["Pentesting", "Hacking Ético", "Vulnerabilidades", "Exploits", "Finalizado"]
  },
  {
    id: 20,
    year: 2024,
    title: "Hands On Development – Erasmus+ KA2",
    company: "Consorcio KA220‑YOU",
    type: "colaboracion_europea",
    description: `## Hands On Development – Erasmus+ KA2

Proyecto de colaboración europea iniciado en abril de 2024 con finalización prevista en noviembre de 2025. Bajo la modalidad **KA220‑YOU (Juventud)**, este proyecto tiene como objetivo empoderar a jóvenes y organizaciones juveniles mediante acciones de participación cívica y desarrollo sostenible alineado con los Objetivos de Desarrollo Sostenible (ODS) de la ONU.

### Objetivos principales
- Fomentar el compromiso juvenil en acciones de desarrollo comunitario
- Crear herramientas formativas innovadoras no formales
- Fortalecer capacidades de jóvenes trabajadores sociales en toda Europa
- Promover iniciativas lideradas por jóvenes y compromiso político comunitario
- Elevar la conciencia sobre los ODS entre la juventud europea

### Actividades destacadas
- Investigación y planificación de hitos y entrenamientos piloto
- Reuniones presenciales y virtuales entre socios de distintos países
- Sesiones de formación no formal y talleres comunitarios participativos`,

    achievements: [
      "Participación en reuniones transnacionales en países de la Unión Europea con seis organizaciones socias, siendo sede de una de ellas.",
      "Implementación de talleres no formales en múltiples países europeos"
    ],

    tags: ["Proyecto", "Erasmus+ KA2", "Juventud", "ODS", "Capacitación", "Innovación", "En curso"]
  },
  {
  id: 21,
  year: 2020,
  title: "HackOn 2020 – II Jornadas de Ciberseguridad URJC",
  company: "URJC",
  type: "congreso",
  description: `## HackOn 2020 – II Jornadas de Ciberseguridad URJC

Evento organizado íntegramente por estudiantes del Grado en Ingeniería de la Ciberseguridad de la URJC, celebrado el 6 de febrero de 2020 en el campus de Móstoles. Tuve responsabilidades dentro del equipo de organización técnico-logística, apoyando en la coordinación de talleres y estructura del evento.

### Actividades Principales
- Staff técnico durante los talleres prácticos (OSINT, CTF, sandbox, análisis de malware).
- Apoyo en el montaje logístico y supervisión de ponencias y sesiones técnicas.
- Participación como miembro del equipo organizador en reuniones y planificación del evento.`,
  achievements: [
    "Soporte en coordinación y ejecución de talleres técnicos",
    "Planificación y logística del evento sin ánimo de lucro"
  ],
  tags: ["Congreso", "Organización", "Ciberseguridad", "CTF", "HackOn", "Finalizado"]
  },
  {
    id: 22,
    year: 2021,
    title: "HackOn 2021 – III Jornadas de Ciberseguridad URJC",
    company: "URJC",
    type: "congreso",
    description: `## HackOn 2021 – III Jornadas de Ciberseguridad URJC (edición online)

  Evento organizado por estudiantes del Grado en Ingeniería de la Ciberseguridad de la URJC, celebrado el 18 de febrero de 2021 en formato online. Participé como presentadora en directo de la edición virtual, facilitando la transición digital del evento durante la pandemia.

  ### Actividades principales
  - Presentación de sesiones y moderación de contenido en directo.
  - Coordinación con el equipo organizador para la emisión de ponencias, talleres y CTF.
  - Interacción en tiempo real con la audiencia y moderación de Q&A.`,
    achievements: [
      "Actuación como presentadora oficial durante HackOn 2021 en streaming",
      "Contribución clave en la transición a formato online y coordinación técnica en directo",
      "Moderación de sesiones y participación con audiencia virtual de más de 200 personas"
    ],
    tags: ["Congreso", "Presentación", "Ciberseguridad", "HackOn", "Evento Online", "Finalizado"]
  },
  {
    id: 23,
    year: 2022,
    title: "HackOn 2022 – IV Jornadas de Ciberseguridad URJC",
    company: "URJC",
    type: "congreso",
    description: `## HackOn 2022 – IV Jornadas de Ciberseguridad URJC

  Edición celebrada el 16 de febrero de 2022 de las jornadas HackOn, organizada por estudiantes del Grado en Ingeniería de la Ciberseguridad de la URJC. 

  ### Actividades Principales
  - Coordinación general del equipo técnico responsable de la infraestructura, sesiones en directo y actividades educativas.
  - Soporte de staff técnico y ponentes durante los talleres, charlas y la competición CTF.
  - Participación activa en reuniones de planificación, diseño de contenidos y ejecución técnica del evento.`,
    achievements: [
      "Gestión integral del staff técnico y coordinación del evento HackOn 2022",
      "Supervisión de infraestructura, talleres y competición CTF",
      "Creación de retos para el CTF"
    ],
    tags: ["Congreso", "Ciberseguridad", "HackOn", "CTF", "Organización", "Finalizado"]
  },
  {
    id: 24,
    year: 2023,
    title: "HackOn 2023 – V Jornadas de Ciberseguridad URJC",
    company: "URJC",
    type: "congreso",
    description: `## HackOn 2023 – V Jornadas de Ciberseguridad URJC

  Celebrada el 16 de febrero de 2023 en el campus de Móstoles de la URJC, organizada íntegramente por estudiantes del Grado en Ingeniería de la Ciberseguridad. Esta edición combinó ponencias, talleres y competiciones prácticas como CTF, con una estructura híbrida para incluir participantes presenciales y virtuales.

  ### Actividades Principales
  - Coordinación técnica y logística del staff encargado de talleres, sesiones y competición CTF.
  - Soporte directo durante las actividades presenciales y virtuales, garantizando la operativa técnica.
  - Participación en el diseño y planificación general del evento junto al equipo organizador.`,
    achievements: [
      "Coordinación de la infraestructura y soporte técnico en talleres y competición CTF para más de 170 asistentes",
      "Contribución en la planificación técnica y logística del evento"
    ],
    tags: ["Congreso", "Ciberseguridad", "HackOn", "CTF", "Organización", "Finalizado"]
  },
  {
    id: 25,
    year: 2024,
    title: "HackOn 2024 – VI Jornadas de Ciberseguridad URJC",
    company: "URJC",
    type: "congreso",
    description: `## HackOn 2024 – VI Jornadas de Ciberseguridad URJC

  Celebrado el 22 de febrero de 2024 en el campus de Móstoles de la URJC, esta edición fue organizada por estudiantes del Grado en Ingeniería de la Ciberseguridad y combinó ponencias, talleres, sesiones CTF y actividades híbridas, tanto presenciales como online.

  ### Actividades Principales
  - Soporte técnico y logístico al equipo de nuevos voluntarios durante el evento.  
  - Coordinación en contacto con empresas, patrocinadores y ponentes para la agenda y organización.  
  - Acompañamiento durante las sesiones y facilitación de tareas de staff técnico.`,
    achievements: [
      "Apoyo y supervisión de nuevos voluntarios durante HackOn 2024",
      "Gestión de relaciones con ponentes y empresas colaboradoras",
      "Contribución en la logística técnica de talleres, ponencias y CTF"
    ],
    tags: ["Congreso", "Ciberseguridad", "HackOn", "Voluntariado", "Organización", "Finalizado"]
  },
  {
    id: 26,
    year: 2023,
    title: "Navaja Negra 2023",
    company: "Navaja Negra Conference",
    type: "congreso",
    description: `## Navaja Negra 2023 – XI Congreso de Seguridad Informática

  Celebrado los días 5, 6 y 7 de octubre de 2023 en Albacete (XI edición de Navaja Negra).

  ### Actividades Principales
  - Soporte durante los tres días del congreso.
  - Coordinación del equipo técnico para ponencias, talleres y actividades prácticas.
  - Colaboración en la logística de montaje, supervisión técnica y atención a ponentes y participantes.` ,
    achievements: [
      "Miembro del staff en Navaja Negra 2023 en Albacete",
      "Soporte operativo en talleres, conferencias y sesiones prácticas para más de 800 asistentes",
      "Apoyo en la logística técnica y coordinación del equipo técnico durante el evento"
    ],
    tags: ["Congreso", "Ciberseguridad", "Navaja Negra", "Organización", "Staff Técnico", "Finalizado"]
  },
  {
    id: 27,
    year: 2023,
    title: "RootedCon 2023",
    company: "RootedCon",
    type: "congreso",
    description: `## HackTricks Track – RootedCon 2023

  Track especializado dentro de RootedCon 2023 enfocado en técnicas avanzadas de hacking, explotación y análisis de vulnerabilidades. Participación como parte del staff técnico responsable de la coordinación de sesiones, soporte y logística del track HackTricks.`,

    achievements: [
      "Miembro del staff técnico en HackTricks Track durante RootedCon 2023",
      "Soporte técnico en conferencias y talleres sobre explotación, Pentesting y análisis de vulnerabilidades"
    ],
    tags: ["Congreso", "RootedCon", "HackTricks", "Staff Técnico", "Exploits", "Pentesting", "Finalizado"]
  },
  {
    id: 28,
    year: 2024,
    title: "FEED 2024 – Encuentro del Talento Digital",
    company: "Encuentro del Talento Digital – FEED",
    type: "congreso",
    description: `## FEED 2024 – Encuentro del Talento Digital (Madrid)

  Evento celebrado del 21 al 22 de noviembre en Madrid, organizado por la Feria del Empleo en la Era Digital (FEED). Se trata de un congreso multisala centrado en tecnologías emergentes, talento digital y empleabilidad.

  ### Actividades Principales
  - Ponencia sobre técnicas avanzadas y usos prácticos de OSINT aplicada a ciberseguridad.
  - Interacción directa con profesionales del sector y asistentes durante el evento.`,
    achievements: [
      "Ponente sobre OSINT en FEED 2024 Madrid",
      "Presentación técnica dirigida a perfiles en ciberseguridad, reclutamiento y talento digital",
      "Conexión con profesionales del sector y visibilidad en evento multisala"
    ],
    tags: ["Congreso", "OSINT", "TalentDigital", "Ponencia", "Ciberseguridad", "Finalizado"]
  },
  {
    id: 29,
    year: 2024,
    title: "Cursos de Verano URJC – Aranjuez 2024",
    company: "URJC",
    type: "congreso",
    description: `## Ponente en Cursos de Verano URJC – Aranjuez 2024

  Participación como ponente en el curso de verano organizado por la Universidad Rey Juan Carlos en Aranjuez del 24 al 28 de junio de 2024. El enfoque incluía la intersección entre ciberseguridad e inteligencia artificial aplicada.

  ### Actividades Principales
  - Ponencia sobre técnicas de ataque y vulnerabilidades específicas en modelos de inteligencia artificial.
  - Participación en sesiones técnicas y mesas de debate sobre IA, seguridad y detección de anomalías.`,
    achievements: [
      "Ponente invitada en Curso de Verano URJC Aranjuez 2024 sobre ataques a IA",
      "Presentación técnica integrada en curso sobre ciberseguridad e IA",
      "Contribución al debate académico sobre riesgos de IA aplicada a seguridad"
    ],
    tags: ["Congreso", "Ciberseguridad", "Inteligencia Artificial", "Cursos de Verano URJC", "OSINT", "Ataques IA", "Finalizado"]
  },
  {
    id: 30,
    year: 2024,
    title: "XIV Congreso RITSI 2024 – Madrid",
    company: "RITSI",
    type: "congreso",
    description: `## XIV Congreso RITSI 2024 – Estado y Tendencias de la Ingeniería Informática

  Celebrado el 12 de abril de 2024 en la Universidad Rey Juan Carlos (URJC), el XIV Congreso RITSI es el congreso estatal dedicado al sector de la ingeniería informática en España. Esta edición incluyó charlas técnicas, networking con empresas innovadoras y presentaciones de expertos del sector. 

  ### Ponencia Destacada
  - "**Secretos Ocultos y Marcas Invisibles: El Arte de la Steganografía y el Watermarking**", explora técnicas avanzadas para ocultar información en medios digitales, proteger la propiedad intelectual y detectar manipulaciones de contenido.`,
    achievements: [
      "Ponente en el XIV Congreso RITSI 2024 con charla técnica sobre esteganografía y watermarking",
      "Divulgación de técnicas avanzadas en comunidad universitaria y profesional"
    ],
    tags: ["Congreso", "RITSI", "Esteganografía", "Watermarking", "Ciberseguridad", "Ponencia", "Finalizado"]
  },
  {
    id: 31,
    year: 2024,
    title: "Track Securiters – RootedCon 2024",
    company: "RootedCon",
    type: "congreso",
    description: `## Staff del Track Securiters – RootedCon 2024

  Track especializado organizado por Securiters dentro de RootedCon Madrid 2024, centrado en conciencia y técnicas de seguridad vinculadas a ingeniería social, OSINT y análisis de riesgos. Participación como miembro del staff técnico del track, colaborando en los preparativos y soporte durante el congreso.`,
    achievements: [
      "Miembro del staff técnico del Track Securiters en RootedCon 2024",
      "Soporte en coordinación técnica y logística del track durante el evento",
      "Participación en la interacción y coordinación con ponentes y actividades del track"
    ],
    tags: ["Congreso", "RootedCon", "Securiters", "Staff Técnico", "OSINT", "Ingeniería Social", "Finalizado"]
  },
  {
    id: 32,
    year: 2024,
    title: "OsintomátiCOPS Conference 2024 – Madrid",
    company: "OsintomátiCOPS Conference",
    type: "congreso",
    description: `## Staff del evento OsintomátiCOPS 2024

  Conferencia presencial celebrada en Madrid, dedicada a OSINT y ciberinteligencia, dirigida a cuerpos de seguridad y servicios de inteligencia. Soporte técnico y logístico, así como acompañamiento a participantes durante talleres y sesiones.`,
    achievements: [
      "Parte del staff técnico de OsintomátiCOPS Conference 2024 en Madrid",
      "Soporte técnico en workshops del evento",
      "Acompañamiento y guía de participantes durante sesiones prácticas"
    ],
    tags: ["Congreso", "OSINT", "Ciberinteligencia", "Staff Técnico", "Madrid", "Finalizado"]
  },
  {
    id: 33,
    year: 2024,
    title: "X‑Ops Conference 2024 – Madrid",
    company: "X‑Ops Conference",
    type: "congreso",
    description: `## Staff Técnico y Organización – X‑Ops Conference 2024

  Conferencia celebrada del **22 al 23 de noviembre de 2024** en la ETSISI‑UPM, Madrid. Evento especializado en DevOps, DevSecOps, MLOps, AIOps y transformación digital en infraestructuras TI.

  ### Actividades Principales
  - Coordinación técnica y logística del staff durante conferencias, talleres y sesiones de networking.
  - Soporte en la infraestructura técnica y ejecución de presentaciones relacionadas con seguridad y operaciones.
  - Colaboración con ponentes y equipo organizador en materia técnica y operativa.`,
    achievements: [
      "Participación en el staff técnico y organizativo de la X‑Ops Conference 2024 en Madrid",
      "Apoyo en operaciones técnicas y coordinación durante sesiones sobre DevSecOps y MLOps",
      "Colaboración con ponentes y coordinación logística en evento multidisciplinar"
    ],
    tags: ["Congreso", "X‑Ops Conference", "DevSecOps", "MLOps", "Staff Técnico", "Organización", "Finalizado"]
  },
  {
    id: 34,
    year: 2025,
    title: "Jornada AWS 2025",
    company: "URJC / DevSecCon Global Community",
    type: "congreso",
    description: `## Organización Jornada AWS – Campus Móstoles URJC

  Evento organizado por DevSecCon Global Community (de la que formo parte) en colaboración con la Universidad Rey Juan Carlos, celebrado el 8 de febrero de 2025 en el Campus Móstoles.`,
    achievements: [
      "Parte del equipo organizador de la Jornada AWS 2025 en la URJC",
      "Formación y coordinación de voluntarios",
      "Coordinación y gestión de espacios técnicos en la jornada"
    ],
    tags: ["Congreso", "Jornada AWS", "Organización", "URJC", "Cloud Security", "Finalizado"]
  },
  {
    id: 35,
    year: 2023,
    title: "The Art of Mac Malware: Detection & Analysis",
    company: "Objective by the Sea (OBTS v6)",
    type: "estudios",
    description: `## The Art of Mac Malware: Detection & Analysis (Training OBTS v6)

  Curso intensivo impartido por Patrick Wardle en el marco del evento OBTS v6 (Objective by the Sea), celebrado del 9 al 11 de octubre de 2023 en Marbella, España. Se centró en técnicas prácticas para detectar y analizar malware en macOS.`,
    achievements: [
      "Formación práctica avanzada en análisis de malware macOS con Patrick Wardle",
      "Laboratorios en vivo de análisis estático y dinámico de binarios maliciosos",
      "Uso de herramientas Objective‑See y técnicas de detección programática en macOS"
    ],
    tags: ["Training", "Mac Malware", "Análisis Dinámico/Estático", "Objective‑See", "OBTS v6", "Finalizado"]
  },
  {
    id: 36,
    year: 2023,
    title: "Asistente en OBTS v6.0",
    company: "Objective by the Sea",
    type: "congreso",
    description: `## OBTS v6.0 – Objective by the Sea (Marbella, España)

  Participación como asistente en la conferencia y programa de formación OBTS v6.0 celebrado el 12 y 13 de octubre de 2023 en Marbella. Jornada orientada a seguridad en macOS impartida por expertos como Patrick Wardle y otros investigadores Apple.`,
    achievements: [
      "Asistencia al evento OBTS v6.0 en Marbella, España",
      "Acceso a todas las ponencias y grabaciones técnicas sobre seguridad macOS",
      "Participación en tracks formativos y networking con expertos del sector"
    ],
    tags: ["Congreso", "Mac Security", "Objective by the Sea", "Asistente", "Patrick Wardle", "Finalizado"]
  },
  {
    id: 37,
    year: 2021,
    title: "Vicepresidenta y Secretaria – Asociación Estudiantil Veritas URJC",
    company: "Asociación Estudiantil Veritas URJC",
    type: "voluntariado",
    description: `## Fundación y liderazgo en Asociación Estudiantil Veritas

  Participación como miembro fundador en 2021 de la Asociación Estudiantil Veritas de la URJC, dedicada a la promoción de la comunidad universitaria de carácter católico y apoyo personal y espiritual entre estudiantes.`,
    achievements: [
      "Miembro fundador de la Asociación Estudiantil Veritas en la URJC",
      "Desempeño de las funciones de vicepresidenta y secretaria dentro de la junta directiva",
      "Coordinación de actividades asociativas, comunicaciones oficiales y reuniones internas"
    ],
    tags: ["Voluntariado", "Asociación Estudiantil", "URJC", "Liderazgo", "Veritas", "Finalizado"]
  },
  {
    id: 38,
    year: 2020,
    title: "Fundadora Asociación Seek&Hack URJC",
    company: "Seek&Hack",
    type: "voluntariado",
    description: `## Fundación y liderazgo en la Asociación Seek&Hack

  Participación como miembro fundador en 2020 de Seek&Hack, asociación universitaria de la URJC creada por estudiantes del Grado en Ingeniería de la Ciberseguridad, dedicada a la divulgación y aprendizaje colaborativo en ciberseguridad.`,
    achievements: [
      "Impulso de la creación de Seek&Hack como asociación oficial desde su fundación en 2020",
      "Desempeño de los roles de vicepresidenta y secretaria/coordinadora técnica dentro de la junta directiva",
      "Organización de actividades, talleres formativos y competiciones CTF para la comunidad universitaria"
    ],
    tags: ["Voluntariado", "Asociación Estudiantil", "Ciberseguridad", "Seek&Hack", "URJC", "Finalizado"]
  },
  {
    id: 39,
    year: 2021,
    title: "Colaboración con Junta Directiva – ANGER URJC",
    company: "Asociación General de Estudiantes y Representantes (ANGER)",
    type: "voluntariado",
    description: `## Colaboración continua con ANGER URJC

  Participación activa desde 2021 hasta la actualidad en la Junta Directiva de ANGER URJC, asociación oficial de estudiantes de la Universidad Rey Juan Carlos dedicada a representar, informar y fomentar la implicación estudiantil.`,

    achievements: [
      "Colaboración estable con la Junta Directiva de ANGER desde 2021",
      "Apoyo en la coordinación de actividades y representación estudiantil",
      "Participación en eventos universitarios, talleres y campañas internas"
    ],
    tags: ["Voluntariado", "Representación Estudiantil", "URJC", "En curso"]
  },
  {
    id: 40,
    year: 2021,
    title: "Representante Estudiantil – Junta de Escuela ETSII URJC",
    company: "ETSII URJC",
    type: "voluntariado",
    description: `## Representación estudiantil en Junta de Escuela

  Papel como representante del sector estudiantil en la Junta de Escuela de la Escuela Técnica Superior de Ingeniería Informática (ETSII) de la URJC durante los cursos académicos 2021‑2023. Integrante con dedicación continua, participación con derecho a voto y membresía en comisiones internas.`,
    achievements: [
      "Representante con voto del alumnado en la Junta de Escuela de la ETSII (2021‑2023)",
      "Participación activa en comisiones de Infraestructuras e Investigación",
      "Contribución en la toma de decisiones institucionales sobre planes de estudio y recursos académicos"
    ],
    tags: ["Voluntariado", "Representación Estudiantil", "ETSII", "URJC", "Comités", "Infraestructura", "Investigación", "Finalizado"]
  },
  {
    id: 41,
    year: 2023,
    title: "Delegada de Curso – Ingeniería de la Ciberseguridad URJC",
    company: "ETSII URJC",
    type: "voluntariado",
    description: `## Representación estudiantil como delegada de curso

  Actuó como delegada de clase para el curso 2022‑2023 del Grado en Ingeniería de la Ciberseguridad en la ETSII de la Universidad Rey Juan Carlos, representando a compañeros ante la delegación de estudiantes de la escuela conforme a los estatutos oficiales de la URJC.`,
    achievements: [
      "Elección como delegada de curso con representación ante la delegación de estudiantes ETSII URJC",
      "Participación con derecho a voto en reuniones formales de delegados y subdelegados",
      "Colaboración en comisiones de coordinación académica y apoyo institucional"
    ],
    tags: ["Voluntariado", "Representación Estudiantil", "ETSII", "URJC", "Finalizado"]
  },
  {
    id: 42,
    year: 2023,
    title: "Presidenta Joven – AA.AA Don Bosco Salesianos Atocha",
    company: "Asociación Antiguos Alumnos de Don Bosco – Salesianos Atocha",
    type: "voluntariado",
    description: `## Liderazgo juvenil en la Asociación de Antiguos Alumnos de Don Bosco Atocha

  Ejercicio del cargo de Presidenta Joven desde 2023 hasta la actualidad en la Asociación de Antiguos Alumnos de Don Bosco del colegio Salesianos Atocha, Madrid. Participación activa en representación estudiantil, liderazgo generacional y coordinación de iniciativas asociativas vinculadas al ámbito educativo y comunitario.`,
    achievements: [
      "Elección como Presidenta Joven de la Asociación de Antiguos Alumnos de Don Bosco Atocha desde 2023",
      "Colaboración en la organización de actividades comunitarias, formativas y eventos de exalumnos",
      "Puente generacional entre la comunidad estudiantil y la asociación senior"
    ],
    tags: ["Voluntariado", "Antiguos Alumnos", "Don Bosco", "Leadership", "Salesianos Atocha", "En curso"]
  },
  {
    id: 43,
    year: 2023,
    title: "Presidenta Joven Federal – Federación Felipe Rinaldi AA.AA Don Bosco",
    company: "Federación Felipe Rinaldi",
    type: "voluntariado",
    description: `## Representación juvenil en la Federación Felipe Rinaldi de Antiguos Alumnos Don Bosco

  Designada Presidenta Joven Federal en 2023 dentro de la Federación Felipe Rinaldi, organización regional perteneciente a la Confederación Nacional de Antiguos Alumnos/as de Don Bosco (Familia Salesiana). Participación en representación juvenil con funciones estratégicas y de coordinación entre asociaciones locales.`,
    achievements: [
      "Elección como Presidenta Joven Federal en la Federación Felipe Rinaldi en 2023",
      "Representación de jóvenes exalumnos en asambleas federales y comisiones regionales",
      "Coordinación de iniciativas interasociativas y participación en encuentros juveniles"
    ],
    tags: ["Voluntariado", "Antiguos Alumnos", "Federación Felipe Rinaldi", "Representación Juvenil", "Don Bosco", "Finalizado"]
  },
  {
    id: 44,
    year: 2024,
    title: "Presidenta Joven Nacional – Confederación Nacional AA.AA. Don Bosco",
    company: "Confederación Nacional de Antiguos Alumnos y Antiguas Alumnas Don Bosco",
    type: "voluntariado",
    description: `## Liderazgo juvenil en la Confederación Nacional de Antiguos Alumnos/as Don Bosco (España)

  Designada Presidenta Joven Nacional en 2024, con presencia activa en todas las asambleas federales y comisiones estatales. Coordinación de actividades juveniles y representación interasociativa en toda España, incluyendo gestión de proyectos europeos.`,
    achievements: [
      "Elección como Presidenta Joven Nacional en la Confederación Don Bosco en 2024",
      "Participación en asambleas federales y coordinación estatal de actividades juveniles",
      "Impulso a la participación en proyectos de intercambio y voluntariado Erasmus+ en el marco de Don Bosco Youth‑Net"
    ],
    tags: ["Proyecto", "Voluntariado", "Representación Juvenil", "Confederación Don Bosco", "Erasmus+", "Liderazgo", "España", "En curso"]
  },
  {
    id: 45,
    year: 2020,
    title: "Fundadora de Valkyrias – Comunidad de Mujeres en Ciberseguridad",
    company: "Valkyrias",
    type: "proyecto",
    description: `## Fundación y crecimiento de Valkyrias

  Participación en la creación de Valkyrias en 2020, comunidad de mujeres profesionales y entusiastas en ciberseguridad en España. La iniciativa tiene como objetivo visibilizar, formar y conectar a mujeres en áreas como OSINT, forense, malware, inteligencia, pentesting e ingeniería social. La comunidad colabora con otras organizaciones y eventos, y organiza actividades internas y formaciones.`,

    achievements: [
      "Impulso y fundación de Valkyrias como red de mujeres en ciberseguridad en 2020",
      "Colaboración con otras comunidades y participación activa en eventos de seguridad como ponentes o asistentes",
      "Organización de actividades internas, talleres, foros y creación de red profesional para mujeres en ciberseguridad"
    ],
    tags: ["Proyecto", "Comunidad", "Mujeres en Ciberseguridad", "OSINT", "Forense", "Pentesting", "En curso"]
  },
  {
    id: 46,
    year: 2025,
    title: "Ponencia sobre blindaje cibernético en despachos legales",
    company: "Tinku Legal",
    type: "ponencia",
    description: `## ¿Cómo blindar los despachos legales ante ciberataques?

  Charla ofrecida como parte de los contenidos divulgativos de Tinku Legal (febrero de 2025), centrada en estrategias prácticas para proteger despachos de abogados frente a ransomware, phishing, filtraciones de datos y otros riesgos digitales. Presentada como fundadora de la comunidad Valkyrias, con enfoque en protección legal, implementación de medidas técnicas y cumplimiento normativo.`,
    achievements: [
      "Exposición de medidas clave para blindar despachos legales ante ciberataques",
      "Divulgación de estrategias de protección, cifrado, autenticación multifactor y auditoría de seguridad",
      "Presentada en canal oficial de Tinku Legal con alcance profesional"
    ],
    tags: ["Ponencia", "Ciberseguridad Legal", "Despachos", "Formación", "Blindaje Digital", "Finalizado"]
  },
  {
    id: 48,
    year: 2023,
    title: "Formación y entrevista con Uniway Technologies",
    company: "Uniway Technologies",
    type: "ponencia",
    description: `## Sesión formativa y entrevista divulgativa con Uniway Technologies

  Formación impartida en 2023 a profesionales de Uniway Technologies en colaboración con Valkyrias, centrada en riesgos de ciberseguridad empresarial, vectores de ataque, OSINT, dorking y factor humano. Además, se realizó una entrevista divulgativa para contextualizar y ampliar los contenidos presentados.`,
    achievements: [
      "Sesión formativa sobre ciberseguridad empresarial, vectores de ataque y factor humano",
      "Entrevista publicada compartiendo reflexiones sobre la sesión y mejores prácticas",
      "Colaboración con la comunidad Valkyrias para difusión de recursos técnicos y cultura de seguridad"
    ],
    tags: ["Formación", "Ciberseguridad", "Riesgos Empresariales", "OSINT", "Uniway Technologies", "Valkyrias", "Finalizado"]
  },
  {
    id: 49,
    year: 2020,
    title: "Ciberseguridad para estudiantes de ASIR",
    company: "Salesianos Atocha",
    type: "ponencia",
    description: `Formación impartida en enero de 2020 para estudiantes del Grado Superior ASIR en Salesianos Atocha, centrada en introducción a ciberseguridad, vectores de ataque y concienciación técnica.`,
    achievements: [
      "Charla introductoria de ciberseguridad para estudiantes de ASIR",
      "Análisis de amenazas comunes y buenas prácticas de protección",
      "Taller práctico ofensivo de un día con ejercicios de vectores de ataque"
    ],
    tags: ["Formación", "FP ASIR", "Ciberseguridad", "Salesianos Atocha", "Finalizado"]
  },
  {
    id: 50,
    year: 2021,
    title: "Ciberseguridad para estudiantes de ASIR",
    company: "Salesianos Atocha",
    type: "ponencia",
    description: `Formación impartida en enero de 2021 a estudiantes del Grado Superior ASIR en Salesianos Atocha, con enfoque en OSINT, footprinting, vectores de ataque y factor humano.`,
    achievements: [
      "Sesión formativa sobre OSINT, dorking y vectores de ataque",
      "Concienciación sobre el factor humano en ciberseguridad",
      "Taller ofensivo de un día con ejercicios reales adaptados a FP"
    ],
    tags: ["Formación", "FP ASIR", "Ciberseguridad", "Salesianos Atocha", "Finalizado"]
  },
  {
    id: 51,
    year: 2022,
    title: "Ciberseguridad para estudiantes de ASIR",
    company: "Salesianos Atocha",
    type: "ponencia",
    description: `Formación impartida en enero de 2022 a estudiantes de ASIR en Salesianos Atocha, incluyendo APTs, fases de ataque, dorking y metodología Red Team básica.`,
    achievements: [
      "Introducción a amenazas avanzadas (APT) y fases de ataque",
      "Taller práctico ofensivo de un día con dorking y escenarios Red Team",
      "Experiencia práctica en entorno formativo controlado"
    ],
    tags: ["Formación", "FP ASIR", "Ciberseguridad", "Salesianos Atocha", "Finalizado"]
  },
  {
    id: 52,
    year: 2023,
    title: "Ciberseguridad para estudiantes de ASIR",
    company: "Salesianos Atocha",
    type: "ponencia",
    description: `Formación impartida en enero de 2023 a estudiantes ASIR en Salesianos Atocha, centrada en vectores de ataque, OSINT y taller ofensivo en entorno controlado.`,
    achievements: [
      "Charla sobre fases de ataque y técnicas OSINT aplicadas",
      "Taller práctico ofensivo de un día enfocado a detección y explotación",
      "Material didáctico promovido por la comunidad Valkyrias"
    ],
    tags: ["Formación", "FP ASIR", "Ciberseguridad", "Salesianos Atocha", "Finalizado"]
  },
  {
    id: 53,
    year: 2024,
    title: "Ciberseguridad para estudiantes de ASIR",
    company: "Salesianos Atocha",
    type: "ponencia",
    description: `Formación impartida en enero de 2024 a estudiantes del ciclo ASIR en Salesianos Atocha. Enfoque en factor humano, vectores de ataque prácticos y taller ofensivo técnico.` ,
    achievements: [
      "Sensibilización sobre riesgos vinculados al factor humano en ciberseguridad",
      "Taller práctico ofensivo de un día incluyendo footprinting, dorking y vulnerabilidades web",
      "Coordinación didáctica con recursos complementarios aportados por Valkyrias"
    ],
    tags: ["Formación", "FP ASIR", "Ciberseguridad", "Salesianos Atocha", "Finalizado"]
  },
  {
    id: 54,
    year: 2025,
    title: "CiberBosco 2025",
    company: "Salesianos Atocha",
    type: "congreso",
    description: `## CiberBosco 2025 – Jornada de Ciberseguridad en Salesianos Atocha

  Celebrada el **3 de febrero de 2025** en Salesianos Atocha, esta jornada técnica denominada CiberBosco incluyó en su programación charlas sobre seguridad en redes, pentesting y hardware hacking, junto a un taller ofensivo tipo CTF impartido a estudiantes de ciclos de Informática y Telecomunicaciones.`,  
    achievements: [
      "Organización completa del evento CiberBosco 2025, desde planificación a ejecución técnica",
      "Facilitación de un taller ofensivo tipo CTF práctico dividido por equipos"
    ],
    tags: ["Congreso", "Ciberseguridad", "Salesianos Atocha", "CTF", "Pentesting", "Hardware Hacking", "Finalizado"]
  },
  {
    id: 5,
    year: 2022,
    title: "Introducción a OSINT y esteganografía – Curso CTF URJC",
    company: "URJC ETSII CTF Competitivo",
    type: "ponencia",
    description: `Sesión formativa como parte del curso “CTF Competitivo” de la ETSII URJC, enfocada en técnicas de OSINT y esteganografía para estudiantes universitarios de ingeniería.`,
    achievements: [
      "Charla y taller de OSINT y esteganografía dentro del curso CTF Competitivo URJC",
      "Introducción práctica a herramientas y metodologías de reconocimiento en ciberseguridad",
      "Desarrollo retos CTF"
    ],
    tags: ["CTF", "OSINT", "Esteganografía", "Curso", "Finalizado"]
  },
  {
    id: 54,
    year: 2023,
    title: "Introducción a OSINT y esteganografía – Curso CTF URJC",
    company: "URJC ETSII CTF Competitivo",
    type: "ponencia",
    description: `Sesión formativa impartida como parte del curso “CTF Competitivo” de la ETSII URJC, enfocada en técnicas de OSINT y esteganografía para estudiantes universitarios de ingeniería.`,
    achievements: [
      "Charla y taller de OSINT y esteganografía dentro del curso CTF Competitivo URJC",
      "Introducción práctica a herramientas y metodologías de reconocimiento en ciberseguridad",
      "Desarrollo retos CTF"
    ],
    tags: ["CTF", "OSINT", "Esteganografía", "Curso", "Finalizado"]
  },
  {
    id: 55,
    year: 2024,
    title: "Análisis forense y metadatos – Curso CTF URJC",
    company: "URJC ETSII CTF Competitivo",
    type: "ponencia",
    description: `Sesión formativa impartida dentro del curso “CTF Competitivo” de la ETSII URJC, orientada a análisis forense digital y extracción de metadatos (e‑mail, logs, RAM, disco) para preparación de retos competitivos.`,
    achievements: [
      "Taller práctico sobre análisis forense digital y extracción de metadatos",
      "Aplicación de herramientas como Volatility, Wireshark y Autopsy",
      "Soporte al módulo forense del curso formativo 2023‑24",
      "Desarrollo de retos CTF"
    ],
    tags: ["CTF", "Forense", "Metadatos", "Curso", "Finalizado"]
  },
  {
    id: 56,
    year: 2025,
    title: "Prácticas docentes – Formación Profesional en FP Informática",
    company: "Salesianos Atocha",
    type: "trabajo",
    description: `## Prácticas como profesora de Formación Profesional

Realización de prácticas docentes en 2025 en Salesianos Atocha como profesora de formación profesional en áreas de informática y ciberseguridad. Participación en el programa formativo del centro junto a profesionales en activo en el sector de la seguridad informática.`,
    achievements: [
      "Impartición de clases y talleres técnicos en ciclos formativos de informática (FP)",
      "Colaboración con expertos del sector como parte del equipo formador acreditado por Salesianos Atocha",
      "Apoyo en contenidos de ciberseguridad y prácticas formativas"
    ],
    tags: ["Prácticas", "FP", "Ciberseguridad", "Salesianos Atocha", "Finalizado"]
  },
  {
    id: 57,
    year: 2024,
    title: "Dirección TFG: Monitorización de Infraestructuras en Tiempo Real",
    company: "URJC",
    type: "docencia",
    description: `Dirección de Trabajo Fin de Grado del Grado en Ingeniería de la Ciberseguridad (Móstoles) sobre el diseño e implementación de un sistema de monitorización de infraestructuras en tiempo real.`,
    achievements: [
      "Tutoría completa del TFG con defensa y entrega final",
      "Aplicación de técnicas de monitorización de sistemas críticos",
      "Calificación final: 8,6 (NT)"
    ],
    tags: ["Docencia", "TFG", "Ciberseguridad", "URJC", "Finalizado"]
  },
  {
    id: 58,
    year: 2024,
    title: "Dirección TFG: AI‑Based Phishing Email Detection",
    company: "URJC",
    type: "docencia",
    description: `Dirección de Trabajo Fin de Grado del Grado en Ingeniería del Software (Móstoles) sobre la detección de phishing en correos electrónicos mediante técnicas de inteligencia artificial.`,
    achievements: [
      "Supervisión metodológica de análisis de phishing con IA",
      "Defensa y aprobación con calificación 9,5 (SB)"
    ],
    tags: ["Docencia", "TFG", "Ciberseguridad", "URJC", "IA", "Phishing", "Finalizado"]
  },
  {
    id: 59,
    year: 2024,
    title: "Dirección TFG: Ingeniería Social y Mitigación de Ataques",
    company: "URJC",
    type: "docencia",
    description: `Dirección de TFG del Grado en Ingeniería de la Ciberseguridad enfocado en impacto y mitigación de ataques basados en el factor humano.`,
    achievements: [
      "Supervisión de investigación aplicada en ingeniería social",
      "Calificación final: 7,4 (NT)"
    ],
    tags: ["Docencia", "TFG", "Ciberseguridad", "URJC", "Ingeniería Social", "Finalizado"]
  },
  {
    id: 60,
    year: 2024,
    title: "Dirección TFG: Respuesta a Incidentes y Resiliencia Digital",
    company: "URJC",
    type: "docencia",
    description: `Dirección de TFG del Grado en Ingeniería de la Ciberseguridad sobre resiliencia digital, regulación DORA y el rol de blockchain en ciberseguridad bancaria.`,
    achievements: [
      "Supervisión de TFG aplicado a normativas DORA y uso de blockchain",
      "Calificación final: 8 (NT)"
    ],
    tags: ["Docencia", "TFG", "Ciberseguridad", "URJC", "Blockchain", "DORA", "Finalizado"]
  },
  {
    id: 61,
    year: 2024,
    title: "Dirección TFG: Clasificación de URLs Maliciosas con ML",
    company: "URJC",
    type: "docencia",
    description: `Dirección de TFG del Grado en Ingeniería de la Ciberseguridad sobre aprendizaje automático para detección y clasificación de URLs maliciosas.`,
    achievements: [
      "Tutoría del desarrollo de modelos de machine learning para seguridad",
      "Calificación final: 8 (NT)"
    ],
    tags: ["Docencia", "TFG", "Ciberseguridad", "URJC", "Machine Learning", "Finalizado"]
  },
  {
    id: 62,
    year: 2024,
    title: "Dirección TFG: Actualización de Políticas de Seguridad NIST",
    company: "URJC",
    type: "docencia",
    description: `Dirección de TFG del Grado en Ingeniería de Computadores sobre la actualización de políticas de seguridad basadas en NIST en un proyecto de investigación multidisciplinar.`,
    achievements: [
      "Supervisión y orientación de la implementación de políticas NIST",
      "Calificación final: 9,1 (SB)"
    ],
    tags: ["Docencia", "TFG", "Ciberseguridad", "URJC", "NIST", "Finalizado"]
  }












];

export const skillsDataBckp = [
  { name: "JavaScript/TypeScript", percentage: 95, category: "Frontend" },
  { name: "React/Next.js", percentage: 90, category: "Frontend" },
  { name: "Node.js", percentage: 85, category: "Backend" },
  { name: "Python", percentage: 80, category: "Backend" },
  { name: "AWS/Cloud", percentage: 75, category: "DevOps" },
  { name: "Docker/Kubernetes", percentage: 70, category: "DevOps" },
  { name: "PostgreSQL/MongoDB", percentage: 85, category: "Database" },
  { name: "Machine Learning", percentage: 65, category: "AI/ML" },
  { name: "UI/UX Design", percentage: 70, category: "Design" },
  { name: "Agile/Scrum", percentage: 90, category: "Management" }
];

export const interestsData = [
  { name: "Compliance", value: 10, color: "#3B82F6" },
  { name: "Programación", value: 10, color: "#8B5CF6" },
  { name: "Respuesta ante incidentes", value: 12, color: "#10B981" },
  { name: "Pentesting", value: 12, color: "#F59E0B" },
  { name: "ML, IA, Data Science", value: 8, color: "#EF4444" },
  { name: "Forense", value: 10, color: "#06B6D4" },
  { name: "Malware", value: 10, color: "#84CC16" },
  { name: "Ciberinteligencia", value: 10, color: "#EAB308" },
  { name: "Análisis estático", value: 9, color: "#F472B6" },
  { name: "Modelado de amenazas", value: 9, color: "#22D3EE" }
];


export const skillsData = [
  // Basado en \wheelchart - Áreas principales de ciberseguridad
  { name: "Pentesting", level: 17 },
  { name: "Respuesta ante incidentes", level: 10 },
  { name: "Programación", level: 10 },
  { name: "Compliance", level: 10 },
  { name: "Modelado de amenazas", level: 15 },
  { name: "Análisis estático", level: 5 },
  { name: "Ciberinteligencia", level: 10 },
  { name: "Malware", level: 13 },
  { name: "Forense", level: 8 },
  { name: "ML, IA, Data Science", level: 17 }
];

export const languagesData = [
  { name: "Python", level: 90 },
  { name: "C", level: 75 },
  { name: "Java", level: 70 },
  { name: "R", level: 65 },
  { name: "JavaScript", level: 60 },
  { name: "Bash/Shell", level: 85 },
  { name: "SQL", level: 80 }
];

export const toolsData = [
  // Pentesting & Red Team
  { 
    category: "Pentesting & Red Team", 
    tools: [
      { name: "Metasploit", level: 85 },
      { name: "Burp Suite", level: 90 },
      { name: "Nmap", level: 95 },
      { name: "Wireshark", level: 80 },
      { name: "Kali Linux", level: 90 },
      { name: "OWASP ZAP", level: 75 },
      { name: "Nikto", level: 70 },
      { name: "Gobuster", level: 80 }
    ]
  },
  // OSINT & Ciberinteligencia
  { 
    category: "OSINT & Ciberinteligencia", 
    tools: [
      { name: "Maltego", level: 85 },
      { name: "Shodan", level: 90 },
      { name: "TheHarvester", level: 80 },
      { name: "Recon-ng", level: 75 },
      { name: "SpiderFoot", level: 70 },
      { name: "MISP", level: 85 },
      { name: "VirusTotal", level: 95 },
      { name: "Google Dorking", level: 90 }
    ]
  },
  // Análisis de Malware & Forense
  { 
    category: "Análisis de Malware & Forense", 
    tools: [
      { name: "IDA Pro", level: 65 },
      { name: "Ghidra", level: 70 },
      { name: "Volatility", level: 75 },
      { name: "Autopsy", level: 80 },
      { name: "YARA", level: 85 },
      { name: "Cuckoo Sandbox", level: 70 },
      { name: "OllyDbg", level: 60 },
      { name: "Binwalk", level: 75 }
    ]
  },
  // Infraestructura & Cloud Security
  { 
    category: "Infraestructura & Cloud", 
    tools: [
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 65 },
      { name: "AWS Security", level: 70 },
      { name: "Terraform", level: 60 },
      { name: "Splunk", level: 75 },
      { name: "ELK Stack", level: 70 },
      { name: "Nagios", level: 65 },
      { name: "Ansible", level: 55 }
    ]
  },
  // Machine Learning & Data Science
  { 
    category: "ML & Data Science", 
    tools: [
      { name: "TensorFlow", level: 75 },
      { name: "Scikit-learn", level: 85 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Jupyter", level: 80 },
      { name: "Matplotlib", level: 75 },
      { name: "Keras", level: 70 },
      { name: "PyTorch", level: 65 }
    ]
  },
  // Compliance & Frameworks
  { 
    category: "Compliance & Frameworks", 
    tools: [
      { name: "NIST Framework", level: 85 },
      { name: "IEC 62443", level: 80 },
      { name: "ISO 27001", level: 75 },
      { name: "GDPR", level: 90 },
      { name: "OWASP", level: 85 },
      { name: "MITRE ATT&CK", level: 80 },
      { name: "CIS Controls", level: 70 },
      { name: "DORA", level: 75 }
    ]
  }
];

export const idiomasData = [
  { name: "Español", level: 100, description: "Nativo" },
  { name: "Inglés", level: 80, description: "TOEIC 905/990 (B2 Avanzado)" },
  { name: "Francés", level: 35, description: "Básico" },
  { name: "Italiano", level: 35, description: "Básico" }
];