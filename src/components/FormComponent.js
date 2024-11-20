import React, { useState } from 'react'
import '../App.css';

export const FormComponent = () => {

    const [user, setUser] = useState({ name: '', lastName: '', bio: '' });
    let isSumbited = false;

    const fetchForm = e => {
        e.preventDefault();
        let data = e.target;

        let objUser = {
            name: data.nameUser.value,
            lastName: data.lastNameUser.value,
            bio: data.bioUser.value
        }

        setUser(objUser);

        isSumbited = true;

        console.log(isSumbited);
    }

    return (
        <div>
            <h3>form in react</h3>

            {user.name && user.name.length >= 1 ? (<p>{user.name}</p>) : (<p></p>)}

            <form className='form mb-3' onSubmit={fetchForm}>
                <input className='input'
                    placeholder='nome'
                    name='nameUser'
                />
                {user.name == null || user.name && user.name.length <= 3 ?
                    (<p className='error'>il nome deve essere minimo di 3 caratteri</p>) : (<p></p>)}

                <input className='input'
                    placeholder='lastName'
                    name='lastNameUser'
                />
                {user.lastName && user.lastName.length < 3 ?
                    (<p className='error'>il cognome deve essere minimo di 3 caratteri</p>) : (<p></p>)}

                <textarea placeholder='raccontaci di te'
                    className='mb-3'
                    name='bioUser'>

                </textarea>

                <button className='send'
                    type='submit'> send </button>
            </form>
        </div>
    )
}

export default FormComponent
