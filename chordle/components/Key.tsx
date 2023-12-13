import "../App.css";

interface KeyProps {
    letter : string;
}

const Key = (props : KeyProps) => {

    let height = 15;
    let width = 10;
    let color = "black";
    if (props.letter == "") {
        width = 0;
    }
    if (props.letter == "ENTER") {
        width = 30;
    }
    if (props.letter == "<-") {
        width = 20;
    }

    return (
        <key
            height={height}
            width={width}
            color={color}
        >
            {props.letter}
        </key>
    )
}
export default Key;