$(function() {
    let button = $("#submit");
    button.click((ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        let username = document.getElementById("uname").value;
        let password = document.getElementById("pword").value;
        let year = document.getElementById("year").value;
        let dorm = document.getElementById("dorm").value;
        (async () => {
            let r = await axios.post("http://localhost:3000/account/create",
                {"name": username, "pass": password, "data": {"year": year, "dorm": dorm}})
                    .then(it => it.data)
                    .catch(reason => {
                        alert(reason.response.data.msg);
                    });
        })();
    })
});