import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';

export default class MyTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'goods',
            tapItem:null
        }
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    // tapItem(val,index,e){
    //     this.setState({
    //         tapItem:val
    //     });
    // }
    render() {
        let renderGoodsList = this.props.data.map((val,index)=>{
            return (
                <ListItem onTouchTap={this.props.tapItemFun.bind(this,val,index)} className="goodsItem" key={`goodsItem${index}`}>
                    <div style={styles.goodsItem}>
                        <div style={{backgroundColor:'#FF7788',paddingLeft:'8px',paddingRight:'8px'}}>{val.id}</div>
                        <div style={{marginLeft:'8px',marginRight:'8px'}}>{val.nameEn}</div>
                        <div>{val.name}</div>
                    </div>
                </ListItem>
            );
        })
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="物品ID" value="goods">
                    <div>
                        <List>
                            {renderGoodsList}
                        </List>
                    </div>
                </Tab>
                <Tab label="系统命令" value="system">
                    <div>
                        <div style={{backgroundColor:'#FF7788',paddingLeft:'8px',paddingRight:'8px'}}>ss</div>
                        <div style={{marginLeft:'8px',marginRight:'8px'}}>dd</div>
                        <div>ddd</div>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}

const styles = {
    goodsItem:{
        display: 'flex',
        alignItems: 'center'
    }
}