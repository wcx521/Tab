
var Tab = function(obj){
    this.nav = obj.nav;
    this.list = document.getElementById(obj.id);
    this.init();
}

Tab.prototype = {
    rndColor: function(){
        return 'rgb('+this.rnd()+','+this.rnd()+','+this.rnd()+')';
    },
    rnd: function(){
        return parseInt(Math.random()*256);
    },
    createList: function(){
        var nav = this.nav;
        for(var i=0; i<nav.length; i++){
            var li = document.createElement('li');
            li.style.backgroundColor = this.rndColor();
            li.textContent = nav[i];
            this.list.appendChild(li);
        }
        this.list.children[0].className = 'active';
    },
    addEvent: function(){
        this.list.onclick = function(e){
            var self = this;
            var event = e || event;
            var target = event.srcElement || event.target;
            if(target.nodeName.toLowerCase() == 'li'){
                for(var i=0; i<self.children.length; i++){
                    self.children[i].className = '';
                }
                target.className = 'active';
            }
        } 
    },
    init: function(){
        this.createList();
        this.addEvent();
    }
}