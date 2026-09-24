# Documentación

## Historial de procesos y decisiones

La construcción de la base de datos tuvo como objetivo registrar la presencia de canciones de los artistas y proyectos musicales seleccionados en productos de la cultura popular. Para este trabajo se definió como unidad de observación la “aparición de una canción en una obra cultural”, por lo que una misma canción puede aparecer en múltiples registros cuando está presente en distintas películas, series o videojuegos.

El proceso de construcción y limpieza se realizó de manera progresiva, comenzando con una recopilación amplia de posibles apariciones y aplicando posteriormente distintos criterios de verificación y exclusión. El trabajo se realizó mediante una planilla de datos en Excel, complementada con búsquedas y revisión manual de las fuentes utilizadas para comprobar la información de cada registro.

### 1. Recopilación inicial

En una primera etapa se recopilaron posibles apariciones de canciones pertenecientes a los nueve artistas y proyectos incluidos en la investigación: Oasis, Blur, Gorillaz, Noel Gallagher's High Flying Birds, Beady Eye, Damon Albarn, Liam Gallagher, Noel Gallagher y The Good, the Bad & the Queen.

Para identificar posibles apariciones se utilizaron principalmente TuneFind y Video Game Soundtracks Wiki. Estas fuentes permitieron realizar una búsqueda amplia de canciones asociadas a películas, series y videojuegos. En esta etapa se priorizó la recopilación de posibles registros, por lo que la información obtenida posteriormente fue sometida a un proceso de corroboración.

Cada aparición se incorporó inicialmente como un registro independiente. Esta decisión permitió mantener la estructura de la base a nivel de canción-aparición y evitar que una misma canción tuviera que concentrar en una sola fila todas sus apariciones en diferentes productos culturales.

### 2. Corroboración de los registros

Una vez recopilados los posibles registros, se procedió a verificar que las canciones efectivamente aparecieran en las obras señaladas. Para ello se utilizaron distintas fuentes según el tipo de información que se necesitaba comprobar.

* Moby Games fue utilizado principalmente para corroborar apariciones en videojuegos, ya que permite consultar créditos y contenidos asociados a juegos específicos. 

* FilmAffinity fue utilizada para contrastar el año y país de origen de las películas y series. 

* Wikipedia se utilizó como fuente complementaria para identificar y contrastar información sobre obras, fechas, países de origen e incluso apariciones. 
* Spotify se utilizó principalmente para complementar información relacionada con las canciones, especialmente su existencia y el año de lanzamiento.

La utilización de distintas fuentes respondió a la necesidad de no depender de una única base de datos. Una fuente podía permitir identificar una posible aparición, mientras que otra permitía comprobarla o completar los datos faltantes. 

### 3. Primera limpieza: eliminación de registros inexistentes o incorrectos

Después de la recopilación inicial se realizó una primera limpieza de los datos. En esta etapa se revisaron los registros para identificar canciones, películas, series o videojuegos que no pudieron ser comprobados o que presentaban información evidentemente incorrecta.

Los registros cuya existencia no pudo ser corroborada fueron eliminados en lugar de conservarse como posibles apariciones. Esta decisión buscó priorizar la confiabilidad de la base por sobre la cantidad de registros.

También se revisaron errores derivados de la recopilación inicial, como títulos incorrectos, información incompleta o registros que correspondían a productos diferentes de los señalados originalmente.

### 4. Delimitación del universo de productos culturales

Posteriormente se estableció un criterio más específico respecto de qué productos culturales serían incluidos. 

La base se limitó exclusivamente a películas, series y videojuegos. Por esta razón, se eliminaron registros correspondientes a otros formatos, como reality shows, programas de conversación, trailers y otros contenidos que no cumplían con la delimitación establecida para la investigación.

En el caso de las películas y series, se conservaron las canciones que formaban parte efectivamente de su banda sonora o que aparecían dentro de la producción. En los videojuegos, se aplicó un criterio equivalente: la canción debía estar efectivamente incorporada al juego y no solamente haber sido anunciada, asociada promocionalmente o considerada para su inclusión.

### 5. Revisión específica de videojuegos

Los videojuegos requirieron una revisión adicional debido a que algunas fuentes registraban canciones asociadas a juegos que finalmente no fueron incluidas, o a versiones y ediciones específicas.

Por este motivo, se verificó que las canciones estuvieran efectivamente presentes en el videojuego correspondiente. Se eliminaron registros de canciones que habían sido anunciadas pero que finalmente no aparecieron, así como registros de videojuegos que todavía no habían sido lanzados al momento del cierre de la base.

### 6. Segunda limpieza y estandarización

Una vez delimitado el universo, se realizó una segunda revisión de la base para detectar inconsistencias entre registros. Se estandarizaron los nombres de artistas, canciones, películas, series y videojuegos para evitar que diferencias de escritura fueran interpretadas como categorías distintas.

También se revisaron los años registrados y se distinguieron dos dimensiones temporales: el año de lanzamiento original de la canción (lanzamiento_cancion) y el año de estreno, emisión o lanzamiento de la obra en la que aparece (aparicion). Esta distinción fue necesaria porque una canción puede haber sido publicada varios años antes de ser utilizada en una película, serie o videojuego.

En las series se incorporó además la temporada y el episodio cuando esta información estaba disponible y podía ser corroborada. En cambio, el campo se dejó vacío para películas y videojuegos, ya que no corresponde a esas categorías específicas. 

### 7. Tratamiento de datos faltantes

No todos los campos eran aplicables a todos los registros. Por ejemplo, una película o un videojuego no tiene temporada ni episodio. Por esta razón, se conservaron campos vacíos cuando una variable no correspondía al tipo de obra registrado.

Cuando una información era necesaria para caracterizar un registro pero no podía ser corroborada de manera suficiente, se optó por no completar el dato mediante una inferencia. Esta decisión buscó evitar la incorporación de información especulativa y mantener la trazabilidad de los datos.

Finalmente, se incorporó el campo “appearance_id” como identificador único para cada registro, permitiendo distinguir cada aparición individual y facilitar el trabajo posterior de análisis y visualización.

## Fuentes de datos utilizadas

* TuneFind: Identificación de canciones utilizadas en películas y series y generación de posibles registros.

* Video Game Soundtracks Wiki: Identificación de posibles apariciones de canciones en videojuegos.

* Moby Games: Corroboración de canciones y contenidos asociados a videojuegos específicos.

* FilmAffinity: Contraste de información relacionada con películas, series y sus bandas sonoras.

* Wikipedia: Complementación y contraste de información sobre obras, fechas, títulos y países de origen.

* Spotify: Consulta y contraste del año de lanzamiento original de las canciones.

La estrategia de utilizar varias fuentes permitió combinar fuentes de descubrimiento con fuentes de corroboración. De esta manera, la aparición de una canción no se consideró válida únicamente porque una fuente la mencionara, sino que se buscó contar con evidencia suficiente para incorporarla a la base definitiva.

## Preguntas que permite responder la base

1. ¿Qué canciones tienen mayor “segunda vida” audiovisual?

2.  ¿Qué épocas de cada carrera sigue reciclando la cultura popular?

3. ¿Qué países concentran las producciones culturales en las que aparecen estas canciones?

4. ¿Qué canciones aparecen de manera recurrente en distintas generaciones de productos culturales?

