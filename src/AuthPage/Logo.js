import logoPlaceholder from '../resources/images/logoPlaceholder.svg';
export const Logo = ({text}) => {
    return (
        <div>
        <div src="auth-form-logo-container">
        <img src={logoPlaceholder} alt='logo' width="100" height="50" />

            <span>{text}</span>
        </div>

        </div>
    )
}