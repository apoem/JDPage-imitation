$('#swiper').sliderImg({
    image: ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg'],
    interval: 2000
})



// content的menu区域

var index;
$('.cate_menu_item').hover(function () {
    $('.JS_popCtn').css('display', 'block');
    index = $(this).attr('date-index');
    $('#cate_item' + index).css('display', 'block');
}, function () {
    $('.JS_popCtn').css('display', 'none')
    $('#cate_item' + index).css('display', 'none');
})
$('.JS_popCtn').hover(function () {
    $(this).css('display', 'block');
    $('#cate_item' + index).css('display', 'block');
}, function () {
    $(this).css('display', 'none')
    $('#cate_item' + index).css('display', 'none');
})
$('.service_entry .row1').hover(function () {
    $('.service_entry').slideUp();
    $('.service_pop').slideDown();
})
$('.content_header span').hover(function () {
    $('.nowActive').removeClass('nowActive');
    $(this).addClass('nowActive');
    $('.' + $(this).attr('data') + '_content').show()
        .siblings('.content').hide();
})
$('.service_pop .close').on('click', function () {
    $('.service_entry').slideDown();
    $('.service_pop').slideUp();
})


//location区域
$('.location').areaList({
    items: [
        {
            name: '北京',
            herf: '#',
        }, {
            name: '上海',
            herf: '#',
        }, {
            name: '黑龙江',
            herf: '#',
        }, {
            name: '天津',
            herf: '#',
        }, {
            name: '重庆',
            herf: '#',
        }, {
            name: '河北',
            herf: '#',
        }, {
            name: '山西',
            herf: '#',
        }, {
            name: '河南',
            herf: '#',
        }, {
            name: '辽宁',
            herf: '#',
        }, {
            name: '吉林',
            herf: '#',
        }, {
            name: '内蒙古',
            herf: '#',
        }, {
            name: '江苏',
            herf: '#',
        }, {
            name: '山东',
            herf: '#',
        }, {
            name: '安徽',
            herf: '#',
        }, {
            name: '浙江',
            herf: '#',
        }, {
            name: '福建',
            herf: '#',
        }, {
            name: '湖北',
            herf: '#',
        }, {
            name: '广东',
            herf: '#',
        }, {
            name: '广西',
            herf: '#',
        }, {
            name: '江西',
            herf: '#',
        }, {
            name: '四川',
            herf: '#',
        }, {
            name: '海南',
            herf: '#',
        }
    ], rowsNum: 5,
    nowItem: '北京',
    areaImg: './img/area.png',
})


$('#nav').dropList({
    direction: 'x',
    colNum: '2',
    menuList: [{
        title: '生活服务',
        items: [{ href: "#", name: '待处理订单' },
        { href: "#", name: '消息' },
        { href: "#", name: '返修退换货' },
        { href: "#", name: '我的问答' },
        { href: "#", name: '降价商品' },
        { href: "#", name: '降价商品' },]
    },
    {
        title: '更多精选',
        items: [{ href: "#", name: '我的京豆' },
        { href: "#", name: '我的优惠券' },
        { href: "#", name: '我的白条' },
        { href: "#", name: '我的理财' },]
    },]
});

$('#input').input({
    url :'https://suggest.taobao.com/sug',
    callbackFunc:'window.addItem',
});
// 搜索框区域
// $('.header_right .input').on('input', function () {
//     $.ajax({
//         type: 'GET',
//         dataType: 'jsonp',
//         url: 'https://suggest.taobao.com/sug',
//         data: {
//             code: 'utf-8',
//             q: $(this).val(),
//             callback: 'addItem',
//         }
//     })
// })
window.addItem =  function addItem(data) {
    var sercFrame = $('<ul class="sercFrame"></ul>')
    if (data.result.length > 0) {
        console.log(data);
        var str = '';
        data.result.forEach(function (ele) {
            str += '<li><a href="##">' + ele[0] + '</a></li>';  
        })
        sercFrame.append(str);
        sercFrame.appendTo($('.header_right .serch '));
        sercFrame.show();
    }
    else {
        $('.serch .sercFrame').hide();
    }
}
