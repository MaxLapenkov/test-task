import React, {Component} from 'react';
import { connect } from 'react-redux'
import './item-table.scss'
class ItemTable extends Component{
    renderRow = (item) => {
        const {id, name, price, count} = item;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>Картинка</td>
                                <td>{name}</td>
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

export default connect(mapStateToProps)(ItemTable)