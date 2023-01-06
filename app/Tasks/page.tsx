import Link from 'next/link';
import styles from './Tasks.module.css';
import CreateTask from './TaskManager';
import  { createClient} from '../db/base'
import  { getOneTask } from '../db/task'
 


async function getTasks() {
  const client = await createClient('http://172.0.0.1:8090/api/');
  let res = await getOneTask(client, "zzh8h375zryoko6")
  let data = res.json();
  return data?.items as any[];
}

export default async function TasksPage() {
  const Tasks = await getTasks();

  return(
    <div>
      <h1>Tasks</h1>
      <div className={styles.grid}>
        {Tasks?.map((Task) => {
          return <Task key={Task.id} Task={Task} />;
        })}
      </div>

      <CreateTask />
    </div>
  );
}

export function Task({ Task }: any) {
  const { id, title, content, created } = Task || {};

  return (
    <Link href={`/Tasks/${id}`}>
      <div className={styles.Task}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}