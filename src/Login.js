import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Auth } from "aws-amplify";
import "./App.css";

export default function Login(props) {
    const [naam, setNaam] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return naam.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            if(naam.valueOf()=="krisztina" && password.valueOf()=="test"){
                props.history.push("/Reserveringen");
            }
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <div className="basistext">
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="naam" bsSize="large">
                    <label>naam</label>
                    <br/>
                    <FormControl
                        autoFocus
                        type="naam"
                        value={naam}
                        onChange={e => setNaam(e.target.value)}
                    />
                </FormGroup>
                <br/><br/>
                <FormGroup controlId="password" bsSize="large">
                    <label>password</label>
                    <br/>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <br/>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        </div>
    );
}