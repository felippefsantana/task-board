import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPlus } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header';

import styles from './styles.module.css';

const Home = () => {
  return (
    <div id={styles["pageHome"]}>
      <Header />

      <div className={`${styles.mainContainer} d-flex align-items-start justify-content-start`}>
        <div className={`${styles.workspaceNavbar} mt-3`}>
          <nav>
            <div className={`p-2`}>
              <div>
                <Link to="#" className="w-100 text-start btn btn-transparent fw-medium">
                  <FontAwesomeIcon icon={faClipboardList} className="me-2" />Visão geral
                </Link>
              </div>
              <hr />
              <div className="d-flex align-items-center">
                <div className="py-1 ps-2 flex-fill">
                  Áreas de Trabalho
                </div>
                <button className="btn btn-transparent">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className={styles.workspaceList}>
                <Link to="#" className="btn btn-transparent d-flex align-items-center fw-medium rounded-1 px-2 mt-1">
                  <p className="p-0 m-0">workspace 1</p>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className={`${styles.mainContent} mt-3 mx-3`}>
          <h3 className="fs-5">SUAS ÁREAS DE TRABALHO</h3>
        </div>
      </div>
    </div>
  )
}

export default Home