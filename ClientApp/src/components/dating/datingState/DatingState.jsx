import React from 'react';
import DatingAppLayout from '../datingUI/DatingAppLayout';
import { userData }from './tempUserData';

class DatingState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likedList: [],
            displayList: [],
        }
    }

    addToLikedList = (id) => {
        let tempData = [...userData];
        tempData.forEach(user => {
            if (user.id === id) {
                this.setState((prevState) => ({
                    likedList: prevState.push(user)
                }))
            }
        })
    };

    handleNotLiked = (id) => {
        let tempData = [...userData];
        tempData.forEach(user => {
            if (user.id === id) {
                this.setState((prevState) => ({
                    displayList: prevState.push(user)
                }))
            }
        })
    };

    render() {
        

        return (<DatingAppLayout />)
    };
};

export default DatingState;