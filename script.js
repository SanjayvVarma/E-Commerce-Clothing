const bar = document.querySelector('.bar');
const nav = document.querySelector('.navbar-itm');
const close = document.querySelector('.close');
const mainImage = document.querySelector('.mainImage');
const smallImage = document.querySelectorAll('.small-img');
const prod = document.querySelectorAll('.prod')

console.log(mainImage);

bar.addEventListener('click', () => {
    nav.classList.add('active')
})

close.addEventListener('click', () => {
    nav.classList.remove('active')
})

if (smallImage.length > 0) {

    smallImage.forEach((smallImages, idx) => {
        smallImages.addEventListener('click', () => {
            mainImage.src = smallImage[idx].src
        })
    })
}

if (prod.length > 0) {
    prod.forEach((product, idx) => {
        product.addEventListener('click', () => {
            window.location.href = './detailsPro.html'
        })
    })
}
