import { Header } from "./components/Header/Header";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/SideBar/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />  
      </div>
    </div>
  );
}
