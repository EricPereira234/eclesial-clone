import "./home.css";

//importando arquivos
import Hedear from "../Header";
import Body from "../Body";
import Footer from "../Footer";


export default function Home(){
    return (
        <div className="home">
        
            <Hedear/>
            <Body/>
            <Footer/>
        
        </div>
    )
}