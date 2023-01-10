import ItemTarea from "./ItemTarea";
import { ListGroup } from "react-bootstrap";

const ListaTarea = ({arregloTarea}) => {
  return (
    <ListGroup>
     {
     arregloTarea.map((tarea, posicion)=> <ItemTarea key={posicion} nombreTarea={tarea}></ItemTarea>)
     }
    </ListGroup>
  );
}

export default ListaTarea;
