# Ficha Técnica Entrega 3

## Características de los datos

La base de datos está estructurada a nivel de aparición individual, donde cada fila representa una canción de alguno de los artistas o proyectos considerados que aparece en una película, serie o videojuego. Una misma canción puede aparecer en múltiples obras y, en esos casos, cada aparición se registra como una observación independiente.

Los datos están compuestos por variables identificadoras, descriptivas y temporales. El campo “appearance_id” corresponde a un identificador único asignado a cada registro. Respecto a “artista_proyecto” y “nombre_cancion” permiten identificar al artista o proyecto musical y la canción correspondiente.  En tanto, “tipo” clasifica la obra como película, serie o videojuego, mientras que “titulo_obra” registra su nombre. En el caso de las series, “temporada_episodio” permite especificar el capítulo en el que se registra la aparición.

Las variables temporales permiten diferenciar entre el año en que se produjo la aparición y el año de lanzamiento original de la canción: “aparicion” registra el año de estreno, emisión o lanzamiento de la obra en la que aparece la canción, mientras que “lanzamiento_cancion” corresponde al año de lanzamiento original de la composición. Esta distinción permite observar la distancia temporal entre la publicación de una canción y su posterior utilización en otras producciones culturales.

Por otra parte, “pais_obra” identifica el país de origen de la producción cultural. Cuando corresponde a una coproducción internacional, se registran los países involucrados. 

En conjunto, estas variables permiten analizar la presencia de las canciones en distintos tipos de productos culturales, períodos y contextos geográficos, además de comparar la recurrencia de determinadas canciones dentro de la cultura popular.

Los datos presentan principalmente variables categóricas (artista_proyecto, tipo, titulo_obra, pais_obra), variables temporales o numéricas (aparicion, lanzamiento_cancion) y una variable identificadora (appearance_id). La variable temporada_episodio corresponde a una variable descriptiva específica para las series y permanece vacía cuando el registro corresponde a una película o videojuego.

## Variables utilizadas

*  appearance_id: Identificador único de cada aparición registrada en la base.

* artista_proyecto: Nombre del artista o proyecto musical al que pertenece la canción.

* nombre_cancion: Nombre de la canción que aparece en la obra cultural.

* aparicion: Año de estreno, emisión o lanzamiento de la obra cultural en la que aparece la canción.

* tipo: Tipo de producción cultural en la que aparece la canción.

* titulo_obra: Título de la película, serie o videojuego en el que aparece la canción.

* temporada_episodio: Identifica la temporada y el episodio específico de una serie en el que aparece la canción.

* pais_obra: País o países de origen de la producción cultural.

* lanzamiento_cancion: Año de lanzamiento original de la canción o composición musical.

## Otras observaciones sobre la base

* La variable “temporada_episodio” presenta exactamente valores vacíos (NaN), los cuales coinciden de forma exacta con el total de películas y videojuegos de la base.

* “appearance_id” es un identificador único de cada aparición y no identifica a la canción. Una misma canción puede tener varios “appearance_id”.

* Cuando una canción aparece en distintas obras, cada aparición se mantiene como un registro independiente.

* Las versiones o remixes se mantienen diferenciados cuando la fuente permite identificarlos.

* El año de la canción corresponde a su lanzamiento original y no al año de la aparición en la obra.

