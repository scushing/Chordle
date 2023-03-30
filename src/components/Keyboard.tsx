// @ts-ignore
import KeyRow from "./KeyRow";

interface KeyboardProps {
    letters : string[];
}

const Keyboard = (props : KeyboardProps) => {
    return (
        <div>
            <KeyRow
                letters={["Q","W","E","R","T","Y",]}
            />
            <KeyRow/>
            <KeyRow/>
        </div>
    )
}

