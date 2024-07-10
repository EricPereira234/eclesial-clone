import "./body.css";
import { Link } from "react-router-dom";

//importando icones
import { FcContacts, FcDislike, FcBusinessman, FcGraduationCap, FcHome  } from "react-icons/fc";
import { AiOutlineWifi } from "react-icons/ai";
import { FaCalculator } from "react-icons/fa";
import { GrDocumentConfig } from "react-icons/gr";

export default function Corpo() {
    return (
        <div className="card-geral-body" >
            <div className="card-body" >

                <Link to={'/modal'} className="card-body-item1" >
                    <FcContacts size={35} />
                    <strong>
                        Agenda e Cursos (Planejar)
                        <label>Agendas, Cursos, Libro Tombo</label>
                    </strong>

                </Link>

                <Link to={'/modal'} className="card-body-item2"  >
                    <FcBusinessman size={35} />
                    <strong>
                        Fiéis e Cadastros (Geral)
                        <label>Cadastros Comuns, Senso Fiéis</label>
                    </strong>
                </Link>

                <Link to={'/modal'} className="card-body-item3" >
                    <AiOutlineWifi size={35} color={'blue'} />
                    <strong>
                        Conectividade
                        <label>Notificaçoes e Suporte</label>
                    </strong>
                </Link>

                <Link to={'/modal'} className="card-body-item4" >
                    <FcGraduationCap size={35} color={'blue'} />
                    <strong>
                        UniTheòs
                        <label>Conecta você ao conhecimento</label>
                    </strong>
                </Link>

            </div>


            <div className="card-body" >

                <Link to={'/modal'} className="card-body-item1" >
                    <FcDislike size={35} />
                    <strong>
                        Dízimo e Ofertas
                        <label>Lançamentos, Dízimo, Ofertas</label>
                    </strong>

                </Link>

                <Link to={'/modal'} className="card-body-item2"  >
                    <FcHome size={35} />
                    <strong>
                        Patrimônio
                        <label>Gestão Patrimonial</label>
                    </strong>
                </Link>

                <Link to={'/modal'} className="card-body-item3" >
                    <FaCalculator size={35} color={'blue'} />
                    <strong>
                        Contabilidade
                        <label>Contabilidade e Impostos</label>
                    </strong>
                </Link>

                <Link to={'/modal'} className="card-body-item4" >
                    <GrDocumentConfig size={35} color={'blue'} />
                    <strong>
                        Configurações
                        <label>Modelos, Usuários e Perfil</label>
                    </strong>
                </Link>

            </div>
        </div>

    )
}