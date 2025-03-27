import { Avatar } from "../Avatar/Avatar";
import { CaixaComentario } from "../CaixaComentario/CaixaComentario";
import { Conteudo } from "../Conteudo/Conteudo";
import styles from "../Post/Post.module.css";

export function Post() {
  return (
    <main className={styles.feedBar}>
      <header>
        <div className={styles.profile}>
        <Avatar 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> 
            <div>
            <strong>Alberto Martins</strong>
            <span>Data Analyst | Python</span>
            </div>
        </div>   
        <h1>Publicado há 12 minutos</h1>
      </header>
      <Conteudo />      
      <h1>Deixe seu feedback</h1>
      <CaixaComentario />
    </main>
  );
}
