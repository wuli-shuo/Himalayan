  /**
   *  颜色改变js
   *  
   */
  const arr1 = [2,10,18,36,54,86,118],  //惰性气体
        arr2 = [5,6,7,8,14,15,16,33,34,52,1], //非金属
        arr3 = [3,11,19,37,55,87],  //碱金属
        arr4 = [4,12,20,38,56,88],  //碱土金属
        arr5 = [21,22,23,24,25,26,27,28,29,30,39,40,41,42,43,44,45,46,47,48,72,73,74,75,76,77,78,79,80,104,105,106,107,108,109,110,111,112,113,114,115,116,117],//过渡金属
        arr6 = [13,31,32,49,50,51,81,82,83,84], //主族金属
        arr7 = [9,17,35,53,85], //卤族元素
        arr8 = [57,58,59,60,61,62,63,64,65,66,67,68,69,70,71],	// 镧系元素
        arr9 = [89,90,91,92,93,94,95,96,97,98,99,100,101,102,103],  // 锕系元素
        arr = [arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9];


  class defineColor {
    constructor (obj) {
      this.length = obj.length;
      this.num = obj.num; // 0 - 9
      this.symbol = document.querySelectorAll('.symbol');
      this.bind(obj.element,"click");
      this.flag = -1; //  不显示颜色
    }

    bind(el, e){
      if(document.addEventListener)
        el.addEventListener(e,this.handle.bind(this),false);//需要强行绑定this
      else
        el.attachEvent(e,() => {
          this.handle(el);
        },false);
    }

    handle(el) {
      console.log('断点2');
      console.log(this.num);
      Array.prototype.filter.call(this.symbol,this.changeColor.bind(this)).forEach( item => item.style.color = '#000');
    }

    changeColor(item) {
      for(let j = 0 ;j <arr[this.num].length ; j++)
        if(item.getAttribute('number') == arr[this.num][j]) {
          console.log( arr[this.num][j]-1);
          console.log(item);
          return item;
        }
    }
  }

