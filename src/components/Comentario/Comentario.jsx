import { Avatar } from "../Avatar/Avatar";
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import styles from "./Comentario.module.css";

export function Comentario() {
  return (
    <main className={styles.comentario}>
      <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className={styles.comentarioSide}>
        <div className={styles.bgComentario}>
          <header className={styles.headerComentario}>
            <div>
              <strong>Devon Lane</strong>
              <span>Cerca de 2h</span>
            </div>
            <button>
              <Trash className={styles.iconTrash} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <div>
          <button className={styles.iconLike}><ThumbsUp  />Aplaudir • 34</button>
        </div>
      </div>
    </main>
  );
}
{
  /* <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */
}
