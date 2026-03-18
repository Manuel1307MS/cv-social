
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.share-btn');
  if (!btn) return;

  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href
    }).catch((error) => {
      console.error('Error al compartir:', error);
    });
  } else {
    alert('Tu navegador no soporta la función de compartir automáticamente. Por favor, copia la URL manualmente: ' + window.location.href);
  }
});
