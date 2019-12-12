function groupBy(arr, key) {
    let res = {};
    for (let ele of arr) {
        const k = key(ele);
        if (!res[k]) res[k] = [];
        res[k].push(ele);
    }
    return res;
}

function averageStar(reviews) {
    if (reviews.length === 0) return 0;
    return reviews.map(it => it.score).reduce((a, b) => a + b, 0) / reviews.length;
}

function unroll(kv) {
    let res = [];
    for (let k in kv) {
        res.push(...kv[k]);
    }
    return res;
}

function domForDorm(index, dormName, reviews, averageStar) {
    const n = reviews.length;
    const sample = reviews.length === 0 ? "No reviews yet." : reviews[0].review;
    let dormicon = dormImg[dormName]==undefined?'https://picsum.photos/120':dormImg[dormName]

    const dom = `<div class="level">
    <div class='level-left'>
        <img class='dorm-img' src=${dormicon} alt="sample dorm image" />
    </div>
    <div class="texts">
    
      <div class="dorm-name"><strong>${dormName}</strong></div>
      <div class="stars">Average Stars: ${averageStar} according to ${n} review(s)</div>
      <div class="sample-review">
        “${sample}” <a class='readmore'>read more</a>
      </div>
    </div>
  </div>`
    return $(dom);
}

function domForReview(r) {
    const stars = "⭐".repeat(r.score);
    // FIXME: not class='dorm'
    return $(`
    <div class="dorm">
        <div class="texts">
            <p>${stars} by <strong>${r.author}</strong></p>
            <p>"${r.review}"</p>
        </div>
    </div>
    `)
}

const ALL_DORMS = ["Hinton James", "Horton", "Ram Village", "Hardin", "Craig", "Craig North"];

function mainPage() {
    $(".content").empty();
    autocomplete(document.getElementById("myInput"), ALL_DORMS);
    (async () => {
        const apiUrl = 'http://localhost:3000/public/reviews';

        const res = await axios.get(apiUrl).then(it => it.data);
        let grouped = groupBy(unroll(res.result), r => r.dorm);
        for (let d of ALL_DORMS) {
            if (!grouped[d]) {
                grouped[d] = [];
            }
        }
        for (let k in grouped) {
            const v = grouped[k];
        }

        ALL_DORMS.forEach((d, i) => {
            const reviews = grouped[d];
            const avgStar = averageStar(reviews);
            const dom = domForDorm(i, d, reviews, avgStar);
            dom.find(".readmore").click(() => {
                viewReviews(reviews);
            })
            dom.appendTo($(".content"));
        })
    })();
}

function viewReviews(data) {
    $(".content").empty();
    const btn = $("<button class='back-btn'>Back to all dorms</button>");
    btn.appendTo($(".content"));
    btn.click(_ => {
        mainPage();
    })
    for (let r of data) {
        const dom = domForReview(r);
        dom.appendTo($('.content'));
    }
}

mainPage();
