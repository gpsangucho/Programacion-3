export default function ConditionalText() {
    const isLoggedIn = false;
  
    return (
      <p>
        {isLoggedIn ? 'Bienvenido de nuevo con true' : 'Por favor inicia sesión con false'}
      </p>
    );
  }