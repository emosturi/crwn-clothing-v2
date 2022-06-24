import { useDispatch, useSelector } from 'react-redux';

<<<<<<< HEAD
import { CartContext } from '../../contexts/cart.context';

import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles';
=======
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ItemCount } from './cart-icon.styles';
>>>>>>> lesson-34

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
<<<<<<< HEAD
      <ShoppingIcon/>
=======
      <ShoppingIcon className='shopping-icon' />
>>>>>>> lesson-34
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
