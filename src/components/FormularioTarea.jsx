import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const FormularioTarea = () => {
    const [tarea, setTarea] = useState("")
    const [arregloTarea, setArregloTarea] = useState([])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setArregloTarea([...arregloTarea, tarea]);
        //limpiamos input
        setTarea("");

    }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="text" 
          placeholder="Ingrese su tarea aqui..."
          onChange={(e)=> setTarea(e.target.value)}
          value={tarea} 
        />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>

      <ListaTarea arregloTarea={arregloTarea}></ListaTarea>
    </>
    
  );
};

export default FormularioTarea;
