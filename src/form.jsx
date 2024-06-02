
import React,{useState} from 'react'



function UserForm(){
    let i = 0
    const [name, setName] = useState()
    const [submitName,submitFun] = useState()


    const setUserValue = (e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }

    const submit = (e)=>{
        e.preventDefault()
        if((name.trim('')).length>0)
        submitFun(name)
        let inVal = document.getElementById('valDiv')
        document.getElementById('inputVal').value = ''
        inVal.style.display = 'block'
    }


    const style = {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection: 'column'
    }

    return(
        <div style={style}>
            <div className="formDiv">
                <form action="" style={style}>
                    <label htmlFor=""> Enter your name : </label> <br/>
                    <input type="text" id='inputVal' className='inputName' placeholder="Enter you name" value={name} onChange={setUserValue}/>
                    <input type="submit" className='submitBtn' onClick={submit} />
                </form>
            </div>
            <div>
                <h1 id='valDiv' className='insertVal'>{submitName}</h1>
            </div>
        </div>
    )
}


export default UserForm;