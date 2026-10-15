# Documentación

## Historial de procesos y decisiones

### Carga y preparación inicial de los datos

Se importaron las librerías Pandas y Altair, para la manipulación de datos y la creación de gráficos. Luego se cargó la base de datos “base_cultura_popular_limpia” en formato CSV.

### Primer gráfico: análisis por artista o proyecto individual

Como primer acercamiento a la base de datos, se filtraron los proyectos musicales específicos de Damon Albarn y los hermanos Gallagher, contando sus apariciones por tipo de contenido para construir un gráfico de barras simple. El objetivo era observar qué proyecto lideraba en cada categoría de cultura popular. 

El resultado que más llamó la atención en esta visualización fue la ventaja de Oasis respecto a las apariciones en películas y especialmente en series, lo que abrió la puerta a una pregunta más amplia sobre el rendimiento global de las trayectorias de los Gallagher y Albarn. 

A modo de pregunta, la observación sugirió lo siguiente: ¿Qué pasa si agrupamos todos los proyectos paralelos de Damon Albarn frente a todos los proyectos de los Gallagher?

### Segundo gráfico: agrupación por trayectorias

Para profundizar en el análisis, se estructuró un diccionario que agrupó cada proyecto musical bajo su respectiva trayectoria: "Damon Albarn" o "Los Gallagher". Posteriormente, se contaron a modo resumen las apariciones de cada proyecto y se creó un gráfico de barras apiladas, donde se logró observar la distribución interna de cada “equipo”. 

Esto reveló que las apariciones de los Gallagher dependían casi en su totalidad de Oasis, mientras que las de Albarn se distribuían de manera equilibrada entre Blur y Gorillaz. También, fue posible observar que, a nivel total, Albarn poseía más apariciones que los Gallagher. 

Esta observación me hizo preguntarme por las distribuciones globales de cada trayectoria en los tres contenidos por separado, especialmente por cómo se comportaba la trayectoria de Albarn al respecto: ¿Seguía teniendo ventaja en cada contenido o se concentraba en uno en particular? 

### Tercer gráfico: comparación directa por tipo de contenido

Se agruparon los datos de manera directa por cada trayectoria y el tipo de contenido para contrastar su impacto global. Mediante un gráfico de barras agrupadas lado a lado, se pudo evidenciar qué “bando” dominaba en cada categoría específica.

Aquí,  Damon Albarn logra sacar ventaja en series y videojuegos. Aunque los Gallagher se alzan sobre Albarn en las películas, la diferencia es mínima, acumulando solo 3 apariciones más.

Esto significa que, en términos generales, Damon Albarn acumula más apariciones en prácticamente todos los productos culturales. O, dicho de otro modo, los Gallagher apenas logran superar a Albarn únicamente a través de las películas.

Con esta información, me fue posible encontrar una historia en términos de cultura popular:  aunque Oasis mantiene una presencia importante, la trayectoria de Damon Albarn parece haber conseguido una mayor distribución entre distintos productos culturales.

A partir de esto, pensando en qué poder observar más adelante, me fue posible preguntarme por lo siguiente:

* *¿En qué clases de series y películas destaca más Albarn y en cuáles lo hacen los Gallagher?* *¿Son iguales?*

* *¿Por qué Albarn saca demasiada ventaja en los videojuegos? ¿Tiene que ver con Gorillaz y su caracter como banda virtual?*

* *¿Cómo varía la distribución durante los años? ¿Los Gallagher perdieron terreno en apariciones durante su separación y Albarn obtuvo más?*

* *¿Qué canciones de cada trayectoria suelen usarse más?*

### Prueba de gráfico interactivo (descartado)

Se intentó desarrollar una visualización interactiva que reuniera los resultados en un solo gráfico e incorporara menús desplegables para filtrar los datos por trayectoria musical y tipo de contenido. Para implementar los selectores, se utilizó inteligencia artificial como apoyo técnico.

Sin embargo, el resultado presentó problemas de legibilidad: las leyendas se cortaban y la visualización dificultaba la comparación entre ambas trayectorias. Además, la incorporación de elementos interactivos no mejoraba necesariamente la comprensión del principal hallazgo del análisis, que consistía en comparar la cantidad de apariciones de cada trayectoria en películas, series y videojuegos.

Por estos motivos, se descartó esta alternativa y se decidió priorizar una visualización estática que presentara la información de forma directa, sin elementos adicionales que dificultaran su lectura.

### Selección del gráfico definitivo y línea gráfica

Para la entrega final, se seleccionó la estructura del tercer gráfico, correspondiente a las barras agrupadas por trayectoria musical y tipo de contenido. Esta decisión respondió a tres criterios principales: claridad, capacidad de comparación y relación con el objetivo del análisis.

En primer lugar, el gráfico permite comparar directamente las apariciones de Damon Albarn y los Gallagher dentro de cada categoría. Al presentar las barras una al lado de la otra, facilita identificar las diferencias entre ambas trayectorias sin necesidad de interpretar gráficos separados ni calcular las diferencias a partir de los totales.

En segundo lugar, permite observar tanto las categorías en las que cada trayectoria tiene ventaja como la magnitud de esas diferencias. Esto fue importante para comunicar el principal resultado del análisis: Damon Albarn acumula más apariciones en series y videojuegos, mientras que los Gallagher lo superan por un margen reducido en películas. De esta manera, el gráfico permite mostrar no solo quién tiene más apariciones en cada categoría, sino también dónde se concentran las diferencias entre ambos grupos.

En tercer lugar, esta estructura se relaciona directamente con la pregunta que surgió durante el proceso de exploración: si la ventaja observada al agrupar todos los proyectos de cada trayectoria se mantenía al distinguir entre películas, series y videojuegos. A diferencia del segundo gráfico, que permitía observar la composición interna de cada trayectoria, el tercero facilitaba una comparación directa entre ambas. Por ello, resultaba más adecuado para comunicar el hallazgo principal de la investigación.

Una vez definida la estructura, se estableció la línea gráfica junto con mi compañera. Se eligió el amarillo para representar a Damon Albarn y el azul para los Gallagher, a partir de la revisión de portadas de álbumes asociadas a ambas trayectorias y de los patrones de color que identificamos en ellas.

Por último, la visualización se exportó en formato HTML para su presentación.  

## Utilización de la base de datos

Se utilizó el archivo CSV “base_cultura_popular_limpia”. Antes de cargarlo en Google Colab, se revisaron nuevamente los registros para comprobar que cumplieran con los criterios de la investigación. Durante esta revisión, se encontraron apariciones en Love Island, un reality show que se había excluido del estudio. Por ello, se eliminaron los registros correspondientes que habían quedado de la entrega anterior.

Al cargar el archivo en Google Colab, se detectó un problema de lectura: el notebook interpretaba todos los datos como una sola columna, en lugar de reconocer las diez columnas de la base. El error se debía a que algunos títulos de álbumes contenían comas, lo que generaba conflictos con la separación de los datos.

Como primer intento de solución, se eliminaron las comas de los textos, pero esto no resolvió el problema. Finalmente, se cambió el delimitador de la lectura del archivo a punto y coma (;). Aunque el archivo se había exportado desde Excel como CSV UTF-8 delimitado por comas, este ajuste permitió que Google Colab reconociera correctamente las diez columnas.

## Preguntas que puede responder la visualización

* ¿Qué trayectoria tiene mayores apariciones en la cultura popular?

* ¿Cómo se distribuyen las apariciones musicales de cada bando según el tipo de producto cultural?

* ¿Qué trayectoria lidera de forma absoluta uno de los productos culturales?

* ¿Logran los hermanos Gallagher superar a Damon Albarn en alguna categoría de contenido?

* ¿Cómo se distribuyen internamente las apariciones entre los diferentes proyectos musicales de Damon Albarn y los Gallagher?
