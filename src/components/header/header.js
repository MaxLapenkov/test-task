import React, {Component} from 'react'
import Form from '../form'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withService } from '../hoc';
import { sumChanged, itemsLoaded } from '../../actions'
class Header extends Component{

    render() {
        const {service} = this.props
        const data = service.getItems();

        const { sum, sumChanged, itemsLoaded } = this.props
        return (
            <header>
                <h1>Вендинговый автомат</h1>
                <div className="money">Количество денег {sum}</div>
                <Form sumChanged = {sumChanged}  itemsLoaded = {itemsLoaded} data={data} sum={sum} />
            </header>
            
        )
    }
    
    
}
const mapStateToProps = ({ sum }) => {
    return { sum};
};
const mapDispatchToProps  = {
    sumChanged,
    itemsLoaded
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Header);