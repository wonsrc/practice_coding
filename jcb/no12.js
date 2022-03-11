// 데이터
// <여기에 class를 작성하세요.>

class Wizard {
    constructor(health, mana, armor) { // 객체 초기화, 클래스 만들때 반드시 만들어주기!!
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }

    attack() {
        console.log("파이어볼");
    }

}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();


// 출력
// 545 210 10
// 파이어볼