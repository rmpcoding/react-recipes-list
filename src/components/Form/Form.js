import React, { useState } from 'react';

const Form = () => {

    return (
        <div>
            <form action="/backend-route" method="post">
            <h2>Create A User</h2>
            <input
                type="text"
                class="form-control"
                name="username"
                placeholder="username"
                autofocus
            />
            <input
                type="text"
                class="form-control"
                name="password"
                placeholder="password"
                autofocus
            />
            <input
                type="text"
                class="form-control"
                name="email"
                placeholder="email"
                autofocus
            />
            <button
                class="btn btn-lg btn-primary btn-block"
                id="submit"
                type="submit"
                onClick={(() => {
                    console.log("hhi")
                })}
            >
                Submit
            </button>
            </form>
        </div>
    );
};

export default Form;
