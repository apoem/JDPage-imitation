; (function () {
    $.fn.extend({
        areaList : function (opt)  {
            opt.father = this;
            obj.init(opt);           
        }
    })
    var obj = {
        init : function (option) {
            this.nowItem = option.nowItem;
            this.rowsNum = option.rowsNum;
            this.items = option.items;
            this.areaImg = option.areaImg || "";
            this.father = option.father;
            this.creatDom();
            this.bindEvent();
        },
        creatDom : function () {
            var wrap = $('<div class="areaContent"></div>');
            var nowArea = $('<div class="nowArea"></div>');
            var itemlist = $('<div class="itemlist"></div>');
            if (this.areaImg) {
                var img = new Image();
                img.src = this.areaImg;
                img.onload = function () {
                    $(img).prependTo(nowArea);
                };
            }
            $('<span class="item-name"></span>').html(this.nowItem).appendTo(nowArea);
            
            this.items.forEach(function (el) {
                var str = $('<div class="item"></div>');
                $('<a href="'+el.herf+'"></a>').append(el.name).appendTo(str);
                
                itemlist.append(str);
            });
            
            nowArea.appendTo(wrap);
            wrap.appendTo(this.father);
            itemlist.appendTo(wrap);
            $('.location .itemlist').css({
               width: ($('.location .item').innerWidth()*this.rowsNum + 'px'),
            })
        },
        bindEvent : function () {
            $('.location .itemlist').find('.item').eq(0).addClass('nowActive')
            $('.location .itemlist').on('click', '.item',function () {
                $('.item.nowActive').removeClass('nowActive');
                $(this).addClass('nowActive');
                $('.nowArea .item-name').text(this.innerText);
            })
        }
        

    }
   

    
})();