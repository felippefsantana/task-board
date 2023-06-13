// import './App.css';

// Components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// Styles CSS
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa"/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
