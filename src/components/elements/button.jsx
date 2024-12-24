// eslint-disable-next-line react/prop-types
function Button ({type, children, handle}) {
    return (
        <button type={type} onClick={handle}>{children}</button>
    );
}

export default Button;