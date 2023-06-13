import React from 'react'

// Styles CSS
import styles from '../styles/TaskForm.module.css';

type Props = {
  btnText: String
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Crie um título para sua tarefa..." />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="number" name="difficulty" placeholder="Qual a dificuldade da sua tarefa?" />
      </div>
      <button type="submit">{btnText}</button>
    </form>
  )
}

export default TaskForm