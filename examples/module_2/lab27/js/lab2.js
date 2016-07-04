$(document).ready(function(){
    /*
    * Utilizando selectores del tipo tag con un filtro
    * para que en el atributo src tenga presente elementos
    * que vienen de alguna de las fuentes para adaptar los
    * videos `vimeo` o `youtube` */
    var $all_videos = $('iframe[src^="http://player.vimeo.com"], ' +
                       'iframe[src^="http://www.youtube.com"], ' +
                       'iframe[src^="https://player.vimeo.com"], ' +
                       'iframe[src^="https://www.youtube.com"]');

    // trayendo los elementos a escalar
    var $fluid_element = $('figure');

   /*
   * En esta iteración tomamos los videos almacenadoa
   * en la variable con el objeto jQuery para poder iterar
   * sobre estos elementos.
   * Aidicional le agregamos un atributo al tag llamado
   * 'data-*' que son elementos del tipo semántico para
   * HTML5.
   * Luego removemos los atributos `width` y `height`
   * */
   $all_videos.each(function(){
      $(this).attr('data-aspect-ratio', this.height/this.width)
             .removeAttr('height')
             .removeAttr('width');
   });

   /*
   * Luego sobre el DOM a nivel Window utilizamos el
   * método `resize()` para poder adaptar la información
    * a la resolución indicada */
   $(window).resize(function(){
      var new_width = $fluid_element.width();
      $all_videos.each(function(){
        var $el = $(this);
        $el.width(new_width);
        $el.height(new_width * $el.attr('data-aspect-ratio'));
      });
   }).resize();
});