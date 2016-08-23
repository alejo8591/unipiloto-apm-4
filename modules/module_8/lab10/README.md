# Plugin Capture

### Instalación
Se debe instalar localmente por proyecto con el comando:

- `cordova plugin add cordova-plugin-capture`

### Características y Metodos

La API `Cordova` de captura permite una aplicación que permite capturar audio, vídeo y archivos de imagen utilizando la apropiada aplicación nativa en un dispositivo móvil. 
la aplicación cámara por defecto en el dispositivo se utiliza para capturar fotos y videos, mientras que la aplicación grabadora de voz por defecto del dispositivo se utiliza para la captura de clips de audio.
la API de captura en `Cordova` se basa en la API Media Capture W3C (www.w3.org/TR/media-capture-api). Por alguna razón, sin embargo, el equipo de `Cordova` ha omitido el apoyo a muchas de las opciones soportadas por la API de W3C.

Capture vs. cámara
`Cordova` implementó ambas APIs la cámara y la captura teniendo en cuenta que hay algunas coincidencias entre los dos en que ambos pueden capturar imágenes. 
En esencia, la API cámara se aplicó antes de que `Cordova` adoptara la API de captura W3C. 
Si bien ambas APIs capturar imágenes, las API operan de diferentes maneras. La API de la cámara puede capturar sólo imágenes pero apoya fuentes alternativas para los archivos de imagen, mientras que la API de captura sólo se permitirá interactuar directamente con la aplicación de captura y permitir capturas múltiples con una sola llamada a la API.