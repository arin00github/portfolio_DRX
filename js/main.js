const navlink = document.querySelectorAll('.nav02 > li > a');
const tabBox = document.querySelectorAll('.tabBox');


const playerbtn = document.querySelectorAll('.player-menu > li');

for(let i =0 ; i <playerbtn.length ; i++){
    playerbtn[i].addEventListener('mouseover',function(){
        playerbtn[i].style.opacity = 1;
    })
    playerbtn[i].addEventListener('mouseout',function(){    
        if(playerbtn[i].classList.contains('slick-active')){
            playerbtn[i].style.opacity = 1;
        }else{
            playerbtn[i].style.opacity = 0.4;
        }
    })
}



//////section02 new-slider//////
const newsArray = [
    {
        url:'https://www.yna.co.kr/view/AKR20200611093700003?input=1195m',
        publisher:'연합뉴스',
        title:'맥라렌, LoL 프로게임구단 DRX와 파트너 계약',
        date : '2020-06-11'
    },
    {
        url:'http://www.dailyesports.com/view.php?ud=202009161347563413cf949c6b9_27',
        publisher:'데일리e스포츠',
        title:'DRX 데프트 김혁규, 하이퍼엑스 브랜드 앰버서더로 발탁',
        date : '2020-09-16'
    },
    {
        url:'http://www.inven.co.kr/webzine/news/?news=244969&iskin=esports',
        publisher:'인벤e스포츠',
        title:'목표는 오직 우승! 레드불, 롤드컵 출전 각오 담은 DRX 인터뷰 영상 공개',
        date : '2020-09-16'
    },
    {
        url:'http://www.inven.co.kr/webzine/news/?news=242755&iskin=esports',
        publisher:'인벤e스포츠',
        title:'LCK 아카데미 시리즈, DRX 루키 팀 오픈 토너먼트 초대 우승',
        date : '2020-08-10'
    },
    {
        url:'http://www.dailyesports.com/view.php?ud=202006091219488717b78bb58252_27',
        publisher:'데일리e스포츠',
        title:'DRX, 카카오와 파트너십 체결',
        date : '2020-06-09'
    },
    {
        url:'http://www.fomos.kr/esports/news_view?entry_id=93167',
        publisher:'포모스',
        title:'DRX, 트위치와 손잡고 글로벌 스트리밍 시작',
        date : '2020-09-10'
    },
    {
        url:'https://sports.news.naver.com/news.nhn?oid=502&aid=0000000418',
        publisher:'Team LoL 칼럼',
        title:'[LoL 이야기] 젠지와 G2, 담원과 DRX',
        date : '2020-10-13'
    },
]

const newsSlider = document.getElementById('news-slider');


$('#news-slider').slick({
    slidesToScroll:1,
    slidesToShow : 4,
    appendDots: $('.slick-control'),
    appendArrows: $('.slick-control'),
    dots:true,
    dotsClass:'indicator',
    customPaging:function(){
        return `<button></botton>`
    },
    prevArrow: '<button type="button" class="slick-prev"><a herf="#"><img src="img/icon/free-icon-back.png"></a><button>',
    nextArrow: '<button type="button" class="slick-next"><a herf="#"><img src="img/icon/free-icon-next.png"></a><button>',
    responsive:[
        {
            breakpoint:1150,
            settings:{
                slidesToShow : 3,
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow : 2,
            }
        },
        {
            breakpoint:540,
            settings:{
                slidesToShow : 1,
            }
        }

    ]

})

newsArray.forEach(function(article, index){
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    const url = document.createElement('a');
    url.setAttribute('href', article.url);
    url.setAttribute('target', "blank");

    const $Date = document.createElement('p')
    $Date.innerText = article.date;
    $Date.classList.add('when')
    url.appendChild($Date);

    const $Publisher = document.createElement('p')
    $Publisher.innerText = article.publisher;
    $Publisher.classList.add('publisher')
    url.appendChild($Publisher);

    const $title = document.createElement('h5');
    $title.innerText = article.title;
    $title.classList.add('title');
    url.appendChild($title);
    newsItem.appendChild(url);

    $('#news-slider').slick('slickAdd',newsItem);

})








for(var i =0; i < tabBox.length ; i++){
    tabBox[i].style.display = "none"
}

document.getElementById('newsContent').style.display = 'block'

navlink.forEach(item => {
    item.addEventListener('click',function(e){
        e.preventDefault();
        let $target = e.currentTarget.getAttribute('href');
        let urlTarget = $target.replace('#','');
        
        for(var i =0; i < tabBox.length ; i++){
            tabBox[i].style.display = "none"
        }
        
        
        let tab = document.getElementById(urlTarget);
        tab.style.display = "block"

        
        //console.log(tab.firstChild)
    })
});


//////section03 team, player info $ slider//////

