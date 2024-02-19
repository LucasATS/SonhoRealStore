function getCookie(nome = "") {
    let nomeC = nome + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nomeC) == 0)
            return c.substring(nomeC.length, c.length);
    }
    return null;
}

function setCookie(nome = "", valor = "", minutos = 1) {
    let data = new Date();
    data.setTime(data.getTime() + minutos * 60 * 1000);
    let expires = "expires=" + data.toUTCString();
    return document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
}
