import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

// Interfaces
import { ITask } from '../interfaces/Task';

// Styles CSS
import styles from '../styles/TaskForm.module.css';

interface Props {
  btnText: String;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
}

const TaskForm = ({ btnText, taskList, setTaskList, task }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = {id, title, difficulty};

    setTaskList!([...taskList, newTask]);

    setTitle('');
    setDifficulty(0);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  }

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Crie um título para sua tarefa..."
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="number"
          name="difficulty"
          placeholder="Qual a dificuldade da sua tarefa?"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <button type="submit">{btnText}</button>
    </form>
  )
}

export default TaskForm