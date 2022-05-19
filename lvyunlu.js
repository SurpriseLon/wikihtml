const ap = new APlayer({
    container: document.getElementById('player'),
    autoplay: true,
    theme: '#5a5d68',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    audio: [
        {
            name: '履云',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/01.%20KITAstudio%20-%20%e5%b1%a5%e4%ba%91.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '梦萦',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/02.%20KITAstudio%20-%20%e6%a2%a6%e8%90%a6.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '羁旅',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/03.%20KITAstudio%20-%20%e7%be%81%e6%97%85.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '王庭',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/04.%20KITAstudio%20-%20%e7%8e%8b%e5%ba%ad.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '缨络',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/05.%20KITAstudio%20-%20%e7%bc%a8%e7%bb%9c.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '神兵',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/06.%20KITAstudio%20-%20%e7%a5%9e%e5%85%b5.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '乐游',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/07.%20KITAstudio%20-%20%e4%b9%90%e6%b8%b8.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '蝶舞',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/08.%20KITAstudio%20-%20%e8%9d%b6%e8%88%9e.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '雨',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/09.%20KITAstudio%20-%20%e9%9b%a8.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '远念',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/10.%20KITAstudio%20-%20%e8%bf%9c%e5%bf%b5.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '竹趣',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/11.%20KITAstudio%20-%20%e7%ab%b9%e8%b6%a3.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '雍华',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/12.%20KITAstudio%20-%20%e9%9b%8d%e5%8d%8e.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '九市',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/13.%20KITAstudio%20-%20%e4%b9%9d%e5%b8%82.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '谧夜',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/14.%20KITAstudio%20-%20%e8%b0%a7%e5%a4%9c.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '浄神',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/15.%20KITAstudio%20-%20%e6%b5%84%e7%a5%9e.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '霿乱',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/16.%20KITAstudio%20-%20%e9%9c%bf%e4%b9%b1.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '幽影',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/17.%20KITAstudio%20-%20%e5%b9%bd%e5%bd%b1.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '兵戎',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/18.%20KITAstudio%20-%20%e5%85%b5%e6%88%8e.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '魆旃',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/19.%20KITAstudio%20-%20%e9%ad%86%e6%97%83.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '瀛泽',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/20.%20KITAstudio%20-%20%e7%80%9b%e6%b3%bd.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '寇势',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/21.%20KITAstudio%20-%20%e5%af%87%e5%8a%bf.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '卷箨',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/22.%20KITAstudio%20-%20%e5%8d%b7%e7%ae%a8.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '战幕',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/23.%20KITAstudio%20-%20%e6%88%98%e5%b9%95.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '历楚',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/24.%20KITAstudio%20-%20%e5%8e%86%e6%a5%9a.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '破竹',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/25.%20KITAstudio%20-%20%e7%a0%b4%e7%ab%b9.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '祈蒙',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/26.%20KITAstudio%20-%20%e7%a5%88%e8%92%99.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '屺岵',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/27.%20KITAstudio%20-%20%e5%b1%ba%e5%b2%b5.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '夜阙',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/28.%20KITAstudio%20-%20%e5%a4%9c%e9%98%99.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '阑珊',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/29.%20KITAstudio%20-%20%e9%98%91%e7%8f%8a.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '枯竹',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/30.%20KITAstudio%20-%20%e6%9e%af%e7%ab%b9.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '仗剑',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/31.%20KITAstudio%20-%20%e4%bb%97%e5%89%91.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        },
        {
            name: '合简',
            artist: 'KITAstudio',
            url: 'https://cdn.furrysp.top/32.%20KITAstudio%20-%20%e5%90%88%e7%ae%80.mp3',
            cover: 'https://f4.bcbits.com/img/a3527337033_16.jpg'
        }
    ]
});