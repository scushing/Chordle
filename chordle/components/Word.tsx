
import LetterBox from "./LetterBox";

interface WordProps {
    word : string;
    trueWord : string;
}

const Word = (props : WordProps) => {

    return (
        <div>
            <LetterBox
                letter={props.word.charAt(1)}
                trueLetter={props.trueWord.charAt(1)}
            />
            <LetterBox
                letter={props.word.charAt(2)}
                trueLetter={props.trueWord.charAt(2)}
            />
            <LetterBox
                letter={props.word.charAt(3)}
                trueLetter={props.trueWord.charAt(3)}
            />
            <LetterBox
                letter={props.word.charAt(4)}
                trueLetter={props.trueWord.charAt(4)}
            />
            <LetterBox
                letter={props.word.charAt(5)}
                trueLetter={props.trueWord.charAt(5)}
            />
        </div>
    )

}
export default Word;