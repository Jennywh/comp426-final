$(document).ready(() => {
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
})