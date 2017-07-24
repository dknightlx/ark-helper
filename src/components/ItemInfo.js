import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

export default class ItemInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isEdit:false,
            // info:props.info
            id:props.info.id||0,
            name:props.info.name||'',
            nameEn:props.info.nameEn||'',
            description:props.info.description||'',
            perNum:props.info.perNum||'',
            keys:props.info.keys||''
        }
    }
    cancelInfoSave() {
        this.handleClose();
    }
    infoSave() {
        let info = this.state;
        console.log(this);
        this.props.saveInfo({
            id:info.id,
            name:info.name,
            nameEn:info.nameEn,
            description:info.description,
            perNum:info.perNum,
            keys:info.keys
        });
        this.handleClose();
    }
    handleShow() {
        this.setState({
            isEdit:true
        });
    }
    handleClose() {
        this.setState({
            isEdit: false
        });
    }
    changeName(obj,val){
        this.setState({
            name: val
        });
    }
    changeNameEn(obj,val){
        this.setState({
            nameEn: val
        });
    }
    changeDescription(obj,val){
        this.setState({
            description: val
        });
    }
    changePerNum(obj,val){
        this.setState({
            perNum: val
        });
    }
    changeKeys(obj,val){
        this.setState({
            keys: val
        });
    }
    render() {
        let info = this.state;
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                onTouchTap={this.cancelInfoSave.bind(this)}
            />,
            <FlatButton
                label="保存"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.infoSave.bind(this)}
            />,
        ];
        return (
            <div>
                <Card>
                    <CardMedia style={styles.cardMedia}>
                        <img src="https://dummyimage.com/300x200/000/ff0" alt="" />
                    </CardMedia>
                    <CardTitle title={info.name} subtitle={`id:${info.id}  English name:${info.nameEn}`} />
                    <CardText>
                        详细介绍，之后会每个东东加入描述字段，可修改编辑
                        <div>{`giveItem ${info.id} 100 1 1`}</div>
                    </CardText>
                    <CardActions>
                        <FlatButton onTouchTap={this.handleShow.bind(this)} label="修改" />
                        <FlatButton label="添加Tag" />
                    </CardActions>
                </Card>
                <Dialog
                    title="修改物品信息"
                    actions={actions}
                    modal={false}
                    open={this.state.isEdit}
                    onRequestClose={this.handleClose}
                    >
                    <TextField
                        floatingLabelText="中文名字"
                        value={this.state.name}
                        onChange={this.changeName.bind(this)}
                        />
                    <TextField
                        floatingLabelText="英文名字"
                        value={this.state.nameEn}
                        onChange={this.changeNameEn.bind(this)}
                        />
                    <TextField
                        floatingLabelText="介绍"
                        value={this.state.description}
                        onChange={this.changeDescription.bind(this)}
                        />
                    <TextField
                        floatingLabelText="每组数量"
                        value={this.state.perNum}
                        onChange={this.changePerNum.bind(this)}
                        />
                    <TextField
                        floatingLabelText="关键词"
                        value={this.state.keys}
                        onChange={this.changeKeys.bind(this)}
                        />
                </Dialog>
            </div>
        );
    }
}

const styles = {
    cardMedia:{
        width:'100px',
        height:'60px'
    }
}