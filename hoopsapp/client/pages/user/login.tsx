/*
|--------------------------------------------------------------------------
| Login View.
|--------------------------------------------------------------------------
|
| The view where a user can log in. Redux is used to make the api call.
|
*/

import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "./../../store/auth/authActions";
import { UserValidator } from "./../../services/UserValidator";
import { Card } from "./../../components/Card/Card";
import { TextInput } from "./../../components/Form/FormElement";
import { PrimaryButton } from "./../../components/Button/Button";
import { Alert } from "./../../components/Alert/Alert";
import { useRouter } from "next/router";
import Link from "next/link";
import { SmallSpinner } from "./../../components/Spinner/Spinner";

const Login = (props: any) => {
    /**
     * The state.
     */
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
    });

    // The router object used for redirecting after login.
    const router = useRouter();

    // Redirect to user home route if user is authenticated.
    useEffect(() => {
        if (props.isAuthenticated && !props.loading) {
            router.push(process.env.NEXT_PUBLIC_USER_HOME_ROUTE);
        }
    }, [props.isAuthenticated, props.loading]);

    /**
     * Handle input change.
     *
     * @param {object} e
     *   The event object.
     */
    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value,
            emailError: "",
            passwordError: "",
        });
    };

    /**
     * Submit the form.
     */
    const submit = () => {
        const userValidator = new UserValidator();
        const { email, password } = formData;

        // Check for valid email address.
        const isEmailValid = userValidator.validateEmail(email);
        if (!isEmailValid) {
            setFormData({
                ...formData,
                emailError: "Please provide a valid email address",
            });
            return;
        }

        // Check for valid password.
        if (!password) {
            setFormData({
                ...formData,
                passwordError: "Please provide a valid password",
            });
            return;
        }

        // Make API call if everything is fine.
        props.login(email, password);
    };

    /**
     * The Return statement. Responsible for rendering the markup.
     */
    return (
        <>
        <div className="wrap">


  <div className="content">

      <div className="landingbox">

      <Card
additionalInnerClasses="justify-center items-center"
additionalWrapperClasses="bg-gray-100"
>
<>
    {props.loginError && (
        <Alert type="danger">{props.loginError}</Alert>
    )}




    <TextInput
        type="text"
        value={formData.email}
        placeholder="Your email address..."
        onChange={(e) => {
            handleInputChange(e);
        }}
        name="email"
        errorMsg={formData.emailError}
    />


    <TextInput
        type="password"
        value={formData.password}
        placeholder="Your password..."
        onChange={(e) => {
            handleInputChange(e);
        }}
        name="password"
        errorMsg={formData.passwordError}
    />


    <PrimaryButton
        onClick={() => {
            submit();
        }}
    >
        <SmallSpinner show={props.loading} />
        Login
    </PrimaryButton>


    <div className="w-full flex justify-between mt-3 text-blue-500">
        <Link href="/user/register">
            <a className="text-xs underline">
                No Account yet?
            </a>
        </Link>
        <Link href="/user/password/forgot">
            <a className="text-xs underline">
                Forgot password?
            </a>
        </Link>
    </div>
</>
</Card> 

    </div>
</div>



</div>

          </>

    );
};

// Map redux states to local component props.
const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loginError: state.auth.loginError,
    loading: state.auth.loginLoading,
});

// Define PropTypes.
Login.propTypes = {
    props: PropTypes.object,
    login: PropTypes.func,
};

export default connect(mapStateToProps, { login })(Login);


/*
<Card
additionalInnerClasses="justify-center items-center"
additionalWrapperClasses="bg-gray-100"
>
<>
    {props.loginError && (
        <Alert type="danger">{props.loginError}</Alert>
    )}




    <TextInput
        type="text"
        value={formData.email}
        placeholder="Your email address..."
        onChange={(e) => {
            handleInputChange(e);
        }}
        name="email"
        errorMsg={formData.emailError}
    />


    <TextInput
        type="password"
        value={formData.password}
        placeholder="Your password..."
        onChange={(e) => {
            handleInputChange(e);
        }}
        name="password"
        errorMsg={formData.passwordError}
    />


    <PrimaryButton
        onClick={() => {
            submit();
        }}
    >
        <SmallSpinner show={props.loading} />
        Login
    </PrimaryButton>


    <div className="w-full flex justify-between mt-3 text-blue-500">
        <Link href="/user/register">
            <a className="text-xs underline">
                No Account yet?
            </a>
        </Link>
        <Link href="/user/password/forgot">
            <a className="text-xs underline">
                Forgot password?
            </a>
        </Link>
    </div>
</>
</Card>  */


{/* <div><a href="#">
    <p><span className="bg" /><span className="base" /><span className="text">Play Valorant</span></p></a><a className="white" href="#">
    <p><span className="bg" /><span className="base" /><span className="text">Play Valorant</span></p></a><a className="transparent" href="#">
    <p><span className="bg" /><span className="base" /><span className="text">Play Valorant</span></p></a></div>
 */}
