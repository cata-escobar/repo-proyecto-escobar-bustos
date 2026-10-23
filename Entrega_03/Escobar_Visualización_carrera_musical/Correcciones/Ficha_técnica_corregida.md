# Ficha técnica base carrera musical (álbumes)

## Fuente de los datos

Como la base de datos fue de elaboración propia, se construyó por medio de la recopilación manual de información de uso público que se encontraba disponible en distintos sitios web. Las fuentes se encontraron a través de una búsqueda web en el motor “Ecosia” y se fueron seleccionando de acuerdo a la calidad y la cantidad de la información disponible en ellas, teniendo como foco el poder clasificar e identificar la discografía de cada proyecto musical en estudio.

Las fuentes provienen de diversos sitios web especializados detallados a continuación:

* MusicBrainz: Este sitio es parte de un proyecto que busca crear una base de datos musical masiva, en forma de enciclopedia digital. En este caso, se utilizó para recopilar la información de nombres, años de lanzamiento y autores de los álbumes registrados en la base de datos.

* ChartMasters: Este sitio web recopila y actualiza a diario las tablas de posiciones (“charts”) de artistas, canciones y álbumes alrededor del mundo. En este caso, se utilizó para verificar la posición máxima alcanzada por cada álbum de cada banda.

* Official Charts: Este es el sitio web oficial de la Official UK Charts Company y compila los registros oficiales de tablas de posición de artistas en el Reino Unido. En este caso, se utilizó para recopilar información sobre la posición máxima alcanzada y las semanas en tablas británicas de cada álbum analizado.

* Billboard 200: Este es el sitio web oficial de la revista estadounidense especializada en música Billboard, que compila las mejores 200 canciones, álbumes y artistas de todos los tiempos y de cada semana en los Estados Unidos. En este caso, se utilizó para recopilar información sobre la posición máxima alcanzada y las semanas en tablas estadounidenses de cada álbum analizado.

* Wikipedia: Esta enciclopedia digital se utilizó para revisar la discografía conocida de cada banda analizada, recopilándose información sobre la certificación BPI alcanzada por cada álbum analizado.

## Metodología de la construcción de la base

La base de datos se construyó por medio de la recopilación manual de información de uso público que estuviera disponible en fuentes digitales. La búsqueda inicial se realizó en Ecosia, la cual arrojó los sitios MusicBrainz y Wikipedia como la principal fuente para las discografías de  Oasis y Blur, y secundariamente se utilizó el sitio Discogs para el cruce de información. Dentro de cada uno de estos sitios, se utilizaron los buscadores integrados para encontrar las páginas de los otros proyectos musicales, logrando encontrar la totalidad de ellos.

En una segunda búsqueda,  se pudo dar con los sitios web de Official Charts, Billboard 200 y ChartMasters como fuentes principales de las estadísticas y métricas de cada disco encontrado en la primera búsqueda.

Los datos obtenidos en cada búsqueda se transcribieron de manera manual a una planilla Excel, donde cada fila representaba a un disco y cada columna respondía a las variables a analizar en la investigación. Durante este proceso, se buscó estandarizar el nombre de cada disco para evitar repeticiones. Los datos se ordenaron de manera cronológica, respondiendo al año de lanzamiento de cada disco.

Se fueron realizando procesos de verificación y contrastación de los datos obtenidos tanto en la primera como en la segunda búsqueda, añadiendo la información correspondiente a la certificación máxima alcanzada por cada disco.

Luego de la transcripción de los datos, se estandarizaron las columnas de la planilla, con el fin de adecuarlas a las variables de estudio y facilitar su lectura a la hora de ser analizadas por otras herramientas.

Finalmente, se unificaron los registros en una única base de datos donde se reunieron las discografías de todos los proyectos musicales a estudiar. Durante este proceso se creó un código único de identificación para cada elemento, para facilitar la identificación de cada uno a la hora de leer la base y evitar confusiones. Así mismo, se volvió a ordenar todo de acuerdo al año de lanzamiento, sin agrupar los discos por autor.

## Alcance de los datos

*  **Universo:** La base considera un universo de 9 artistas y proyectos musicales: Oasis, Blur, Gorillaz, Noel Gallagher's High Flying Birds, Beady Eye, Damon Albarn (y sus proyectos en solitario), Liam Gallagher, Noel Gallagher y The Good, the Bad & the Queen.

* **Alcance temporal:** La base comprende discos musicales lanzados entre 1991 y 2026 en formatos físicos por los 9 autores analizados.

* **Alcance de los registros:** La base contiene 120 elementos discográficos de distinto tipo que comprenden la totalidad de los discos lanzados en formato físico por los artistas estudiados.

* **Unidad de observación:** Cada registro dentro de la base corresponde a un disco, lo que le entrega individualidad a cada elemento.

Esta base de datos permite realizar estudios comparativos y longitudinales sobre la evolución comercial, histórica y artística de las bandas y proyectos liderados por los Gallagher y Damon Albarn. En concreto la base:

* Permite rastrear la transición de los músicos desde sus bandas de origen (Blur, Oasis) hacia proyectos alternativos, carreras solistas o supergrupos (Gorillaz, The Good, the Bad & the Queen, High Flying Birds) a lo largo de más de tres décadas (desde 1991).

* Facilita evaluar la penetración internacional de estos artistas contrastando su rendimiento local en el Reino Unido frente a su éxito en Estados Unidos, utilizando las métricas de posición máxima y permanencia en los charts.

* Cuantifica la masividad e hito en ventas, permitiendo categorizar el estatus histórico y el volumen de ventas físicas o digitales de cada lanzamiento a través de las certificaciones de la BPI británica, identificando desde obras de nicho hasta fenómenos multiplatino.

* Permite observar cómo se estructura el catálogo de estos artistas en el tiempo mediante las 15 categorizaciones que realiza, identificando la proporción y el rendimiento de álbumes de estudio frente a discos en vivo, recopilatorios, transmisiones especiales o colaboraciones experimentales.

## Características de los datos

Las principales características de los datos recopilados en esta base de datos se pueden dividir en volumen, tipología, temporalidad y calidad de la información que entregan.

* **Volumen y estructura:** El set de datos es de tamaño manejable pero denso en variables, compuesto por una matriz de 120 filas (que contempla observaciones o lanzamientos) y 10 columnas (que contempla las variables o atributos). 

* **Temporalidad:** Los datos abarcan una ventana temporal ininterrumpida de 35 años de historia musical, con registros que comienzan con el lanzamiento del álbum Leisure en 1991 y se proyectan hasta el año 2026.

* **Tipología de variables mixtas:** La base utiliza variables de tipo identificadoras (llaves primarias alfanuméricas album_id para evitar duplicidades o confusiones con álbumes homónimos); de tipo categóricas (con clasificaciones cerradas como artista_proyecto, tipo_discografia y la certificacion_BPI); y cuantitativas temporales y ordinales (año_lanzamiento como entero temporal, y las métricas de listas que representan rangos ordinales y magnitudes de tiempo).

* **Tratamiento de valores atípicos y nulos:** Dentro de la base de datos, se contempla un tratamiento adecuado de los valores nulos o atípicos, sin dejar celdas vacías y sin perder el rigor. Por ejemplo, en lugar de dejar celdas en blanco cuando un álbum no logró entrar a los ránkings de ventas de EE. UU. o Reino Unido, el archivo utiliza un guion (-) como caracter de escape. 

## Otras observaciones

* Las variables se limitan exclusivamente a Reino Unido (UK) y Estados Unidos (US), omitiendo el desempeño comercial en mercados clave como Japón, Europa continental y Latinoamérica, lo que evidencia un sesgo geográfico en la medición el éxito de cada artista.

* La comparación directa de las "semanas en listas" entre álbumes de distintas épocas puede generar conclusiones erróneas, ya que los 35 años analizados abarcan eras tecnológicas y metodologías de medición muy diferentes sin un ajuste histórico.

* Los proyectos derivados de cada grupo “madre” heredan el capital cultural y las bases de fans de sus bandas de origen (Blur y Oasis), por lo que tratarlos como artistas completamente independientes en un modelo estadístico podría ignorar importantes externalidades de red.

* Al analizar únicamente a nivel de álbum, se omite el impacto fundamental de los sencillos (singles) en el éxito comercial. Aunque esto se hace de manera intencional, ya que se pretende realizar una base de datos individual con las canciones de los 9 artistas estudiados.

## Diccionario

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
