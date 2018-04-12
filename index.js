'use strict';
const rules={
    'number' : 100,
    'words' : [{
        'word' : 'fuzz',
        'number': '3'
    },{
        'word' : 'buzz',
        'number': '5'
    }]
}
function isword(i, val){
    if(i % val == 0){
        return true
    }
    return false
}
function fuzzbuzz(rules){
    for (var i=1;i<rules.number;i++){
        let output='';
        for(var j=0;j<rules.words.length;j++){
            if(isword(i,rules.words[j].number)){
                output=output+rules.words[j].word;
            }
        }
        if(output === ''){
            output=i;
        }
        console.log(output)
    }
}
fuzzbuzz(rules);