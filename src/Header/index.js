import "./Hedear.css";
//importando arquivos
import logoMenor from "../img/logoMenor.png";
export default function Hedear(){
    return (
        <div className="card-header">

            <header>
              <img src={logoMenor} />
              <p>Eric Pereira</p>
            </header>

            <div className="card-data">
             <b>Período Corrente</b>
            </div>

        </div>
    )
}