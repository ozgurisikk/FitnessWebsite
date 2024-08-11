(function(){
    'use strict';

    

    var header = document.getElementById("header");
    var headerScrolled = function(event){
        if(window.scrollY > 100){
            header.classList.add("header-scrolled")
        }else{
            header.classList.remove("header-scrolled")
        }
    }

    document.addEventListener("scroll", headerScrolled)

    document.addEventListener('DOMContentLoaded', function() {
        const headers = document.querySelectorAll('#classes h3');
        headers.forEach(header => {
            // Bootstrap collapse olayi icin dinleyici ekleme
            const target = header.getAttribute('data-bs-target');
    
            header.addEventListener('click', function() {
                headers.forEach(h => h.classList.remove('h3-active'));
                this.classList.toggle('h3-active');
            });
    
            // Bootstrap collapse olaylarina dinleyici ekleme
            const collapseElement = document.querySelector(target);
    
            collapseElement.addEventListener('shown.bs.collapse', function() {
                header.classList.add('h3-active');
            });
    
            collapseElement.addEventListener('hidden.bs.collapse', function() {
                header.classList.remove('h3-active');
            });
        });
    
        // Sayfa yuklendiginde gosterilen collapse elementinin arka plan renginin ayarlanmasi
        const activeCollapse = document.querySelector('#classes .collapse.show');
        if (activeCollapse) {
            const activeHeader = document.querySelector(`[data-bs-target=".${activeCollapse.classList[2]}"]`);
            if (activeHeader) {
                activeHeader.classList.add('h3-active');
            }
        }
    });
    


    //bmi
    document.getElementById('height').addEventListener('input', calculateBMI);
    document.getElementById('weight').addEventListener('input', calculateBMI);

    function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    
    if (height && weight) {
        var bmi = (weight / ((height / 100) ** 2)); //bmi sonucu degiskene ataniyor
        var arrow = document.querySelector('#bmi i'); //arrow degiskene atanir
        
        arrow.style.display = 'block'; //once none olan display gorunur hale gelir
        
        // sonuca gore absolute olan arrow left degerini 1400px width ekranda uygun yerlestirilir
        if (bmi < 18.5) {
            arrow.style.left = '13%';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            arrow.style.left = '29%';
        } else if (bmi >= 25 && bmi <= 29.9) {
            arrow.style.left = '44%';
        } else if (bmi >= 30 && bmi <= 34.9) {
            arrow.style.left = '61%';
        } else {
            arrow.style.left = '76%';
        }
    } else {
        document.querySelector('#bmi i').style.display = 'none'; //bi deger yoksa veya sikinti varsa tekrar gizlenir
    }
}

})();

