import * as React from 'react';

export const ZText = ({ value,onChange }: { value: string, onChange: any}) => {
    return (
        <>
            <input type='text' style={{width:'100px',height:'30px',margin:10,padding:5,borderRadius:'5px'}} 
            value={value}
            onChange={(event)=>onChange(event)}
            ></input>
        </>
    )
}