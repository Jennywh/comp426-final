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
  const dom = `<div class="dorm">
  <img src="https://picsum.photos/140" alt="sample dorm image" class="icon" />
  <div class="texts">
    <div class="dorm-name">${index + 1}.${dormName}</div>
    <div class="stars">Average Stars: ${averageStar}, ${n} reviews</div>
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
          <p>${r.review}</p>
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
  const btn = $("<button>Back</button>");
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

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}