// 不同类之间的共同特性可以用interface抽取出来
interface Alarm {
  alert(): void
}


interface Light {
    lightOn(): void;
    lightOff(): void;
}


class Car implements Alarm, Light {
   alert() {
       console.log('Car alert');
   }

   lightOn() {
       console.log('Car light on'); 
   }
   
   lightOff() {
    console.log('Car light off');
   }
}

const c = new Car()
c.lightOn()











export default 0