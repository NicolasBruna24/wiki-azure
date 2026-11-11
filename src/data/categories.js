export const CATEGORIES = [
  {
    id: 'introduction',
    title: 'Introducción a Microsoft Azure',
    description: 'Conceptos fundamentales, qué es la nube y los modelos de servicio e implementación de Azure.',
    icon: 'Info',
    articleCount: 8,
  },
  {
    id: 'compute',
    title: 'Servicios de computación',
    description: 'Máquinas virtuales, App Service, Functions y Kubernetes Service (AKS).',
    icon: 'Layers',
    articleCount: 4,
  },
  {
    id: 'storage',
    title: 'Almacenamiento',
    description: 'Blob Storage, Files y Disk Storage para guardar datos en la nube.',
    icon: 'Database',
    articleCount: 3,
  },
  {
    id: 'databases',
    title: 'Bases de datos',
    description: 'Azure SQL Database y Cosmos DB para datos relacionales y NoSQL.',
    icon: 'Cylinder',
    articleCount: 2,
  },
  {
    id: 'networking',
    title: 'Redes',
    description: 'Virtual Network, VPN Gateway, Load Balancer y Azure DNS.',
    icon: 'Share2',
    articleCount: 4,
  },
  {
    id: 'security',
    title: 'Seguridad',
    description: 'Microsoft Entra ID, Key Vault y Microsoft Defender for Cloud.',
    icon: 'Shield',
    articleCount: 3,
  },
  {
    id: 'costs',
    title: 'Costos y administración',
    description: 'Modelo de pago por uso, calculadora de precios y Azure Resource Manager.',
    icon: 'CreditCard',
    articleCount: 3,
  },
  {
    id: 'use-cases',
    title: 'Casos de uso',
    description: 'Hosting de aplicaciones, almacenamiento, respaldo y recuperación, e infraestructura empresarial.',
    icon: 'Briefcase',
    articleCount: 4,
  },
  {
    id: 'glossary',
    title: 'Glosario',
    description: 'Conceptos técnicos de la nube explicados de manera sencilla.',
    icon: 'BookOpen',
    articleCount: 0,
  },
];

export const CATEGORY_BY_ID = Object.fromEntries(
  CATEGORIES.map((cat) => [cat.id, cat])
);

export const HOME_FEATURED = [
  {
    id: 'compute',
    title: 'Servicios de computación',
    description: 'Ejecuta aplicaciones y cargas de trabajo con máquinas virtuales, contenedores y funciones sin servidor.',
    icon: 'Layers',
    route: '/category/compute',
  },
  {
    id: 'storage',
    title: 'Almacenamiento',
    description: 'Almacena datos de forma segura y escalable con Blob Storage, Files y Disk Storage.',
    icon: 'Database',
    route: '/category/storage',
  },
  {
    id: 'databases',
    title: 'Bases de datos',
    description: 'Gestiona datos relacionales y NoSQL con Azure SQL Database y Cosmos DB.',
    icon: 'Cylinder',
    route: '/category/databases',
  },
  {
    id: 'networking',
    title: 'Redes',
    description: 'Conecta recursos y usuarios con Virtual Network, VPN Gateway, Load Balancer y DNS.',
    icon: 'Share2',
    route: '/category/networking',
  },
];

export const WHAT_YOU_WILL_LEARN = [
  'Entender qué es Microsoft Azure y cómo encaja en la computación en la nube.',
  'Diferenciar los modelos de servicio IaaS, PaaS y SaaS.',
  'Conocer los principales servicios de computación, almacenamiento y bases de datos.',
  'Diseñar arquitecturas de red seguras en la nube.',
  'Aplicar buenas prácticas de seguridad e identidad con Microsoft Entra ID.',
  'Estimar costos y administrar recursos con Azure Resource Manager.',
];
