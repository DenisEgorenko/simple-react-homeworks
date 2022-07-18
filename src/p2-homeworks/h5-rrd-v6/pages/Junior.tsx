import React from 'react'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";

type JuniorProps = {}

function Junior(props: JuniorProps) {
    return (
        <div style={{marginLeft: '10px', marginTop: '30px'}}>
            <HW7/>
            <HW8/>
        </div>
    )
}

export default Junior