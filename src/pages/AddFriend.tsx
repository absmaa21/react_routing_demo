import Alert from "../components/Alert";
import React, {useEffect, useState} from "react";
import Friends from "../Friends";

function AddFriend() {
    const friends = Friends.getInstance()

    const [invalidInput, setInvalidInput] = useState(false)
    const [successfulInput, setSuccessfulInput] = useState(false)
    const [InputFirstName, setInputFirstName] = useState("")
    const [InputLastName, setInputLastName] = useState("")
    const [InputPicture, setInputPicture] = useState("")

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if(InputFirstName.trim().length <= 0) {
            setInvalidInput(true)
            return;
        }

        if(InputLastName.trim().length <= 0) {
            setInvalidInput(true)
            return
        }

        if(InputPicture.trim().length > 0) friends.addFriend(InputFirstName, InputLastName, InputPicture)
        else friends.addFriend(InputFirstName, InputLastName)

        const formInputs = document.getElementsByClassName("form-control")
        for (let i = 0; i < formInputs.length; i++) {
            // @ts-ignore
            const input: React.InputHTMLAttributes<HTMLInputElement> = formInputs.item(i)
            input.value = "";
        }

        setSuccessfulInput(true)
        console.log(friends.getFriendsList())
    }

    useEffect(() => {
        let timer: NodeJS.Timeout
        let timerSuccess: NodeJS.Timeout

        const resetInvalidInput = () => {
            timer = setTimeout(() => {
                setInvalidInput(false)
            }, 5000)
        }

        const resetSuccessfulInput = () => {
            timerSuccess = setTimeout(() => {
                setSuccessfulInput(false)
            }, 3000)
        }

        if(invalidInput) resetInvalidInput()
        if(successfulInput) resetSuccessfulInput()

        return () => {
            clearTimeout(timer)
            clearTimeout(timerSuccess)
        }
    }, [invalidInput, successfulInput])

    return (
        <div>
            <h2 className={"m-2 text-center"}>Add a Friend</h2>

            <form className={"d-flex flex-column align-items-center"} onSubmit={handleSubmit}>
                <div className={"mb-3 w-50"}>
                    <label className={"form-label"}>First Name<span className={"ms-2 opacity-50"} style={{fontSize: '.8em'}}>required</span></label>
                    <input className={"form-control"} type={"text"} onChange={e => setInputFirstName(e.target.value)}/>
                </div>
                <div className={"mb-3 w-50"}>
                    <label className={"form-label"}>Last Name<span className={"ms-2 opacity-50"} style={{fontSize: '.8em'}}>required</span></label>
                    <input className={"form-control"} type={"text"} onChange={e => setInputLastName(e.target.value)}/>
                </div>
                <div className={"mb-3 w-50"}>
                    <label className={"form-label"}>Picture URL</label>
                    <input className={"form-control"} type={"text"} onChange={e => setInputPicture(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {invalidInput && (<Alert title={"Invalid"} message={"Make sure you entered a valid first and last name"} isError/>)}
            {successfulInput && (<Alert title={"Success"} message={"You successfully added a new friend"}/>)}
        </div>
    );
}

export default AddFriend;
