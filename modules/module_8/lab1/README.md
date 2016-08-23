# Plugin Device

### Instalación
Se debe instalar localmente por proyecto con el comando:

- `ionicx plugin add cordova-plugin-device`

### Características y Metodos

El objeto `Device` permite que una aplicación para acceder a una cantidad limitada de información sobre la aplicación y el dispositivo que ejecuta una aplicación `Cordova`. El objeto de `Device` representa las siguientes propiedades:

- `$cordovaDevice.getDevice()`: Devuelve el objeto completo de la información que el plugin ([documentación oficial](https://github.com/apache/cordova-plugin-device)) define para el dispositivo.
- `$cordovaDevice.getcordova()`: Devuelve la versión de `Cordova` utilizada para generar la aplicación.
- `$cordovaDevice.getplatform()`: En la mayoría de las plataformas, devuelve el nombre de la plataforma del dispositivo móvil la aplicación se ejecuta en. Las excepciones serán discutidos más adelante en el capítulo.
- `$cordovaDevice.getUUID()`: Devuelve el identificador único universal (`UUID`) asociado con el dispositivo (http://en.wikipedia.org/wiki/Universally_Unique_Identifier).
- `$cordovaDevice.getVersion()`: Devuelve la versión del sistema operativo que se ejecuta en el dispositivo.

El objeto `Device` tiene un alcance a nivel de la ventana, así que usted puede acceder a cualquiera de las propiedades de los dispositivos que utilizan el dispositivo dentro de las caracteristicas del dispositivo.