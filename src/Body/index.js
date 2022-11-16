import "./body.css";

//importando icones
import { FcContacts } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineWifi } from "react-icons/ai";

export default function Corpo() {
    return (
        <div className="card-body" >

            <div className="card-body-item1" >
                <FcContacts size={35} />
                <strong>
                    Agenda e Cursos (Planejar)
                    <label>Agendas, Cursos, Libro Tombo</label>
                </strong>

            </div>

            <div className="card-body-item2"  >
            <FcBusinessman size={35} />
                <strong>
                    Fiéis e Cadastros (Geral)
                    <label>Cadastros Comuns, Senso Fiéis</label>
                </strong>
            </div>

            <div className="card-body-item3" >
                <AiOutlineWifi size={35} color={'blue'} />
                <strong>
                    Conectividade
                    <label>Notificaçoes e Suporte</label>
                </strong>
            </div>

            <div className="card-body-item4" >
                ......
            </div>

        </div>
    )
}