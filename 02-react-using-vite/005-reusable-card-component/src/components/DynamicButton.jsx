// A great advantage of inline styles in React is that they support dynamic styling based on a component state or props. 
// For example:

export default function DynamicButton ( { buttonText, isActive } ) {
    const buttonStyle = {
        backgroundColor: isActive ? "green" : "red",
        color: "white",
        padding: "10px 15px",
        boder: "none",
        cursor: "pointer",
        borderRadius: "6px",
        margin: "10px",
    };

    return (
         <button style={buttonStyle}>
            {buttonText}
         </button>
    );
};