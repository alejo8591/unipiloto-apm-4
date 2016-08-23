# Plugin Geolocation

### Instalación
Se debe instalar localmente por proyecto con el comando:

- `cordova plugin add cordova-plugin-geolocation`

### Características

La API de geolocalización permite a una aplicación aprovechar las capacidades de GPS de un dispositivo móvil y determinar la ubicación del dispositivo en la superficie de la tierra. 
El uso de esta API, ya sea una aplicación puede comprobar manualmente la posición actual del dispositivo o se puede crear un reloj de ubicación que hará que la aplicación para estar informado periódicamente de la ubicación física del dispositivo.
Para utilizar esta API, el dispositivo que ejecuta la aplicación debe proporcionar capacidades de geolocalización (ya sea mediante la utilización de una radio GPS y el software asociado o algún mecanismo alternativo para determinar la ubicación del dispositivo). 
Mientras que las capacidades de geolocalización de los teléfonos inteligentes se han mejorado regularmente en los modelos más nuevos, una aplicación no puede garantizar que a pesar de que el dispositivo tiene capacidades de geolocalización, será capaz de determinar su ubicación. Hay muchos problemas mecánicos (como estar dentro de un edificio) que puede afectar a la capacidad del dispositivo para informar su ubicación a una aplicación `Cordova`.

Dado que la mayoría de los navegadores móviles compatibles con HTML5, estos proporcionan soporte para la API de Geolocalización de la W3C teniendo en cuenta la especificación (www.w3.org/TR/geolocation-API). 