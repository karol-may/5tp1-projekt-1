import { useParams } from "react-router";
import { users } from "../data/user";

function UserShowPage() {
    const { id } = useParams();

    if (!id) {
        return <p>Nie podano ID użytkownika!</p>;
    }

    const user = users.find(user => user.id === Number(id));

    if (!user) {
        return <p>Nie znaleziono użytkownika!</p>;
    }

    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.email}</p>
        </div>
    );
}

export {UserShowPage}