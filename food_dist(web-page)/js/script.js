"use strict";

// вот так работают табы
document.addEventListener('DOMContentLoaded', ()=>{

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
        

// прячу контент
    function hideTabContent(){
        tabsContent.forEach(item =>{
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach((tab) =>{
            tab.classList.remove("tabheader__item_active");
        });
    }    

// показываю контент
    function showTabContent(item = 0){
        tabsContent[item].classList.add('show', 'fade');
        tabsContent[item].classList.remove('hide');
        tabs[item].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) =>{
         const target = event.target;
    
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) =>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                                     
                }
            });
        }     

    });
// Timer
const deadline = '2021-12-30';
function getTimeRemaining(endtime){
   const t = Date.parse(endtime) - Date.parse(new Date()),
   days = Math.floor(t/(1000*60 * 60 * 24)),
   // для получения оставшихся дней делю
   // кол-во милисекунд (от сейчас до установленной даный)
   // на кол-во милисекунд в сутках
   hours = Math.floor((t / (1000*60*60)) % 24),
   minutes = Math.floor((t/1000/60) % 60),
   seconds = Math.floor((t/1000) % 60);

   return{
       'total': t,
       'days': days,
       'hours': hours,
       'minutes': minutes,
       'seconds': seconds,
   };

}

function getZero(num){
    if(num >= 0 && num < 10){
        return `0${num}`;
    }else{
        return num;
    }
}

function setClock(selector, endtime){
   //selector - обертка для отображения таймера
   const timer = document.querySelector(selector),
       days = timer.querySelector('#days'),
       hours = timer.querySelector('#hours'),
       minutes = timer.querySelector('#minutes'),
       seconds = timer.querySelector('#seconds'),
       timeInterval = setInterval(updateClock, 1000);

   
    //вызываю функцию сейчас, чтобы не ждать обновления данных
    //в верстке
    updateClock();

    function updateClock(){
       const t = getTimeRemaining(endtime);

       days.innerHTML = getZero(t.days);
       hours.innerHTML = getZero(t.hours);
       minutes.innerHTML = getZero(t.minutes);
       seconds.innerHTML = getZero(t.seconds);

       if(t.total <=0){
           clearInterval(timeInterval);
       }
   }
}
setClock('.timer', deadline);

// Modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal');


function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    // clearInterval(modalTimerId);
}

// перебираю кнопки с одинаковой обработкой и обрабатываю
modalTrigger.forEach((item)=>{

    item.addEventListener('click', openModal);
    // () =>{

        // modal.classList.add('show');
        // modal.classList.remove('hide');
        // modal.classList.toggle('show');
        // убираю возможность прокрутки
        // document.body.style.overflow = 'hidden';
    // });

});


// закрываю
function closeModal(){
    modal.classList.toggle('show');
    // возвращаю возможность прокрутки
    document.body.style.overflow = '';

}

modal.addEventListener('click',(e)=>{
    if(e.target === modal || e.target.getAttribute('data-close') == ''){
        // modal.classList.toggle('show');
        // document.body.style.overflow = '';
        closeModal();
    }
});

// событие на Esc
// узнать клавишу можно на keycode.info
document.addEventListener('keydown', (event)=>{
    // если нажата клавиша и в элементе содержится класс show
    if (event.code === "Escape" && modal.classList.contains('show')){
        closeModal();
    }
});


const modalTimerId = setTimeout(openModal,50000);


function showModalByScroll(){        
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        // alert('the end!');
    openModal();
    window.pageYOffset -=1;
    }
}

window.addEventListener('scroll', showModalByScroll);

// динамическое добавление эллементов через класс


class MenuCard{
    constructor(src, alt, header, description, price, parentSelector, ...classes){
        this.src = src;
        this.alt = alt;
        this.header = header;
        this.description = description;
        this.price = price;
        this.transfer = 70;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes;
        this.changeToRub();
    }
    // создаю классы для карточек
    // создаю оболочку эллемента
   changeToRub(){
        this.price = +this.price * this.transfer;
   }

   render(){
        const element = document.createElement('div');

        if (this.classes.length === 0){
            this.element = 'menu__item';
            element.classList.add(this.element);
            }else{
                this.classes.forEach(className => element.classList.add(className ));
            }
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.header}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
        `;
        this.parent.append(element);
    }
}

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    29,
    '.menu__field .container',
    'menu__item',
    'big',
).render();

new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    50,
    '.menu__field .container',
    'menu__item',
    'big',
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    229,
    '.menu__field .container',
    'menu__item',
    'big',
).render();

// forms
    const forms = document.querySelectorAll("form");
    
    // сообщение о том, что что-то произошло
    const message = {
        loading: 'Загрузка',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так..',
    };

    forms.forEach(item =>{
         postData(item);
    });

    function postData(form){
        form.addEventListener('submit', (e) =>{
            // отключаю поведение по умолчанию
            e.preventDefault();

        // создаю место для вывода сообщений
            const statusMessage = document.createElement('div');
            // добавляю класс
            statusMessage.classList.add('status');
            
            // после нажатия "отправить" прежде всего
            // загружаю сообщение об отправке
            statusMessage.textContent = message.loading;
            form.append(statusMessage );


            // создаю запрос
            const request = new XMLHttpRequest();
            // настраивваю запрос
            request.open('POST', 'server.php');

            // настраиваю заголовки которые говорят серверу что именно приходит
            // когда исспользую связку xmlsHttpReq + form-data = заголовки устанаваливаются автоматически
            // и мне указывать ничего не нужно
            // request.setRequestHeader('Content-type','multipart/form-data');
            
            // для json заголовки задавать нужно
            request.setRequestHeader('Content-type','application/json');

            
            // формирование данных из формы
            // в верстке должен быть указан атрибуты name
            // для использования в FormData (для работы с php)
            const formData = new FormData(form);

            const object = {};
            formData.forEach((value,key)=>{
                object[key] = value;
            });

            const json = JSON.stringify(object); 

            // отправлюя данные из json
            request.send(json);

            // отправляю данные из форм
            // request.send(formData);

            request.addEventListener('load',()=>{
                if(request.status === 200){
                    console.log(request.response);
                    showThanksModal(message.success); 
                    form.reset();
                    statusMessage.remove();

                // удаляю сообщение об успехе через какое-то время
                setTimeout(()=>{
                    statusMessage.remove();
                }, 2000);
                
                }else{
                    showThanksModal(message.failure); 
                }
            });

        });
    }

function showThanksModal(message){
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    
    // вызываю функцию отвечающую за открытие модальных окон
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('.modal__dialog');
    
    // на динамически созданный контент 
    // обработчик событий не добавить, это важно помнить
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();   
        prevModalDialog.classList.add('.showe');
        prevModalDialog.classList.remove('.hide');
        closeModal();
    }, 40000);
}

// slider
const sliderImg = {
    "img/slider/pepper.jpg" : "pepper",
    "img/slider/food-12.jpg" : "food",
    "img/slider/olive-oil.jpg" : "oil",
    "img/slider/paprika.jpg" : "paprika"
};
// alert(sliderImg.length());
// console.log(sliderImg.length());

const dataSliderImg = Object.entries(sliderImg);
console.log(dataSliderImg);
for (let value in dataSliderImg){
    
}





});
