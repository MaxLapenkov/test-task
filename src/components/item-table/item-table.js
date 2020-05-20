import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withService } from '../hoc';
import { itemsLoaded } from '../../actions';
import './item-table.scss';
class ItemTable extends Component{

    componentDidMount() {
        const { service } = this.props;
        const data = service.getItems();
        this.props.itemsLoaded(data);
        
    }

    renderRow = (item) => {
        const {id, name, price, count, image, isNew} = item;
        const itemName =  isNew ? <p>{name} <span>new</span></p> : name
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td><img src={image} alt="item" width="50"/></td>
                                <td>{itemName}</td>
                                <td>{price}</td>
                                <td>{count}</td>
                            </tr>
                        )
    }
    render () {
        const { items } = this.props;
        return (
            <table className="table table-responsive-sm">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Предмет</th>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {items.map(this.renderRow)}
                            
                        </tbody>
            </table>
        )
    }
    
}

const mapStateToProps = ({ items }) => {
    return { items };
};
const mapDispatchToProps  = {
    itemsLoaded
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemTable);



    