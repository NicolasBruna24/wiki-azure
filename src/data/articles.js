export const ARTICLES = {
  introduction: [
    {
      id: 'what-is-azure',
      title: '¿Qué es Microsoft Azure?',
      category: 'introduction',
      excerpt:
        'Microsoft Azure es la plataforma de computación en la nube pública de Microsoft que ofrece más de 200 productos y servicios en la nube.',
      content: `
<h2>¿Qué es Microsoft Azure?</h2>
<p>
  Microsoft Azure es una plataforma de computación en la nube pública creada por Microsoft. Proporciona una amplia gama de servicios en la nube, incluidos servicios para computación, análisis, almacenamiento y redes.
</p>
<p>
  Azure se ejecuta en una red global de centros de datos gestionados por Microsoft, lo que permite a las organizaciones ejecutar aplicaciones y almacenar datos cerca de sus usuarios.
</p>
<h3>Puntos clave</h3>
<ul>
  <li>Es una nube pública: los recursos son propiedad de Microsoft y se comparten entre múltiples clientes de forma aislada y segura.</li>
  <li>Ofrece más de 200 servicios y productos en la nube.</li>
  <li>Permite ejecutar aplicaciones existentes o crear nuevas soluciones desde cero.</li>
  <li>Se paga por uso: solo pagas por los recursos que consumes.</li>
</ul>
<div class="bg-info">
  <p><strong>Ejemplo práctico:</strong> Una empresa puede migrar su servidor de archivos local a Azure Files y acceder a los documentos desde cualquier lugar sin mantener hardware físico en su oficina.</p>
</div>
`,
    },
    {
      id: 'what-is-cloud',
      title: '¿Qué es la computación en la nube?',
      category: 'introduction',
      excerpt:
        'La computación en la nube es la entrega de servicios de informática a través de Internet, sin necesidad de poseer infraestructura física.',
      content: `
<h2>¿Qué es la computación en la nube?</h2>
<p>
  La computación en la nube es la entrega de servicios de informática —servidores, almacenamiento, bases de datos, redes, software, análisis e inteligencia— a través de Internet para ofrecer innovación más rápida, recursos flexibles y economías de escala.
</p>
<p>
  En lugar de comprar, poseer y mantener centros de datos y servidores físicos, accedes a servicios tecnológicos a través de Internet y pagas solo por lo que usas.
</p>
<h3>Modelos de implementación principales</h3>
<ul>
  <li><strong>Nube pública:</strong> Recursos propiedad de un proveedor (como Microsoft Azure) compartidos por múltiples organizaciones vía Internet.</li>
  <li><strong>Nube privada:</strong> Recursos utilizados exclusivamente por una sola organización.</li>
  <li><strong>Nube híbrida:</strong> Combina nube pública y privada, permitiendo compartir datos y aplicaciones entre ambas.</li>
</ul>
<div class="bg-info">
  <p><strong>Ventaja clave:</strong> Convertir gastos de capital (CapEx) en gastos operativos (OpEx), ya que no necesitas invertir en hardware costoso de antemano.</p>
</div>
`,
    },
    {
      id: 'azure-history',
      title: 'Historia y evolución de Azure',
      category: 'introduction',
      excerpt:
        'Azure se lanzó en 2010 como Windows Azure y ha evolucionado hasta convertirse en una de las principales plataformas de nube del mundo.',
      content: `
<h2>Historia y evolución de Azure</h2>
<p>
  Microsoft anunció Azure en octubre de 2008 y lo lanzó comercialmente el 1 de febrero de 2010 bajo el nombre de <strong>Windows Azure</strong>. Inicialmente se centraba en ofrecer una plataforma como servicio (PaaS) para desarrolladores de .NET.
</p>
<p>
  Con el tiempo, Azure se expandió para incluir infraestructura como servicio (IaaS), servicios de inteligencia artificial, Internet de las cosas (IoT) y mucho más. En 2014, el servicio se renombró simplemente como <strong>Microsoft Azure</strong> para reflejar su soporte para múltiples sistemas operativos, lenguajes de programación y frameworks.
</p>
<h3>Hitos importantes</h3>
<ul>
  <li><strong>2010:</strong> Lanzamiento de Windows Azure.</li>
  <li><strong>2012:</strong> Incorporación de máquinas virtuales (IaaS).</li>
  <li><strong>2014:</strong> Renombrado a Microsoft Azure.</li>
  <li><strong>Actualidad:</strong> Más de 60 regiones y cientos de servicios disponibles.</li>
</ul>
`,
    },
    {
      id: 'what-is-azure-for',
      title: '¿Para qué sirve Azure?',
      category: 'introduction',
      excerpt:
        'Azure sirve para crear, implementar y administrar aplicaciones y servicios a través de una red mundial de centros de datos administrados por Microsoft.',
      content: `
<h2>¿Para qué sirve Azure?</h2>
<p>
  Azure sirve para crear, probar, implementar y administrar aplicaciones y servicios a través de centros de datos administrados por Microsoft. Proporciona software como servicio (SaaS), plataforma como servicio (PaaS) e infraestructura como servicio (IaaS).
</p>
<h3>Casos comunes de uso</h3>
<ul>
  <li><strong>Alojamiento de aplicaciones web y móviles:</strong> Con Azure App Service y Azure Kubernetes Service.</li>
  <li><strong>Almacenamiento y copias de seguridad:</strong> Con Azure Blob Storage, Files y Azure Backup.</li>
  <li><strong>Bases de datos:</strong> Con Azure SQL Database y Cosmos DB.</li>
  <li><strong>Análisis de datos y Big Data:</strong> Con Azure Synapse Analytics y Power BI.</li>
  <li><strong>Inteligencia artificial y machine learning:</strong> Con Azure Machine Learning y Azure AI Services.</li>
  <li><strong>Internet de las cosas (IoT):</strong> Con Azure IoT Hub.</li>
</ul>
`,
    },
    {
      id: 'azure-benefits',
      title: 'Ventajas y beneficios de Azure',
      category: 'introduction',
      excerpt:
        'Azure ofrece escalabilidad, seguridad, alcance global, hibridismo y un modelo de precios flexible basado en el consumo.',
      content: `
<h2>Ventajas y beneficios de Azure</h2>
<ul>
  <li><strong>Escalabilidad:</strong> Escala recursos hacia arriba o hacia abajo según la demanda, automáticamente o manualmente.</li>
  <li><strong>Seguridad:</strong> Cuenta con más de 3.500 expertos en ciberseguridad y certificación de cumplimiento en más de 90 estándares.</li>
  <li><strong>Alcance global:</strong> Presencia en decenas de regiones alrededor del mundo para reducir la latencia y cumplir con soberanía de datos.</li>
  <li><strong>Hibridismo:</strong> Azure Arc y Azure Stack permiten extender servicios de Azure a entornos locales y de otros proveedores.</li>
  <li><strong>Modelo de pago por uso:</strong> Solo pagas por los recursos que consumes, sin costos iniciales de hardware.</li>
  <li><strong>Integración con el ecosistema Microsoft:</strong> Trabaja nativamente con Windows Server, SQL Server, Microsoft 365 y Dynamics 365.</li>
</ul>
`,
    },
    {
      id: 'service-models',
      title: 'Modelos de servicio: IaaS, PaaS y SaaS',
      category: 'introduction',
      excerpt:
        'Azure ofrece tres modelos principales de computación en la nube: infraestructura como servicio, plataforma como servicio y software como servicio.',
      content: `
<h2>Modelos de servicio: IaaS, PaaS y SaaS</h2>
<h3>IaaS - Infraestructura como Servicio</h3>
<p>
  El proveedor de nube ofrece infraestructura informática básica (servidores virtuales, almacenamiento y redes). Tú gestionas el sistema operativo, middleware, tiempo de ejecución y aplicaciones.
</p>
<p><strong>Ejemplo en Azure:</strong> Azure Virtual Machines.</p>
<h3>PaaS - Plataforma como Servicio</h3>
<p>
  El proveedor entrega una plataforma completa que incluye infraestructura, sistema operativo y herramientas de desarrollo. Tú te enfocas en desarrollar y desplegar aplicaciones sin gestionar servidores ni almacenamiento.
</p>
<p><strong>Ejemplo en Azure:</strong> Azure App Service, Azure Functions.</p>
<h3>SaaS - Software como Servicio</h3>
<p>
  El proveedor entrega aplicaciones completas a través de Internet. Tú solo usas el software mediante un navegador, sin preocuparte por infraestructura ni mantenimiento.
</p>
<p><strong>Ejemplo en Azure:</strong> Microsoft 365, Dynamics 365.</p>
<table class="data-table">
  <thead>
    <tr><th>Modelo</th><th>Gestiona el proveedor</th><th>Gestiona el cliente</th><th>Ejemplo en Azure</th></tr>
  </thead>
  <tbody>
    <tr><td>IaaS</td><td>Hardware, virtualización, red, almacenamiento</td><td>Sistema operativo, middleware, aplicaciones, datos</td><td>Virtual Machines</td></tr>
    <tr><td>PaaS</td><td>IaaS + sistema operativo, middleware, runtime</td><td>Aplicaciones y datos</td><td>App Service, Functions</td></tr>
    <tr><td>SaaS</td><td>Todo el stack tecnológico</td><td>Uso y configuración de la aplicación</td><td>Microsoft 365</td></tr>
  </tbody>
</table>
`,
    },
    {
      id: 'deployment-models',
      title: 'Modelos de implementación: pública, privada e híbrida',
      category: 'introduction',
      excerpt:
        'Azure soporta tres modelos de implementación de nube: pública, privada e híbrida, cada uno adaptado a diferentes necesidades de negocio.',
      content: `
<h2>Modelos de implementación</h2>
<h3>Nube pública</h3>
<p>
  Los recursos de computación son propiedad de un proveedor de servicios en la nube (como Microsoft) y se ofrecen a través de Internet. Varios clientes comparten la misma infraestructura de forma aislada y segura.
</p>
<p><strong>Ejemplo:</strong> Crear una máquina virtual en Azure y acceder a ella desde Internet.</p>
<h3>Nube privada</h3>
<p>
  Los recursos de computación se utilizan exclusivamente por una sola organización. Pueden alojarse en el centro de datos de la organización o ser gestionados por un tercero.
</p>
<p><strong>Ejemplo:</strong> Azure Stack, que lleva servicios de Azure a centros de datos locales.</p>
<h3>Nube híbrida</h3>
<p>
  Combina nube pública y nube privada, permitiendo que datos y aplicaciones se compartan entre ambas. Ofrece mayor flexibilidad y opciones de implementación.
</p>
<p><strong>Ejemplo:</strong> Ejecutar una aplicación en Azure pero conectarla a una base de datos local mediante Azure VPN Gateway o ExpressRoute.</p>
<div class="bg-info">
  <p><strong>Azure Arc</strong> es el servicio de Microsoft que permite gestionar servidores, clústeres de Kubernetes y servicios de datos fuera de Azure, extendiendo la nube híbrida.</p>
</div>
`,
    },
  ],
  compute: [
    {
      id: 'azure-virtual-machines',
      title: 'Azure Virtual Machines',
      category: 'compute',
      excerpt:
        'Azure Virtual Machines es un servicio de infraestructura como servicio (IaaS) que permite crear y usar máquinas virtuales en la nube.',
      content: `
<h2>Azure Virtual Machines</h2>
<p>
  Azure Virtual Machines (VM) es uno de los servicios de computación bajo demanda de Azure. Proporciona virtualización de servidores sin necesidad de comprar y mantener el hardware físico. Tú tienes control total sobre el sistema operativo y las aplicaciones instaladas.
</p>
<h3>Características principales</h3>
<ul>
  <li>Elección de sistemas operativos: Windows Server, Linux (Ubuntu, CentOS, SUSE, Red Hat), etc.</li>
  <li>Diferentes tamaños de VM según necesidades de CPU, memoria y almacenamiento.</li>
  <li>Discos gestionados (Azure Disk Storage) para almacenamiento duradero.</li>
  <li>Escalado con Azure Virtual Machine Scale Sets.</li>
</ul>
<div class="bg-info">
  <p><strong>Cuándo usarlo:</strong> Cuando necesitas control total del sistema operativo, migrar servidores locales "tal cual" o ejecutar aplicaciones que requieren configuraciones personalizadas del servidor.</p>
</div>
`,
    },
    {
      id: 'azure-app-service',
      title: 'Azure App Service',
      category: 'compute',
      excerpt:
        'Azure App Service es un servicio de plataforma como servicio (PaaS) para hospedar aplicaciones web, móviles y APIs.',
      content: `
<h2>Azure App Service</h2>
<p>
  Azure App Service es un servicio completamente administrado para hospedar aplicaciones web, APIs REST y aplicaciones móviles. Es una oferta de PaaS, lo que significa que Microsoft gestiona la infraestructura (servidores, almacenamiento, redes) y tú te concentras en el código de tu aplicación.
</p>
<h3>Características principales</h3>
<ul>
  <li>Soporte para .NET, .NET Core, Java, Node.js, Python, PHP y Ruby.</li>
  <li>Escalado automático según la carga.</li>
  <li>Despliegue continuo desde GitHub, Azure DevOps o contenedores Docker.</li>
  <li>Certificados SSL gratuitos y dominios personalizados.</li>
</ul>
<div class="bg-info">
  <p><strong>Cuándo usarlo:</strong> Cuando quieres publicar una aplicación web o API sin preocuparte por administrar servidores.</p>
</div>
`,
    },
    {
      id: 'azure-functions',
      title: 'Azure Functions',
      category: 'compute',
      excerpt:
        'Azure Functions es un servicio de computación sin servidor (serverless) que ejecuta código en respuesta a eventos sin administrar infraestructura.',
      content: `
<h2>Azure Functions</h2>
<p>
  Azure Functions es una solución de computación sin servidor que te permite ejecutar fragmentos de código (funciones) en respuesta a eventos, como una solicitud HTTP, un mensaje en una cola o la subida de un archivo a Blob Storage.
</p>
<h3>Características principales</h3>
<ul>
  <li>No hay servidores que administrar.</li>
  <li>Se escala automáticamente según el número de eventos.</li>
  <li>Pagas solo por el tiempo de ejecución de tu código.</li>
  <li>Soporte para C#, JavaScript, Python, Java, PowerShell y más.</li>
</ul>
<div class="bg-info">
  <p><strong>Cuándo usarlo:</strong> Para tareas ligeras y eventos, como procesar una imagen al subirla, enviar correos electrónicos o exponer un endpoint HTTP simple.</p>
</div>
`,
    },
    {
      id: 'azure-kubernetes-service',
      title: 'Azure Kubernetes Service (AKS)',
      category: 'compute',
      excerpt:
        'Azure Kubernetes Service (AKS) es un servicio de Kubernetes administrado que simplifica el despliegue, gestión y operaciones de contenedores.',
      content: `
<h2>Azure Kubernetes Service (AKS)</h2>
<p>
  AKS es un servicio de Kubernetes completamente administrado que reduce la complejidad de implementar y administrar contenedores. Kubernetes es un sistema de código abierto para automatizar el despliegue, escalado y gestión de aplicaciones en contenedores.
</p>
<h3>Características principales</h3>
<ul>
  <li>Nodos y plano de control de Kubernetes administrados por Microsoft.</li>
  <li>Actualizaciones y parches automáticos.</li>
  <li>Escalado automático de nodos y pods.</li>
  <li>Integración con Azure Monitor y Azure Policy.</li>
</ul>
<div class="bg-info">
  <p><strong>Cuándo usarlo:</strong> Cuando tu aplicación está basada en microservicios o contenedores y necesitas orquestación a gran escala.</p>
</div>
`,
    },
  ],
  storage: [
    {
      id: 'azure-blob-storage',
      title: 'Azure Blob Storage',
      category: 'storage',
      excerpt:
        'Azure Blob Storage es el servicio de almacenamiento de objetos de la nube de Microsoft, optimizado para grandes volúmenes de datos no estructurados.',
      content: `
<h2>Azure Blob Storage</h2>
<p>
  Azure Blob Storage es el servicio de almacenamiento de objetos de Azure. Está optimizado para almacenar grandes cantidades de datos no estructurados, como texto o datos binarios (imágenes, videos, documentos, archivos de registro, copias de seguridad).
</p>
<h3>Niveles de acceso</h3>
<ul>
  <li><strong>Caliente (Hot):</strong> Para datos a los que se accede con frecuencia.</li>
  <li><strong>Frio (Cool):</strong> Para datos poco frecuentes, almacenados al menos 30 días.</li>
  <li><strong>Archivo (Archive):</strong> Para datos raramente accesibles, almacenados al menos 180 días, con menor costo pero mayor tiempo de recuperación.</li>
</ul>
<div class="bg-info">
  <p><strong>Ejemplo:</strong> Almacenar fotos de perfil de usuarios en una aplicación web.</p>
</div>
`,
    },
    {
      id: 'azure-files',
      title: 'Azure Files',
      category: 'storage',
      excerpt:
        'Azure Files ofrece recursos compartidos de archivos en la nube totalmente administrados, accesibles mediante el protocolo SMB.',
      content: `
<h2>Azure Files</h2>
<p>
  Azure Files es un servicio de almacenamiento de archivos totalmente administrado que ofrece recursos compartidos de archivos en la nube mediante el protocolo estándar SMB (Server Message Block) y el protocolo NFS.
</p>
<h3>Características principales</h3>
<ul>
  <li>Accesible desde Windows, Linux y macOS.</li>
  <li>Puede montarse en máquinas virtuales de Azure o en servidores locales.</li>
  <li>Sincronización opcional con Azure File Sync para servidores de archivos locales.</li>
</ul>
<div class="bg-info">
  <p><strong>Ejemplo:</strong> Reemplazar un servidor de archivos local por un recurso compartido en Azure al que varios empleados acceden simultáneamente.</p>
</div>
`,
    },
    {
      id: 'azure-disk-storage',
      title: 'Azure Disk Storage',
      category: 'storage',
      excerpt:
        'Azure Disk Storage ofrece almacenamiento en bloque de alto rendimiento y alta durabilidad para máquinas virtuales de Azure.',
      content: `
<h2>Azure Disk Storage</h2>
<p>
  Azure Disk Storage ofrece discos en bloque de alto rendimiento y alta durabilidad para Azure Virtual Machines. Funciona como un disco duro físico pero en la nube, y se adjunta a una VM para almacenar el sistema operativo, datos y aplicaciones.
</p>
<h3>Tipos de discos</h3>
<ul>
  <li><strong>Discos Ultra:</strong> Para cargas de trabajo exigentes de I/O intensivo.</li>
  <li><strong>SSD Premium:</strong> Para aplicaciones de producción sensibles al rendimiento.</li>
  <li><strong>SSD Estándar:</strong> Para cargas de trabajo de desarrollo y pruebas.</li>
  <li><strong>HDD Estándar:</strong> Para cargas de trabajo poco frecuentes y copias de seguridad.</li>
</ul>
<div class="bg-info">
  <p><strong>Ejemplo:</strong> El disco C: de una máquina virtual de Azure se aloja en Azure Disk Storage.</p>
</div>
`,
    },
  ],
  databases: [
    {
      id: 'azure-sql-database',
      title: 'Azure SQL Database',
      category: 'databases',
      excerpt:
        'Azure SQL Database es una base de datos relacional totalmente administrada basada en el motor de Microsoft SQL Server.',
      content: `
<h2>Azure SQL Database</h2>
<p>
  Azure SQL Database es una base de datos relacional totalmente administrada basada en el motor de base de datos Microsoft SQL Server. Microsoft se encarga de las tareas de administración de bases de datos, como actualizaciones, parches, copias de seguridad y supervisión.
</p>
<h3>Características principales</h3>
<ul>
  <li>Alta disponibilidad integrada (99.995%).</li>
  <li>Copias de seguridad automáticas y restauración punto en el tiempo.</li>
  <li>Escalado de recursos sin tiempo de inactividad significativo.</li>
  <li>Compatible con aplicaciones existentes de SQL Server.</li>
</ul>
<div class="bg-info">
  <p><strong>Cuándo usarlo:</strong> Cuando necesitas una base de datos relacional tradicional para aplicaciones empresariales, ERP o sistemas transaccionales.</p>
</div>
`,
    },
    {
      id: 'azure-cosmos-db',
      title: 'Azure Cosmos DB',
      category: 'databases',
      excerpt:
        'Azure Cosmos DB es una base de datos NoSQL totalmente administrada y distribuida globalmente, diseñada para latencia baja a cualquier escala.',
      content: `
<h2>Azure Cosmos DB</h2>
<p>
  Azure Cosmos DB es una base de datos NoSQL totalmente administrada y distribuida globalmente. Está diseñada para ofrecer latencia de milisegundos de un dígito en cualquier escala y soporta múltiples modelos de datos y APIs.
</p>
<h3>Modelos y APIs soportados</h3>
<ul>
  <li>Core (SQL)</li>
  <li>MongoDB</li>
  <li>Cassandra</li>
  <li>Gremlin (grafos)</li>
  <li>Table (almacenamiento de tablas)</li>
</ul>
<div class="bg-info">
  <p><strong>Cuándo usarlo:</strong> Para aplicaciones que requieren escala global, baja latencia y datos no estructurados o semiestructurados, como catálogos de productos, perfiles de usuario o datos de IoT.</p>
</div>
`,
    },
  ],
  networking: [
    {
      id: 'azure-virtual-network',
      title: 'Azure Virtual Network',
      category: 'networking',
      excerpt:
        'Azure Virtual Network (VNet) es el bloque de construcción fundamental de la red privada en Azure.',
      content: `
<h2>Azure Virtual Network</h2>
<p>
  Azure Virtual Network (VNet) es el bloque de construcción fundamental de tu red privada en Azure. Permite que los recursos de Azure, como las máquinas virtuales, se comuniquen entre sí de forma segura, con Internet y con redes locales.
</p>
<h3>Características principales</h3>
<ul>
  <li>Aislamiento y segmentación de redes mediante subredes.</li>
  <li>Conectividad con Internet entrante y saliente.</li>
  <li>Conectividad entre recursos de Azure.</li>
  <li>Conectividad con recursos locales mediante VPN o ExpressRoute.</li>
  <li>Filtrado de tráfico y enrutamiento.</li>
</ul>
`,
    },
    {
      id: 'azure-vpn-gateway',
      title: 'Azure VPN Gateway',
      category: 'networking',
      excerpt:
        'Azure VPN Gateway envía tráfico cifrado entre una red virtual de Azure y una ubicación local a través de Internet público.',
      content: `
<h2>Azure VPN Gateway</h2>
<p>
  Azure VPN Gateway es un tipo de puerta de enlace de red virtual que envía tráfico cifrado entre una red virtual de Azure y una ubicación local a través de Internet público, o entre redes virtuales.
</p>
<h3>Tipos de conexión</h3>
<ul>
  <li><strong>Sitio a sitio (Site-to-Site):</strong> Conecta una red local completa a una red virtual de Azure.</li>
  <li><strong>Punto a sitio (Point-to-Site):</strong> Permite que clientes individuales se conecten a la red virtual desde cualquier lugar.</li>
</ul>
<div class="bg-info">
  <p><strong>Cuándo usarlo:</strong> Cuando necesitas conectar de forma segura tu red corporativa local con recursos en Azure sin usar una conexión privada dedicada.</p>
</div>
`,
    },
    {
      id: 'azure-load-balancer',
      title: 'Azure Load Balancer',
      category: 'networking',
      excerpt:
        'Azure Load Balancer es un equilibrador de carga de alto rendimiento y baja latencia para aplicaciones TCP y UDP.',
      content: `
<h2>Azure Load Balancer</h2>
<p>
  Azure Load Balancer es un equilibrador de carga de capa 4 (TCP/UDP) de alto rendimiento y baja latencia. Distribuye el tráfico entrante entre instancias sanas de backend para asegurar alta disponibilidad y rendimiento de red para tus aplicaciones.
</p>
<h3>Características principales</h3>
<ul>
  <li>Distribución de tráfico entre máquinas virtuales.</li>
  <li>Sondeos de estado para detectar instancias no saludables.</li>
  <li>Reglas de equilibrio de carga y reglas NAT de entrada.</li>
  <li>Disponible en niveles Básico y Estándar.</li>
</ul>
`,
    },
    {
      id: 'azure-dns',
      title: 'Azure DNS',
      category: 'networking',
      excerpt:
        'Azure DNS es un servicio de alojamiento para dominios DNS que proporciona resolución de nombres usando la infraestructura de Microsoft Azure.',
      content: `
<h2>Azure DNS</h2>
<p>
  Azure DNS es un servicio de alojamiento para dominios DNS que proporciona resolución de nombres usando la infraestructura de Microsoft Azure. Al hospedar tus dominios en Azure, puedes gestionar los registros DNS usando las mismas credenciales, API, herramientas y facturación que tus otros servicios de Azure.
</p>
<h3>Características principales</h3>
<ul>
  <li>Alta disponibilidad y rendimiento gracias a la red global de Microsoft.</li>
  <li>Compatibilidad con registros A, AAAA, CNAME, MX, TXT, NS y más.</li>
  <li>Integración con Azure Virtual Network para DNS privado.</li>
</ul>
<div class="bg-info">
  <p><strong>Ejemplo:</strong> Si tienes el dominio <code>miempresa.com</code>, puedes hospedar su zona DNS en Azure y crear registros para apuntar <code>www.miempresa.com</code> a tu aplicación en Azure.</p>
</div>
`,
    },
  ],
  security: [
    {
      id: 'microsoft-entra-id',
      title: 'Microsoft Entra ID',
      category: 'security',
      excerpt:
        'Microsoft Entra ID (antes Azure Active Directory) es el servicio de identidad y acceso basado en la nube de Microsoft.',
      content: `
<h2>Microsoft Entra ID</h2>
<p>
  Microsoft Entra ID, anteriormente conocido como Azure Active Directory (Azure AD), es el servicio de identidad y acceso basado en la nube de Microsoft. Permite a los empleados iniciar sesión y acceder a recursos externos, como Microsoft 365, el portal de Azure y miles de aplicaciones SaaS, así como a recursos internos como aplicaciones corporativas y la red local.
</p>
<h3>Características principales</h3>
<ul>
  <li>Inicio de sesión único (SSO) para múltiples aplicaciones.</li>
  <li>Autenticación multifactor (MFA) para mayor seguridad.</li>
  <li>Acceso condicional basado en riesgo, ubicación o dispositivo.</li>
  <li>Sincronización de identidades con Active Directory local mediante Azure AD Connect.</li>
</ul>
`,
    },
    {
      id: 'azure-key-vault',
      title: 'Azure Key Vault',
      category: 'security',
      excerpt:
        'Azure Key Vault es un servicio para almacenar de forma segura y controlar el acceso a claves, secretos y certificados.',
      content: `
<h2>Azure Key Vault</h2>
<p>
  Azure Key Vault es un servicio para almacenar de forma segura y controlar el acceso a claves, contraseñas (secretos), certificados y otros secretos utilizados por las aplicaciones y servicios en la nube. Evita que la información confidencial se codifique directamente en el código de la aplicación.
</p>
<h3>Qué almacena Key Vault</h3>
<ul>
  <li><strong>Claves:</strong> Claves criptográficas para cifrado y firmas digitales.</li>
  <li><strong>Secretos:</strong> Cadenas de conexión, contraseñas y claves de API.</li>
  <li><strong>Certificados:</strong> Certificados SSL/TLS y otros certificados públicos.</li>
</ul>
<div class="bg-info">
  <p><strong>Ejemplo:</strong> Una aplicación web almacena su cadena de conexión a base de datos en Key Vault en lugar de escribirla en un archivo de configuración.</p>
</div>
`,
    },
    {
      id: 'microsoft-defender-cloud',
      title: 'Microsoft Defender for Cloud',
      category: 'security',
      excerpt:
        'Microsoft Defender for Cloud ayuda a prevenir, detectar y responder a amenazas con mayor visibilidad y control sobre los recursos de Azure.',
      content: `
<h2>Microsoft Defender for Cloud</h2>
<p>
  Microsoft Defender for Cloud es una solución de gestión de la postura de seguridad en la nube (CSPM) y protección de cargas de trabajo en la nube (CWPP). Proporciona visibilidad unificada sobre la seguridad de tus recursos en Azure, entornos locales y otras nubes.
</p>
<h3>Capacidades principales</h3>
<ul>
  <li>Puntuación de seguridad segura (Secure Score) para evaluar tu postura.</li>
  <li>Recomendaciones de seguridad personalizadas.</li>
  <li>Detección de amenazas y alertas en tiempo real.</li>
  <li>Protección contra cargas de trabajo (máquinas virtuales, contenedores, bases de datos).</li>
</ul>
`,
    },
  ],
  costs: [
    {
      id: 'pay-as-you-go',
      title: 'Modelo de pago por uso',
      category: 'costs',
      excerpt:
        'En el modelo de pago por uso solo pagas por los recursos que consumes y durante el tiempo que los usas.',
      content: `
<h2>Modelo de pago por uso</h2>
<p>
  Azure utiliza principalmente un modelo de precios basado en el consumo. Solo pagas por los servicios y recursos que utilizas, durante el tiempo que los utilizas, sin costos iniciales ni compromiso a largo plazo en la mayoría de los servicios.
</p>
<h3>Factores que afectan el costo</h3>
<ul>
  <li>Tipo y tamaño del recurso (por ejemplo, tamaño de la máquina virtual).</li>
  <li>Región donde se implementa el recurso.</li>
  <li>Tiempo de uso (horas, minutos).</li>
  <li>Cantidad de datos transferidos y almacenados.</li>
</ul>
<div class="bg-info">
  <p><strong>Reservas:</strong> Azure ofrece descuentos por reserva si te comprometes a usar un servicio durante uno o tres años.</p>
</div>
`,
    },
    {
      id: 'pricing-calculator',
      title: 'Calculadora de precios de Azure',
      category: 'costs',
      excerpt:
        'La calculadora de precios de Azure permite estimar el costo mensual de los servicios antes de crear cualquier recurso.',
      content: `
<h2>Calculadora de precios de Azure</h2>
<p>
  La calculadora de precios es una herramienta gratuita de Microsoft que te permite estimar el costo mensual de los servicios de Azure antes de implementarlos. Puedes agregar servicios, configurar sus opciones y obtener una estimación detallada del gasto mensual.
</p>
<h3>Cómo usarla</h3>
<ol>
  <li>Accede a la calculadora de precios en el sitio oficial de Azure.</li>
  <li>Agrega los servicios que planeas usar (máquinas virtuales, bases de datos, almacenamiento, etc.).</li>
  <li>Configura la región, tamaño y cantidad de recursos.</li>
  <li>Revisa el estimado mensual total y ajusta según tu presupuesto.</li>
</ol>
<div class="bg-info">
  <p><strong>Importante:</strong> La calculadora ofrece una estimación, no un precio final garantizado.</p>
</div>
`,
    },
    {
      id: 'azure-resource-manager',
      title: 'Azure Resource Manager (ARM)',
      category: 'costs',
      excerpt:
        'Azure Resource Manager es el servicio de implementación y administración de Azure que permite organizar recursos como un grupo.',
      content: `
<h2>Azure Resource Manager (ARM)</h2>
<p>
  Azure Resource Manager es el servicio de implementación y administración de Azure. Proporciona una capa de administración que te permite crear, actualizar y eliminar recursos en tu cuenta de Azure.
</p>
<h3>Conceptos clave</h3>
<ul>
  <li><strong>Grupo de recursos:</strong> Contenedor lógico que agrupa recursos relacionados para facilitar su administración, control de acceso y facturación.</li>
  <li><strong>Plantillas ARM:</strong> Archivos JSON declarativos que definen la infraestructura que deseas implementar (infraestructura como código).</li>
  <li><strong>Control de acceso basado en roles (RBAC):</strong> Permite asignar permisos específicos a usuarios y grupos sobre recursos o grupos de recursos.</li>
</ul>
<div class="bg-info">
  <p><strong>Ejemplo:</strong> Con una plantilla ARM puedes implementar una máquina virtual, una red virtual y un disco al mismo tiempo, de forma repetible y consistente.</p>
</div>
`,
    },
  ],
  useCases: [
    {
      id: 'app-hosting',
      title: 'Hosting de aplicaciones',
      category: 'use-cases',
      excerpt:
        'Azure permite alojar aplicaciones web, móviles y APIs con alta disponibilidad y escalado automático.',
      content: `
<h2>Hosting de aplicaciones</h2>
<p>
  Azure ofrece múltiples opciones para alojar aplicaciones según el nivel de control y administración que necesites.
</p>
<table class="data-table">
  <thead>
    <tr><td>Necesidad</td><td>Servicio recomendado</td><td>Modelo</td></tr>
  </thead>
  <tbody>
    <tr><td>Aplicación web o API sin administrar servidores</td><td>Azure App Service</td><td>PaaS</td></tr>
    <tr><td>Aplicación basada en contenedores/Kubernetes</td><td>Azure Kubernetes Service (AKS)</td><td>Contenedores</td></tr>
    <tr><td>Control total del sistema operativo</td><td>Azure Virtual Machines</td><td>IaaS</td></tr>
    <tr><td>Código ejecutado por eventos</td><td>Azure Functions</td><td>Serverless</td></tr>
  </tbody>
</table>
`,
    },
    {
      id: 'data-storage',
      title: 'Almacenamiento de información',
      category: 'use-cases',
      excerpt:
        'Azure ofrece opciones de almacenamiento para archivos, bases de datos relacionales, NoSQL y objetos.',
      content: `
<h2>Almacenamiento de información</h2>
<p>
  Dependiendo del tipo de dato y el patrón de acceso, Azure ofrece el servicio de almacenamiento adecuado.
</p>
<table class="data-table">
  <thead>
    <tr><td>Tipo de información</td><td>Servicio recomendado</td></tr>
  </thead>
  <tbody>
    <tr><td>Archivos no estructurados (imágenes, videos, documentos)</td><td>Azure Blob Storage</td></tr>
    <tr><td>Recursos compartidos de archivos (SMB)</td><td>Azure Files</td></tr>
    <tr><td>Discos para máquinas virtuales</td><td>Azure Disk Storage</td></tr>
    <tr><td>Datos relacionales transaccionales</td><td>Azure SQL Database</td></tr>
    <tr><td>Datos NoSQL a escala global</td><td>Azure Cosmos DB</td></tr>
  </tbody>
</table>
`,
    },
    {
      id: 'backup-disaster-recovery',
      title: 'Respaldo y recuperación',
      category: 'use-cases',
      excerpt:
        'Azure proporciona servicios para proteger datos y aplicaciones contra fallos, desastres y ciberataques.',
      content: `
<h2>Respaldo y recuperación</h2>
<p>
  Azure ofrece soluciones para garantizar la continuidad del negocio y la recuperación ante desastres.
</p>
<ul>
  <li><strong>Azure Backup:</strong> Servicio sencillo y seguro para realizar copias de seguridad de datos en la nube y locales.</li>
  <li><strong>Azure Site Recovery:</strong> Orquesta la replicación y recuperación de máquinas virtuales y servidores físicos en caso de desastre.</li>
  <li><strong>Copias de seguridad automáticas en Azure SQL Database y Cosmos DB:</strong> Protección integrada para bases de datos.</li>
</ul>
<div class="bg-info">
  <p><strong>Estrategia recomendada:</strong> Sigue la regla 3-2-1: tres copias de los datos, en dos medios diferentes, con una copia fuera del sitio (por ejemplo, en Azure).</p>
</div>
`,
    },
    {
      id: 'enterprise-infrastructure',
      title: 'Infraestructura empresarial',
      category: 'use-cases',
      excerpt:
        'Azure permite migrar y ejecutar cargas de trabajo empresariales completas con identidad, seguridad y gobernanza integradas.',
      content: `
<h2>Infraestructura empresarial</h2>
<p>
  Las organizaciones pueden ejecutar su infraestructura de TI completa en Azure, desde servidores y redes hasta identidad y seguridad.
</p>
<ul>
  <li><strong>Identidad centralizada:</strong> Microsoft Entra ID para gestionar usuarios y accesos.</li>
  <li><strong>Redes privadas:</strong> Azure Virtual Network para conectar recursos de forma segura.</li>
  <li><strong>Gobernanza:</strong> Azure Policy y Azure Resource Manager para organizar y controlar recursos.</li>
  <li><strong>Seguridad unificada:</strong> Microsoft Defender for Cloud para monitorear amenazas.</li>
  <li><strong>Hibridismo:</strong> Azure Arc para extender la nube a entornos locales y multinube.</li>
</ul>
`,
    },
  ],
};

// Utilidades de búsqueda y acceso
export const getArticle = (categoryId, articleId) => {
  const articles = ARTICLES[categoryId];
  if (!articles) return null;
  return articles.find((a) => a.id === articleId) || null;
};

export const getArticlesByCategory = (categoryId) => {
  return ARTICLES[categoryId] || [];
};

export const ALL_ARTICLES_FLAT = Object.values(ARTICLES).flat();

export const getArticleBySlug = (slug) => {
  for (const categoryId of Object.keys(ARTICLES)) {
    const article = ARTICLES[categoryId].find((a) => a.id === slug);
    if (article) return article;
  }
  return null;
};

export const searchArticles = (query) => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return ALL_ARTICLES_FLAT.filter(
    (article) =>
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.content.toLowerCase().includes(q)
  );
};