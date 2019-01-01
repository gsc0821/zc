require(['config'], function() {
    require(['better'], function(BScroll) {
        var add = document.querySelector('footer');
        var dialog = document.querySelector('.dialog');
        var ipt = document.querySelector('.ipt');
        var cancel = document.querySelector('.cancel');
        var save = document.querySelector('.save');
        var scroll = document.querySelector('.scroll');
        new BScroll('section');
        add.onclick = function() {
            // dialog.style.display = "block";
            dialog.classList.remove('flag');
        }
        cancel.onclick = function() {
            // dialog.style.display = "none";
            dialog.classList.add('flag');
        }
        save.onclick = function() {
            var val = ipt.value;
            var html = '';
            html += `
            <div>
                <div>
                    <h4>分类名称：<span>${val}</span></h4>
                    <p>添加时间:<span>${new Date().toLocaleString()}</span></p>
                </div>
                <img src="img/img1.png" alt="">
                <img src="img/img2.png" alt="">
            </div>`;
            scroll.innerHTML += html;
            // dialog.style.display = "none";
            dialog.classList.add('flag');
        }
    })
})