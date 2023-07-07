import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { useAuth } from '../../hooks/useAuth';

import illustrationImg from '../../assets/images/illustration.svg';

import styles from './styles.module.css';

const Login = () => {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  const handleSignInWithGoogle = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    navigate('/');
  }

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div id={styles["pageAuth"]}>
      <aside className="d-none d-md-flex">
        <img src={illustrationImg} alt="Ilustração simbolizando a conclusão de tarefas" />
        <div className="mb-3">
          <strong className="fs-1 fw-bolder">Gerencie as atividades da sua rotina</strong>
          <p className="fs-5 text-secondary">Crie e gerencie suas tarefas em tempo-real</p>
        </div>
        <small>
          <Link target="_blank" to="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-lista-de-verificacao_5573507.htm#query=tasks&position=22&from_view=search&track=sph">Imagem de storyset</Link> no Freepik
        </small>
      </aside>

      <div className={`${styles.separator} d-none d-lg-block`}></div>

      <main>
        <div className={`${styles.mainContent} d-flex flex-column align-items-stretch text-center p-3`}>
          <h1>TaskBoard</h1>
          <button
            className="btn btn-lg btn-signin-google d-flex align-items-center justify-content-center gap-2"
            type="button"
            onClick={handleSignInWithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} />Entrar com o Google
          </button>
        </div>
      </main>
    </div>
  )
}

export default Login