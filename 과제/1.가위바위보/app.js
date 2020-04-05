new Vue({ //-->vue 시작하기
    el: '#app',
    data : {
        myChoice: null,
        comChoice : null,
        count:3,
        winner: null,
        lifeOfMe:3,
        lifeOfCom:3,
        isSelectable: true,
        logs:[],
        selects:[
            {name:'가위', value: 'scissor'},
            {name:'바위', value: 'rock'},
            {name:'보', value: 'paper'},
        ]
    },
    computed: {
        myChoiceImg: function(){
           if(this.myChoice !== null){
                return 'images/' + this.myChoice + '.jpg'
           } else {
                return 'images/question.jpg'
           }
        //return this.myChoice !== null ? `images/${this.myChoice}.jpg` : 'images/question.jpg'
        //-->위에것을 줄인것이다.
        },
        comChoiceImg: function(){
            if(this.comChoice !== null){
                return 'images/' + this.comChoice + '.jpg'
            } else {
                return 'images/question.jpg'
            }
        },
        leftLifeOfMe: function(){
            return 3 - this.lifeOfMe
        },
        leftLifeOfCom: function(){
            return 3 - this.lifeOfCom
        }
    },
    watch: {
        count: function(newVal){
            if(newVal === 0){
                //컴퓨터가 가위바위보를 선택하는 부분
                this.selectCom()

                //가위바위보 승패 결정 & 몫을 차감한다
                this.whoIsWin()
                
                //게임 리셋
                this.count = 3
                this.isSelectable = true

                //로그를 업데이트 하는 부분
                this.updateLogs()
                
            }
        },
        lifeOfMe: function(newVal){
            if(newVal === 0){
                //게임을 종료
                this.endGame('안타깝네요. 당신이 패배하였습니다.')
            }
        },
        lifeOfCom: function(newVal){
            if(newVal === 0){
                this.endGame('축하드립니다. 당신이 승리하였습니다.')
            }
        }
    },
    methods: {
        startGame: function(){
            
            if(this.myChoice === null){
                alert('가위 바위 보 중 하나를 선택해주세요.')
            } else{
                // 버튼이 보이지 않음
                this.isSelectable = false
                let countDown = setInterval(()=> {
                    this.count --
                    if(this.count === 0){
                        clearInterval(countDown) //--> 0에서 멈추게 해준다.
                    }
                }, 1000)
            }
        },
        selectCom: function(){
            let number = Math.random()
            if(number < 0.33){
                this.comChoice = 'scissor'
            } else if(number < 0.66){
                this.comChoice = 'rock'
            }else{
                this.comChoice = 'paper'
            }
            // Math.random() 0.33, 0.66, 그외 나머지
        },
        whoIsWin: function(){
            //가위바위보 승패 결정
            if(this.myChoice === this.comChoice) this.winner = 'no one'
            else if(this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
            else if(this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
            else if(this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
            else if(this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = 'com'
            else if(this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
            else if(this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
            else this.winner = 'error'

            //몫 차감
            if(this.winner === 'me'){
                this.lifeOfCom --
            } else if(this.winner === 'com'){
                this.lifeOfMe --
            }
        },
        updateLogs: function(){
            let log = {
                messege :  `You: ${this.myChoice}, Computer: ${this.comChoice}`,
                winner: this.winner
            }
            this.logs.unshift(log) //--> 최근것이 맨앞줄로 온다
        },
        endGame: function(msg){
            setTimeout(()=> {
                confirm(msg)
                this.lifeOfMe = 3
                this.lifeOfCom = 3
                this.myChoice = null
                this.comChoice = null
                this.winner = null
                this.logs = []
            }, 500)   
        }
    }
})