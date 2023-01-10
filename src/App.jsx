import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioTarea from './components/FormularioTarea';

function App() {
  return (
    <Container>
      <h1 className='display-4 text-center'>Lista Tarea</h1> 
      <FormularioTarea></FormularioTarea>
    </Container>
  );
}

export default App;
