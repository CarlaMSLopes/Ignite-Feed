import { Header } from "./components/Header/Header";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/SideBar/Sidebar";
import { Post } from "./components/Post/Post";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar /> 
        <Post /> 
      </div>
    </div>
  );
}
