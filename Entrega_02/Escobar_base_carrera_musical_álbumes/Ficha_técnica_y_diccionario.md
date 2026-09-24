# Ficha técnica base carrera musical (álbumes)

## Fuente de los datos

Como la base de datos fue de elaboración propia, las fuentes provienen de diversos sitios web especializados detallados a continuación:

* MusicBrainz: Este sitio es parte de un proyecto que busca crear una base de datos musical masiva, en forma de enciclopedia digital. En este caso, se utilizó para recopilar la información de nombres, años de lanzamiento y autores de los álbumes registrados en la base de datos.

* ChartMasters: Este sitio web recopila y actualiza a diario las tablas de posiciones (“charts”) de artistas, canciones y álbumes alrededor del mundo. En este caso, se utilizó para verificar la posición máxima alcanzada por cada álbum de cada banda.

* Official Charts: Este es el sitio web oficial de la Official UK Charts Company y compila los registros oficiales de tablas de posición de artistas en el Reino Unido. En este caso, se utilizó para recopilar información sobre la posición máxima alcanzada y las semanas en tablas británicas de cada álbum analizado.

* Billboard 200: Este es el sitio web oficial de la revista estadounidense especializada en música Billboard, que compila las mejores 200 canciones, álbumes y artistas de todos los tiempos y de cada semana en los Estados Unidos. En este caso, se utilizó para recopilar información sobre la posición máxima alcanzada y las semanas en tablas estadounidenses de cada álbum analizado.

* Wikipedia: Esta enciclopedia digital se utilizó para revisar la discografía conocida de cada banda analizada, recopilándose información sobre la certificación BPI alcanzada por cada álbum analizado.

## Metodología de la construcción de la base

La unidad de observación utilizada es **“cada uno de los álbumes lanzados por las bandas/artistas/proyectos en estudio”**, estableciendo una fila por cada álbum encontrado. Se consideraron unidades de observación que hayan sido publicadas entre 1991 y 2026.

La construcción de la base de datos constó de las siguientes etapas:

1. Búsqueda y revisión documental en la web de la discografía oficial de cada artista, banda y proyecto contemplado en el estudio.

2. Recopilación de metadatos mediante MusicBrainz (nombre del lanzamiento, año de publicación y autor) para álbumes de estudio, en vivo, EP, compilaciones y remix comercializados en formato físico.

3. Verificación y contrastación de los registros obtenidos con las secciones discográficas de Wikipedia de cada artista, banda y proyecto para asegurar la precisión de los datos.

4. Consulta en Official Charts del posicionamiento máximo alcanzado y la permanencia en semanas dentro de las listas del Reino Unido para cada producción.

5. Consulta en Billboard 200 de la máxima posición obtenida y el número total de semanas que permaneció en las listas de Estados Unidos.

6. Identificación de la certificación BPI registrada para cada unidad de observación publicada en las secciones discográficas de Wikipedia de cada artista, banda y proyecto.

7. Asignación de una clave primaria única (album_id) para cada registro, siguiendo el esquema [ARTISTA]_[CORRELATIVO] (por ejemplo, OAS_001).

## Alcance de los datos

El alcance de esta base de datos permite realizar estudios comparativos y longitudinales sobre la evolución comercial, histórica y artística de las bandas y proyectos liderados por los Gallagher y Damon Albarn. En concreto la base:

* Permite rastrear la transición de los músicos desde sus bandas de origen (Blur, Oasis) hacia proyectos alternativos, carreras solistas o supergrupos (Gorillaz, The Good, the Bad & the Queen, High Flying Birds) a lo largo de más de tres décadas (desde 1991).

* Facilita evaluar la penetración internacional de estos artistas contrastando su rendimiento local en el Reino Unido frente a su éxito en Estados Unidos, utilizando las métricas de posición máxima y permanencia en los charts.

* Cuantifica la masividad e hito en ventas, permitiendo categorizar el estatus histórico y el volumen de ventas físicas o digitales de cada lanzamiento a través de las certificaciones de la BPI británica, identificando desde obras de nicho hasta fenómenos multiplatino.

* Permite observar cómo se estructura el catálogo de estos artistas en el tiempo mediante las 15 categorizaciones que realiza, identificando la proporción y el rendimiento de álbumes de estudio frente a discos en vivo, recopilatorios, transmisiones especiales o colaboraciones experimentales.

## Características de los datos

Las principales características de los datos recopilados en esta base de datos se pueden dividir en volumen, tipología, temporalidad y calidad de la información que entregan

* **Volumen y estructura**: el set de datos es de tamaño manejable pero denso en variables, compuesto por una matriz de 120 filas (que contempla observaciones o lanzamientos) y 10 columnas (que contempla las variables o atributos). 

* **Temporalidad**: los datos abarcan una ventana temporal ininterrumpida de 35 años de historia musical, con registros que comienzan con el lanzamiento del álbum Leisure en 1991 y se proyectan hasta el año 2026.

* **Tipología de variables mixtas**: la base utiliza variables de tipo identificadoras (llaves primarias alfanuméricas album_id para evitar duplicidades o confusiones con álbumes homónimos); de tipo categóricas (con clasificaciones cerradas como artista_proyecto, tipo_discografia y la certificacion_BPI; y cuantitativas temporales y ordinales (año_lanzamiento como entero temporal, y las métricas de listas que representan rangos ordinales y magnitudes de tiempo).

* **Tratamiento de valores atípicos y nulos (Calidad del dato)**: dentro de la base de datos, se contempla un tratamiento adecuado de los valores nulos o atípicos, sin dejar celdas vacías y sin perder el rigor. Por ejemplo, en lugar de dejar celdas en blanco cuando un álbum no logró entrar a los ránkings de ventas de EE. UU. o Reino Unido, el archivo utiliza un guion (-) como caracter de escape. 

## Otras observaciones

* **Sesgo geográfico en la medición del éxito**: Las variables se limitan exclusivamente a Reino Unido (UK) y Estados Unidos (US), omitiendo el desempeño comercial en mercados clave como Japón, Europa continental y Latinoamérica.

* **Falta de equivalencia temporal en las métricas**: La comparación directa de las "semanas en listas" entre álbumes de distintas épocas puede generar conclusiones erróneas, ya que los 35 años analizados abarcan eras tecnológicas y metodologías de medición muy diferentes sin un ajuste histórico.

* **Falta de independencia estadística entre observaciones**: Los proyectos derivados heredan capital cultural y bases de fans de sus bandas de origen (Blur y Oasis), por lo que tratarlos como artistas completamente independientes en un modelo estadístico podría ignorar importantes externalidades de red.

* **Restricción al formato largo**: Al analizar únicamente a nivel de álbum, se omite el impacto fundamental de los sencillos (singles) en el éxito comercial.

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
