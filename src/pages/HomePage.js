import React, { Component } from 'react';
import data from '../data/dataw.json';
import TextField from 'material-ui/TextField';
import MyTabs from '../components/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import ItemInfo from '../components/ItemInfo';
import SaveToFile from '../components/FileEdit';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            itemInfo:null
        };
        this.data = data;
    }
    searchGoods(obj,val){
        this.setState({
            searchValue:val
        });
        if (val == '') {
            this.data = data;
            return;
        };
        this.data = [];
        data.map((item,index) =>  {
            if(item.name.indexOf(val)>0){
                this.data.push(item);
            }
        });
    }
    initSearch() {
        this.setState({
            searchValue:''
        });
        this.data = data;
    }
    tapItem(val,index){
        this.setState({
            itemInfo:val
        });
    }
    saveEdit(val){
        console.log(val);
        // SaveToFile(val);
    }
    render() {
        return(
            <div className="homeContainer" style={styles.homeContainer}>
                <div className="tabs" style={styles.tabs}>
                    <TextField
                        floatingLabelText="搜索"
                        value={this.state.searchValue}
                        onChange={this.searchGoods.bind(this)}
                        />
                    {this.data.length
                        ?<MyTabs data={this.data} tapItemFun={this.tapItem.bind(this)} />
                        :<RaisedButton onTouchTap={this.initSearch.bind(this)} label="未找到对应物品，点击显示全部" />}
                </div>
                <div className="itemInfo" style={styles.itemInfo}>
                    {this.state.itemInfo?<ItemInfo saveInfo={this.saveEdit.bind(this)} info={this.state.itemInfo} />:null}
                </div>
            </div>
        )
    }
}

const styles = {
    homeContainer:{
        width: '100%',
        display:'flex'
    },
    tabs:{
        width: '50%'
    },
    itemInfo:{
        width: '50%',
        position:'fixed',
        right:0
    }
}