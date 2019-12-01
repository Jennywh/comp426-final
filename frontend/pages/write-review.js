$(function() {
    let button = $("#submit");
    button.click((ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        let review = document.getElementById("paragraph").innerHTML;
        let dorm = document.getElementById("myInput").value;
        // let user = await axios({
        //     method: 'get',
        //     url: 'https://comp426fa19.cs.unc.edu/sessions',
        //     withCredentials: true,
        // }).then(it => it.data);
        // how to get current user name
        (async () => {
            let r = await axios.post("http://localhost:3000/public/reviews",
                {"data": {"author": 'author_1', "dorm": dorm, "score": 5, "review": review}}).then(it => it.data);
        })();
    })
});