if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registro ok
      console.log('El registro del ServiceWorker fue exitoso, tiene el siguiente alcance: ', registration.scope);
     // console.log(registration);
    }).catch(function(err) {
      // registro falló :(
      console.log('El registro del ServiceWorker falló: ', err);
    });
  });
}


