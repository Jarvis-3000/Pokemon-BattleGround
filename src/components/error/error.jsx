import React, { useEffect, useState } from "react"
import "./error.scss"

import { useDispatch, useSelector } from "react-redux";
import * as gameActions from "../../redux/gameFunctions/actions"

function Error() {
    const { error } = useSelector(store => store.gameReducer)
    const [display, setDisplay] = useState({ display: 'none' })
    const dispatch = useDispatch();

    useEffect(() => {
        if (error !== "") {
            setDisplay({ display: 'block' })
            setTimeout(() => {
                setDisplay({ display: 'none' })
                dispatch(gameActions.setError(""));
            }, 2000)
        }
    }, [error])

    return (
        <div className="error" style={display}>
            {error || "Error Section"}
        </div>

    )
}

export default Error