
import React from 'react'; // Add this import

export const Text = ({ value }: { value: string }) => {
    return (
        <>
            <input type='text' style={{width:'100px',height:'30px',margin:10,padding:5,borderRadius:'5px'}} value={value}></input>
        </>
    )
}
