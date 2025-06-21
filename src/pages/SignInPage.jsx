import { useContext } from "react";
import { useNavigate } from "react-router"
import { UserForm } from "../components";
import { AuthContext } from "../context";
import { UserLoginCall } from "../api";

const SignInPage = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext);

    const details = {
        headerContext: "Sign In",
        mainContext: "Sign In to enjoy all the services without any ads for free!", 
        buttonContext: "Sign In",
        linkContext: "Have no Account yet?",
        linkName: "Create Account!",
        linkURL: "/signup",
    }

    const handleSignIn = async ({ email, password }) => {
        try {
            const response = await UserLoginCall({ email, password });
            setUser(response.data.user);
            localStorage.setItem("token", response.data.token);
            navigate("/");
        } catch (error) {
            alert(`Sign in failed, ${error}`)
        }
    }

    return (
        <UserForm details={details} onSubmit={handleSignIn}/>
    )
}

export default SignInPage;