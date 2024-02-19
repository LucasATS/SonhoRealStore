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
    }
}