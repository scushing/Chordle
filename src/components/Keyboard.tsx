// @ts-ignore
import KeyRow from "./KeyRow";
import "../App.css";

interface KeyboardProps {
    letters : string[];
    correctPosition : string[];
    inWord : string[];
    notInWord : string[];
}

const Keyboard = (props : KeyboardProps) => {
    return (
        <keyboard>
            <KeyRow
                letters={["Q","W","E","R","T","Y","U","I","O","P"]}
            />
            <KeyRow
                letters={["","A","S","D","F","G","H","J","K","L"]}
            />
            <KeyRow
                letters={["","ENTER","Z","X","C","V","B","N","M","<-",""]}
            />
        </keyboard>
    )
}
export default Keyboard;