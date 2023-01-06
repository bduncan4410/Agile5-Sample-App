export type Task = {
    
    id: string;
    name: string;
    description: string;
    completed: boolean;
    end_date: Date;
    start_date: Date;

};
export type Account = {
    
    id: string;
    email: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
   

};