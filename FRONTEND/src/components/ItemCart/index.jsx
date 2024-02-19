import { useState } from "react";
import "./ItemCart.css";

export const ItemCart = ({
	id = -1,
	image = "",
	title = "",
	amount = 1,
	price = 0,
}) => {
	const [inputValue, setInputValue] = useState(amount);
	const [myPrice, setMyPrice] = useState(price * amount);

	const handleUpdateValue = (e) => {
		const value = e.target.value;
		setMyPrice(price * value);
	}

	return (
		<span className="itemcart-container" id={"itemCart"}>
			<span className="col" style={{ width: 100 + "%" }}>
				<header className="itemcart-header">
					<img src={image} alt={title} />
					<section className="itemcart-section">
						<h1 className="itemcart-titulo">{title}</h1>
						<p className="itemcart-amount">Quantidade</p>
						<span className="itemcart-detalhe">
							<input className="itemcart-input" type="number" min="1" onChange={(e) => handleUpdateValue(e)} defaultValue={inputValue} />
							<p className="itemcart-p">R$ {myPrice.toFixed(2)}</p>
						</span>
					</section>
					<button className="itemcart-button">🗑️</button>
				</header>
			</span>
		</span>
	)
}