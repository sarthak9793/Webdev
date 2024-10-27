import { useEffect, useState } from "react"
import { useFirebase } from "../context/Firebase"
export default function Orders({documentID}){
    const [queries, setQueries] = useState([])
    const {getQueries} = useFirebase()
    useEffect(()=>{
        const gettingQueries = async () => {
            const myQueries = await getQueries(documentID)
            const queryList = []
            myQueries.forEach((doc)=>{
                queryList.push(doc.data())
            })
            setQueries(queryList)
        }
        gettingQueries()
    }, [])
    return(
        <div className="h-full w-full flex flex-col gap-y-7">
            <h1 className="text-center text-4xl font-bold">Queries</h1>
            <div className="flex flex-col h-[316px] w-full gap-y-6 overflow-auto">
                {queries && queries.map((query)=>(
                    <div>
                        <ul className="list-disc list-inside">
                            <p className="font-bold">{query.Name}</p>
                            <li>Email: {query.email}</li>
                            <li>Message: {query.message}</li>
                        </ul>
                        {/* <p><span className="font-bold">{query.Name}: </span>{query.email}</p> */}
                    </div>
                ))}
            </div>
        </div>
    )
}