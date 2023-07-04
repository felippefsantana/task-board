import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRightFromBracket, faArrowRightToBracket, faCircleHalfStroke, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../../hooks/useAuth';

import styles from './styles.module.css';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSignOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="px-3 py-2 border-bottom">
      <div className={`${styles.headerContent} d-flex align-items-center justify-content-between`}>
        <div className="d-flex align-items-center gap-2">
          <Link to="/"><b>TaskBoard</b></Link>
          {user && (
            <>
              <div>
                <button
                  className={`${styles.btnHeader} btn rounded-1`}
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Áreas de Trabalho<FontAwesomeIcon icon={faAngleDown} className="ms-2" />
                </button>
                <div className={`${styles.headerDropdown} dropdown-menu p-2 border-light-subtle`}>
                  <h2 className="fs-6 text-secondary">Suas Áreas de Trabalho</h2>
                  <div className={styles.workspaceDropdown}>
                    <div className={`${styles.headerDropdownItem} ${styles.workspaceDropdownItem} rounded-1`}>
                      <Link to="#" className="d-flex align-items-center px-2">
                        {/* <div className={`${styles.workspaceDropdownItemIcon} d-flex align-items-center justify-content-center`}>
                          <div className="rounded-1 d-flex align-items-center justify-content-center bg-success text-white">
                            W
                          </div>
                        </div> */}
                        <p className="p-0 m-0">workspace 1</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Criar<FontAwesomeIcon icon={faPlus} className="ms-2" />
                </button>
                <div className={`${styles.headerDropdown} dropdown-menu border-light-subtle`}>
                  <button className={`${styles.headerDropdownItem} dropdown-item text-wrap`}>
                    <span>Criar Quadro</span>
                    <p className="text-dark-emphasis">Um quadro é um conjunto de cartões organizados em listas. Use-o para gerenciar e controlar suas atividades.</p>
                  </button>
                  <button className={`${styles.headerDropdownItem} dropdown-item text-wrap`}>
                    <span>Criar Área de trabalho</span>
                    <p className="text-dark-emphasis">Uma área de trabalho é um conjunto de quadros. Use-a para gerenciar atividades paralelas.</p>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="d-flex align-items-center gap-2">
          <button className={`${styles.btnHeader} btn rounded-circle`}>
            <FontAwesomeIcon icon={faCircleHalfStroke} rotation={180} />
          </button>

          {user ? (
            <button className={`${styles.btnHeader} btn rounded-1`} onClick={handleSignOut}>
              Sair<FontAwesomeIcon icon={faArrowRightFromBracket} className="ms-2" />
            </button>
          ) : (
            <Link to="/login" className={`${styles.btnHeader} btn rounded-1`}>
              Entrar<FontAwesomeIcon icon={faArrowRightToBracket} className="ms-2" />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header