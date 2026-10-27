import { useParams } from "react-router";
import { users } from "../data/user";
import { useState } from "react";
import type { UserType } from "../types/UserType";

function UserEditPage(){

    let {id} = useParams();

    if (!id) {return "Brak ID użytkownika!";}

    let user: UserType|undefined = users.find((v)=> v.id === Number(id))

    if (!user) {return "Nie ma takiego typa!";}

    let [formData, setFormData] = useState<UserType>(user);

    function formDataChangeHandler(e:any){
        let {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    return (
    <div>
        <form>
            <div>
                <label className="form-label">Id:</label>
                <input className="form-control" id="id" name="id" value={formData.id} onChange={formDataChangeHandler} type="text" disabled/>
            </div>
            <div>
                <label className="form-label">Imię:</label>
                <input className="form-control" id="name" name="name" value={formData.name} onChange={formDataChangeHandler} type="text"/>
            </div>
            <div>
                <label className="form-label">Nazwisko:</label>
                <input className="form-control" id="surname" name="surname" value={formData.surname} onChange={formDataChangeHandler} type="text"/>
            </div>
            <div>
                <label className="form-label">Email:</label>
                <input className="form-control" id="email" name="email" value={formData.email} onChange={formDataChangeHandler} type="email"/>
            </div>
        </form>
    </div>
    );
}

export {UserEditPage};