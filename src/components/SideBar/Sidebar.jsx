import iconEditar from "../../assets/icon-editar-green.png";
import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <header>
        capa<img></img>
      </header>
      <div>
        <strong>Nome do usuário</strong>
        <h1>Função</h1>
      </div>
      <footer>       
          <a 
            href="#">
                <img 
                    src={iconEditar}
                    className={styles.iconEditar}>
                </img>
            Editar seu perfil
          </a>        
      </footer>
    </aside>
  );
}
