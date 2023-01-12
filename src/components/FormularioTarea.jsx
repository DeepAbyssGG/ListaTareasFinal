import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
    //buscar los datos del localStorage
    const tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareaKey')) || [];
    //aca va la mayoria de la logica
    const [tarea, setTarea] = useState("")
    const [arregloTarea, setArregloTarea] = useState(tareasLocalStorage)

    //ciclo de vida del componente
    useEffect(()=>{
      console.log('prueba de ciclo de vida del componente')
    //guardar en el localstorage
    localStorage.setItem('arregloTareaKey', JSON.stringify(arregloTarea))
  },[arregloTarea])
    
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
