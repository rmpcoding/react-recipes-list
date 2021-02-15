import React, { useState } from 'react';

const Form = () => {

    return (
        <div>
            <form action="/backend-route" method="post">
            <h2>Create A User</h2>
            <input
                type="text"
                className="form-control"
                name="username"
                placeholder="username"
                autoFocus
            />
            <input
                type="text"
                className="form-control"
                name="password"
                placeholder="password"
                autoFocus
            />
            <input
                type="text"
                className="form-control"
                name="email"
                placeholder="email"
                autoFocus
            />
            <button
                className="btn btn-lg btn-primary btn-block"
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
