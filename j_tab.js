;(function($,window,document,undefined){
    $.fn.tab = function(options){
        var t = new Tab(this,options);
        return t.init();
    }

    var Tab = function(_this,options){
        this.$el = _this;
        this.defaults = {
            nav: ['AAA','BBB','CCC']
        }
        this.options = options;
    }

    Tab.prototype = {
        init: function(){
            this.createEl();
            this.addEvent();
            return this.$el;
        },
        createEl: function(){
            this.config = $.extend({},this.defaults,this.options);
            var self = this;
            var nav = this.config.nav;
            nav.forEach(function(item){
                var $li = $('<li>'+item+'</li>');
                $li.css('backgroundColor',self.rndColor());
                self.$el.append($li);
            });
            self.$el.children().first().addClass('active');
        },
        addEvent: function(){
            this.$el.on('click','li',function(){
                $(this).addClass('active').siblings().removeClass('active');
            })
        },
        rndColor: function(){
            return 'rgb('+this.rnd()+','+this.rnd()+','+this.rnd()+')';
        },
        rnd: function(){
            return parseInt(Math.random()*256);
        },
    }
})(jQuery,window,document)