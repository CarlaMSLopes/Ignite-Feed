import { Avatar } from "../Avatar/Avatar";
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import styles from "./Comentario.module.css";

export function Comentario() {
  return (
    <>
      <main className={styles.comentario}>
        <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className={styles.boxContent}>
          <header>
            <div className={styles.namePerfil}>
              <strong>Jenny Le Blanc</strong>
              <span>Cerca de 1 hora</span>
            </div>
            <button><Trash className={styles.iconTrash} /></button>            
          </header>
          <div>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
        </div>
      </main>
      <footer>
        <button>
          <ThumbsUp className={styles.like} />
          Aplaudir
        </button>
        <p>• 24</p>
      </footer>
    </>
  );
}
