import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withService } from '../../hoc';
import { itemsLoaded, sumChanged } from '../../../actions';

import ItemModal from '../../modals/item-modal';
import BalanceErrorModal from '../../modals/balance-error-modal';
import SuccessModal from '../../modals/success-modal';
import './main-page.scss';
class MainPage extends Component{

    state = {
        itemModal: {
            className: 'modal fade modal-hidden',
            image: '',
            price: 0
        },
        errorModal: 'modal fade modal-hidden',
        successModal: 'modal fade success-fade modal-hidden'

    }
    componentDidMount() {
        const { service } = this.props;
        const data = service.getItems();
        this.props.itemsLoaded(data);   
    }
    handleModal(image, price) {
        const { sum } = this.props;
       if(sum > 0) {
        this.setState({
            itemModal: {
                image: image,
                price: price,
                className: 'modal fade show'
            }
        })
       }  else {
           this.setState({
               errorModal: 'modal fade show'
           })
       }  
    }
    onModalClose = () => {
        this.setState({
            itemModal: {
                image: '',
                price: 0,
                className: 'modal fade modal-hidden'
            }
        })
    }
    onModalSubmit = () => {
        const { service, sum } = this.props;
        const price = -this.state.itemModal.price;
        this.props.sumChanged(price);
        const data = service.getItems();
        let newData = [];
            data.map((item) => {
                if(item.price <= sum+price) {
                   newData.push(item);
                }
                return item;
            }) 
        this.props.itemsLoaded(newData);
        this.setState({
            itemModal: {
                ...this.state.itemModal,
                className: 'modal fade modal-hidden'
            },
            successModal: 'modal fade success-fade show'
        });
    }

    renderRow = (item) => {
            
        const {id, name, price, image, isNew} = item;
        const itemName =  isNew ? <span>{name} <sup className="new-item">new</sup></span> : name;
                        return (
                            <tr className="table__row" key={id} onClick={() => this.handleModal(image, price)}>
                                <th scope="row" className="align-middle">{id}</th>
                                <td className="align-middle"><img className="table__image" src={image} alt="item" width="50"/></td>
                                <td className="align-middle">{itemName}</td>
                                <td className="align-middle">{price}</td>
                            </tr>
                            
                        )
    }
    render () {
        const { items } = this.props;
        const { itemModal, errorModal, successModal } = this.state;
        return (
            <main className="main-page container">
            <table className="main-page__table table table-responsive-sm table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col"><i className="table__icon fa fa-cubes"></i> Предмет</th>
                            <th scope="col"><i className="table__icon fa fa-pencil"></i> Название</th>
                            <th scope="col"><i className="table__icon fa fa-rub"></i> Цена</th>

                            </tr>
                        </thead>
                        <tbody>
                            
                            {items.map(this.renderRow)}
                            
                        </tbody>
            </table>
            <ItemModal modal={itemModal} onClose={() => this.onModalClose} onSubmit={() => this.onModalSubmit}/>
            <BalanceErrorModal errorModal={errorModal} onClicked={() => this.setState({errorModal: 'modal fade modal-hidden'})}/>
            <SuccessModal successModal={successModal} itemModal={itemModal} onClicked={() => this.setState({successModal: 'modal fade success-fade modal-hidden'})}/>
            </main>
        )
    }
    
}

const mapStateToProps = ({ items, sum }) => {
    return { items, sum };
};
const mapDispatchToProps  = {
    itemsLoaded,
    sumChanged
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MainPage);



    