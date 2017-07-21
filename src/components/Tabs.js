import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';

export default class MyTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'goods'
        }
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        let renderGoodsList = this.props.data.map((val,index)=>{
            return (
                <div>
                    <div>{val.id}</div>
                    <div>{val.nameEn}</div>
                    <div>{val.name}</div>
                </div>
            );
        })
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="物品ID" value="goods">
                    <div>
                        <h2>Controllable Tab B</h2>
                        {renderGoodsList}
                    </div>
                </Tab>
                <Tab label="系统命令" value="system">
                <div>
                    <h2>Controllable Tab B</h2>
                    <p>
                    This is another example of a controllable tab. Remember, if you
                    use controllable Tabs, you need to give all of your tabs values or else
                    you wont be able to select them.
                    </p>
                </div>
                </Tab>
            </Tabs>
        );
    }
}