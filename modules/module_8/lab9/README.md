# Plugin Camera

### Instalación
Se debe instalar localmente por proyecto con el comando:

- `cordova plugin add cordova-plugin-camera`

### Características y Metodos

La API de la cámara `Cordova` ofrece a la aplicación la capacidad de trabajar con imágenes, ya sean capturadas directamente desde la cámara o recuperadas desde el alamcenamiento de fotos del dispositivo.

Al traer una imagen, la API puede devolver, ya sea un URI que apunta al archivo de imagen en el sistema de archivos del dispositivo o la cadena codificado en base64 que representa el contenido de la imagen.

La API proporciona un método único, `$cordovaCamera.getPicture(options)`, que se utiliza para recuperar una imagen y por parametro un objeto `options` que se utiliza para definir los parámetros en torno a cómo se obtiene la imagen, cómo se formatea, y su respectiva edición con la aplicación nativa de cada dispositivo.


#### Configuración de opciones de la cámara
Ahora que ya sabe cómo tomar fotos usando la cámara, vamos a hablar acerca de las opciones que puede utilizar para configurar cómo funciona el proceso. Como usted puede recordar de la sección anterior, al llamar GetPicture, un desarrollador puede pasar en un objeto cameraOptions que define los parámetros que controla la forma en que se obtiene la imagen. El objeto cameraOptions compatible con las siguientes propiedades:

- quality
- destinationType sourceType
- allowEdit
- encodingType
- targetWidth
- targetHeight
- mediaType

Cada una de estas opciones se describirá con mayor detalle en las siguientes secciones. Al igual que con muchas otras características de la API de `Cordova`, ciertas opciones de la API (tales como AllowEdit en el API de la cámara) se aplican solamente en un número limitado de plataformas móviles.

He aquí un ejemplo de un cameraOptions plenamente configurados objeto que podría utilizar en una de sus aplicaciones `Cordova`:
```javascript
var options = {
            quality : 75,
            sourceType : Camera.PictureSourceType.CAMERA,
            destinationType : Camera.DestinationType.FILE_URI,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 1024,
            targetHeight: 768
        };
```
####Calidad

Cuando se trabaja con cámaras de teléfonos inteligentes, la óptica de mayor resolución en la lente de la cámara, además de almacenamiento de memoria limitada y el ancho de banda disponible para dispositivos impulsaron la necesidad de ser capaz de comprimir imágenes para que ocupaban menos espacio de almacenamiento y ancho de banda de transmisión. Como parte de este proceso de compresión, las normas, tales como la especificación JPEG incluyeron apoyo para el uso de la calidad de imagen para controlar las tasas de compresión cuando se guarda un archivo de imagen. Mediante el uso de diferentes ajustes de calidad de imagen, que se definen como porcentajes, puede afectar dramáticamente el tamaño físico de un archivo de imagen.

Una calidad de imagen de 100% muestra la imagen en su plena capacidad, sin reducir la calidad de la imagen, y le da la mejor imagen posible. A medida que reduce la calidad de la imagen, verá cierta degradación en la claridad de la imagen, pero para la mayoría de los propósitos que será de sólo aceptable más pequeño en tamaño del archivo.

El parámetro de calidad permite a un desarrollador para especificar la calidad de imagen porcentaje de una imagen capturada mediante la API de la cámara. En la mayoría de los casos, utilizará los valores del 50% al 100% para sus imágenes. Esto no es tanto porque usted se preocupa por la calidad de imagen, pero más porque hay que reducir la calidad de imagen con el fin de reducir el tamaño del archivo de imagen.
Como se verá en la siguiente sección, los desarrolladores pueden tener un archivo de imagen URI devuelto desde una llamada a GetPicture o los, datos de archivo de imagen codificados en base64 primas reales. Utilizando el archivo de imagen URI es fácil; es sólo un puntero de archivo. Cuando la obtención de datos de la imagen en bruto de GetPicture, usted tiene que lidiar con el hecho de que el dispositivo y el intérprete de JavaScript en el dispositivo tienen límites en la cantidad de datos que pueden procesar. 
Como nuevos teléfonos inteligentes consiguen cámaras más altas y de mayor resolución, debe reducir la calidad de imagen de manera que una aplicación `Cordova` puede procesar con éxito los datos de imagen devueltos. 
Al procesar los datos en bruto a partir de una imagen de alta resolución con una calidad de 100%, que estaría procesando una gran cadena, y la aplicación sólo podría fallar. 
Cuando se reduce la calidad de imagen, se reduce la cantidad de datos que la aplicación debe procesar y aumentar la probabilidad de que realmente va a funcionar.
La gente que trabaja en `Cordova` recomienda el uso de un 50% la calidad de imagen (o inferior) cuando se trabaja con datos de imagen sin procesar.
Para configurar un cameraOptions objeto de utilizar una calidad de imagen de 50%, utilice el siguiente código:

`quality : 50`

#### destinationType
Al capturar una imagen utilizando GetPicture, aplicaciones usarán destinoTipo para controlar si la información de la imagen se devuelve como un archivo de URI que apunta al archivo de imagen almacenado en la memoria del dispositivo:


- `destinationType: Camera.DestinationType.FILE_URI`

Para recibir datos de imagen de la imagen como un valor de cadena codificado en base 64, use el siguiente:


- `destinationType: Camera.DestinationType.DATA_URL`

Utilizando estos datos de imagen RAW, aún puede hacer que la imagen en la interfaz de usuario, pero es más probable va a querer ya sea almacenar los datos en una base de datos o cargar los datos a un servidor de archivos. Sólo hay demasiado riesgo al tratar de manipular la imagen en el dispositivo móvil.

#### sourceType
El parámetro sourceType se utiliza para definir dónde GetPicture consigue su foto de. Cuando sourceType se omite, GetPicture simplemente usará la cámara (`encodingType: Camera.EncodingType.JPEG`) para tomar la fotografía. Las aplicaciones pueden especificar para utilizar la biblioteca de fotos del dispositivo a través de lo siguiente:

- `sourceType : Camera.SourceType.PHOTOLIBRARY`

Para recuperar las fotos de un álbum de foto guardada, utilice la siguiente:


- `sourceType : Camera.SourceType.SAVEDPHOTOALBUM`


En la mayoría de las plataformas, la especificación de un `sourceType` de SAVEDPHOTOALBUM o Photolibrary hace esencialmente la misma cosa. 
Cuando la aplicación realiza una llamada a GetPicture, el dispositivo se abrirá la aplicación de biblioteca de fotos y permitira que el usuario seleccione primero un álbum de fotos y, a continuación, seleccione una sola foto antes de devolver la imagen seleccionada para la aplicación `Cordova` .


#### AllowEdit

Una aplicación iOS puede utilizar la opción `AllowEdit` instruir GetPicture para permitir al usuario editar la imagen seleccionada antes de volver a la aplicación `Cordova`. Para configurar un objeto cameraOptions para esta opción, utilice la siguiente:


- `allowEdit : true`


Una vez habilitada en una aplicación, después de que la cámara tome una foto, el dispositivo mostrará una pantalla similar a la mostrada en la Figura 11-10. En este punto, el usuario puede pellizcar, picana, y deslice la imagen alrededor para adaptarse a la parte de la imagen que desea capturar en la retícula se muestra en la figura. Cuando el usuario hace clic en el botón Elegir, la imagen editada se devuelve a la aplicación `Cordova` llamando.

encodingType
Una aplicación `Cordova` utiliza el cameraOption encodingType para decirle GetPicture qué tipo de imagen a tomar. Opciones compatibles son JPEG y PNG, JPEG con ser el predeterminado en la mayoría, si no todas, las plataformas. Para configurar GetPicture para devolver un archivo JPEG, utilice la siguiente:


- `encodingType: Camera.EncodingType.JPEG`


Para utilizar los archivos PNG, utilice la siguiente:


- `encodingType: Camera.EncodingType.PNG`


Esta opción no es compatible en todas las plataformas; consulte la documentación de `Cordova` para obtener información específica.

####targetHeight y targetWidth
Los parámetros targetHeight y targetWidth controlan la altura y la anchura de la imagen obtenida usando `targetWidth`. Puede configurar cualquiera `targetHeight` o `targetWidth`, y la imagen se ampliará en consecuencia. Si especifica tanto, la imagen será modificada para que el que da lugar a la relación de aspecto más pequeño. De cualquier manera, se mantendrá la relación de aspecto.
Como no hay manera de determinar mediante programación la resolución de la cámara o de la relación de aspecto con el apoyo antes de tomar una imagen, por lo tanto, no hay forma de establecer con exactitud estos valores dentro de una aplicación sin adivinar o pruebas directas en cada dispositivo compatible.
Para definir un objeto `options` que especifica `targetHeight` y `targetWidth` para la imagen, utilice el siguiente código:


- `targetHeight: 100, targetWidth: 100`




