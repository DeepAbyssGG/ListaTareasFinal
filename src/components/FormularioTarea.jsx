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

    };
    const borrarTarea = (nombre)=> {
        let arregloModificado = arregloTarea.filter((item)=>(item !== nombre));
        //actualizar el state
        setArregloTarea(arregloModificado)
    }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control className="me-3" type="text" 
          placeholder="Ingrese su tarea aqui..."
          onChange={(e)=> setTarea(e.target.value)}
          value={tarea} 
        />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>

      <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea}></ListaTarea>
    </>
    
  );
};

export default FormularioTarea;
