 interface Persona {
    nombre: string;
    apellido: string;
  }
  
  const personas: Persona[] = [
    { nombre: "Juan", apellido: "Pérez" },
    { nombre: "María", apellido: "Gómez" },
    { nombre: "Luis", apellido: "Martínez" },
    { nombre: "Ana", apellido: "Fernández" },
    { nombre: "Carlos", apellido: "Rodríguez" }
  ];



  const App: React.FC = () => {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Lista de Personas</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Nombre</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Apellido</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((persona, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{persona.nombre}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{persona.apellido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default App;