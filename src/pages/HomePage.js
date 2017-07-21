import React, { Component } from 'react';
import data from '../data/data.json';
import MyTabs from '../components/Tabs';

export default class HomePage extends Component {
    render() {
        return(
            <div className="homeContainer" style={styles.homeContainer}>
                <div className="tabs" style={styles.tabs}>
                    <MyTabs data={data} />
                </div>
                <div className="itemInfo">
                    
                </div>
            </div>
        )
    }
}

const styles = {
    homeContainer:{
        width: '100%',
        backgroundColor: '#FF8877'
    },
    tabs:{
        width: '50%'
    }
}