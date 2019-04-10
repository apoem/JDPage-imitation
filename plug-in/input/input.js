;(function () {
    $.fn.extend({
        input : function (opt) {
            opt.father = this;
            new Search(opt);
            return this;
        }
    });
    function Search(option) {
        this.father = option.father;
        this.url = option.url;
        this.callbackFunc = option.callbackFunc;
        this.getData();
        // this.createDom();
    }
    Search.prototype.getData = function () {
        var self = this;
        $('.header_right .input').on('input', function () {
            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                url: self.url,
                data: {
                    code: 'utf-8',
                    q: $(this).val(),
                },
                jsonpCallback:self.callbackFunc,
            })
        })
    }

})();