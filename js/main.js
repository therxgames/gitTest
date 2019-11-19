function showModalWin() {
 
                var darkLayer = document.createElement('div');

                darkLayer.id = 'shadow';

                document.body.appendChild(darkLayer);

                var modalWin = document.querySelector('.feedback'); 

                modalWin.style.display = 'block'; 
                darkLayer.onclick = function () {

                    darkLayer.parentNode.removeChild(darkLayer);
                    modalWin.style.display = 'none'; 
                    return false;

                };
            }
function showRequest() {
 
                let darkLayer = document.createElement('div');

                darkLayer.id = 'shadow';

                document.body.appendChild(darkLayer);

                let modalWin = document.querySelector('.request'); 

                modalWin.style.display = 'block'; 
                darkLayer.onclick = function () {

                    darkLayer.parentNode.removeChild(darkLayer);
                    modalWin.style.display = 'none'; 
                    return false;

                };
            }

            function price(){
                let price_1 = document.querySelector('#price_1');
                let price_2 = document.querySelector('#price_2');
                let price_3 = document.querySelector('#price_3');
                let price_4 = document.querySelector('#price_4');

                let price1 = document.querySelector('.price1');
                let price2 = document.querySelector('.price2');
                let price3 = document.querySelector('.price3');
                let price4 = document.querySelector('.price4');

                
                price2.style.display  = 'none';
                price3.style.display  = 'none';
                price4.style.display = 'none';  

                price_1.onclick = () => {
                    price1.style.display = 'block';
                    price2.style.display = 'none';
                    price3.style.display  = 'none';
                    price4.style.display = 'none';
                }

                price_2.onclick = () => {
                    price1.style.display = 'none';
                    price2.style.display = 'block';
                    price3.style.display  = 'none';
                    price4.style.display = 'none';
                }

                price_3.onclick = () => {
                    price1.style.display = 'none';
                    price2.style.display = 'none';
                    price3.style.display  = 'block';
                    price4.style.display = 'none';
                }

                price_4.onclick = () => {
                    price1.style.display = 'none';
                    price2.style.display = 'none';
                    price3.style.display  = 'none';
                    price4.style.display = 'block';
                }

                }
            price();