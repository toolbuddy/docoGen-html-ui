/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import ListItemContent from './ListItemContent.jsx';

/**
 * @class ListList
 * @extends {React.Component}
 */
class ListList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = this.props.content;
        
        
        if (this.props.listType === 'al') {
            return (
                <List.List>
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <List.Item>
                                    <List.Icon 
                                        name={item.icon} />
                                    <ListItemContent 
                                        content={item} />
                                </List.Item>
                            );
                        })
                    }
                </List.List>
            );
        } else if (this.props.listType === 'il') {
            return (
                <List.List>
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <List.Item>
                                    <Image 
                                        avatar src={item.img} />
                                    <ListItemContent 
                                        content={item} />
                                </List.Item>
                            );
                        })
                    }
                </List.List>
            );
        } else if (this.props.listType === 'ul') {
            return ( 
                <List.List>
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <List.Item>
                                    <ListItemContent 
                                        content={item}
                                        listType='ul' />
                                </List.Item>
                            );
                        })
                    }
                </List.List>
            );
        }
    }
}

/* Export module */
export default ListList;