# Plugin Device Motion

### Instalación
Se debe instalar localmente por proyecto con el comando:

- `ionic plugin add cordova-plugin-device-motion`

### Propiedades

Properties
- x: cantidad de aceleración en el eje x. (en m/s^2)(Número)
- y: cantidad de aceleración en el eje y. (en m/s^2)(Número)
- z: cantidad de aceleración en el eje z. (en m/s^2)(Número)
- timestamp: fecha y hora de creación en milisegundos (DOMTimeStamp)

### Características

La API del [acelerómetro permite a una aplicación `Cordova-Ionic`](https://github.com/apache/cordova-plugin-device-motion) determinar la orientación de un dispositivo en un espacio tridimensional (utilizando las coordenadas X, Y, y Z).

La documentación oficial de la API de `Cordova` actual sostiene que los valores devueltos por el acelerómetro indican los cambios en el movimiento de un dispositivo a través del espacio, 
pero en las pruebas de lo que los rendimientos del acelerómetro son los valores que definen la orientación real del dispositivo en un espacio tridimensional.

> Desafortunadamente, no hay manera con `Cordova` para determinar mediante programación si un dispositivo tiene un acelerómetro, excepto para consultar el acelerómetro y luego verificar con los errores que devuelve.