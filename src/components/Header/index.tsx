import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { apiCurso } from "api/data";
import { ICurso } from "interfaces/Curso.interface";
import { Link } from "styles";
import { Container } from "./styles";

const Header = () => {
  const [cursos, setCursos] = useState<ICurso[]>([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiCurso.index();
      setCursos(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="container">
        <FaHome onClick={() => history.push("/")} />
        {cursos &&
          cursos.map((item) => (
            <Link key={item.id} href={`/${item.id}`}>
              {item.nome}
            </Link>
          ))}
      </div>
    </Container>
  );
};

export default Header;
