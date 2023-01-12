import Link from 'next/link';
import styles from './Tasks.module.css';
import CreateTask from './components/CreateTaskForm';
import  { createClient} from '../db/base'
import  { getAllTasks } from '../db/task'

async function getTasks() {
  const client = await createClient('http://127.0.0.1:8090');
  let res = await getAllTasks(client);
  let data = res
  return data
}

export default async function TasksPage() {
  const Tasks = await getTasks();

  return(
    <div>
      <h1>Tasks</h1>
      <div className={styles.grid}>
        {Tasks?.map((task) => {
          return <Task key={task.id} Task={task} />;
        })}
      </div>

      <CreateTask />
    </div>
  );
}

export function Task({ Task }: any) {
  const { id, name, description, completed } = Task || {};

  return (
    <Link href={`/Tasks/${id}`}>
      <div className={styles.Task}>
        <h2>{name}</h2>
        <h5>{description}</h5>
        <p>Status: {completed? "Complete" : "Incomplete"  }</p>
      </div>
    </Link>
  );
}