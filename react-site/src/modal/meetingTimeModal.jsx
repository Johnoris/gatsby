import {useEffect, useState} from "react";
import Api from "../api/api";

const MeetingTimeModal = (props) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const setTimeModalActive = props.setTimeModalActive;
    const [triedToSubmit, setTriedToSubmit] = useState(false)
    const [ reaquestPending, setRequestPending ] = useState(false)
    const setRequestFailed = props.setRequestFailed
    const setRequestSuccess = props.setRequestSuccess

    useEffect(() => {
        date === '' && time === '' ? setPageValid(false) : setPageValid(true)
    }, [date, time])

    const Today = new Date();

    let month = Today.getMonth() + 1;
    let day = Today.getDate();
    const year = Today.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    const hours = Today.getHours()
    const minutes = Today.getMinutes()
    const minTime = hours + ':' + minutes
    const minDate= year + '-' + month + '-' + day;

    const [pageValid, setPageValid] = useState(false)
    const handleSubmit = async () => {
        setRequestPending(true)
        setTriedToSubmit(true)
        if (pageValid) {
            try {
                const response = await Api.put(`/${props.referralId}`,
                    {
                        date: date,
                        time: time,
                    }
                )
                setRequestPending(false)
                setTimeModalActive(false)
                setRequestSuccess(true)
                console.log(response)
            } catch (err) {
                setRequestPending(false)
                console.log(err)
                setRequestFailed(true)
            }
        }
    }
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '2',
        }}>
            <div style={{
                width: '500px',
                height: '400px',
                maxWidth: '95%',
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <h4 style={{fontSize: '25px', textAlign: 'center', marginBottom: '24px', maxWidth: '90%'}}>Kindly pick a time
                    to have a conversation with us</h4>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center', maxWidth: '95%'}}>
                    <label htmlFor="meeting-date" style={{fontSize: '20px'}}>Date:</label>
                    <input
                        type="date"
                        id="meeting-date"
                        onChange={(e) => setDate(e.target.value)}
                        min={minDate}
                        style={{
                            width: '242px',
                            height: '54px',
                            border: '1px solid #284256',
                            borderRadius: '10px',
                            outline: 'none',
                            padding: '20px',
                            maxWidth: '70%'
                        }}
                        className="sm:w-4/4 w-3/4"
                    />
                </div>
                {date === '' && triedToSubmit && <p>Please pick a date</p>}
                <div style={{display: 'flex', gap: '20px', alignItems: 'center', marginTop: '20px', maxWidth: '95%'}}>
                    <label htmlFor="meeting-date" style={{fontSize: '20px'}}>Time:</label>
                    <input
                        type="time"
                        id="meeting-time"
                        onChange={(e) => setTime(e.target.value)}
                        step="1800"
                        min={minTime}
                        style={{
                            width: '242px',
                            height: '54px',
                            border: '1px solid #284256',
                            borderRadius: '10px',
                            outline: 'none',
                            padding: '20px',
                            maxWidth: '70%'
                        }}
                    />
                </div>
                {time === '' && triedToSubmit && <p>Please pick a time</p>}
                <button
                    style={{
                        backgroundColor: '#284256',
                        border: 'none',
                        borderRadius: '7px',
                        color: '#ffffff',
                        width: '140px',
                        height: '40px',
                        marginTop: '30px',
                        outline: 'none',
                    }}
                    onClick={() => handleSubmit()}
                >
                    {
                        reaquestPending
                            ?
                            <div className="loading"></div>
                            :
                            "Confirm"
                    }
                </button>
            </div>
        </div>
    )
}
export default MeetingTimeModal;
