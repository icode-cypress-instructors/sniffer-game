let player = document.querySelector('.player');
let moveBy = 15;
window.addEventListener('load', () => {
    player.style.position = 'absolute';
    player.style.left = 500 +'px';
    player.style.top = 500+'px';
});
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case ('ArrowUp'&&'ArrowRight')===true:
            player.style.left = parseInt(player.style.left) + moveBy + 'px';
            player.style.top = parseInt(player.style.top) - moveBy + 'px';
            break;
        case 'ArrowLeft':
            player.style.left = parseInt(player.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            player.style.left = parseInt(player.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            player.style.top = parseInt(player.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            player.style.top = parseInt(player.style.top) + moveBy + 'px';
            break;
        // case 'ArrowRight'&&'ArrowDown':
        //     player.style.left = parseInt(player.style.left) -moveBy + 'px';
        //     player.style.top = parseInt(player.style.top) + moveBy + 'px';
        //     break;
        // case 'ArrowLeft'&&'ArrowUp':
        //     player.style.left = parseInt(player.style.left) - moveBy + 'px';
        //     player.style.top = parseInt(player.style.top) - moveBy + 'px';
        //     break;
        // case 'ArrowLeft'&&'ArrowDown':
        //     player.style.left = parseInt(player.style.left) - moveBy + 'px';
        //     player.style.top = parseInt(player.style.top) + moveBy + 'px';
        //     break;
    }
});
