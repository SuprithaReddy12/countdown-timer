import React, { useContext }  from 'react';
import { ShopContext } from '../context/shop-context';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useNavigate } from 'react-router-dom';

class PaymentForm extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    val:'Pay'
  };
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }
  handleClick=()=>{
    this.setState({val: "Processing..."});
    setTimeout(()=>{
      this.props.navigate('/paid')},2000)
  }
  componentWillUnmount(){
    this.setState({val:"Pay"})
  }
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <section>
            <input
              type="tel"
              name="number"
              required
              max="16"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </section>
          <section>
            <input
              type='text'
              name='name'
              required
              placeholder='Card Holder Name'
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </section>
          <section>
            <input
              type='text'
              name='expiry'
              placeholder='Valid thru'
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </section>
          <button type='submit' onClick={this.handleClick}>
            {
              this.state.val==="Pay"?<>{this.state.val} ${this.props.totalAmount}</>:<>{this.state.val}</>
            }
          </button>
        </form>
      </div>
    );
  }
}


export function AppRoute(props){
  const {getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate()
  return(<PaymentForm navigate={navigate} totalAmount={totalAmount}></PaymentForm>)
}

export default PaymentForm;