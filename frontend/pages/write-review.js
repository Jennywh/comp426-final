$(function() {
    let button = $("#submit");
    button.click((ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        (async () => {
            let review = document.getElementById("paragraph").value;
            let dorm = document.getElementById("myInput").value;
            let token = localStorage['jwt'];
            let user_info = await axios.get("http://localhost:3000/account/status",
            {headers: {Authorization: "Bearer " + token}});
            let r = await axios.post("http://localhost:3000/public/reviews/"+user_info.data.user.name,
            {"type": "merge", "data": {"author": user_info.data.user.name, "dorm": dorm, "score": 5, "review": review}}).then(it => it.data);
        })();
    })
})