import styles from './Header.module.css';
import logo from '../../assets/logo-ignite.png';

export function Header(){
    return (
        <header className={styles.header}>
            <img 
                src={logo} 
                alt="Logo ab filmes" 
            />
            <strong>Ignite Feed</strong>
        </header>
    )
}