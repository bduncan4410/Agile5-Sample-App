'use client'
import { redirect } from 'next/navigation';
import { createClient } from '../../../db/base';
import { removeTask } from '../../../db/task';
import { useRouter } from 'next/navigation';

export default function DeleteButton({deleteID} : any ){
    const router = useRouter()
    const id = deleteID
    return <button onClick={() => deleteTask(id).then(() => router.push('/Tasks'))}>Delete Task</button>
}

async function deleteTask(id : string){
    
        const client = await createClient('http://127.0.0.1:8090');
        await removeTask(client, id)
        }
    