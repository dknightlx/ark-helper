import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class ItemInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isEdit:false
        }
    }
    render() {
        console.log(this.props.info.name);
        let info = this.props.info;
        return (
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
                    <FlatButton label="修改" />
                    <FlatButton label="添加Tag" />
                </CardActions>
            </Card>
        );
    }
}

const styles = {
    cardMedia:{
        width:'100px',
        height:'60px'
    }
}