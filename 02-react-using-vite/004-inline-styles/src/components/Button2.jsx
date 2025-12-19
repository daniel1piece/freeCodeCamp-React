function Button2 ({ buttonText }) {
    return (
        <button
            style={
                {
                    backgroundColor: "#007BFF",
                    color: "white",
                    marginLeft: "10px",
                    padding: "10px",
                    borderRadius: "5px",
                }
            }
        >
            {buttonText}
        </button>
    );
}

export default Button2;