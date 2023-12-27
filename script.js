//1. Создать кнопку //"Перевернуть". При клике //на кнопку текст кнопки //должен перевернуться и //отобразиться в обратном порядке.
//2. Есть список //элементов. Пользователь //м//ожет добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
//3. *Дополнительное задание: При //клике на элемент списка он должен б//ыть удален. (по желанию)
const App = {
    data(){
        return {
            
            ReverseBtn: 'Нажми ',

        };
    },

    methods: {        

    reverse() {
       const ReverseBtn =  document.querySelector('.reverse')
        const text = ReverseBtn.innerText        
        .split('')
        .reverse()
        .join('');        
        ReverseBtn.innerText = text;
        
    },

    add() {
        const list = document.querySelector('#list');
        console.log(list);
        const newEl = document.createElement('li');
        newEl.innerText = 'Новый элемент списка';
        list.appendChild(newEl);
    }
    },
};



Vue.createApp(App).mount('#app');

