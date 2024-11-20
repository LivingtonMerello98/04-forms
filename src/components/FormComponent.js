import React, { useState } from 'react'
import '../App.css';

export const FormComponent = () => {

    const [user, setuser] = useState({});

    const fetchDataForm = e => {
        e.preventDefault();

        let data = e.target
        console.log(data.gender.value)

        let user = {
            name: data.name.value,
            lastName: data.lastName.value,
            gender: data.gender.value,
            bio: data.biography.value
        }

        console.log(user)

        setuser(user)
    }

    return (
        <div>
            <h4 className='mb-3'>forms con react</h4>

            {user.bio && user.bio.length >= 1 ? (<p>nome: {user.name} cognome: {user.lastName}  sesso:{user.gender}</p>) : (<p></p>)}

            <div>
                <form className='form' onSubmit={fetchDataForm}>
                    <input type='text'
                        placeholder='nome'
                        className='mb-3'
                        name='name' />

                    <input type='text'
                        placeholder='cognome'
                        className='mb-3'
                        name='lastName' />

                    <select className='mb-3' name='gender'>
                        <option value='uomo'>uomo</option>
                        <option value='donna'>donna</option>
                    </select>

                    <textarea placeholder='biografia'
                        className='mb-3'
                        name='biography'></textarea>
                    <input type='submit' value='send' />
                </form>
            </div>
        </div>
    )
}

export default FormComponent;