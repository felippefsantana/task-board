// import './App.css';

// Components
import Footer from './components/Footer';
import Header from './components/Header';

// Styles CSS
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main className={styles.main}>
        <h1>Conteúdo...</h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;
