//next
import { useRouter } from "next/router"
import Button from "../components/Button";

//components
import Static from "../components/Static";

export default function Result(){
    const router = useRouter();

    const total = router.query.total ? +router.query.total : 0;
    const corrects = router.query.correct ? +router.query.correct : 0;
    const percentual = Math.round((corrects / total) * 100);


    return (
       <div className="flex flex-col justify-center items-center h-screen text-[2rem]">
            <h1>Resultado Final</h1>
            <div className="flex">
                <Static 
                    text="Perguntas"
                    value={total}
                />
                <Static 
                    text="Certas"
                    value={corrects}
                    bgColor="#9CD2A4"
                />
                <Static 
                    text="Percentual"
                    value={`${percentual}%`}
                    bgColor="#00ced1"
                />
            </div>
            <Button href="/" text="Tentar novamente" />
       </div> 
    )
}