
window.onload = function () {

    var app = new Vue({
        el : '#vueApp1',
        data:{
            text:'12333',
            note:'3333',
            message:'今晚打老虎',
            arr:['abc','def','ghi'],
            json:{
                a:'123',
                b:'456',
                c:'789'
            }

        },
        methods:{
            add:function () {
                console.log(this.json)
                console.log(this.message);
                this.arr.push(this.message);

                //添加数组
            },
            fun:function (){
                console.log("fun1")
            }
        }
    });

};
