import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";
import { Avatar } from "../Avatar/Avatar";

export function Sidebar() {
  
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1741846562634-a92c13e44fa3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className={styles.cover}>          
      </img>
      <div className={styles.iconAvatar}>
        <Avatar 
        src="https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>         

      <div className={styles.profile}>
        <strong>Rahje Ahmed</strong>
        <span>Software Engineer | Java</span>
      </div>
      <footer>       
          <a 
            href="#">
                <PencilSimpleLine size={24} weight="bold" className={styles.iconEditar} />
            Editar seu perfil
          </a>        
      </footer>
    </aside>
  );
}
