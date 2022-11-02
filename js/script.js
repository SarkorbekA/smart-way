
const more_info = document.querySelectorAll('.case_link')
const more_info_close = document.querySelector('.more_back').addEventListener('click',moreInfoClose);

const main_list_block = document.getElementById('main_list_block');
const more_info_block = document.getElementById('more_info_block');

function moreInfo() {
    more_info_block.style.display = 'block'
    main_list_block.style.display = 'none'

    const foo = document.querySelectorAll('.more_cover').length
    
    right.onclick = () => {
        var width = document.getElementById('more_cover').offsetWidth;
        document.querySelector('.more_slider').scrollLeft += width;
    };
    
    left.onclick = () => {
        var width = document.getElementById('more_cover').offsetWidth;
        document.querySelector('.more_slider').scrollLeft -= width;
    };
}

function moreInfoClose() {
    more_info_block.style.display = 'none'
    main_list_block.style.display = 'block'
}

more_info.forEach(x => {
    x.addEventListener('click',moreInfo)
});

const right = document.getElementById('right');
const left = document.getElementById('left');
const buy_scene = document.querySelector('.buy_scene')

function reg_back() {
    buy_scene.style.display = 'none'
}

function buy() {
    buy_scene.style.display = 'flex';
}

const burger_con = document.querySelector('.category_burger')

function burger() {
    burger_con.style.right = '0px'
}

function burger_back() {
    burger_con.style.right = '-280px'
}
