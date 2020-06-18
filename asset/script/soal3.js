let buttonValue = document.getElementById('button-input')

buttonValue.addEventListener('click', function () {
    let regexNameQuery = new RegExp(
        /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/g
    );
    let inputValue = document.getElementById('input').value

    if (inputValue.match(regexNameQuery)) {
        alert('Hasil pencarian berhasil')
    } else {
        alert('hasil pencarian gagal')
    }
})