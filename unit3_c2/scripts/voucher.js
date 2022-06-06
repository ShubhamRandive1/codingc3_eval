let gett = JSON.parse(localStorage.getItem('purchase')) || [];




let url = 'https://masai-vouchers-api.herokuapp.com/api/vouchers'

fetch(url)
    .then(function (res) {
        //console.log(res)
        return res.json();
    })
    .then(function (res) {
        console.log(res)

        cards(res)


    })
    .catch(function (err) {
        console.log(err)
    })


function cards(res) {

    res.forEach(function (ele) {


        let div = document.createElement('div');

        let name = document.createElement('p')
        name.innerHTML = ele.name;

        let image = document.createElement('img');
        image.src = ele.image;

        let price = document.createElement('p');
        price.innerHTML = ele.price;


        let btn = document.createElement('button')
        btn.innerHTML = 'Buy'
        btn.setAttribute('class', 'buy_voucher')
        btn.addEventListener('click', function () {
            buyitem(ele)
        })

        div.append(image, name, price, btn)

        document.getElementById('voucher_list').append(div)

    })


}

function buyitem(ele) {
    console.log(ele)
    gett.push(ele);
    localStorage.setItem('purchase', JSON.stringify(gett));

}