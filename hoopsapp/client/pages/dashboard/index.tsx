import Link from "next/link";
import { PrimaryButton } from "./../../components/Button/Button";
import { logout } from "./../../store/auth/authActions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UserDashboard, SidenavDashboard, Task, TaskManage, TaskdsLayout  } from "../../components";

function Dashboard(props: any) {
    const router = useRouter();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if (!props.isAuthenticated) {
            router.push("/user/login");
        }
    }, [props.isAuthenticated]);
    return (
        <>
        <UserDashboard>



       {/*  <PrimaryButton
                onClick={() => {
                    props.logout();
                }}
            >
                Logout
            </PrimaryButton> */}

        </UserDashboard>
        </>


    );
}
const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.registerLoading,
});

export default connect(mapStateToProps, { logout })(Dashboard);
