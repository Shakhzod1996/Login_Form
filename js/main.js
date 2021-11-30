let inputs = document.querySelectorAll('.input');

function focusFanc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus')
}

function blurFanc() {
    let parent = this.parentNode.parentNode;
    if (this.value == '') {
        parent.classList.remove('focus')
    }

}

inputs.forEach(input => {
    input.addEventListener('focus', focusFanc)
    input.addEventListener('blur', blurFanc)

})