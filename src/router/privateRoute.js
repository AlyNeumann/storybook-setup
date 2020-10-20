import { Route } from "react-router-dom";
//TODO: this can be used once user has signed in
// will also be used to show users certain pages that are not available to others
// depending on that user's permissions

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute; 
