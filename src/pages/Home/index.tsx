import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header';

import styles from './styles.module.css';

const Home = () => {
  return (
    <div id={styles["pageHome"]}>
      <Header />

      <div className={`${styles.mainContainer} d-flex align-items-start justify-content-start`}>
        <div className={styles.workspaceNavbar}>
          <nav>
            <div className={`p-2 border-light-subtle`}>
              <div className="d-flex align-items-center">
                <div className="py-1 ps-2 flex-fill">
                  Áreas de Trabalho
                </div>
                <button className="btn btn-transparent">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className={styles.workspaceList}>
                <div>
                  <Link to="#" className={`${styles.workspaceItem} text-decoration-none d-flex align-items-center rounded-1 px-2`}>
                    <p className="p-0 m-0">workspace 1</p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className={styles.mainContent}>
          <h3 className="fs-5">SUAS ÁREAS DE TRABALHO</h3>
        </div>
      </div>
    </div>
  )
}

export default Home