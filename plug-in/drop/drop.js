;(function () {
    $.fn.extend({
        dropList:function (opt) {
            opt.father = this;
            new List(opt);
            return this;
        }
    });
    function List(option) {
        this.father = option.father;
        this.dir = option.direction || 'x';
        this.colNum = option.colNum || '2';
        this.menuList = option.menuList || [];
        this.len = this.menuList.length ;
        this.init();
        
    }
    List.prototype.init = function () {
        this.creatDom();
        
        this.bindEvent();
        
    }
    List.prototype.creatDom = function () {
        var self = this;
        var dropCon = $('<div class="dropCon"></div>');
        var dropDownCon = $('<div class="dropDownCon"></div>');
        
        self.menuList.forEach(function (ele) {
            var menu = $('<div class="menu"></div>')
            if(ele.title) {
                var menuTitle= $('<div class="menuTitle"></div>').html(ele.title);
                menu.append(menuTitle);
            }
            
            var menuItems = $('<div class="menuItems"></div>');

            ele.items.forEach(function (ele2) {
               var a = $('<a  href="'+ele2.href+'"></a>').append(ele2.name);
               var item =  $('<div class="item" style="width:100px; display:inline-block;"></div>').append(a);
               menuItems.append(item);
            })
            menuItems.appendTo(menu);
            dropCon.append(menu);
        })
        // dropDownCon.appendTo(dropCon);
        dropCon.appendTo(self.father);
        // menu的排列 x 或 y方向
        this.addCss();
        if(this.dir == 'x') {
            $('.menu',self.father).css({
                'display':'inline-block',
                'border-right': '1px solid #ddd',
            })
            $('.dropCon', self.father).css({
                'width':($('.menu',self.father).innerWidth() + 1)*self.len + 'px',
                'right': '0px'
            })
            $('.dropCon', self.father).find('.menu').eq(1).css({
                'border-right': '0px solid #ddd',
            })
        } else {
            $('.menu',self.father).css({
                'display':'block',
                'border-bottom': '1px solid #ddd',
                
            })
        }
    }

    List.prototype.addCss = function () {
        var self = this;
        this.father.css({'position':'relative','z-index':'999'})
        $('.dropCon',this.father).css({
            'position':'absolute',
            'padding':'20px 0px',
            'display' : 'none'
        })
        $('.menu',self.father).css({
            'padding':'10px',
            'width': $('.item',self.father).innerWidth()*self.colNum + 'px',
            'backgroundColor':'#fff',    
            'vertical-align' :'top',
        })
        $('.menuTitle',self.father).css({'color': '#555', 'font-weight' : 'bold'})
    }
    
    List.prototype.bindEvent = function () {
        var self = this;
        self.father.parent().mouseover( function () {
            $(this).css({'background-color' : '#fff'});
            $('.dropCon',self.father).css({'background-color' : '#fff'}).show();
        }).mouseout(  function () {
            $(this).css({'background-color' : '#e3e4e5'});
            $('.dropCon',self.father).hide();
        })
        
    }







})();