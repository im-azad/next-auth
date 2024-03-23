import CardWrapper from "./CardWrapper";

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/rigister"
            showSocial
        >
            LoginForm
        </CardWrapper>
    );
};

export default LoginForm;
