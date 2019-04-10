(function () {
    $.fn.extend( {
        sliderImg:function (options) {
        options.father = this;
        new Swiper(options);
    }
})
    function Swiper(opt) {
        this.img = opt.image;
        this.wrap = opt.father;
        this.interval = 2000;
        this.init();
    }
    Swiper.prototype.init = function (){
        this.nowIndex = 0;
        this.timer;
        this.lock = true;
        this.len = this.img.length;
        this.itemWidth = this.wrap.width();
        this.createDom();
        this.bindEvent();
        this.autoMove();
    }
    Swiper.prototype.createDom = function () {
        var str = '';
        var listStr = '';
        var h= this.wrap.height();
        var w = this.wrap.width();
        var ulW = w * (this.len +1);
        var imgBox= $('<ul class="imgBox"></ul>');
        // imgBox必须是jquery对象，如果是字符串，$(imgBox)用append插入，里面没有li,但如果是jq对象便会有li
        var order = '<div class="order"></div>';
        var btn = '<div class="btn">\
        <a class="prevBtn" href="javaScript:void(0)"><span>&lt;</span></a>\
        <a class="nextBtn" href="javaScript:void(0)"><span>&gt;</span></a>\
        </div>';
        $(imgBox).css({
            'width':ulW + 'px',
            'height':h +'px'
        });
        for (var i = 0; i < this.len; i ++) {
            listStr += '<li></li>';
            str += '<li><img src="'+this.img[i]+'"></img></li>'
        }   
        str = str + '<li><img src="'+this.img[0]+'"></img></li>';

        this.wrap.append((imgBox).append(str))
                 .append(btn)
                 .append($(order).append($('<ul></ul>').append(listStr)));
        
        imgBox.find('li').css({
                    'width': w + 'px',
                    'height': h + 'px',
                    'backgroundColor':'red',
                });
         $('.order ul li').eq(0).addClass('active');

    }
    Swiper.prototype.bindEvent = function () {
        var self = this;
        $('.nextBtn').add('.prevBtn').add('.order li').on('click',function () {
            if ($(this).hasClass('nextBtn')) {
             self.move('next')
            }
            else if ($(this).hasClass('prevBtn')) {
             self.move('prev')
            }
            else {
                var index = $(this).index();
                self.move(index);
            }
            self.changeStyle();
         })
        //  $('#swiper').mouseenter(function () {
        //     clearTimeout(this.timer);
        //     $('#swiper  .btn').show();
        //  }).mouseout(function () {
        //     $('#swiper  .btn').hide();
        // self.autoMove(); 
        //  })
         $('.wrapper').hover(function () {
             clearTimeout(this.timer);
             $('#swiper .btn').show();
         },function () {
             $('#swiper .btn ').hide();
             self.autoMove();
         })
    }
    Swiper.prototype.move = function (dir) {
        var self = this;
        if (self.lock) {
            self.lock = false;
            if (dir == 'next' || dir == 'prev') {
                if(dir == 'next') {
                    if (self.nowIndex == self.len-1) {
                        $('.imgBox').animate({ 'left': -(self.len * self.itemWidth) },function () {
                            $(this).css({left:0})
                            self.autoMove();
                            self.lock = true;
                            
                        })
                        self.nowIndex = 0;
                    }
                    else {
                        self.nowIndex ++;
                    }
                }
                else  {
                    if (self.nowIndex == 0) {
                        $('.imgBbox').css({left : -(self.itemWidth*5)})
                        self.nowIndex = self.len - 1;
                        
                    }
                    else {
                        self.nowIndex --;
                    }
                }
            }
            else {
                self.nowIndex = dir;
                
            }
            self.slider();
        }
        
    } 
    Swiper.prototype.slider = function () {
        var self = this;
        $('.imgBox').animate({left: -(this.nowIndex*this.itemWidth)},function () {
            self.autoMove();
            self.lock = true;
        });
    }
    Swiper.prototype.autoMove = function () {
        var self = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
        self.move('next');
        self.changeStyle(); 
    },2000)
    }
    Swiper.prototype.changeStyle = function () {
        $('#swiper .active').removeClass('active');
        $('.order li').eq(this.nowIndex).addClass('active');
    }
})();