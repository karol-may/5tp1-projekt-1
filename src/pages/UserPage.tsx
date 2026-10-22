import { NavLink } from "react-router";
import { users } from "../data/user";

function UserPage(){

    return (
    <div>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>E-mail</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {users.map((v,i)=>{
                    return(
                        <tr key={i}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.surname}</td>
                            <td>{v.email}</td>
                            <td className="d-flex gap-1">
                                <NavLink to={"/user/"+v.id} className="btn btn-sm btn-info"><i className="bi bi-eye-fill"></i></NavLink>
                                <NavLink to={"/user/"+v.id} className="btn btn-sm btn-primary"><i className="bi bi-pencil-fill"></i></NavLink>
                                <NavLink to={"/user/"+v.id} className="btn btn-sm btn-danger"><i className="bi bi-trash-fill"></i></NavLink>
                            </td>
                        </tr>
                        )
                    }
                )}
               
            </tbody>
        </table>
    </div>
    );
}

export {UserPage};