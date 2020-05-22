import React, {Component} from 'react'
import Form from '../form'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withService } from '../hoc';
import { sumChanged, itemsLoaded } from '../../actions'

import './header.scss'
class Header extends Component{

    render() {
        const {service} = this.props
        const data = service.getItems();

        const { sum, sumChanged, itemsLoaded } = this.props
        return (
            <header className="header container">
                <h1 className="header__title"><i className="fa fa-shopping-bag"></i> Вендинговый автомат</h1>
                <div className="header__menu">
                    <div className="header__money"><i className="fa fa-shopping-cart"></i> <span>{sum}</span></div>
                    <Form sumChanged = {sumChanged}  itemsLoaded = {itemsLoaded} data={data} sum={sum} />
                </div>
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