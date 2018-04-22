
class FuzzBuzz {
    constructor(number){
        this.number=number,
        this.rules={
            'words' : [{
                'word' : 'fuzz',
                'number': '3'
            },{
                'word' : 'buzz',
                'number': '5'
            }]
        }
    }
    isword(i, val){
        if(i % val == 0){
            return true
        }
        return false
    }
    
    display (){
        for (var i=1;i<this.number;i++){
            let output='';
            for(var j=0;j<this.rules.words.length;j++){
                if(this.isword(i,this.rules.words[j].number)){
                    output=output+this.rules.words[j].word;
                }
            }
            if(output === ''){
                output=i;
            }
            console.log(output)
        }
    }
    
}

const fb = new FuzzBuzz(100);

(() => { fb.display(20)})();