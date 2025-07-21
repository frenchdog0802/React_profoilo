import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signout } from "./api-auth.js";


export default function Signout() {
    signout();

    return <p>Signing out...</p>;
}
