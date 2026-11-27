# Especificación breve de lo que la webstory debe comunicar y cómo debe comportarse.

En esta entrega, dado que la webstory no está terminada, debe comunicar el desarrollo de las carreras de Damon Albarn y los hermanos Gallagher a partir de tres aristas: vigencia musical, cultura popular y presentaciones en vivo. A medida que el usuario despliega la página y lee, va explorando estas aristas y recibiendo información que, de manera acumulativa, va subrayando cuál de nuestros protagonistas obtiene la delantera o ventaja en determinado aspecto. 

En términos de comportamiento, el sitio web pretende ofrecer una comparativa y caracterización de la carrera de Damon Albarn y los hermanos Gallagher. Más que centrarnos en números superficiales, busca entender también el motivo de estos resultados en sus respectivos proyectos musicales, qué circunstancias de esta rivalidad han permitido que sucedan tales cosas y de qué manera se han logrado infiltrar en el ideario colectivo y qué elementos han pasado desapercibidos. 

Es por ello que la webstory cuenta con una estructura narrativa lineal y simple, basada en el proceso de scrolling natural. Espera que sea fácil de digerir e instar a leer más. 

# Relación entre la hipótesis, los datos, las visualizaciones, los textos, el wireframe y la implementación web.

La hipótesis que establecimos para guiar nuestra historia se encuentra en gran medida sustentada por los datos. A medida que nos hemos adentrado en el análisis de la información recopilada, nos hemos dado cuenta que efectivamente Damon Albarn le lleva la delantera a los hermanos Gallagher en al menos dos de los tres frentes en los que los hicimos “competir”.

De esta forma, las visualizaciones que producimos con los datos sirven para respaldar esa idea, utilizando aquellas que mostraran de manera clara e ilustrativa las conclusiones a las que fuimos llegando a medida que íbamos trabajando en la historia.

Por eso el wireframe que buscamos implementar seguía la lógica de una estructura más bien lineal y continua, de lectura vertical, que fuera avanzando en la información para que el usuario fuera descubriendo lo que revelaban los datos casi de la misma manera en que los fuimos descubriendo nosotras al analizarlos. Esto se pudo implementar efectivamente en la web que generamos con AI Studio y modificamos para que se ajustara a nuestra idea original del proyecto.

# Registro de los principales encargos realizados a herramientas de IA o vibecoding, si fueron utilizadas.

En primer lugar, el principal encargo a Google IA Studio fue la generación de una base de la página web. Para esto añadimos un prompt muy similar al que se nos entregó en clases, realizando las especificaciones correspondientes sobre la base de datos, los colores, el diseño y la estructura. Esto fue acompañado por los archivos que ya hemos trabajado, como las bases de datos, el libro de identidad, las crónicas, los gráficos, el wireframe y el mapa del usuario. 

El prompt utilizado fue:

*Implementa mi historia sobre el desarrollo de las carreras de Damon Albarn y los hermanos Gallagher luego de la Batalla del Britpop de 1995, siguiendo el wireframe adjunto. Usa mi título, mi párrafo y la referencia visual que te doy en el libro de identidad. En general, queremos lograr una coexistencia armónica visual de los tres grandes elementos que componen la webstory: la explosividad creativa de Albarn, el minimalismo de los Gallagher, y la identidad nacional británica. Expresado de otro modo, queremos que Londres y Manchester estén presentes.*

*Utiliza los gráficos adjuntos “grafico.jpg” y “carreramusical_vigencia_discografica.jpg”, adaptándolos a la identidad visual del “libro_de_identidad.pdf”, acompañados de su respectiva crónica que está en los archivos HTML.*

**Entrégame un único index. html que abra directamente en el navegador. Usa solo HTML, CSS y JavaScript puro, con el CSS y el JavaScript integrados en el HTML. No uses TypeScript, React, otros frameworks ni dependencias que requieran instalación o compilación.*

Una vez que la IA nos arrojó el primer código, comenzamos a realizar encargos específicos. Entre ellos tuvimos que pedirle que seccionara el sitio web y que cada una de estas partes tuviera un determinado color de fondo, así como sus respectivos gráficos, párrafos y visualizaciones. 

También tuvimos que pedirle que eliminara o simplificara algunos elementos de los gráficos. En nuestro caso, la IA tendía a añadir componentes innecesarios, como botones y subtítulos, e incluso a crear gráficos nuevos que no aportaban información relevante a nuestra historia e incluso que no tenían ninguna función asociada. 

Otro encargo importante que le hicimos a la IA fue la creación de visualizaciones de carácter más ilustrativo. En concreto, le solicitamos ayuda para desarrollar el código de elementos como el ticket de bienvenida que recibe al ingresar al sitio, las tarjetas de presentación de Damon Albarn y los Gallagher en formato de pase VIP, la animación de la fotografía de los hermanos Gallagher rompiéndose, el podio y el disco que se despliega a la hora de hablar de Song 2.

Del mismo modo, utilizamos IA para el uso de nuestro logo en la web. En primera instancia, nuestro logo fue simplificado, luciendo poco fiel a lo que habíamos diseñado. Aunque intentamos cambiarlo de manera manual, tuvimos que recurrir a la IA para que quedase del tamaño y lugar que queríamos.

Finalmente, le solicitamos a la IA que nos ayudara a generar los botones que permiten la votación que va al final de la página. Inicialmente solo nos había arrojado los botones con los nombres de los protagonistas, así que tuvimos que pedirle que le añadiera la función de voto a los botones y que agregara un cuadro del conteo total de los votos emitidos para cada opción.

# Cambios realizados por el equipo sobre el código generado o sugerido.

1. Ubicación del logo: En un principio, la IA simplificó nuestro logo y lo posicionó en el lado superior izquierdo. Intentamos reemplazarlo nosotras mismas por la imagen sin fondo de nuestro logo, pero continuaba apareciendo el generado por IA. Ante esto, tuvimos que subir la imagen de nuestro logo al vibecoding y darle indicaciones específicas sobre el tamaño y la ubicación.  

2. Títulos: Lo único que conservamos de la IA en este aspecto fueron los recuadros de los títulos. El contenido fue eliminado, ya que no dialogaba con nuestra crónica, y reemplazado por títulos generados y pensados por nosotras. Además, tuvimos que eliminar muchos subtítulos y textos agregados que, en realidad, solo ocupaban espacio y ensuciaban visualmente la página. 

3. Colores: La IA nos arrojó un fondo blanco como base de la web. Como nuestro objetivo era que las secciones tuvieran diferentes colores, tuvimos que realizar dicha modificación realizando apartados en el código y configurando el background. Esto último tuvimos que hacerlo con IA a partir de la segunda sección, ya que no nos dejó configurarla por nosotras mismas al manipular el código directamente.  

4. Gráficos: Tuvimos que solicitarle a la IA que eliminara subtítulos y otros textos que añadió a los gráficos. También, le pedimos que quitara botones y otras funciones que no entregaban información a la investigación.

5. Visualizaciones: La IA generó gráficos adicionales a partir de nuestras bases de datos. Dado que no estaban contemplados en el proyecto y tampoco entregan información útil, muchos de ellos fueron eliminados. El único que conservamos fue el que mostraba la distribución de las canciones más sonadas por producto cultural, el cual decidimos convertir en una visualización más simple y atractiva. 

6. Imágenes: Por algún motivo, la IA rescató nuestras imágenes de las crónicas individuales. Aunque no nos molestaban, no se acomodaban con la estética que establecimos en el libro de identidad, por lo que fueron reemplazadas por imágenes nuevas: algunas de estas fueron obtenidas de Internet y otras fueron intervenidas por nosotras mismas en Canva, donde le aplicamos filtros, saturaciones, etc. 

7. Carruseles: A pesar de que varios carruseles nos agradaron, al momento de editarlos fue imposible realizar los cambios necesarios. Es por ello que tuvimos que pedirle a la IA que recreara los carruseles, incluyendo la estructura e imágenes que queríamos. 

8. Reproductor de música: La IA creó una visualización que no se acomodaba a nuestro objetivo de contar con un reproductor de música opcional. Ante esto, tuvimos que eliminarlo y desarrollar una playlist de Spotify, que luego insertamos en la web con su respectivo código.

9. Botones de votación: La IA incluyó los botones para la votación que pensamos originalmente en el wireframe de baja fidelidad de la propuesta, pero nos arrojó solamente los botones, asociados a ventanas de texto. Como queríamos que funcionaran para emitir un voto, le tuvimos que pedir que los modificara y añadiera un contador total de votos que se actualizara cada vez que se emitiera una elección.

# Problemas encontrados y soluciones aplicadas.

Uno de los principales problemas fue editar los gráficos. En primera instancia, intentamos editar y modificar el código por nuestros propios medios, ya que eran cambios relacionados a tamaño, color y eliminación de ciertos elementos. Esta intervención manual en el código nos resultó efectiva para la mayoría de los cambios que tenían que ver con el aspecto visual y distribución de la página original generada con AI Studio.

Sin embargo, cuando quisimos realizar esto mismo en los gráficos, algunos de ellos no cambiaban a nuestras solicitudes e, incluso, provocaban que la página dejara de abrir.  Es por ello que decidimos solicitarle a Google IA Studio que hiciera estos cambios.

Otro problema durante el desarrollo de la web fue la creación de visualizaciones más ilustrativas. Dado que involucraban movimiento, tuvimos que recurrir a la IA en varias ocasiones para que cumpliera nuestros objetivos y se desplegara visualmente bien en la página. Esto se dio particularmente cuando tuvimos que hacer que la imagen de Liam y Noel se rompiera: primero la imagen ocupaba todo el ancho del sitio; luego no aparecía la imagen;  y por último, la fotografía no volvía a romperse a menos que se recargara la web. 

Finalmente, un problema importante estaba relacionado a los colores del fondo de las secciones. Para ello, tuvimos que redactar secciones en el código original y añadirle los elementos que queríamos que contuvieran. A la hora de establecerle los colores, sin embargo, fue imposible hacerlo por nuestros propios medios, ya que nuestras intervenciones no eran respondidas por el sitio. Fue así que, finalmente, optamos por pedirle a AI Studio que lo hiciera por nosotras. 

# Pruebas realizadas para verificar el contenido, el diseño, la interacción y la lectura en distintos tamaños de pantalla.

Para verificar que la página se pudiera visualizar en distintos tamaños de pantalla, utilizamos la función integrada de AI Studio que permite visualizar la página en pantalla de computador, teléfono y tablet, comprobando que no habían mayores problemas en ninguna de ellas.

También abrimos la página en distintos motores de búsqueda para asegurarnos de que se pudiera ejecutar en distintos entornos, comprobando que aquí tampoco teníamos mayores problemas.
