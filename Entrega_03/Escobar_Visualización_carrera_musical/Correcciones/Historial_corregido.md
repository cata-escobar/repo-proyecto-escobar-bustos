# Documentación

## Historial de procesos y decisiones

La construcción de esta base de datos tuvo como objetivo categorizar e individualizar la discografía de las bandas y proyectos solistas liderados tanto por los hermanos Gallagher como por Damon Albarn. Para lograr este objetivo, se definió como unidad de observación el “elemento discográfico individual de cada artista/banda/proyecto”, de manera que cada disco lanzado al mercado musical corresponde a una unidad dentro de la base de datos.

Para construir la base se llevó a cabo un proceso porgreside, que inició con la recolección de todos los elementos discográficos disponibles en la web, para luego aplicar criterios de exclusión y clasificación de los mismos. El tratamiento se llevó a cabo utilizando planillas de Excel, complementando con la búsqueda manual de datos en páginas web especializadas, para comprobar la fuente de cada dato obtenido.

### 1. Búsqueda inicial y revisión documental exploratoria.

La recolección de los datos inició con una búsqueda en el motor “Ecosia” de las discografías individuales de los proyectos oficiales vinculados a los miembros fundadores de Oasis y Blur. En este proceso, se dio con las páginas de MusicBrainz y Wikipedia como fuentes principales para caracterizar la discografía, dada la amplia disponibilidad de información que ofrecían al respecto.

De esta manera, MusicBrainz se utilizó como fuente primaria para la recolección de nombres, tipos y años de lanzamiento de cada disco, y Wikipedia se utilizó para comprobar cada unidad de información. En ambas páginas se obtuvo la información discográfica completa de Blur, Oasis, Noel Gallagher, Liam Gallagher, Damon Albarn, Gorillaz, Noel Gallagher's High Flying Birds, The Good, the Bad & the Queen y Beady Eye.

Como primer criterio de selección, se excluyeron producciones discográficas que no tuvieran como principal colaborador a estos artistas/grupos.

### 2. Recopilación de metadatos base.

Se procedió a extraer desde la base digital MusicBrainz el nombre del lanzamiento, el año de publicación y el autor, filtrando y limitando la base únicamente a producciones comercializadas en formato físico que tuvieran relevancia en el mercado, descartando bootlegs no oficiales o sencillos. Se optó por considerar la discografía física para evitar la repetición de producciones remasterizadas digitalmente o relanzamientos de aniversario digitales que hayan sido publicados en plataformas de streaming después de la fecha original.

Los datos encontrados se transcribieron de manera manual a una planilla de Excel, la cual se organizó en diez columnas: “identificador”, “artista/proyecto”, “tipo de discografía”, “nombre álbum”, “año de lanzamiento”, “UK peak”, “semanas chart UK”, “US peak”, “semanas chart US”, “certificación”. Inicialmente se completaron filas en las primeras cinco columnas, dado que la información que se pondrían en las otras cinco se recopilaría después. Esta organización de la base de datos permitió individualizar la discografía e incluir elementos que no correspondían necesariamente a álbumes, e incluir compilaciones y grabaciones en vivo.

La discografía se ordenó de acuerdo a la cronología de lanzamiento de cada elemento decir, se ordenó por año. El identificador siguió esta lógica y se ordenaron los discos partiendo desde el 001 de acuerdo al año en que habían sido lanzados. Se individualizó cada disco en una fila.

### 3. Verificación y contrastación de datos.

Paralelamente a la recolección de datos desde MusicBrainz, se cruzaron estos datos con las secciones discográficas de Wikipedia de cada artista y proyecto, y se hizo una revisión final con ayuda de Discogs, página a la que se llegó a través de la búsqueda web inicial. Este cruce de datos garantiza la precisión de los años de lanzamiento originales y la correcta atribución de autoría.

El cruce de datos permitió revisar que el nombre de cada disco estuviera bien escrito, y en caso de existir diferencias en la redacción de cada título, se optó por quedarse con el nombre tal cual aparecía en MusicBrainz.

### 4. Extracción de métricas del Reino Unido.

Una vez obtenidos los datos esenciales de la base, se procedió con la búsqueda de las métricas estadísticas de cada unidad de observación. El uso de esta información sirve para comparar de manera estandarizada el alcance que tuvo cada artista/proyecto.

Se realizó una búsqueda web de bibliotecas de información con métricas del Reino Unido y se llegó al sitio web de Official Charts. Dentro del sitio, se utilizó el buscador interno para encontrar las tablas de posición de cada artista/proyecto, extrayendo el posicionamiento máximo y la permanencia total histórica de cada disco en las tablas británicas. 

En los casos donde el disco no logró entrar las listas o que no existiera registro de su posición, se tomó la decisión de rellenar la celda con el valor estándar “-” para evitar la valoración errónea de un dato no existente.

La información de las métricas obtenidas para cada disco en el Reino Unido se contrastó con los datos de la página web ChartMasters, la cual funciona como una biblioteca de estadísticas musicales.

### 5. Extracción de métricas de Estados Unidos.

De la misma manera, para encontrar datos de las métricas estadounidenses, que son consideradas como las internacionales o mundiales por la industria, se repitió el proceso de búsqueda en la web. Así, se llegó a la página web de la lista Billboard 200, la cual era de acceso público (a diferencia de la lista Billboard 100). 

Dentro del sitio web, se utilizó el buscador interno para encontrar el dashboard de cada artista/proyecto a analizar, extrayendo el posicionamiento máximo y la permanencia total histórica de cada disco en las listas estadounidenses. De igual forma, se rellenó con “-” las celdas de los discos que no lograron entrar en la lista.

Al igual que con las métricas británicas, se contrastó la información obtenida para las métricas de Estados Unidos con la información entregada por ChartMasters. 

### 6. Identificación de galardones comerciales.

Una vez recopilados los datos sobre las métricas, se realizó un rastreo digital en las secciones discográficas de Wikipedia de cada artista/proyecto para dar con la certificación otorgada por la British Phonographic Industry a cada disco. Se decidió no incluir en la base de datos las certificaciones entregadas por otras organizaciones ya que no todos los discos galardonados contaban con segundas o terceras certificaciones.

Se completaron las filas en las que el disco había logrado una certificación, y en el caso de aquellos que no obtuvieron galardón, se optó por catalogarlos como N/A para evitar errores de interpretación.

### 7. Reestructuración de las columnas.

Antes de unir las bases individuales de cada artista/proyecto en un único archivo, se renombraron las columnas para que estuvieran en concordancia con las variables definidas para la investigación, quedando: “album_id”, “artista_proyecto”, “tipo__discografía”, “nombre_album”, “año_lanzamiento”, “UK_peak”, “semanas_chart_UK”, “US_peak”, “semanas_chart_US”, “certificación_BPI”.

Se decidió unificar las columnas al eliminar el uso de tildes, espacios, comas y mayúsculas, para facilitar la lectura del archivo en formatos como Google Colab y CSV.

### 8. Unificación de bases y asignación de clave primaria única.

Para finalizar, se unificó la información recolectada en cada base individual en un único archivo, y se creó un identificador único para cada fila, siguiendo el esquema [ARTISTA]_[CORRELATIVO]. 

Esta diferenciación se hizo para evitar que se repitieran identificadores entre discos de distintos grupos, facilitando a la vez la identificación del artista/proyecto al cual pertenecía cada uno.

### 9. Reordenamiento por año de lanzamiento.

Una vez finalizado el proceso de unificación de las bases, se ordenaron los datos de acuerdo al año de lanzamiento de cada unidad de análisis, sin agrupar los discos por artista/proyecto. Esto se realizó para que así se pueda estudiar la evolución en el tiempo de la discografía en conjunto de los proyectos musicales.


## Fuentes de datos utilizadas

Las fuentes que se utilizaron para recolectar los datos se identificaron mediante la búsqueda web en el motor “Ecosia”, seleccionándolas de acuerdo a la calidad y cantidad de la información que contenían, teniendo en cuenta también la confiabilidad de cada fuente. Por ejemplo, la información de Wikipedia no se utilizó sin antes verificarla con otras fuentes.

* MusicBrainz: Recopilación de información de nombres, años de lanzamiento y autores de los álbumes registrados en la base de datos.

* ChartMasters: Verificación de la posición máxima alcanzada por cada álbum de cada banda.

* Official Charts: Recopilación de información sobre la posición máxima alcanzada y las semanas en tablas británicas de cada disco analizado.

* Billboard 200: Recopilación de información sobre la posición máxima alcanzada y las semanas en tablas estadounidenses de cada disco analizado.

* Wikipedia: Revisión de la discografía conocida de cada banda analizada. Recopilación de información sobre la certificación BPI alcanzada por cada álbum analizado.

* Discogs: Revisión de años de lanzamiento y autoría de cada disco analizado.

Se utilizaron varias fuentes para asegurar la precisión de los datos y su veracidad, ya que ninguna fuente entregaba toda la información necesaria para armar la base de datos.

## Preguntas que permite responder la base

1. ¿Quién logró una mayor penetración en el mercado de Estados Unidos: Damon Albarn (Blur / Gorillaz) o los hermanos Gallagher (Oasis / solistas)?

2. ¿Qué porcentaje de la discografía de estas bandas corresponde a material de archivo y nostalgia (en vivo, compilaciones) frente a innovación (álbumes de estudio)?

3. ¿Asegurar el número 1 en Reino Unido garantiza una larga vida comercial del disco?

