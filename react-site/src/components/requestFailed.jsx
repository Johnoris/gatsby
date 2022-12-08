import { useEffect } from "react"
import  { default as WHITE_INFO_ICON }  from '../assets/white-info-icon.png';

const RequestFailed = (props) => {
    const setRequestFailed = props.setRequestFailed
    const requestFailed = props.requestFailed
    useEffect(()=> {
        const dissapear = setTimeout(() => {
            setRequestFailed(false)
        }, 2000) 
        return () => {
            clearTimeout(dissapear)
        }
    })
    return(
        <div className={ requestFailed ? "request-failed on-screen" : "request-failed off-screen"}>
            <img src={WHITE_INFO_ICON} alt=""/>
            <p>{props.message}</p>
        </div>
    )
}
export default RequestFailed;