import Link from 'next/link';
import styles from './Tasks.module.css';
import CreateTask from './CreateTask';

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'


async function getTasks() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('Tasks');
  const res = await fetch('http://127.0.0.1:8090/api/collections/Tasks/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
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

function Task({ Task }: any) {
  const { id, name, description, start_date, end_date, created, updated } = Task || {};

  return (
    <Link href={`/Tasks/${id}`}>
      <div className={styles.Task}>
        <h2>{name}</h2>
        <h5>{description}</h5>
        
        <p>{start_date}</p>
        <p>{end_date}</p>
        <p>{created}</p>
        <p>{updated}</p>
      </div>
    </Link>
  );
}