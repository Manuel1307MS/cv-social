
const emailButtons = document.querySelectorAll('.copy-email-btn');

// Crear el toast
const toast = document.createElement('div');
toast.id = 'toast';
Object.assign(toast.style, {
  position: 'fixed',
  top: '40px',            
  left: '50%',
  transform: 'translateX(-50%) translateY(-20px)', 
  backgroundColor: 'var(--color-background-secondary)',  
  color: 'var(--color-primary)',                        
  padding: '14px 24px',
  borderRadius: '16px',
  fontSize: '14px',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  zIndex: '10000',
  opacity: '0',
  visibility: 'hidden',
  pointerEvents: 'none',
  transition: 'opacity 0.4s ease, transform 0.4s ease, visibility 0.4s ease',
});
document.body.appendChild(toast);

function showToast(message) {
  toast.textContent = message;
  toast.style.visibility = 'visible';
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)'; 
  toast.style.pointerEvents = 'auto';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.visibility = 'hidden';
    toast.style.transform = 'translateX(-50%) translateY(-20px)'; 
    toast.style.pointerEvents = 'none';
  }, 3500);
}

emailButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const email = btn.getAttribute('data-email');
    if (!email) return;

    // Copiar al portapapeles
    navigator.clipboard.writeText(email).then(() => {
        showToast('Correo copiado al portapapeles');
    }).catch((err) => {
      console.error('Error al copiar el correo:', err);
    });
  });
});
