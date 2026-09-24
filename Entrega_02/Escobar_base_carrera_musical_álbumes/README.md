# Documentación

## Historial de procesos y decisiones

La construcción de esta base de datos tuvo como objetivo categorizar e individualizar la discografía de las bandas y proyectos solistas liderados tanto por los hermanos Gallagher como por Damon Albarn, detallando el paso a paso del procesamiento, estandarización y depuración de los datos. 

El tratamiento se llevó a cabo utilizando planillas de Excel, complementando con la búsqueda manual de datos en páginas web especializadas, para comprobar la fuente de cada dato obtenido. Los pasos seguidos fueron los siguientes:

### 1. Búsqueda y revisión documental exploratoria.

Inicialmente se rastreó en la web la discografía de cada artista, banda y proyecto que se contempló en el estudio, delimitando el universo de estudio exclusivamente a los proyectos oficiales vinculados a los miembros fundadores de Oasis y Blur.

Dado que la selección de datos se realizó de manera manual, no se incluyeron producciones discográficas que no tuvieran como principal colaborador a estos artistas.

### 2. Recopilación de metadatos base.

Se procedió a extraer desde la base digital MusicBrainz el nombre del lanzamiento, el año de publicación y el autor, filtrando y limitando la base únicamente a producciones comercializadas en formato físico que tuvieran relevancia en el mercado, descartando bootlegs no oficiales o sencillos.

Esta decisión se tomó para evitar la repetición de producciones remasterizadas digitalmente o relanzamientos de aniversario digitales que hayan sido publicados en plataformas de streaming después de la fecha original.

### 3. Verificación y contrastación.

Paralelamente a la recolección de datos desde MusicBrainz, se cruzaron estos datos con las secciones discográficas de Wikipedia de cada artista y proyecto, y se hizo una revisión final con ayuda de Discogs. Este cruce de datos garantiza la precisión de los años de lanzamiento originales y la correcta atribución de autoría.

### 4. Extracción de métricas del Reino Unido.

Se consultó de forma manual el buscador histórico de Official Charts, extrayendo el posicionamiento máximo y la permanencia total histórica. En los casos donde el disco no logró entrar a la lista, se tomó la decisión de rellenar la celda con el valor estándar “-” para evitar la valoración errónea de un dato no existente.

### 5. Extracción de métricas de Estados Unidos.

De la misma manera, se consultó manualmente los archivos digitales de la lista Billboard 200 para extraer el posicionamiento máximo y la permanencia total histórica de cada disco. De igual forma, se rellenó con “-” las celdas de los discos que no lograron entrar en la lista.

### 6. Identificación de galardones comerciales.

Una vez obtenidas las métricas, se realizó un rastreo digital en las secciones discográficas de Wikipedia de cada artista, banda y proyecto para dar con la certificación otorgada por la British Phonographic Industry a cada disco. En el caso de aquellos que no obtuvieron galardón, se optó por catalogarlos como N/A para evitar errores de interpretación.


### 7. Unificación de bases y asignación de clave primaria única.

Para finalizar, se unificó la información recolectada en cada base individual en un único archivo, y se creó un identificador único para cada fila, siguiendo el esquema [ARTISTA]_[CORRELATIVO].

Esto se realizó para ordenar y diferenciar por artista cada disco, evitando así la confusión de autores en los casos de proyectos con nombres similares.

## Fuentes de datos utilizadas

* MusicBrainz: Recopilación de información de nombres, años de lanzamiento y autores de los álbumes registrados en la base de datos.

* ChartMasters: Verificación de la posición máxima alcanzada por cada álbum de cada banda.

* Official Charts: Recopilación de información sobre la posición máxima alcanzada y las semanas en tablas británicas de cada álbum analizado.

* Billboard 200: Recopilación de información sobre la posición máxima alcanzada y las semanas en tablas estadounidenses de cada álbum analizado.

* Wikipedia: Revisión de la discografía conocida de cada banda analizada. Recopilación de información sobre la certificación BPI alcanzada por cada álbum analizado.

Se utilizaron varias fuentes para asegurar la precisión de los datos y su veracidad.

## Preguntas que permite responder la base

1. ¿Quién logró una mayor penetración en el mercado de Estados Unidos: Damon Albarn (Blur / Gorillaz) o los hermanos Gallagher (Oasis / solistas)?

2. ¿Qué porcentaje de la discografía de estas bandas corresponde a material de archivo y nostalgia (en vivo, compilaciones) frente a innovación (álbumes de estudio)?

3. ¿Asegurar el número 1 en Reino Unido garantiza una larga vida comercial del disco?
