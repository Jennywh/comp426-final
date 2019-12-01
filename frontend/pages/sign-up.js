$(function() {
    let button = $("#submit");
    button.click((ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();

        let username = document.getElementById("uname").value;
        let password = document.getElementById("pword").value;
        (async () => {
            console.log(1);
            console.log({"name": username, "pass": password, "data": { }});
            let r = await axios.post("http://localhost:3000/account/create",
                {"name": username, "pass": password, "data": { }}).then(it => it.data);
            console.log(r);
        })()
    })
});