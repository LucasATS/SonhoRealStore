document.addEventListener('keydown', event => {
    if (event.key === 'Escape') controle.close();
});

const controle = {
    open() {
        window.closeWindow.style.setProperty("visibility", "visible");
        window.cart.style.setProperty("visibility", "visible");
        window.closeWindow.style.setProperty(
            "animation",
            "openBlackout 200ms ease-in",
        );
        window.cart.style.setProperty("animation", "open 200ms ease-in");
        window.dispatchEvent(new Event("updateCart"));
    },

    close() {
        window.closeWindow.style.setProperty("visibility", "hidden");
        window.cart.style.setProperty("visibility", "hidden");
        window.closeWindow.style.setProperty(
            "animation",
            "closeBlackout 200ms ease-out",
        );
        window.cart.style.setProperty("animation", "close 200ms ease-out");
    },

    updateList() {
        window.dispatchEvent(new Event('updateCart'));
    },

    get() {
        try {
            const cookies = getCookie("cart");
            const carrinho = JSON.parse(cookies || "[]");
            return carrinho;
        } catch (error) {
            return [];
        }
    },

    add(myProduct) {
        const addCookie = (item) => {
            setCookie("cart", JSON.stringify(item, null), 15);
        };

        try {
            let produtos = [];
            const carrinho = this.get();

            if (carrinho.length === 0) {
                produtos.push(myProduct);
                addCookie(produtos);
            } else {
                produtos = carrinho;
                const index = produtos.findIndex(
                    (item) => item.id === myProduct.id,
                );
                if (index !== -1) {
                    produtos[index] = {
                        ...produtos[index],
                        amount: Number(produtos[index].amount) + 1,
                    };
                } else {
                    produtos.push(myProduct);
                }
                addCookie(produtos);
            }

            console.log("Cart:", JSON.stringify(produtos, null, 2));

        } catch (error) {
            console.log('addItemCart', error);
        }
    },

    addFromCookie(tag = "product-current-item") {
        const product = getCookie(tag);
        const jsonProduct = JSON.parse(product);
        this.add(jsonProduct);
        this.updateList();
        this.open();
    }
}
