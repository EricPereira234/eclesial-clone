import "./Hedear.css";

//importando iconies
import { BsGearFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

//importando arquivos internos
import logoMenor from "../img/logoMenor.png";
import Icones from "../Icons";



export default function Hedear(){
    return (
        <div className="card-header">

            <header>
                <img src={logoMenor} />

                <Icones>
                    <BsGearFill size={25} color='#ccc' />
                    <BsPerson size={25} color='#ccc' />
                </Icones>

                <p>Eric Pereira</p>
                <a href="/" ><MdOutlineLogout size={25} /><br />sair</a>
            </header>

            <div className="card-data">
                <b>Período Corrente</b>
                <TfiReload/>
            </div>

        </div>
    )
}