# Documentación

## Construcción de la visualización con Altair

Para llegar a la visualización final, seguí un proceso de experimentación paso a paso en mi notebook de Google Colab, usando la librería Altair. El proceso siguió, a grandes rasgos, seis pasos:

Primero, se creó un gráfico de líneas básico que mostrara la producción total de discos por año de todos los artistas y proyectos juntos. Esto sirvió para entender el volumen general de datos en un panorama amplio, pero no permitía comparar la producción discográfica entre bandas.

Para corregir esto, se creó un segundo gráfico pero aplicando un filtro para aislar solo a los 4 proyectos más grandes dentro de la base de datos: Blur, Oasis, Gorillaz y Noel Gallagher's High Flying Birds. Esto mejoró el gráfico, pero dejaba fuera el resto de proyectos de Damon Albarn y los hermanos Gallagher.

Con el fin de incluir la totalidad de los proyectos considerados en la base de datos, se amplió el filtro hasta llegar a los nueve proyectos totales. El resultado fue un gráfico de líneas saturado y confuso, ya que las líneas se cruzaban demasiado y los colores predeterminados del gráfico no tenían relación entre sí, aparte de ser muy llamativos.

Luego, para darle sentido a la lectura se decidió definir colores personalizados dentro del gráfico. Se le asignó tonos cálidos de la familia de los amarillos y naranjas a los proyectos de Damon Albarn, y tonos fríos de la familia de los azules y grises a los de los hermanos Gallagher.

Finalmente, para solucionar el problema de las líneas cruzadas que ensuciaban la visualización, se decidió cambiar el formato del gráfico, pasando de un gráfico de líneas a un gráfico de dispersión de puntos o *scatter plot*.

El gráfico de puntos resultante, separado por la paleta de colores personalizados, permitió una lectura mucho más limpia. Gracias a este formato, se pudo visualizar claramente la línea de tiempo y concluir visualmente que los proyectos de Damon Albarn (amarillos/naranjas) tienen una presencia mucho más constante y prolífica a lo largo de los 35 años estudiados, en comparación con los proyectos de los Gallagher (azules).

## Utilización de la base de datos

La base de datos que se utilizó para generar la visualización es la misma base que se fabricó en el proceso anterior del trabajo. El único ajuste que se le tuvo que hacer respondió a un error que arrojó el notebook de Google Colab a la hora de leerla, y lo detallo a continuación.

Cuando se intentó ejecutar la lectura de la base de datos con la instrucción ‘df = pd.read_csv("base_carrera_musical_3.csv", delimiter=",", encoding="UTF-8")’, el notebook no generaba la tabla como corresponde y arrojaba que todo los datos estaban en una única columna, sin diferenciar las 10 columnas que tenía originalmente la base de datos. La misma celda del notebook arrojó que el error estaba en que existían celdas con más de un valor, lo que se explicaba porque habían celdas que incluían nombres de discos con comas ‘,’.

Para tratar de solucionar el error, se procedió a eliminar las comas en cada elemento de texto de la base de datos, cambiándolas por ‘/’ en algunos casos o derechamente borrándolas en otros, de manera que no se perdiera la sintaxis. Sin embargo, este arreglo no solucionó el problema, así que se optó por cambiar la delimitación del archivo.

Pese a que la base de datos se exportó desde la planilla Excel hacia un archivo CSV UTF-8 delimitado por comas, al momento de intentar leerlo con esa delimitación no se podía, porque había elementos de texto que incluían comas. Así que se decidió cambiar la instrucción en el notebook a ‘df = pd.read_csv("base_carrera_musical_3.csv", delimiter=";", encoding="UTF-8")’, para que la celda leyera el CSV como delimitado por punto y coma, lo que solucionó el problema.

## Preguntas que puede responder la visualización

Pregunta central de la investigación:

* ¿Quién logró consolidarse y lanzar una mayor cantidad de discografía tras 35 años de carrera musical, Damon Albarn o los hermanos Gallagher?

Preguntas que se derivan directamente de los gráficos generados en el proceso de creación de la visualización:

* ¿Cómo ha evolucionado año a año la producción discográfica de los artistas estudiados a lo largo del tiempo?

* ¿Existe alguna relación o efecto causal entre la separación de Oasis en 2009 y los sorpresivos peaks de lanzamientos que registraron Blur ese mismo año y Gorillaz en 2010?

* ¿Cómo logró Damon Albarn sostener y balancear una actividad musical constante para sus dos proyectos paralelos más importantes, Blur y Gorillaz, durante el periodo estudiado?
