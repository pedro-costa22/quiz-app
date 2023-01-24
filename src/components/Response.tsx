//types
import { IResponse } from "../types/Response";

//styles
import styles from '../styles/Response.module.css';

export default function Response({value, indice, letter, backgroundLetter, onResponse}: IResponse) {
    return (
        <div className="flex h-[100px] m-3 w-[80%] min-w-[500px]" onClick={() => onResponse(indice)}>
            <div className="flex flex-1 relative">
                {!value.getRevealed ? (
                    <div className={styles.front}>
                        <div className={`
                                h-10 w-10 mr-5
                                flex justify-center items-center
                                rounded-[20px] text-[1.3rem] font-bold text-white
                            `} 
                            style={{backgroundColor: backgroundLetter}}
                            >
                            {letter}
                        </div>
                        <div className={`
                                text-[1.3rem] font-bold
                            `}
                            >
                            {value.getValue}
                        </div>
                    </div>
                ) : (
                    <div className={styles.back}>
                        <div className={`${value.getCorrect ? styles.correct : styles.incorrect}`}>
                            <span>
                                {value.getCorrect ? 
                                    'A resposta certa é ...' : 
                                    'A resposta informada está errada...'
                                }
                            </span>
                            <span className={`
                                    text-[1.3rem] font-bold text-white
                                    ${styles.text}
                                `}>
                                {value.getValue}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}