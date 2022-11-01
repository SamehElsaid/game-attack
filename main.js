class person{
    constructor(name,health ,strenght){
        this.name = name 
        this.health = health
        this.strenght = strenght
        this.btn = document.querySelector(`#${name}`)
        this.progressHealth = document.querySelector(`.${name}Pro`)
        this.btnHealth = document.querySelector(`#${name}Health`)
        this.btnParent = document.querySelector(`.${name}Btn`)
    }
    attak(ele){
        ele.health -= this.strenght
        if(ele.health < 0 ){
            ele.health = 0
        }

        ele.progressHealth.style.width = `${ele.health}%`
        if(ele.health == 0){
            ele.btnParent.innerHTML = "GameOver"
            this.progressHealth.style.width = `100%`
            this.btnParent.innerHTML = "Winner"
        }
        }
    healthS(){
        if(this.health < 100){
            this.health += 10
            this.progressHealth.style.width = `${this.health}%`
        }
        if(this.health > 100){
            
            this.health = 100
            this.progressHealth.style.width = `${this.health}%`
        }
    }
}

let batman = new person("batman",100,10)
let joker = new person("joker",100,8)
joker.btn.onclick = ()=>{
    joker.attak(batman)
}
batman.btn.onclick = () => {
    batman.attak(joker)
}
joker.btnHealth.onclick = ()=>{
    joker.healthS()
}
batman.btnHealth.onclick = () => {
    batman.healthS()
}
