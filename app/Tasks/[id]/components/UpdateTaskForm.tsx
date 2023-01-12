'use client';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase'
import { createClient } from '../../../db/base'
import { Task } from '../../../../typings'
import { updateTask } from '../../../db/task';
import styles from '../../Tasks.module.css';

export default function UpdateTaskForm({task}: {task: Task}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const router = useRouter();

  const create = async() => {
    const client = createClient("http://127.0.0.1:8090");
    
    const newTask: Task = 
    {
      "id": task.id,
      "name": name,
      "description": description,
      "start_date": startDate,
      "end_date": endDate,
      "completed": false,
    }
    if(newTask.name === "") 
        {
          newTask.name = task.name;
        }
    if(newTask.description === "")
        {
          newTask.description = task.description;
        }
    if(newTask.start_date === new Date())
        {
          newTask.start_date = task.start_date;
        }
    if(newTask.end_date === new Date())
        {
          newTask.end_date = task.end_date;
        }
        
    await updateTask(client, newTask.id, newTask);
    
    setName('');
    setDescription('');
    setStartDate(new Date());
    setEndDate(new Date());

    router.refresh();
  }

  return (
    <div className={styles.form} >
      <form onSubmit={create}>
        <h3>Update This Task</h3>
        <div>
          <h5>Task Name</h5>
          <input
            type="text"
            placeholder={task.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h5>Description</h5>
          <textarea
            placeholder={task.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
        <h5>Start Date</h5>
          <DatePicker
            selected={startDate}
            onChange={(date:Date) => setStartDate(date)}
          />
        </div>
        <div>
        <h5>End Date</h5>
          <DatePicker
            selected={endDate}
            onChange={(date:Date) => setEndDate(date)}
          />
        </div>
        <button type="submit">
          Update Task
        </button>
      </form>
    </div>
  );
}
