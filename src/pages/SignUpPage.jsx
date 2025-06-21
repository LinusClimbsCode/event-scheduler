import { useNavigate } from "react-router"
import { UserForm } from "../components";
import { UserRegistrationCall } from "../api";

const SignUpPage = () => {
    const navigate = useNavigate()

    const details = {
        headerContext: "Create An Account",
        mainContext: "Create an account to enjoy all the services without any ads for free!", 
        buttonContext: "Create Account",
        linkContext: "Already Have An Account?",
        linkName: "Sign In",
        linkURL: "/signin",
    }

const handleSignUp = async ({ email, password }) => {
    try {
        const response = await UserRegistrationCall({ email, password });
        if (response.status === 200) {
                navigate("/signin")
        }
    } catch (error) {
        alert(`Registration failed, ${error}`)
    }
}

    return (
        <UserForm details={details} onSubmit={handleSignUp}/>
    )
}

export default SignUpPage;