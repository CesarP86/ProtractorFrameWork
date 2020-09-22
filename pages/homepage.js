let homepage=function(){
    let first_square=element(by.model('first'));
    let second_square=element(by.model('second'));
    let goButton=element(by.css('[ng-click="doAddition()"]'));


this.get=function(url){
    browser.get(url)
};

this.enterFirstNumber=function(firstNo){
    first_square.sendKeys(firstNo)
};

this.enterSecondNumber=function(secondNo){
    second_square.sendKeys(secondNo)
};

this.clickGo=function(){
    goButton.click();
};

this.verifyResult=function(result){
    let output=element(by.cssContainingText('.ng-binding',result));
    expect(output.getText()).toEqual(result);
};

};
module.exports=new homepage();