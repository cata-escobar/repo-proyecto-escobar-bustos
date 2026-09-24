# Ficha técnica base presencia en cultura popular

## Fuente de los datos

Dado que la base de datos fue de producción propia, las fuentes provienen de diferentes sitios web:

* Video Game Soundtracks Wiki: Fue utilizada como punto de partida para registrar la aparición de canciones en  videojuegos. La información corresponde a los listados de canciones y apariciones disponibles en las páginas de cada artista.

* Moby Games: Fue utilizada para corroborar información de los videojuegos, como el nombre, si efectivamente salió al mercado, el año de su lanzamiento y la empresa desarrolladora para rastrear el país de origen. También, fue útil para corroborar la aparición de las canciones en sus respectivos videojuegos a través de la sección “créditos”. 

* TuneFind: Fue utilizada como punto de partida para registrar la aparición de canciones en series y películas. La información corresponde a los listados de canciones y apariciones disponibles en las páginas de cada artista. 

* Filmaffinity: Fue utilizada para corroborar información sobre las series y películas proporcionada por TuneFind, como el nombre y el país de origen. Su búsqueda fue manual. 

* Wikipedia y Spotify: Fueron utilizadas para corroborar la existencia de las canciones mencionadas en las fuentes anteriores y el año de su lanzamiento. Asimismo, también fueron útiles para verificar la aparición de canciones en series, películas y videojuegos que cuentan con soundtrack oficial. 

### Metodología

La unidad de observación corresponde a una aparición de una canción en una obra cultural. Por lo tanto, cada fila representa la aparición de una canción en una película, serie o videojuego. Si una misma canción aparece en distintas obras, cada aparición se registra como una observación independiente. Por ejemplo, si una canción aparece en tres obras diferentes, se registran tres filas en la base de datos.

La base comprende apariciones registradas entre 1991 y 2026, considerando películas, series y videojuegos estrenados dentro de este período.

La construcción se realizó en las siguientes etapas:

1. A través de fuentes como Video Game Soundtracks Wiki y TuneFind, se identificaron las apariciones de canciones pertenecientes a los artistas y proyectos incluidos en la investigación. Cada aparición identificada fue registrada como una observación individual.

2. Las apariciones identificadas fueron contrastadas mediante fuentes como MobyGames, FilmAffinity, Wikipedia y Spotify. A partir de esta revisión, se corroboró la presencia de las canciones en las respectivas obras y se completaron variables de la base de datos, como el año de estreno o lanzamiento y el país de origen de la obra.

3. Se eliminaron registros asociados a canciones u obras cuya existencia no pudo ser comprobada, así como aquellos que presentaban información evidentemente incorrecta o inexistente.

4. Se realizó una segunda limpieza para excluir registros que no correspondían a las categorías definidas para la investigación. Se descartaron, entre otros, reality shows, programas de conversación, trailers y otros formatos que no correspondían a películas, series o videojuegos. En consecuencia, se conservaron únicamente las apariciones de canciones utilizadas como parte de la banda sonora de películas y series, o incorporadas efectivamente en videojuegos.

5. En el caso de los videojuegos, se conservaron únicamente las apariciones que pudieron ser comprobadas como efectivas. Se eliminaron canciones que habían sido anunciadas para un videojuego, pero que finalmente no fueron incluidas, así como registros correspondientes a videojuegos que aún no habían sido lanzados a la fecha de cierre de la base.

6. En una última etapa de revisión, se eliminaron los registros cuya información no pudo ser corroborada mediante las fuentes consultadas o que no contaban con evidencia suficiente para ser incorporados a la base.

7. Se estandarizaron los nombres de artistas, canciones, obras y tipos de contenido para evitar diferencias de escritura entre registros. En el caso de las series, se incorporó la temporada y el episodio cuando esta información estaba disponible y podía ser corroborada.

8. Se conservaron campos vacíos cuando una variable no era aplicable a un determinado registro o cuando la información correspondiente no podía ser establecida de manera confiable.

9. Finalmente, se incorporó un identificador único (appearance_id) para cada registro de la base de datos.

## Alcance de los datos

* Universo: La base considera un universo de 9 artistas y proyectos musicales: Oasis, Blur, Gorillaz, Noel Gallagher's High Flying Birds, Beady Eye, Damon Albarn, Liam Gallagher, Noel Gallagher y The Good, the Bad & the Queen.

* Alcance temporal: La base comprende composiciones musicales lanzadas originalmente entre 1991 y 2023 y registra sus apariciones en obras o producciones culturales estrenadas o publicadas entre 1995 y 2026.

* Alcance de los registros: La base contiene 146 canciones únicas y registra sus apariciones en 235 obras o producciones culturales únicas, correspondientes exclusivamente a películas, series y videojuegos.

* Alcance geográfico: La base incluye producciones originarias de 12 países, considerando también las coproducciones internacionales. Las producciones de Estados Unidos y Reino Unido representan la mayor parte de los registros.

* Unidad de observación: Cada registro corresponde a una aparición de una canción en una obra cultural. Por ello, una misma canción puede aparecer en varios registros cuando está presente en diferentes películas, series o videojuegos.

## Características de los datos

La base de datos está estructurada a nivel de aparición individual, donde cada fila representa una canción de alguno de los artistas o proyectos considerados que aparece en una película, serie o videojuego. Una misma canción puede aparecer en múltiples obras y, en esos casos, cada aparición se registra como una observación independiente.

Los datos están compuestos por variables identificadoras, descriptivas y temporales. El campo “appearance_id” corresponde a un identificador único asignado a cada registro. Respecto a “artista_proyecto” y “nombre_cancion” permiten identificar al artista o proyecto musical y la canción correspondiente.  En tanto, “tipo” clasifica la obra como película, serie o videojuego, mientras que “titulo_obra” registra su nombre. En el caso de las series, “temporada_episodio” permite especificar el capítulo en el que se registra la aparición.

Las variables temporales permiten diferenciar entre el año en que se produjo la aparición y el año de lanzamiento original de la canción: “aparicion” registra el año de estreno, emisión o lanzamiento de la obra en la que aparece la canción, mientras que “lanzamiento_cancion” corresponde al año de lanzamiento original de la composición. Esta distinción permite observar la distancia temporal entre la publicación de una canción y su posterior utilización en otras producciones culturales.

Por otra parte, “pais_obra” identifica el país de origen de la producción cultural. Cuando corresponde a una coproducción internacional, se registran los países involucrados. 

En conjunto, estas variables permiten analizar la presencia de las canciones en distintos tipos de productos culturales, períodos y contextos geográficos, además de comparar la recurrencia de determinadas canciones dentro de la cultura popular.

Los datos presentan principalmente variables categóricas (artista_proyecto, tipo, titulo_obra, pais_obra), variables temporales o numéricas (aparicion, lanzamiento_cancion) y una variable identificadora (appearance_id). La variable temporada_episodio corresponde a una variable descriptiva específica para las series y permanece vacía cuando el registro corresponde a una película o videojuego.

## Otras observaciones sobre la base

* La variable “temporada_episodio” presenta exactamente 173 valores vacíos (NaN), los cuales coinciden de forma exacta con el total de películas (55) y videojuegos (118) de la base.

* “appearance_id” es un identificador único de cada aparición y no identifica a la canción. Una misma canción puede tener varios “appearance_id”.

* Cuando una canción aparece en distintas obras, cada aparición se mantiene como un registro independiente.

* Las versiones, covers o remixes se mantienen diferenciados cuando la fuente permite identificarlos.

* El año de la canción corresponde a su lanzamiento original y no al año de la aparición en la obra.

## Diccionario


## Diccionario de datos

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



