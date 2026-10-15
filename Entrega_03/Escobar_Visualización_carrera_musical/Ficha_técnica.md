# Ficha técnica Entrega 03

## Características de los datos

Las principales características de los datos recopilados en esta base de datos se pueden dividir en volumen, tipología, temporalidad y calidad de la información que entregan.

* **Volumen y estructura:** El set de datos es de tamaño manejable pero denso en variables, compuesto por una matriz de 120 filas (que contempla observaciones o lanzamientos) y 10 columnas (que contempla las variables o atributos). 

* **Temporalidad:** Los datos abarcan una ventana temporal ininterrumpida de 35 años de historia musical, con registros que comienzan con el lanzamiento del álbum Leisure en 1991 y se proyectan hasta el año 2026.

* **Tipología de variables mixtas:** La base utiliza variables de tipo identificadoras (llaves primarias alfanuméricas album_id para evitar duplicidades o confusiones con álbumes homónimos); de tipo categóricas (con clasificaciones cerradas como artista_proyecto, tipo_discografia y la certificacion_BPI); y cuantitativas temporales y ordinales (año_lanzamiento como entero temporal, y las métricas de listas que representan rangos ordinales y magnitudes de tiempo).

* **Tratamiento de valores atípicos y nulos:** Dentro de la base de datos, se contempla un tratamiento adecuado de los valores nulos o atípicos, sin dejar celdas vacías y sin perder el rigor. Por ejemplo, en lugar de dejar celdas en blanco cuando un álbum no logró entrar a los ránkings de ventas de EE. UU. o Reino Unido, el archivo utiliza un guion (-) como caracter de escape. 

## Observaciones de la base de datos

* Las variables se limitan exclusivamente a Reino Unido (UK) y Estados Unidos (US), omitiendo el desempeño comercial en mercados clave como Japón, Europa continental y Latinoamérica, lo que evidencia un sesgo geográfico en la medición del éxito de cada artista.

* La comparación directa de las "semanas en listas" entre álbumes de distintas épocas puede generar conclusiones erróneas, ya que los 35 años analizados abarcan eras tecnológicas y metodologías de medición muy diferentes sin un ajuste histórico.

* Los proyectos derivados de cada grupo “madre” heredan el capital cultural y las bases de fans de sus bandas de origen (Blur y Oasis), por lo que tratarlos como artistas completamente independientes en un modelo estadístico podría ignorar importantes externalidades de red.

* Al analizar únicamente a nivel de álbum, se omite el impacto fundamental de los sencillos (singles) en el éxito comercial. Aunque esto se hace de manera intencional, ya que se pretende realizar una base de datos individual con las canciones de los 9 artistas estudiados.

## Variables utilizadas

* **album_id**: Código de identificación único asignado a cada registro del archivo.

* **artista_proyecto**: Nombre de la banda, solista o supergrupo responsable del lanzamiento.

* **nombre_album**: Título oficial de la obra o lanzamiento discográfico.

* **tipo_discografia**: Clasificación del formato o naturaleza del proyecto musical.

* **año_lanzamiento**: Año cronológico en el que el material fue publicado originalmente.

* **UK_peak**: Posición más alta alcanzada por el álbum en la lista oficial de ventas del Reino Unido (UK Albums Chart).

* **US_peak**: Posición más alta alcanzada por el álbum en la lista oficial de ventas de EE. UU. (Billboard 200).

* **semanas_chart_UK**: Cantidad total acumulada de semanas que el disco permaneció dentro del ránking británico.

* **semanas_chart_US**: Cantidad total acumulada de semanas que el disco permaneció dentro del ránking estadounidense.

* **certificacion_BPI**: Máximo galardón de ventas otorgado en el Reino Unido por la British Phonographic Industry.
