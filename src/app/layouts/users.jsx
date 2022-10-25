import React from "react";
import { Redirect, useParams, Route, Switch } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import { useAuth } from "../hooks/useAuth";
import UserProvider from "../hooks/useUsers";
const Users = () => {
    const params = useParams();
    const { currentUser } = useAuth();
    const { userId, edit } = params;
    return (
        <>
            <UserProvider>
                {userId ? (
                    edit ? (
                        userId === currentUser._id ? (
                            <EditUserPage />
                        ) : (
                            <Switch>
                                <Redirect
                                    from="/:userId/edit"
                                    to="/users/#{currentUser._id}/edit"
                                />
                                <Route path="/users/#{currentUser._id}/edit">
                                    <EditUserPage />
                                </Route>
                            </Switch>
                        )
                    ) : (
                        <UserPage userId={userId} />
                    )
                ) : (
                    <UsersListPage />
                )}
            </UserProvider>
        </>
    );
};

export default Users;
