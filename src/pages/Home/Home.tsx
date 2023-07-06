import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header/Header';

import styles from './styles.module.css';

const Home = () => {
  return (
    <div id={styles["pageHome"]}>
      <Header />

      <div className={`${styles.mainContent} d-flex align-items-start justify-content-start`}>
        <div className={styles.aside}>
          <nav>
            <div className={`p-2 border-light-subtle`}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="py-1">
                  Áreas de Trabalho
                </div>
                <button className="btn bg-transparent">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div>
                <div className={`rounded-1`}>
                  <Link to="#" className="d-flex align-items-center px-2">
                    <p className="p-0 m-0">workspace 1</p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div>Lista de Workspaces</div>
      </div>
    </div>
  )
}

export default Home