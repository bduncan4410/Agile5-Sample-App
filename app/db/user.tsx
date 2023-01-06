import PocketBase from 'pocketbase'
import { Account } from '../../typings'



//A function to add a account to the database
export function addAccount(db: PocketBase , account: Account){
    db.collection('accounts').create({
        "email": account.email,
        "username": account.username,
        "password": account.password,
        "first_name": account.first_name,
        "last_name": account.last_name,
    });
}

export function removeAccount(db: PocketBase, id: string){
    db.collection('account').delete(id);
}

export function getOneAccount(db: PocketBase, id: string){
    db.collection('accounts').getOne(id);
}

export  function getAllAccounts(db: PocketBase){
     db.collection('accounts').getList();
}
export  function updatePassword(db: PocketBase, id: string , newPassword: string) {
     db.collection('accounts').update(id,{
        "password": newPassword,
    }); 
}

  
    
    
    