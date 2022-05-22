(function () {
    let amis = amisRequire('amis/embed');
    // 通过替换下面这个配置来生成不同页面
    let amisJSON = {
        type: 'page',
        initApi: '../lvyunluv.json',
        body: {
            type: 'card',
            header: {
                title: '${title}',
                subTitle: '${tname}',
                desc: '${desc}'
            },
            body: [
                {
                    type: 'html',
                    html: '<i class="mdui-list-item-icon mdui-icon fa-duotone fa-eye"></i> ${stat.view}'
                },
                {
                    type: 'html',
                    html: '<i class="mdui-list-item-icon mdui-icon fa-duotone fa-chart-bullet"></i> ${stat.danmaku}'
                },
                {
                    type: 'html',
                    html: '<i class="mdui-list-item-icon mdui-icon fa-duotone fa-reply"></i> ${stat.reply}'
                },
                {
                    type: 'html',
                    html: '<i class="mdui-list-item-icon mdui-icon fa-duotone fa-star"></i> ${stat.favorite}'
                },
                {
                    type: 'html',
                    html: '<i class="mdui-list-item-icon mdui-icon fa-duotone fa-coin"></i> ${stat.coin}'
                },
                {
                    type: 'html',
                    html: '<i class="mdui-list-item-icon mdui-icon fa-duotone fa-share"></i> ${stat.share}'
                },
                {
                    type: 'html',
                    'html': '<i class="mdui-list-item-icon mdui-icon fa-duotone fa-thumbs-up"></i> ${stat.like}'
                },
            ],
        },
    };
    let amisScoped = amis.embed('#root', amisJSON);
})();