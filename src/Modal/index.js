import { Link } from "react-router-dom";
import styles from "./modal.module.css";


export default function Modal() {
    return (
        <div className={styles.cardGeralModal} >
            <div className={styles.cardModal} >
                <Link to={'/dashboard'} className={styles.headerModal} >X</Link>
                <strong>Essa é apenas uma cópia criada para fins de estudos, se você deseja ter o sistema eclesial entre em contato com a Theós</strong>
                <a href="https://theos.com.br/contato/" className={styles.buttonTheos} target="_blank" >Fale com a Theós</a>
            </div>
        </div>

    )
}