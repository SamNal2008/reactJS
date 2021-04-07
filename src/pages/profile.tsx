import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';
import '../styles/profile.css'


const ProfileComponent = () => {
    const [data, setData] = useState(
        {
            name: 'Samy NALBANDIAN',
            age: 22,
            picture: logo,
        }
    );

    return (<div className="profileComp">
        <img alt="Girl in a jacket" width="100" height="100" src={data.picture}></img>
        <Typography> {data.name}</Typography>
        <Typography> {data.age} ans</Typography>
        </div>
    );
}

const UserEntryComponent = () => {
    const [typedEntry, setTyped] = useState('');
    const [userEntry, setEntry] = useState('');
    return (
        <div className="userEntry">
            <TextField id="standard-basic" label="Ecrivez ici" value={userEntry} name="userText" onChange={(event) => {
                event.preventDefault();
                setEntry(event.target.value);
            }}/>
            <Button variant="contained" color="primary" onClick={(event) =>{
                event.preventDefault();
                setEntry('');
                setTyped(userEntry);
            }}>
                Valider
            </Button>
            <Typography>{typedEntry}</Typography>
        </div>
    );
}


const Page = () => {
    return (<div className="PageComponent">
        <ProfileComponent/>
        <UserEntryComponent/>
        </div>
    )
}

export default Page