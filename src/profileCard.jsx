

import PropsTypes from 'prop-types'
// import style from './index.css'
function ProfileCard(item){
     const data = [
        {id:1, name : 'suresh',email : 'suresh@gmail.com'},
        {id:2,name : 'pranav',email : 'PranavTR@gmail.com'},
        {id:3, name:'Hari',email:'Hariharimass@gmail.com'},
        {id:4,name : 'Madav',email:'Madhav@gmail.com'}
     ] 

     const dataIndiual = data.map((val)=>{
        
       return <div key={val.id} className='container'>
                <h2>{val.name}</h2>
                <p>{val.email}</p>
            </div>
     })
    return(
        <>
        {dataIndiual}
        </>
    )
}

ProfileCard.defaultProps = {
    data : []
}

ProfileCard.PropsTypes = {
    data : PropsTypes.arrayOf(PropsTypes.shape({
        id:PropsTypes.number,
        name : PropsTypes.string,
        email : PropsTypes.string
    }))
}

export default ProfileCard;