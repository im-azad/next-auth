import CardWrapper from "./CardWrapper";

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome back"
            footerLabel="Don't have an account?"
            backButtonLabel="Sign up"
            backButtonHref="/auth/rigister"
            showSocial
        >
            LoginForm
        </CardWrapper>
    );
};

export default LoginForm;
