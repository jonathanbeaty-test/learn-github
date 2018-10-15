let ACCESS_KEY = 'MDo4MjUxZTM0OC1jZThkLTExZTgtYTI4OS1kMzE2N2Q4ZWU2ZTc6NXpqcDRwRmtnWW1qdU1ORDJCeTZCaDZuaWtyYUVTOUl6dXVT';

// jQuery.ajax({
//     url: 'https://lcboapi.com/products?access_key=' + ACCESS_KEY,
//     headers: {
//         'Authorization': 'MDo4MjUxZTM0OC1jZThkLTExZTgtYTI4OS1kMzE2N2Q4ZWU2ZTc6NXpqcDRwRmtnWW1qdU1ORDJCeTZCaDZuaWtyYUVTOUl6dXVT'
//     }
// }).then(function (data) {
//     console.log(data);
//     let
// });



$.getJSON('https://lcboapi.com/products?access_key=' + ACCESS_KEY, function (data) {

    console.log(data);

    for (let i = 0; i < data.result.length; i++) {
        if (data.result[i].primary_category = 'beer') {
            $("#api-results").append(`<pre>Beer: ${data.result[i].name} Serving Suggestion: ${data.result[i].serving_suggestion}</pre>`);
            // $("#api-results").append(`<img src="${data.result[i].image_url}">`);
        } else {
            alert("ERROR");
        }
    }
});

let ACCESS_KEY2 = `e7400dcdc10b0c9143415ae0a18e79f0`;

$.ajaxSetup({
    url: 'https://favqs.com/api/',
    headers: {
        'Authorization': 'Token token=' + ACCESS_KEY2,
        'Content-Type': 'application/json'
    }
})

$.ajax({
    success: function (data) {
        console.log(data);
    }
})