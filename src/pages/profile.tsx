import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../moi.png';
import '../styles/profile.css'

const extractData = (data: any) => {
    let res = [];
    for (const elt in data) {
        if (elt === 'Age')
        {
            res.push(<Typography>{elt} : {data[elt]} ans</Typography>);
        }
        else if (elt == 'Picture')
        {
            console.log('pic');
        }
        else
        {
            res.push(<Typography>{elt} : {data[elt]}</Typography>);
        }
    }
    return res;
}

const ProfileComponent = () => {
    const [data, setData] = useState(
        {
            Name: 'Samy NALBANDIAN',
            Age: 22,
            Picture: logo,
            Login: 'samy.nalbandian'
        }
    );

    return (<div className="profileComponent">
        <img alt="My pic" width="150" height="100" src={data.Picture}></img>
        {extractData(data)}
        </div>
    );
}

const UserEntryComponent = () => {
    const [typedEntry, setTyped] = useState('');
    const [userEntry, setEntry] = useState('');
    return (
        <div className="userEntry">
            <TextField id="standard-basic" label="Ecrivez ici" value={userEntry} name="userText" onChange={(event) => {
                setEntry(event.target.value);
            }}/>
            <Button variant="contained" color="primary" onClick={(event) =>{
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
        <br/>
        <UserEntryComponent/>
        </div>
    )
}

export default Page