import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";

const FormularioTarea = () => {
  return (
    <>
      <Form className="">
        <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
          <Form.Label> <h2>Ingrese su tarea </h2></Form.Label>
          <Form.Control type="text" placeholder="Ingrese su tarea aqui..." />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea></ListaTarea>
    </>
  );
};

export default FormularioTarea;
