import styles from '../Tasks.module.css';
import { createClient } from '../../db/base';
import { getOneTask, removeTask } from '../../db/task';
import DeleteButton from './DeleteButton';

async function getTask(taskId: string) {
  const client = await createClient('http://127.0.0.1:8090');
  const data = await getOneTask(client, taskId)
  return data;
}

export default async function TaskPage({ params }: any) {
  const task = await getTask(params.id);


  return (
    <div>
      <h1>tasks/{task.id}</h1>
      <div className={styles.task}>
        <h3>{task.name}</h3>
        <h5>{task.description}</h5>
        <p>Status: {task.completed? "Complete" : "Incomplete"  }</p>
        <p>Start Date: {new Date(task.start_date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</p>
        <p>End Date: {new Date(task.end_date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>
      <div>
        <DeleteButton deleteID={task.id}/>
      </div>
    </div>
  );
}

