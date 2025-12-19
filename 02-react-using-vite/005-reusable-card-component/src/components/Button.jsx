function Button ( { buttonText } ) {
    const defaultStyles = {
        backgroundColor: "#007BFF",
        color: "white",
        boder: "none",
        borderRadius: "4px",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        borderRadius: "7px"
    };

    return (
        <button style={defaultStyles}>
            {buttonText}
        </button>
    );
}

export default Button;