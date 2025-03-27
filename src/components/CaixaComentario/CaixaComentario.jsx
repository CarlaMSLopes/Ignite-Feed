import styles from './CaixaComentario.module.css';

export function CaixaComentario(){
    return(
        <div className={styles.caixaComentario}>
        <textarea placeholder='Escreva um comentário...' className={styles.textArea}></textarea>
        <button type='button'>Publicar</button>
        </div>
    )
}