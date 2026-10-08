function UserPage(){

    let users = [
        {
            id: 1,
            name: "Karol",
            surname: "May",
            email: "karo@imay.pl",
        },
        {
            id: 2,
            name: "Adam",
            surname: "September",
            email: "adam@iseptember.pl",
        }
    ]

    return(
        <div>
            <table className={"table table-striped table-bordered"}>
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
                    {users.map((v,i)=>
                        <tr key={i}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.surname}</td>
                            <td>{v.email}</td>
                            <td className="d-flex gap-1">
                                <button className={"btn btn-info btn-sm"}><i className="bi bi-eye-fill"></i></button>
                                <button className={"btn btn-primary btn-sm"}><i className="bi bi-pencil-fill"></i></button>
                                <button className={"btn btn-danger btn-sm"}><i className="bi bi-trash2-fill"></i></button>
                            </td>
                        </tr>  
                    )}         
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>
                            <button className={"btn btn-success btn-sm"}>Dodaj użytkownika</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export {UserPage}