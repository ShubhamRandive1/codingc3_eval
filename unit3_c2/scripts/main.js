function addData() {
    event.preventDefault();
    let arr = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        address: document.querySelector('#address').value,
        wallet: document.querySelector('#amount').value,
    };

    localStorage.setItem('user', JSON.stringify(arr));
    window.location.reload();
    console.olog(arr)
}