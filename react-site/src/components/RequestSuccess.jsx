import { useEffect } from 'react';
import { default as REQUEST_SUCCESS_ICON } from '../assets/request-success.svg';

const RequestSuccess = (props) => {
    const setRequestSuccess = props.setRequestSuccess
    const requestSuccess = props.requestSuccess

    useEffect(()=> {
        const dissapear = setTimeout(() => {
            setRequestSuccess(false)
        }, 2000) 
        return () => {
            clearTimeout(dissapear)
        }
    })
    return(
        <div className={ requestSuccess ? "on-screen request-success" : "off-screen request-success" }>
            <img src={REQUEST_SUCCESS_ICON} alt="" />
            <h4 style={{marginTop: '0', marginBottom: '0'}}>{props.message}</h4>
        </div>
    )
}
export default RequestSuccess;
