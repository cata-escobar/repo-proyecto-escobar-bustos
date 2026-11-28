# Análisis de sus visualizaciones en relación con la historia que están contando: ¿Qué dimensiones y mensajes quieren comunicar con ellas?

Con nuestra visualizaciones planeamos contar aspectos tanto numéricos como más puntuales sobre nuestra historia. Es por ello que, en cada sección, contamos con un gráfico principal que expone los principales matices de nuestra base de datos, siendo acompañado por visualizaciones más ilustrativas sobre aquellos puntos que queremos enfatizar o son detalles importantes dentro de nuestra historia. 

Por ejemplo, el quiebre de Oasis es importante a la hora de leer la gráfica de la vigencia musical; por ello, consideramos necesario añadir una visualización de una fotografía de ambos hermanos rompiéndose y separándose. Por otro lado, a la hora de hablar sobre las apariciones de canciones de cada protagonista en series, películas y videojuegos, usamos un gráfico al respecto pero también nos dimos cuenta que Song 2 es la canción que más figura en estas categorías, por lo que también decidimos añadir una visualización al respecto. 

En este sentido, las visualizaciones nos ayudan a reforzar nuestro mensaje: cómo y de qué manera se desarrollaron las carreras de Albarn y los Gallagher. Ofrecen un panorama más completo y contundente sobre los diferentes aspectos que nos ayudan a explicar la historia.

# Ficha técnica de las bases de datos.

## Ficha presencia en la cultura popular

### Fuente de los datos

La base de datos es de elaboración propia y se construyó mediante la recopilación manual de información disponible en distintas páginas web. Las fuentes se encontraron principalmente a través de búsquedas en Google y se seleccionaron según la información que ofrecían y su utilidad para identificar apariciones musicales, verificar registros y completar los datos.

* Google: se utilizó como buscador para localizar las fuentes iniciales y encontrar información complementaria sobre canciones y obras.

* TuneFind: se utilizó para identificar apariciones de canciones en películas y series. Contenía información sobre todos los artistas y proyectos incluidos en la investigación.

* Video Game Soundtracks Wiki: se utilizó para identificar posibles apariciones en videojuegos, principalmente de Blur, Oasis, Gorillaz y Beady Eye.

* MobyGames e IMDb: se consultaron para contrastar información sobre videojuegos específicos y verificar los registros.

* FilmAffinity: se utilizó para consultar y contrastar el año de estreno y el país de origen de películas y series.

* Wikipedia: se utilizó para complementar información sobre canciones y obras, verificar la escritura de los títulos mediante las discografías de los artistas y consultar datos como fechas y países de origen. También permitió identificar posibles apariciones musicales.

* Spotify: se consultó para comprobar la existencia de las canciones, consultar sus años de lanzamiento y revisar álbumes oficiales asociados a películas y series para buscar información sobre sus bandas sonoras.

* Reddit: se consultaron comunidades especializadas para investigar apariciones difíciles de localizar, especialmente en videojuegos y sus distintas ediciones.

Las fuentes cumplieron distintas funciones: algunas permitieron identificar posibles apariciones y otras ayudaron a verificar los registros o completar información faltante. Como ninguna contenía todos los datos necesarios, se recurrió a distintas páginas según las características de cada caso.

#### Metodología

La base de datos se construyó mediante la recopilación manual de información disponible en distintas fuentes digitales. La búsqueda inicial se realizó en Google y permitió identificar TuneFind como fuente principal para las apariciones en películas y series, y Video Game Soundtracks Wiki para las apariciones en videojuegos de Blur, Oasis, Gorillaz y Beady Eye. Para los demás proyectos musicales, se recurrió a otras páginas encontradas mediante Google, como Wikipedia, blogs y sitios dedicados a canciones específicas.

Los datos se transcribieron manualmente a una planilla de Excel, donde cada fila representaba una aparición específica de una canción en una película, serie o videojuego. Posteriormente, se estandarizaron los nombres de las canciones y las obras para unificar su escritura y evitar registros duplicados por diferencias en los títulos.

A continuación, se reorganizaron las columnas según las variables definidas para la investigación. Se eliminó la columna independiente de título del episodio, se incorporaron las variables relativas al país de origen de la obra y al año de lanzamiento de la canción, y se estandarizaron los nombres de las columnas para facilitar el procesamiento de los datos en Google Colab.

Luego, se realizaron dos etapas de limpieza. En la primera, se verificó la existencia de las canciones, la identificación de las obras y la relación entre ambas, utilizando distintas fuentes para corregir errores y completar información. Se eliminaron los registros incorrectos y aquellos cuya información no pudo corroborarse. En la segunda, se delimitó el universo de estudio mediante la exclusión de apariciones en reality shows, programas de farándula y materiales promocionales, como tráileres y adelantos. Se conservaron únicamente las apariciones en películas, series y videojuegos que cumplieran con los criterios definidos para la investigación.

Finalmente, los registros se ordenaron alfabéticamente por nombre de canción, manteniendo la agrupación por artista o proyecto musical. Asimismo, se incorporó la variable “appearance_id”, que asigna un identificador único a cada fila y permite distinguir y referenciar individualmente cada registro.

### Alcance de los datos

* Universo:La base considera canciones de 9 artistas y proyectos musicales: Blur, Oasis, Gorillaz, Beady Eye, Noel Gallagher's High Flying Birds, Damon Albarn, Liam Gallagher, Noel Gallagher y The Good, the Bad & the Queen.

* Alcance temporal: La base comprende canciones lanzadas originalmente entre 1991 y 2023 y registra sus apariciones en obras o producciones culturales estrenadas o publicadas entre 1995 y 2026.

* Alcance de los registros:  La base contiene 411 registros de apariciones, correspondientes a 146 canciones únicas y 235 obras o producciones culturales únicas, que corresponden a películas, series y videojuegos.

* Alcance geográfico: La base incluye producciones originarias de 11 países, concentrándose principalmente en Estados Unidos y Reino Unido. 

* Unidad de observación: Cada registro corresponde a una aparición de una canción en una obra cultural. Por ello, una misma canción puede figurar en varios registros si aparece en diferentes películas, series o videojuegos. Del mismo modo, una misma obra puede registrar apariciones de distintas canciones.

### Características de los datos

La base de datos está estructurada a nivel de aparición individual, donde cada fila representa una canción de alguno de los artistas o proyectos considerados que aparece en una película, serie o videojuego. Una misma canción puede aparecer en múltiples obras y, en esos casos, cada aparición se registra como una observación independiente.

Los datos están compuestos por variables identificadoras, descriptivas y temporales. El campo “appearance_id” corresponde a un identificador único asignado a cada registro. Respecto a “artista_proyecto” y “nombre_cancion” permiten identificar al artista o proyecto musical y la canción correspondiente.  En tanto, “tipo” clasifica la obra como película, serie o videojuego, mientras que “titulo_obra” registra su nombre. En el caso de las series, “temporada_episodio” permite especificar el capítulo en el que se registra la aparición.

Las variables temporales permiten diferenciar entre el año en que se produjo la aparición y el año de lanzamiento original de la canción: “aparicion” registra el año de estreno, emisión o lanzamiento de la obra en la que aparece la canción, mientras que “lanzamiento_cancion” corresponde al año de lanzamiento original de la composición. Esta distinción permite observar la distancia temporal entre la publicación de una canción y su posterior utilización en otras producciones culturales.

Por otra parte, “pais_obra” identifica el país de origen de la producción cultural. Cuando corresponde a una coproducción internacional, se registran los países involucrados. 

En conjunto, estas variables permiten analizar la presencia de las canciones en distintos tipos de productos culturales, períodos y contextos geográficos, además de comparar la recurrencia de determinadas canciones dentro de la cultura popular.

Los datos presentan principalmente variables categóricas (artista_proyecto, tipo, titulo_obra, pais_obra), variables temporales o numéricas (aparicion, lanzamiento_cancion) y una variable identificadora (appearance_id). La variable temporada_episodio corresponde a una variable descriptiva específica para las series y permanece vacía cuando el registro corresponde a una película o videojuego.

### Otras observaciones sobre la base

* La variable “temporada_episodio” presenta exactamente valores vacíos (NaN), los cuales coinciden de forma exacta con el total de películas y videojuegos de la base.

* “appearance_id” es un identificador único de cada aparición y no identifica a la canción. Una misma canción puede tener varios “appearance_id”.

* Cuando una canción aparece en distintas obras, cada aparición se mantiene como un registro independiente.

* Las versiones o remixes se mantienen diferenciados cuando la fuente permite identificarlos.

* El año de la canción corresponde a su lanzamiento original y no al año de la aparición en la obra.

### Diccionario de datos

| Variable              | Descripción                                                                                 | Tipo de dato          | Codificación / valores                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appearance_id`       | Identificador único de cada aparición registrada en la base.                                | Identificador / texto | Código alfanumérico único para cada registro, compuesto por una abreviación del artista o proyecto y un número correlativo.                                                   |
| `artista_proyecto`    | Nombre del artista o proyecto musical al que pertenece la canción.                          | Categórica / texto    | Oasis, Blur, Gorillaz, Beady Eye, The Good, the Bad & the Queen, Liam Gallagher, Noel Gallagher's High Flying Birds, Noel Gallagher o Damon Albarn.                           |
| `nombre_cancion`      | Nombre de la canción que aparece en la obra cultural.                                       | Categórica / texto    | Título de la canción según su denominación registrada en las fuentes consultadas.                                                                                             |
| `aparicion`           | Año de estreno, emisión o lanzamiento de la obra cultural en la que aparece la canción.     | Numérica / temporal   | Año expresado en formato de cuatro dígitos (AAAA).                                                                                                                            |
| `tipo`                | Tipo de producción cultural en la que aparece la canción.                                   | Categórica            | `Pelicula`, `Serie` o `Videojuego`.                                                                                                                                           |
| `titulo_obra`         | Título de la película, serie o videojuego en el que aparece la canción.                     | Categórica / texto    | Nombre oficial de la obra según las fuentes consultadas.                                                                                                                      |
| `temporada_episodio`  | Identifica la temporada y el episodio específico de una serie en el que aparece la canción. | Texto / categórica    | Se registra cuando la aparición corresponde a una serie y existe información corroborable. Se deja vacío para películas y videojuegos.                                        |
| `pais_obra`           | País o países de origen de la producción cultural.                                          | Categórica / texto    | País de origen de la obra. En el caso de coproducciones internacionales, se registran los países correspondientes.                                                            |
| `lanzamiento_cancion` | Año de lanzamiento original de la canción o composición musical.                            | Numérica / temporal   | Año expresado en formato de cuatro dígitos (AAAA). Corresponde al lanzamiento original de la canción, independientemente del año de la obra en la que posteriormente aparece. |

Se empleó IA para ayudar a construir la estructura del diccionario como una tabla.

## Ficha vigencia musical (álbumes)

### Fuente de los datos

Como la base de datos fue de elaboración propia, se construyó por medio de la recopilación manual de información de uso público que se encontraba disponible en distintos sitios web. Las fuentes se encontraron a través de una búsqueda web en el motor “Ecosia” y se fueron seleccionando de acuerdo a la calidad y la cantidad de la información disponible en ellas, teniendo como foco el poder clasificar e identificar la discografía de cada proyecto musical en estudio.

Las fuentes provienen de diversos sitios web especializados detallados a continuación:

* MusicBrainz: Este sitio es parte de un proyecto que busca crear una base de datos musical masiva, en forma de enciclopedia digital. En este caso, se utilizó para recopilar la información de nombres, años de lanzamiento y autores de los álbumes registrados en la base de datos.

* ChartMasters: Este sitio web recopila y actualiza a diario las tablas de posiciones (“charts”) de artistas, canciones y álbumes alrededor del mundo. En este caso, se utilizó para verificar la posición máxima alcanzada por cada álbum de cada banda.

* Official Charts: Este es el sitio web oficial de la Official UK Charts Company y compila los registros oficiales de tablas de posición de artistas en el Reino Unido. En este caso, se utilizó para recopilar información sobre la posición máxima alcanzada y las semanas en tablas británicas de cada álbum analizado.

* Billboard 200: Este es el sitio web oficial de la revista estadounidense especializada en música Billboard, que compila las mejores 200 canciones, álbumes y artistas de todos los tiempos y de cada semana en los Estados Unidos. En este caso, se utilizó para recopilar información sobre la posición máxima alcanzada y las semanas en tablas estadounidenses de cada álbum analizado.

* Wikipedia: Esta enciclopedia digital se utilizó para revisar la discografía conocida de cada banda analizada, recopilándose información sobre la certificación BPI alcanzada por cada álbum analizado.

### Metodología de la construcción de la base

La base de datos se construyó por medio de la recopilación manual de información de uso público que estuviera disponible en fuentes digitales. La búsqueda inicial se realizó en Ecosia, la cual arrojó los sitios MusicBrainz y Wikipedia como la principal fuente para las discografías de  Oasis y Blur, y secundariamente se utilizó el sitio Discogs para el cruce de información. Dentro de cada uno de estos sitios, se utilizaron los buscadores integrados para encontrar las páginas de los otros proyectos musicales, logrando encontrar la totalidad de ellos.

En una segunda búsqueda,  se pudo dar con los sitios web de Official Charts, Billboard 200 y ChartMasters como fuentes principales de las estadísticas y métricas de cada disco encontrado en la primera búsqueda.

Los datos obtenidos en cada búsqueda se transcribieron de manera manual a una planilla Excel, donde cada fila representaba a un disco y cada columna respondía a las variables a analizar en la investigación. Durante este proceso, se buscó estandarizar el nombre de cada disco para evitar repeticiones. Los datos se ordenaron de manera cronológica, respondiendo al año de lanzamiento de cada disco.

Se fueron realizando procesos de verificación y contrastación de los datos obtenidos tanto en la primera como en la segunda búsqueda, añadiendo la información correspondiente a la certificación máxima alcanzada por cada disco.

Luego de la transcripción de los datos, se estandarizaron las columnas de la planilla, con el fin de adecuarlas a las variables de estudio y facilitar su lectura a la hora de ser analizadas por otras herramientas.

Finalmente, se unificaron los registros en una única base de datos donde se reunieron las discografías de todos los proyectos musicales a estudiar. Durante este proceso se creó un código único de identificación para cada elemento, para facilitar la identificación de cada uno a la hora de leer la base y evitar confusiones. Así mismo, se volvió a ordenar todo de acuerdo al año de lanzamiento, sin agrupar los discos por autor.

### Alcance de los datos

*  **Universo:** La base considera un universo de 9 artistas y proyectos musicales: Oasis, Blur, Gorillaz, Noel Gallagher's High Flying Birds, Beady Eye, Damon Albarn (y sus proyectos en solitario), Liam Gallagher, Noel Gallagher y The Good, the Bad & the Queen.

* **Alcance temporal:** La base comprende discos musicales lanzados entre 1991 y 2026 en formatos físicos por los 9 autores analizados.

* **Alcance de los registros:** La base contiene 120 elementos discográficos de distinto tipo que comprenden la totalidad de los discos lanzados en formato físico por los artistas estudiados.

* **Unidad de observación:** Cada registro dentro de la base corresponde a un disco, lo que le entrega individualidad a cada elemento.

Esta base de datos permite realizar estudios comparativos y longitudinales sobre la evolución comercial, histórica y artística de las bandas y proyectos liderados por los Gallagher y Damon Albarn. En concreto la base:

* Permite rastrear la transición de los músicos desde sus bandas de origen (Blur, Oasis) hacia proyectos alternativos, carreras solistas o supergrupos (Gorillaz, The Good, the Bad & the Queen, High Flying Birds) a lo largo de más de tres décadas (desde 1991).

* Facilita evaluar la penetración internacional de estos artistas contrastando su rendimiento local en el Reino Unido frente a su éxito en Estados Unidos, utilizando las métricas de posición máxima y permanencia en los charts.

* Cuantifica la masividad e hito en ventas, permitiendo categorizar el estatus histórico y el volumen de ventas físicas o digitales de cada lanzamiento a través de las certificaciones de la BPI británica, identificando desde obras de nicho hasta fenómenos multiplatino.

* Permite observar cómo se estructura el catálogo de estos artistas en el tiempo mediante las 15 categorizaciones que realiza, identificando la proporción y el rendimiento de álbumes de estudio frente a discos en vivo, recopilatorios, transmisiones especiales o colaboraciones experimentales.

### Características de los datos

Las principales características de los datos recopilados en esta base de datos se pueden dividir en volumen, tipología, temporalidad y calidad de la información que entregan.

* **Volumen y estructura:** El set de datos es de tamaño manejable pero denso en variables, compuesto por una matriz de 120 filas (que contempla observaciones o lanzamientos) y 10 columnas (que contempla las variables o atributos). 

* **Temporalidad:** Los datos abarcan una ventana temporal ininterrumpida de 35 años de historia musical, con registros que comienzan con el lanzamiento del álbum Leisure en 1991 y se proyectan hasta el año 2026.

* **Tipología de variables mixtas:** La base utiliza variables de tipo identificadoras (llaves primarias alfanuméricas album_id para evitar duplicidades o confusiones con álbumes homónimos); de tipo categóricas (con clasificaciones cerradas como artista_proyecto, tipo_discografia y la certificacion_BPI); y cuantitativas temporales y ordinales (año_lanzamiento como entero temporal, y las métricas de listas que representan rangos ordinales y magnitudes de tiempo).

* **Tratamiento de valores atípicos y nulos:** Dentro de la base de datos, se contempla un tratamiento adecuado de los valores nulos o atípicos, sin dejar celdas vacías y sin perder el rigor. Por ejemplo, en lugar de dejar celdas en blanco cuando un álbum no logró entrar a los ránkings de ventas de EE. UU. o Reino Unido, el archivo utiliza un guion (-) como caracter de escape. 

### Otras observaciones

* Las variables se limitan exclusivamente a Reino Unido (UK) y Estados Unidos (US), omitiendo el desempeño comercial en mercados clave como Japón, Europa continental y Latinoamérica, lo que evidencia un sesgo geográfico en la medición el éxito de cada artista.

* La comparación directa de las "semanas en listas" entre álbumes de distintas épocas puede generar conclusiones erróneas, ya que los 35 años analizados abarcan eras tecnológicas y metodologías de medición muy diferentes sin un ajuste histórico.

* Los proyectos derivados de cada grupo “madre” heredan el capital cultural y las bases de fans de sus bandas de origen (Blur y Oasis), por lo que tratarlos como artistas completamente independientes en un modelo estadístico podría ignorar importantes externalidades de red.

* Al analizar únicamente a nivel de álbum, se omite el impacto fundamental de los sencillos (singles) en el éxito comercial. Aunque esto se hace de manera intencional, ya que se pretende realizar una base de datos individual con las canciones de los 9 artistas estudiados.

### Diccionario

| Nombre de la Variable | Tipo de Dato | Descripción | Valores Permitidos / Observaciones | Utilidad Analítica |
| :--- | :--- | :--- | :--- | :--- |
| `album_id` | Alfanumérico (String) | Código de identificación único asignado a cada registro del archivo. | Ej: "BLU_001", "OAS_012". (100% completo, sin nulos). | Permite identificar unívocamente cada disco, evitar confusiones por nombres repetidos y cruzar esta tabla con otras bases de datos (joins). |
| `artista_proyecto` | Categórico (String) | Nombre de la banda, solista o supergrupo responsable del lanzamiento. | 17 categorías únicas (ej. Blur, Oasis, Gorillaz). | Sirve para agrupar, filtrar y comparar el rendimiento comercial y la productividad entre los distintos artistas o agrupaciones. |
| `nombre_album` | Texto (String) | Título oficial de la obra o lanzamiento discográfico. | Texto libre. | Permite la identificación cualitativa del lanzamiento y su correcta visualización y etiquetado en gráficos o reportes. |
| `tipo_discografia` | Categórico (String) | Clasificación del formato o naturaleza del proyecto musical. | 15 categorías (ej. "Álbum de estudio", "Álbum en vivo"). | Útil para segmentar análisis (ej. evaluar solo discos de estudio) y observar la estrategia de lanzamientos de los artistas a lo largo de su carrera. |
| `año_lanzamiento` | Numérico (Entero) | Año cronológico en el que el material fue publicado originalmente. | Rango: 1991 – 2026. | Fundamental para análisis de series temporales, estudios longitudinales, trazabilidad histórica y cálculo de tiempos entre lanzamientos. |
| `UK_peak` | Mixto (Entero / Char) | Posición más alta alcanzada por el álbum en la lista oficial de ventas del Reino Unido (UK Albums Chart). | `1` a `n`. Utiliza un guion (`-`) si no logró ingresar. | Sirve para medir el nivel de *hype* o el impacto comercial inmediato que tuvo un disco en el mercado local británico en su lanzamiento. |
| `US_peak` | Mixto (Entero / Char) | Posición más alta alcanzada por el álbum en la lista oficial de ventas de EE. UU. (Billboard 200). | `1` a `n`. Utiliza un guion (`-`) si no logró ingresar. | Mide la capacidad de exportación musical, penetración e impacto inicial del artista en el mercado estadounidense e internacional. |
| `semanas_chart_UK` | Mixto (Entero / Char) | Cantidad total acumulada de semanas que el disco permaneció dentro del ránking británico. | Mayor a `0`. Utiliza un guion (`-`) si nunca entró. | Permite evaluar la vigencia del disco, la resistencia a la caída en ventas (longevidad del éxito) y el interés continuo del público británico. |
| `semanas_chart_US` | Mixto (Entero / Char) | Cantidad total acumulada de semanas que el disco permaneció dentro del ránking estadounidense. | Mayor a `0`. Utiliza un guion (`-`) si nunca entró. | Funciona como indicador del nivel de consumo sostenido y el establecimiento de una base de fans duradera en Estados Unidos. |
| `certificacion_BPI` | Categórico (String) | Máximo galardón de ventas otorgado en el Reino Unido por la British Phonographic Industry. | Ej: "Oro", "Platino". Contiene `N/A` o vacíos. | Es un *proxy* directo del volumen bruto de ventas y permite categorizar los discos como fenómenos de masas, éxitos moderados o productos de nicho. |
