import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/UseCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../Reviewitem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setcart] = useCart(products);
    const { user } = useAuth();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setcart(newCart);
        removeFromDb(key);


    }

    const history = useHistory();
    const handlePlaceOrder = () => {
        history.push('/placeorder');
        setcart([]);
        clearTheCart();

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem key={product.key} products={product} handleRemove={handleRemove}></ReviewItem>)

                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                </Cart>

            </div>

        </div>
    );
};

export default OrderReview;