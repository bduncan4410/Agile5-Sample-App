import styles from '../Tasks.module.css';
import PocketBase from 'pocketbase';

async function getTask(taskId: string) {
  const db = new PocketBase('http://127.0.0.1:8090/api/');
  const data = await db.collection('tasks').getOne(taskId, {
    expand: 'relField1,relField2.subRelField',
  });
  return data;
}

export default async function TaskPage({ params }: any) {
  const task = await getTask(params.id);

  return (
    <div>
      <h1>tasks/{task.id}</h1>
      <div className={styles.task}>
        <h3>{task.title}</h3>
        <h5>{task.content}</h5>
        <p>{task.created}</p>
      </div>
    </div>
  );
}