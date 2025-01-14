import React, { useContext } from "react";
import Usercontext from "../context/UserContext";

function Profile() {

    const {user} = useContext(Usercontext)

    if (!user) return <div>please Login</div>

    return <div>Welcome! {user.username}</div>
}

export default Profile