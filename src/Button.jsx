
function Button(props) {
    
    const styles = {
        backgroundColor: "#F4CE14",
        color: "black",
        width: "200px",
        height: "40px",
        borderRadius: "15px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize:"16px",
    }
    return(
        <button style={styles}>{props.name}</button>
    )
}

export default Button