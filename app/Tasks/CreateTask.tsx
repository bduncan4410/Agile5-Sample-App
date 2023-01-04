'use client';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase'

export default function CreateTask() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const router = useRouter();

  const create = async() => {
  const db = new PocketBase('http://127.0.0.1:8090');

  
  await db.collection('tasks').create({
    "name": name,
    "description": description,
    "start_date": startDate,
    "end_date": endDate,
    "completed": false,
  });
    
    setName('');
    setDescription('');
    setStartDate(new Date());
    setEndDate(new Date());

    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>Create a new Task</h3>
      <div>
        <h5>Task Name</h5>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h5>Description</h5>
        <textarea
          placeholder="Description"
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
        Create Task
      </button>
    </form>
  );
}