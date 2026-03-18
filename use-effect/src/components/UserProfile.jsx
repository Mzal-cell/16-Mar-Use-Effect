import { useParams } from "react-router-dom";

export default function UserProfile() {
    const { id } = useParams();
    return (
        <div>
            <h2>User ID: {id}</h2>
        </div>
    );
}

