/*
|--------------------------------------------------------------------------
| Login View.
|--------------------------------------------------------------------------
|
| The view where a user can log in. Redux is used to make the api call.
|
*/
/* import Link from "next/link"; */
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "./../../store/auth/authActions";
import { UserValidator } from "./../../services/UserValidator";

import { TextInput } from "./../../components/Form/FormElement";

import { PrimaryButton } from "./../../components/Button/Button";
import { Alert } from "./../../components/Alert/Alert";

import { useRouter } from "next/router";
import { SmallSpinner } from "./../../components/Spinner/Spinner";

import { Card, } from 'theme-ui';
function Register(props: any) {
    // The state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmed: "",
        nameError: "",
        emailError: "",
        passwordError: "",
        password_confirmedError: "",
    });

    // The router object used for redirecting after login.
    const router = useRouter();

    // Redirect to user home route if user is authenticated.
    useEffect(() => {
        if (props.isAuthenticated) {
            router.push(process.env.NEXT_PUBLIC_USER_HOME_ROUTE);
        }
    });

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
            [`${e.currentTarget.name}Error`]: "",
        });
    };

    /**
     * Submit the form.
     */
    const submit = () => {
        const { name, email, password, password_confirmed } = formData;

        // Get instance of userValidator class and validate the input.
        const userValidator = new UserValidator();
        const inputErrors = userValidator.validateRegistrationInput(
            name,
            email,
            password,
            password_confirmed,
            8
        );

        // Put error to local state if we have an error.
        if (typeof inputErrors === "object" && inputErrors !== null) {
            setFormData({
                ...formData,
                nameError: inputErrors.name || "",
                emailError: inputErrors.email || "",
                passwordError: inputErrors.password || "",
                password_confirmedError: inputErrors.password || "",
            });
            return;
        }

        // Make API call if validaton was successful.
        props.register(name, email, password, password_confirmed);
    };
    return (
        <>
        <div className="wrap">
   {/* Auth Container  */}
   <div>
  <div className="content">
    <div>
      <div className="landingbox">
        <div className="form-container a-container" id="a-container">
        <Card
               sx={{
                maxWidth: 256,
                padding: 2,
                borderRadius: 4,
                boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
                border: '1px solid',
                borderColor: '#00033',
               }}
                 >
                     <>
                         {/* Display error message when we have one from the server. */}
                         {props.registerError && (
                             <Alert type="danger">{props.registerError}</Alert>
                         )}
                         <TextInput
                             type="text"
                             value={formData.name}
                             placeholder="Your name..."
                             onChange={(e) => {
                                 handleInputChange(e);
                             }}
                             name="name"
                             errorMsg={formData.nameError}
                         />

                         {/* Email */}
                         <TextInput
                             type="email"
                             value={formData.email}
                             placeholder="Your email..."
                             onChange={(e) => {
                                 handleInputChange(e);
                             }}
                             name="email"
                             errorMsg={formData.emailError}
                         />

                         {/* Password */}
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

                         {/* Password confirmation */}
                         <TextInput
                             type="password"
                             value={formData.password_confirmed}
                             placeholder="Confirm your password..."
                             onChange={(e) => {
                                 handleInputChange(e);
                             }}
                             name="password_confirmed"
                             errorMsg={formData.password_confirmedError}
                         />

                         {/* Submit button */}
                         <PrimaryButton
                             onClick={() => {
                                 submit();
                             }}
                         >
                             <SmallSpinner show={props.loading} />
                             Register
                         </PrimaryButton>


 </>
 </Card>




        </div>
        <div className="form-container b-container" id="b-container">
        </div>
      </div>
    </div>
  </div>
</div>





  </div>



          </>











    );
}
// Map redux states to local component props.
const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
    registerError: state.auth.registerError,
    loading: state.auth.registerLoading,
});

// Define Prop Types.
Register.propTypes = {
    props: PropTypes.object,
    register: PropTypes.func,
};
export default connect(mapStateToProps, { register })(Register);





{/*
<div>
  <div classname="content">
    <div>
      <div classname="landingbox">
        <div classname="form-container a-container" id="a-container">
        </div>
        <div classname="form-container b-container" id="b-container">
        </div>
      </div>
    </div>
  </div>
</div>
 */}
