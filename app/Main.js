/*
/!*function task1(){
    alert(ipsBetween("20.0.0.10", "20.0.1.0"));

    function ipsBetween(ip1, ip2){
        let ip1Array = ip1.split('.').map(item => Number(item));
        let ip2Array = ip2.split('.').map(item => Number(item));

        let answer=0;
        let sumIp1=1;
        let sumIp2=1;

        let difference;
        do {
                answer=ip2Array[0]-ip1Array[0];
                answer^=4;
                difference=ip2Array[1]-ip2Array[1];

                if (difference>0){
                    difference^=3;
                }else if (difference<0){

                }else{

                }
                difference=ip2Array[2]-ip1Array[2];
                if (difference>0){

                }else if(difference<0){

                }else{

                }
        }while (ip1Array.join()!=ip2Array.join())

        sumIp1=(ip1Array[0]+1)*(ip1Array[1]+1)*(ip1Array[2]+1)*(ip1Array[3]+1);
        sumIp2=(ip2Array[0]+1)*(ip2Array[1]+1)*(ip2Array[2]+1)*(ip2Array[3]+1);
        ip1Array.map(item => sumIp1*=item);
        ip2Array.map(item => sumIp2*=item);*!/
        alert(sumIp1);
        alert(sumIp2);
        answer=sumIp2-sumIp1;
        return answer;
    }
}

function task3(){
    let colorMap = new Map();
    colorMap.set('red', 'ff0000');
    colorMap.set('green', '00ff0d');
    colorMap.set('blue', '0022ff');
    colorMap.set('black', '000000');
    colorMap.set('yellow', 'fffb00');
    colorMap.set('purple', '8400ff');
    colorMap.set('orange', 'ff9900');
    class SimpleMarker{
        constructor(color) {
            if (colorMap.has(color)){
            this.color=colorMap.get(color);}
            else{
                this.color=colorMap.get('red');
            }
            this.inkAmount=100.0;
        }
        print(str){
            if (this.inkAmount>=0.5){
                let answer = str.substring(0, Number(this.inkAmount/10.0));
             this.inkAmount=this.inkAmount>str.length?(this.inkAmount-str.length):0.0;
             return answer;
            }
        }
    }
    class notSimpleMarker extends SimpleMarker{
        constructor(color) {
            super();
        }
    }
    let marker = new SimpleMarker('red');
    let str = prompt('Type loong string');
    alert(marker.print(str));
}
*!/*/
