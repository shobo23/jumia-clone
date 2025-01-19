import React, {useState} from "react";

const Count = () => {
    const [InitialNumber, UpdateAction] = useState(0)

    const AddNumber = () => {
        if (InitialNumber < 20) {
            UpdateAction(InitialNumber + 1)
        } else {
            alert("Value cannot be greater than 20")
        }
    }
    const MinusNumber = () => {
        if (InitialNumber > 0) {
            UpdateAction(InitialNumber - 1)
        } else {
            alert("Value cannot be less than 0")
        }
    }
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "100px", flexDirection: "column"}}>
            <h2>{InitialNumber}</h2>
           <span style={{display: "flex", gap: "10px"}}>
           <button style={{padding: "10px"}} onClick={AddNumber}>
                add
            </button>
            <button style={{padding: "10px"}}  onClick={MinusNumber}>
                minus
            </button>
           </span>
        </div>
    )
}
export default Count