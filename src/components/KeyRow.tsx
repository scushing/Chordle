
import Key from "./Key";
import "../App.css";

interface KeyRowProps {
    letters : string[];
}

const KeyRow = (props : KeyRowProps) => {

    return (
        <div>
            <Key
                letter={props.letters[0]}
            />
            <Key
                letter={props.letters[1]}
            />
            <Key
                letter={props.letters[2]}
            />
            <Key
                letter={props.letters[3]}
            />
            <Key
                letter={props.letters[4]}
            />
            <Key
                letter={props.letters[5]}
            />
            <Key
                letter={props.letters[6]}
            />
            <Key
                letter={props.letters[7]}
            />
            <Key
                letter={props.letters[8]}
            />
            <Key
                letter={props.letters[9]}
            />
        </div>
    )
}
export default KeyRow;