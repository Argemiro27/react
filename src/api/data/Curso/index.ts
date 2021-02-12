import api from "../../index";
import { ICurso } from "../../../interfaces/Curso.interface"

class CursoData {
  index() {
    return api.get<ICurso[]>('cursos');
  }
}

export default new CursoData();
