import React from 'react'

const Card = ({props}) => {
    return (
        <>
            <div className="card" style={{'padding':"20%"}}>
                
                <img src={props.img} alt="hhh" width={'142px'} height={'184px'}  />
                <h4>{props.name}</h4>
                <h5>{props.post}</h5>
                <h5><b>{props.exp}</b>Experience</h5>
                <h5>{props.desc}</h5>

            </div>
        </>
    )
}

export default Card