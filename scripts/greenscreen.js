document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
  
    // Reemplace el color verde con un video o imagen de fondo
    video.addEventListener('play', function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const width = video.videoWidth;
      const height = video.videoHeight;
      canvas.width = width;
      canvas.height = height;
  
      function processFrame() {
        ctx.drawImage(video, 0, 0, width, height);
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
  
        // Iterar sobre cada píxel del video
        for (let i = 0; i < data.length; i += 4) {
          const red = data[i];
          const green = data[i + 1];
          const blue = data[i + 2];
          const alpha = data[i + 3];
  
          // Verificar si el color del píxel es verde y hacerlo transparente
          if (green > 100 && red < 100 && blue < 100) {
            data[i + 3] = 0; // Establece la transparencia al máximo
          }
        }
  
        // Actualizar los píxeles del video con el color verde eliminado
        ctx.putImageData(imageData, 0, 0);
  
        // Repetir el proceso para cada fotograma del video
        requestAnimationFrame(processFrame);
      }
  
      // Iniciar el proceso de eliminación del color verde
      processFrame();
    });
  });
  