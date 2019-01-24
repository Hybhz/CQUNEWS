window.onfocus = function () {
    document.title = '滑稽123';
   };
window.onblur = function () {
    document.title = '快回来~页面崩溃了';
   };


var vm1 = new Vue({
    el: '#app',
    data: {
        name: '滑稽主页',
        login: '我要骚',
        register: '不骚了',
        username_title: '请输入用户名',
        password_title: '请输入密码',
        msg: '滑稽树上滑稽果，滑稽树下你和我。',
        intervalId: null,
    },
    methods:{
        up(){
            if(this.intervalId != null) return;
            var _this = this
            this.intervalId = setInterval(function(){
                var start = _this.msg.substring(0,1);
                var end = _this.msg.substring(1);
                _this.msg = end + start;
            },100)
        },
        down(){
            clearInterval(this.intervalId)
            this.intervalId = null;
        }
    }
});//以上是第一个div

var vm2 = new Vue({
    el: '#calculator',
    data: {
        name: '滑稽计算器',
        n1: 0,
        n2: 0,
        result: 0,
        option: '+',
    },
    methods:{
        calculate(){
            switch(this.option){
                case '+': this.result = parseFloat(this.n1) + parseFloat(this.n2)
                    break;
                case '-': this.result = parseFloat(this.n1) - parseFloat(this.n2)
                    break;
                case '*': this.result = parseFloat(this.n1) * parseFloat(this.n2)
                    break;
                case '/': this.result = parseFloat(this.n1) / parseFloat(this.n2)
                    break;
            }
        }
        //以下投机取巧eval
        /* calculate(){
            var codeStr = 'parseFloat(this.n1)'+ this.option +'parseFloat(this.n2)'
            this.result = eval (codeStr)
        } */
    }
});//这是个计算器


function dateDiff(shijian){
	var stime = Date.parse(new Date(shijian));
	var etime = Date.parse(new Date());
	var usedTime = etime - stime;  //两个时间戳相差的毫秒数
	var days=Math.floor(usedTime/(24*3600*1000));
	//计算出小时数
	var leave1=usedTime%(24*3600*1000);    //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000));
	//计算相差分钟数
	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000));
	var time = days;
	return time;
}


var vm3 = new Vue({
    el: '#time',
    data: {
        name: '滑稽时间',
        msg1: '选个顺眼的时间，会变成当天必应背景',
        msg2: '（未来的时间不行）',
        iDays: '0',
        time: '',
        url1: '',
    },
    methods:{
        timefunc(){
            var time1 = this.time + ' 16:00:00';
            this.iDays = dateDiff(time1);
            this.url1 = 'https://bing.ioliu.cn/v1?d=' + this.iDays;
            document.body.style.backgroundImage="url("+ this.url1 +")";//"+ url1 +"
            if((Date.parse(new Date(time1))-57600000)>Date.parse(new Date())) alert('叫你别输未来的时间');
        }
    }
});






/* function dateDiff(sDate2) {
    var sDate1=new Date().pattern("yyyy-MM-dd");
    sDate2=LEx.util.Format.formatDate(sDate2,"yyyy-MM-dd");
    var aDate, oDate1, oDate2, iDays;
    aDate = sDate1.split("-");
    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);  //转换为yyyy-MM-dd格式
    aDate = sDate2.split("-");
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
    iDays = parseInt((oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
    return iDays;  //返回相差天数
}; */
