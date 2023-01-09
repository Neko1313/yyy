let tg = window.Telegram.WebApp;
tg.expand()

let user = document.getElementById("iff");

user.innerText = `${tg.initDataUnsafe.user.id} fjjf ${tg.initDataUnsafe.user.Username}`
