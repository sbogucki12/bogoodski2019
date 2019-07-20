import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import * as users from './users';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import "./tableStyle.css";

const styles = {
    root: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column'
    },
    topRow: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '2%',
        justifyContent: 'flex-start',
        marginTop: '17vh'
    },
    button: {
        margin: '2%',
    }
};

const ChangeTable = props => {
    const { classes } = props;

    const [userData, setUserData] = useState(users.default);
    const [inputText, setInputText] = useState("");
    const [isActive, setIsActive] = useState(false);

    const handleChange = e => {
        setInputText(e.target.value);
    };

    const handleCheckbox = e => {
        setIsActive(e.target.checked);
        console.log(e.target.checked);
    };

    let userRows = userData.map((user) =>
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.active}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
        </tr>
    )

    const onSubmit = e => {
        e.preventDefault();
        const result = userData.filter(user =>
            user.name.toLowerCase().includes(inputText.toLowerCase())
            || user.email.toLowerCase().includes(inputText.toLowerCase())
            || user.address.toLowerCase().includes(inputText.toLowerCase())
            || user.phone.toLowerCase().includes(inputText.toLowerCase())
            || user.website.toLowerCase().includes(inputText.toLowerCase()));
        setUserData(result);
        if (inputText == "") {
            setUserData(users.default);
        }
    }

    if (isActive === true) {
        const result = userData.filter(user => user.active === "true");
        userRows = result.map((user) =>
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.active}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
            </tr>
        )
    };

    const content =
        <div className={classes.root}>
            <div className={classes.topRow}>
                <h2>{`User Search`}</h2>
                <form style={{ flexDirection: 'row', marginBottom: '5%' }}>
                    <input type="text" value={inputText} onChange={e => handleChange(e)} />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={e => onSubmit(e)}>
                        {`SEARCH`}
                    </Button>
                    <i>{`Active?`}</i>
                    <Checkbox
                        checked={isActive}
                        onChange={e => handleCheckbox(e)}
                    />
                </form>
                <table>
                    <tr style={{ textAlign: 'left' }}>
                        <th>{`Name`}</th>
                        <th>{`Email`}</th>
                        <th>{`Active`}</th>
                        <th>{`Address`}</th>
                        <th>{`Phone`}</th>
                        <th>{`Website`}</th>
                    </tr>
                    {userRows}
                </table>


            </div>
        </div>

    return content;
}

export default withStyles(styles)(ChangeTable);