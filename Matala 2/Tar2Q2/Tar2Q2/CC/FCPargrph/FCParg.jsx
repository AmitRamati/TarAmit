export default function FCParg(props) {
    return (
        <div style={{ display: "inline-block" }}>
            <p style={{ color: "white", backgroundColor: "red", borderRadius: 15 }}>
                {props.message}
            </p>
            <br></br>
        </div>
    )
}