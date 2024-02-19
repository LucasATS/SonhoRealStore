import { ItemCart } from "../ItemCart/index.jsx";
import { useEffect, useState } from "react";
import "./Cart.css";

const EVENT_TAG = "updateCart";

export const Cart = () => {
	const [listCookies, setListCookies] = useState(getCookie("cart") || "");
	const [listCartItems, setListCartItems] = useState(listCookies !== "" ? JSON.parse(listCookies) : null);

	useEffect(() => {
		handleUpdate();

		window.addEventListener(EVENT_TAG, handleUpdate);

		const intervalId = setInterval(() => {
			handleUpdate();
		}, 500);

		return () => {
			window.removeEventListener(EVENT_TAG, handleUpdate);
			clearInterval(intervalId);
		};
	}, []);

	const handleUpdate = () => {
		const updatedListCookies = getCookie("cart") || "";
		if (updatedListCookies !== listCookies) {
			setListCookies(updatedListCookies);
			setListCartItems(updatedListCookies !== "" ? JSON.parse(updatedListCookies) : null);
		}
	}

	return (
		<>
			<span id="cart" className="cart-container">
				<header className="cart-header">
					<p className="cart-closeButton" onClick={() => controle.close()}>x</p>
					<h1>Seu carrinho</h1>
					<p className="cart-closeButton">🛒</p>
				</header>

				<section id="listItensCart" className="cart-section">
					{
						listCartItems ? (
							listCartItems.reverse().map((item, index) => (
								<ItemCart
									key={index}
									id={item?.id}
									image={item?.image}
									title={item?.title}
									price={item?.price}
									amount={item?.amount}
								/>
							))
						) : (
							<p style={{ width: 100 + "%", textAlign: "center", }}>
								Sua lista de compras esta vazia, <a href="/">Ir para loja</a>.
							</p>
						)
					}
				</section>

				<footer className="cart-footer">
					<a>Finalizar compra</a>
				</footer>
			</span>

			<span className="cart-closeWindow" id="closeWindow" onClick={() => controle.close()} />
		</>
	)
}
