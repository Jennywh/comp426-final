
// function groupBy(arr, key) {
//     let res = {};
//     for (let ele of arr) {
//         const k = key(ele);
//         if (!res[k]) res[k] = [];
//         res[k].push(ele);
//     }
//     return res;
// }

// function averageStar(reviews) {
//     if (reviews.length === 0) return 0;
//     return reviews.map(it => it.score).reduce((a, b) => a + b, 0) / reviews.length;
// }

// function unroll(kv) {
//     let res = [];
//     for (let k in kv) {
//         res.push(...kv[k]);
//     }
//     return res;
// }

// function domForDorm(index, dormName, reviews, averageStar) {
//     const n = reviews.length;
//     const sample = reviews.length === 0 ? "No reviews yet." : reviews[0].review;
//     const dom = `<div class="dorm">
//     <img src="https://picsum.photos/140" alt="sample dorm image" class="icon" />
//     <div class="texts">
//       <div class="dorm-name">${index + 1}.${dormName}</div>
//       <div class="stars">Average Stars: ${averageStar}, ${n} reviews</div>
//       <div class="sample-review">
//         “${sample}” <a class='readmore'>read more</a>
//       </div>
//     </div>
//   </div>`
//   return $(dom);
// }

// function domForReview(r) {
//     const stars = "⭐".repeat(r.score);
//     // FIXME: not class='dorm'
//     return $(`
//     <div class="dorm">
//         <div class="texts">
//             <p>${stars} by <strong>${r.author}</strong></p>
//             <p>${r.review}</p>
//         </div>
//     </div>
//     `)
// }

const ALL_DORMS = ["Hinton James", "Horton", "Ram Village", "Hardin", "Craig", "Craig North"];

function mainPage() {
    $(".content").empty();
    (async () => {
        let token = localStorage['jwt'];
        if (token == undefined) {
            alert('Please log in');
        } else {
            let user_info = await axios.get("http://localhost:3000/account/status", { headers: { Authorization: "Bearer " + token } });
            const apiUrl = 'http://localhost:3000/public/reviews/'+user_info.data.user.name;
            const res = await axios.get(apiUrl).then(it => it.data);
            let result = res.result;
            for (let i=0;i<result.length;i++) {
                let dorm = result[i]['dorm'];
                let star = result[i]['score'];
                let review = result[i]['review'];
                let dom = `<div class="dorm">
                    <img src="https://picsum.photos/140" alt="sample dorm image" class="icon" />
                    <div class="texts">
                    <div class="dorm-name">${dorm}</div>
                    <div class="stars">Stars: ${star} reviews</div>
                    <div class="sample-review">
                        “${review}” 
                    </div>  </div> </div>`;
                $(dom).appendTo($(".content"));
                let id_edit = "edit"+i.toString();
                let id_del = "del"+i.toString();
                let edit = $('<button id=${id_edit}> Edit </button>');
                let del = $('<button id=${id_del}> Delete </button>');

                edit.appendTo($(".content"));
                del.appendTo($(".content"));
                del.click((ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    ev.stopImmediatePropagation();
                    (async () => {
                        let r = await axios.delete("http://localhost:3000/public/reviews/" + user_info.data.user.name).then(it => it.data);
                        for (let j=0;j<result.length;j++) {
                            if (j!=i) {
                                let rr = await axios.post("http://localhost:3000/public/reviews/" + user_info.data.user.name,
                                { "type": "merge", "data": result[j] }).then(it => it.data);
                            }
                        }
                        location.reload();
                    })();
                })
                edit.click((ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    ev.stopImmediatePropagation();
                    // working on result[i]
                    // location.href = './write-review.html';
                    let id_text = "text"+i.toString();
                    let text = $('<textarea class="textarea" id=${id_text}>write the review here</textarea>');
                    text.appendTo($(".content"));
                    let id_done = "done"+i.toString();
                    let done = $('<button id=${id_done}> Done </button>');
                    done.appendTo($(".content"));
                    done.click((ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        ev.stopImmediatePropagation();
                        let new_score = 5; // should be the edited stars
                        let new_review = text.val();
                        (async () => {
                            let r = await axios.delete("http://localhost:3000/public/reviews/" + user_info.data.user.name).then(it => it.data);
                            for (let j=0;j<result.length;j++) {
                                if (j!=i) {
                                    let rr = await axios.post("http://localhost:3000/public/reviews/" + user_info.data.user.name,
                                    { "type": "merge", "data": result[j] }).then(it => it.data);
                                } else {
                                    let rr = await axios.post("http://localhost:3000/public/reviews/" + user_info.data.user.name,
                                    { "type": "merge", "data": {"dorm": dorm, "score": new_score, "review": new_review}}).then(it => it.data);
                                }
                            }
                            location.reload(true);
                        })();
                    })
                })
            }
        }
    })();
}

// function viewReviews(data) {
//     $(".content").empty();
//     const btn = $("<button>Back</button>");
//     btn.appendTo($(".content"));
//     btn.click(_ => {
//         mainPage();
//     })
//     for (let r of data) {
//         const dom = domForReview(r);
//         dom.appendTo($('.content'));
//     }
// }

mainPage();