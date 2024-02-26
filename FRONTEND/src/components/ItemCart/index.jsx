import { useState } from "react";
import "./ItemCart.css";

export const ItemCart = ({
	id = -1,
	image = "",
	title = "",
	amount = 1,
	price = 0,
}) => {
	const [inputAmount, setInputAmount] = useState(amount);
	const [myPrice, setMyPrice] = useState(price * amount);

	const handleUpdateValue = (e) => {
		const myAmount = e.target.value;
		setInputAmount(myAmount);
		setMyPrice(price * myAmount);
	}

	return (
		<span className="itemcart-container" id={"itemCart"}>
			<span className="col" style={{ width: 100 + "%" }}>
				<header className="itemcart-header">
					<span style={{ height: 80 + 'px', width: 80 + 'px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<img className="itemcart-img" src={image} alt={title} />
					</span>
					<section className="itemcart-section">
						<h1 className="itemcart-titulo">{title}</h1>
						<p className="itemcart-amount">Quantidade</p>
						<span className="itemcart-detalhe">
							<input className="itemcart-input" type="number" min="1" onChange={(e) => handleUpdateValue(e)} defaultValue={inputAmount} />
							<p className="itemcart-p">R$ {myPrice.toFixed(2)}</p>
						</span>
					</section>
					<div className="col">
						<button className="itemcart-button" onClick={() => controle.remove(id)}>🗑️</button>
						{/* <button className="itemcart-button" onClick={() => alert(id)}>🗑️</button> */}
					</div>
				</header>
			</span>
		</span>
	)
}