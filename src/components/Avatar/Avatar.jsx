import styles from './Avatar.module.css';

export  function Avatar(props){
    return(
    <div>
    <img 
        src={props.src} 
        className={styles.avatar}
       >
    </img>
    </div>
    )
}
