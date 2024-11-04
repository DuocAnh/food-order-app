import Button from './UI/Button'
import logoImg from '../assets/logo.jpg'
import { useContext } from 'react'
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function hadleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <p>
      </p>
      <nav>
        <Button textOnly onClick={hadleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  )
}