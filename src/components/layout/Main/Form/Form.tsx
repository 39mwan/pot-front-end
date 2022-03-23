import React from 'react'
import './Form.css'

function Form() {
    return (
        <form action="">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                />
            </div>
            <div className="boton">
                <input type="submit" value="Send" id="submit" />
            </div>
        </form>
    )
}
export default Form
