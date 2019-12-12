$(function() {
    let button = $("#submit");
    button.click((ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        let username = document.getElementById("uname").value;
        let password = document.getElementById("pword").value;
        (async () => {
            let r = await axios.post("http://localhost:3000/account/login",
                {"name": username, "pass": password, "data": { }}).then(it => it.data);
        })();
        // alert("logged in");
    })
});