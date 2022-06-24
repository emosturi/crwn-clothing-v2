import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

<<<<<<< HEAD
import {  CartDropdownContainer,
  EmptyMessage,
  CartItems } from './cart-dropdown.styles';
=======
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
>>>>>>> lesson-34

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
<<<<<<< HEAD
        {cartItems.length?
          (cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ):(
          <EmptyMessage>No items yet...</EmptyMessage>
        )
        }
=======
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
>>>>>>> lesson-34
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
