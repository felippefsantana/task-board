import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';

const Header = () => {
  return (
    <header className="p-2 border-bottom">
      <div className={`${styles.headerContent} d-flex align-items-center justify-content-between`}>
        <div className="d-flex align-items-center gap-2">
          <Link to="/"><b>TaskBoard</b></Link>
          <div>
            <button
              className={`${styles.btnWorkSpaces} btn rounded-1`}
              type="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Áreas de Trabalho<FontAwesomeIcon icon={faAngleDown} className="ms-2" />
            </button>
            <div className={`${styles.headerDropdown} dropdown-menu p-2 border-light-subtle`}>
              <h2 className="fs-6 text-secondary">Suas Áreas de Trabalho</h2>
              <div className={styles.workspaceList}>
                <div className={`${styles.workspaceItem} rounded-1`}>
                  <Link to="#" className="d-flex align-items-center px-2">
                    <p className="p-0 m-0">workspace 1</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">
            Criar<FontAwesomeIcon icon={faPlus} className="ms-2" />
          </button>
        </div>

        <div className="d-flex align-items-center gap-2">
        </div>
      </div>
    </header>
  )
}

export default Header