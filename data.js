const festivalData = [
    // 1. 서울
    {
        id: 'seoul-1', region: 'SEOUL',
        date: '2025.10.04 - 10.08', startDate: '2025-10-04', endDate: '2025-10-08',
        title: 'Seoul Int\'l Fireworks', desc: '여의도 한강공원에서 펼쳐지는 가을밤의 불꽃 예술.',
        img: 'https://hangang.seoul.go.kr/www/file/down.do?fkey=c8552108cdd8e111b07752e12b66c78c0619b9eee88eada4b63c22923e9a229f8eab2874ed725d7ff7c0833aea62239ed85949968944d2ca01148228aa630c71',
        minZoom: 1, x: 411, y: 230, slot: 0,
        link: 'https://www.hanwhafireworks.com/' 
    },
    {
        id: 'seoul-2', region: 'SEOUL',
        date: '2025.04.30 - 05.06', startDate: '2025-04-30', endDate: '2025-05-06',
        title: 'Seoul Spring Festa 2025', desc: 'K-Culture의 모든 것. 서울 전역 대축제.',
        img: 'https://seoulfesta.com/wp-content/themes/seoulfesta/images/index/main_banner_mo_en.jpg',
        minZoom: 2.5, x: 405, y: 235, slot: 1,
        link: 'https://seoulfesta.com/en/'
    },
    {
        id: 'seoul-3', region: 'SEOUL',
        date: '2025.05.03 - 05.05', startDate: '2025-05-03', endDate: '2025-05-05',
        title: 'Seoul Circus Festival', desc: '노들섬에서 펼쳐지는 아찔한 서커스 아트.',
        img: 'https://www.sfac.or.kr/upload/artsfestivalseoul/fstvl/a80feb46-5d39-4633-ab14-9ebf843bacbb.jpg',
        minZoom: 2.5, x: 415, y: 240, slot: 2,
        link: 'https://culture.seoul.go.kr/culture/culture/cultureEvent/view.do?cultcode=153417&menuNo=200008'
    },
    {
        id: 'seoul-4', region: 'SEOUL',
        date: '2025.07.31 - 08.17', startDate: '2025-07-31', endDate: '2025-08-17',
        title: 'Seoul Fringe Festival', desc: '독립 예술가들의 실험적인 공연 예술 축제.',
        img: 'https://www.seoulfringefestival.net:5632/images/poster2025_3.png',
        minZoom: 2.5, x: 400, y: 230, slot: 3,
        link: 'https://www.seoulfringefestival.net:5632/'
    },
    {
        id: 'seoul-5', region: 'SEOUL',
        date: '2025.10.06 - 10.08', startDate: '2025-10-03', endDate: '2025-10-06',
        title: 'Seoul Street Arts', desc: '서울 광장과 거리가 무대가 되는 축제.',
        img: 'https://www.ssaf.or.kr/files/2025/08/48fe5274898d483490d8efb2ddd5f2ab.png',
        minZoom: 2.5, x: 408, y: 225, slot: 4,
        link: 'http://www.ssaf.or.kr/'
    },

    // 2. 부산
    {
        id: 'busan-1', region: 'BUSAN',
        date: '2025.10.17 - 10.26', startDate: '2025-10-17', endDate: '2025-10-26',
        title: 'Busan Int\'l Film Fest', desc: '아시아 최고의 영화제 BIFF.',
        img: 'https://www.biff.kr/kor/img/cont/post2025.png',
        minZoom: 1, x: 670, y: 630, slot: 0,
        link: 'https://www.biff.kr/'
    },
    {
        id: 'busan-2', region: 'BUSAN',
        date: '2025.05.30 - 05.31', startDate: '2025-05-30', endDate: '2025-05-31',
        title: 'Busan Port Festival', desc: '부산항에서 열리는 해양 문화 축제.',
        img: 'https://img3.yna.co.kr/etc/inner/KR/2025/05/02/AKR20250502019500051_01_i_P4.jpg',
        minZoom: 2.5, x: 675, y: 635, slot: 1,
        link: 'https://festivalbusan.com/busanport/'
    },
    {
        id: 'busan-3', region: 'BUSAN',
        date: '2025.08.01 - 08.03', startDate: '2025-08-01', endDate: '2025-08-03',
        title: 'Busan Sea Festival', desc: '여름 바다 예술 축제.',
        img: 'https://busandabom.net/upload/2025%20%EB%B6%80%EC%82%B0%EB%B0%94%EB%8B%A4%EC%B6%95%EC%A0%9C.jpg',
        minZoom: 2.5, x: 685, y: 630, slot: 2,
        link: 'https://festivalbusan.com/seafestival/'
    },
    {
        id: 'busan-4', region: 'BUSAN',
        date: '2025.11.15', startDate: '2025-11-15', endDate: '2025-11-15',
        title: 'Busan Fireworks', desc: '광안리 해수욕장 초대형 불꽃쇼.',
        img: 'https://img1.daumcdn.net/thumb/R1280x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/i93e/image/qE2pDRAPE99t3UVgeHQGp68dyo8.png',
        minZoom: 2.5, x: 680, y: 625, slot: 3,
        link: 'https://busanfireworks.com/'
    },

    // 3. 대구
    {
        id: 'daegu-1', region: 'DAEGU',
        date: '2025.05.10 - 05.11', startDate: '2025-05-10', endDate: '2025-05-11',
        title: 'Daegu Powerful Fest', desc: '아시아 최대 거리 퍼레이드.',
        img: 'https://thefestival.co.kr/upfile/img/2025/02/festa32_1739105286.jpg',
        minZoom: 1, x: 632, y: 518, slot: 0,
        link: 'https://www.pwf.or.kr/'
    },
    {
        id: 'daegu-2', region: 'DAEGU',
        date: '2025.06.20 - 07.07', startDate: '2025-06-20', endDate: '2025-07-07',
        title: 'DIMF (Musical)', desc: '대구 국제 뮤지컬 페스티벌.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHTUSQBC8LaNgoCZcvgi2CZEBzRO9LoElbw&s',
        minZoom: 2.5, x: 625, y: 520, slot: 1,
        link: 'https://dimf.or.kr/'
    },
    {
        id: 'daegu-3', region: 'DAEGU',
        date: '2025.09.26 - 11.08', startDate: '2025-09-26', endDate: '2025-11-08',
        title: 'Daegu Opera Fest', desc: '대구 국제 오페라 축제.',
        img: 'https://www.yeongnam.com/mnt/file_m/202506/news-p.v1.20250622.560651605b9b423497bf50f7148f9b73_P1.jpg',
        minZoom: 2.5, x: 638, y: 515, slot: 2,
        link: 'http://www.daeguoperahouse.org/'
    },

    // 4. 인천
    {
        id: 'incheon-1', region: 'INCHEON',
        date: '2025.08.01 - 08.03', startDate: '2025-08-01', endDate: '2025-08-03',
        title: 'Incheon Pentaport', desc: '송도에서 펼쳐지는 록 페스티벌.',
        img: 'https://i.namu.wiki/i/JhXPjDXOVmox2ey4AQ2iRVkr5LeOMBE32gK6EgzVz5OLPmElPHrWKdtStyeLQsJQ0kWTgOkQbW6zIdkex8nb1Q.webp',
        minZoom: 1, x: 342, y: 230, slot: 0,
        link: 'https://pentaport.co.kr/'
    },
    {
        id: 'incheon-2', region: 'INCHEON',
        date: '2025.10.25', startDate: '2025-10-25', endDate: '2025-10-25',
        title: 'INK Concert', desc: '최고의 K-POP 축제.',
        img: 'https://lh3.googleusercontent.com/proxy/B1CZs3GQ__OFN8jHacOuEF-xtcA_Nm5yAeUTsrxuW-QjHfOB5QP9Wtrb6zut1v_wSR7lxmDXS2vT3nFpQbNBoMVvyw',
        minZoom: 2.5, x: 350, y: 235, slot: 1,
        link: 'http://www.inkconcert.com/'
    },
    {
        id: 'incheon-3', region: 'INCHEON',
        date: '2025.09.26 - 09.28', startDate: '2025-09-26', endDate: '2025-09-28',
        title: 'Bupyeong Pungmul', desc: '부평 풍물 대축제.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbEWpRM5jAkQmXoCtpAhJ459XZHxQKl3p7A&s',
        minZoom: 2.5, x: 345, y: 225, slot: 2,
        link: 'https://portal.icbp.go.kr/bpf/'
    },

// 5. 광주 (Gwangju)
{
    id: 'gwangju-1', region: 'GWANGJU',
    date: '2025.08.30 - 11.02', startDate: '2025-08-30', endDate: '2025-11-02',
    title: 'Gwangju Design Biennale', desc: '아시아 최대 규모의 디자인 비엔날레.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SeKHQbt3wr3FuatQp6vjRX-5PgOtcT-40g&s',
    minZoom: 1, x: 394, y: 620, slot: 0,
    link: 'https://gdb.or.kr/'
},
{
    id: 'gwangju-2', region: 'GWANGJU',
    date: '2025.10.15 - 10.19', startDate: '2025-10-15', endDate: '2025-10-19',
    title: 'Chungjang Festival', desc: '추억의 7080 거리 퍼레이드.',
    img: 'https://img.seoul.co.kr/img/upload/2025/09/16/SSC_20250916100305.jpg.webp',
    minZoom: 2.5, x: 400, y: 615, slot: 1,
    link: 'https://recollection.kr/'
},

// 6. 대전 (Daejeon)
{
    id: 'daejeon-1', region: 'DAEJEON',
    date: '2025.08.08 - 08.16', startDate: '2025-08-08', endDate: '2025-08-16',
    title: 'Daejeon 0 O\'Clock', desc: '대전 원도심 올나잇 축제.',
    img: 'https://www.djsiseol.or.kr/portal/img/common/2025%20%EB%8C%80%EC%A0%840%EC%8B%9C%EC%B6%95%EC%A0%9C%20%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85).png',
    minZoom: 1, x: 461, y: 430, slot: 0,
    link: 'http://djzerofe.com/'
},
{
    id: 'daejeon-2', region: 'DAEJEON',
    date: '2025.04.16 - 04.20', startDate: '2025-04-16', endDate: '2025-04-20',
    title: 'Daejeon Science Fest', desc: '과학과 문화예술의 융합.',
    img: 'hhttps://thefestival.co.kr/upfile/img/2025/04/shanesuh_1744767176.jpg',
    minZoom: 2.5, x: 465, y: 435, slot: 1,
    link: 'https://daejeontour.co.kr/festival_djt/1'
},

// 7. 울산 (Ulsan)
{
    id: 'ulsan-1', region: 'ULSAN',
    date: '2025.05.21 - 05.25', startDate: '2025-05-21', endDate: '2025-05-25',
    title: 'Ulsan Rose Festival', desc: '울산대공원 장미원 꽃 축제.',
    img: 'https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/b2047505-5240-4abb-ba9a-9ee82c6a966a_3.jpg',
    minZoom: 1, x: 703, y: 607, slot: 0,
    link: 'http://www.ulsanrosefestival.com/'
},
{
    id: 'ulsan-2', region: 'ULSAN',
    date: '2025.10.16 - 10.19', startDate: '2025-10-16', endDate: '2025-10-19',
    title: 'Cheoyong Culture', desc: '울산 대표 전통 문화 예술 축제.',
    img: 'https://cdn.sisamagazine.co.kr/news/photo/202510/519151_534354_5216.jpg',
    minZoom: 2.5, x: 710, y: 605, slot: 1,
    link: 'http://xn--ob0b478atvdy1a72cf4o.kr/'
},

// 8. 세종 (Sejong)
{
    id: 'sejong-1', region: 'SEJONG',
    date: '2025.10.09 - 10.11', startDate: '2025-10-09', endDate: '2025-10-11',
    title: 'Sejong Festival', desc: '세종 한글 축제.',
    img: 'https://www.sejong.go.kr/thumbnail/R0071/920_BBS_0000142493Nne3H1M0.jpg;jsessionid=D5705D89C82FE0B0D57D347B433A8EB9.portal1',
    minZoom: 1, x: 425, y: 416, slot: 0,
    link: 'http://sjfestival.kr/'
},

// 9. 경기 (Gyeonggi)
{
    id: 'gyeonggi-1', region: 'GYEONGGI',
    date: '2025.04.25 - 05.11', startDate: '2025-04-25', endDate: '2025-05-11',
    title: 'Goyang Int\'l Flower', desc: '일산 호수공원 꽃 박람회.',
    img: 'https://cdn.ilyoseoul.co.kr/news/photo/202504/501290_449527_3129.jpg',
    minZoom: 1, x: 390, y: 200, slot: 0,
    link: 'https://flower.or.kr/'
},
{
    id: 'gyeonggi-2', region: 'GYEONGGI',
    date: '2025.10.17 - 10.19', startDate: '2025-10-17', endDate: '2025-10-19',
    title: 'Jarasum Jazz Festival', desc: '가평 자라섬 국제 재즈 페스티벌.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZJVWmD9uVULIfEPRMbctIYMg64RfKLqvcQ&s ',
    minZoom: 1, x: 440, y: 180, slot: 1,
    link: 'https://jarasumjazz.com/'
},
{
    id: 'gyeonggi-3', region: 'GYEONGGI',
    date: '2025.07.03 - 07.13', startDate: '2025-07-03', endDate: '2025-07-13',
    title: 'BIFAN Film Festival', desc: '부천국제판타스틱영화제.',
    img: 'https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/kh/2025/07/01/news-p.v1.20250701.69994f4c460e421088d9f0f52fb1ace4_P1.jpg',
    minZoom: 2.5, x: 370, y: 240, slot: 2,
    link: 'https://www.bifan.kr/'
},
{
    id: 'gyeonggi-4', region: 'GYEONGGI',
    date: '2025.09.11 - 09.17', startDate: '2025-09-11', endDate: '2025-09-17',
    title: 'DMZ Int\'l Docu Fest', desc: '국제 다큐멘터리 영화제.',
    img: 'https://dmzdocs.com/kor/img/cont/poster_2025_01.jpg',
    minZoom: 2.5, x: 380, y: 170, slot: 3,
    link: 'https://dmzdocs.com/'
},
{
    id: 'gyeonggi-5', region: 'GYEONGGI',
    date: '2025.09.27 - 10.04', startDate: '2025-09-27', endDate: '2025-10-04',
    title: 'Suwon Hwaseong', desc: '수원화성문화제.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAw3HYVnYhqlpXXEA_Dz2sp9ArK-EbG3uDg&s',
    minZoom: 2.5, x: 410, y: 280, slot: 0,
    link: 'https://www.swcf.or.kr/'
},
{
    id: 'gyeonggi-6', region: 'GYEONGGI',
    date: '2025.05.03 - 05.05', startDate: '2025-05-03', endDate: '2025-05-05',
    title: 'Ansan Street Arts', desc: '안산거리극축제.',
    img: 'https://thefestival.co.kr/upfile/img/2025/04/bback00_1744122167.jpg',
    minZoom: 2.5, x: 380, y: 260, slot: 1,
    link: 'http://www.ansanfest.com/'
},

// 10. 강원 (Gangwon)
{
    id: 'gangwon-1', region: 'GANGWON',
    date: '2025.05.25 - 06.01', startDate: '2025-05-25', endDate: '2025-06-01',
    title: 'Chuncheon Mime', desc: '춘천마임축제.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8qGosYkHQIOzOrIlUqi13GL8c6YaUpuwkg&s',
    minZoom: 1, x: 520, y: 190, slot: 0,
    link: 'http://mimefestival.com/'
},
{
    id: 'gangwon-2', region: 'GANGWON',
    date: '2025.10.30 - 11.02', startDate: '2025-10-30', endDate: '2025-11-02',
    title: 'Gangneung Coffee', desc: '강릉 커피 축제.',
    img: 'https://thefestival.co.kr/upfile/img/2025/10/admin_176036706866.jpg',
    minZoom: 1, x: 670, y: 230, slot: 0,
    link: 'https://www.coffeefestival.net/'
},
{
    id: 'gangwon-3', region: 'GANGWON',
    date: '2025.01.03 - 02.02', startDate: '2025-01-03', endDate: '2025-02-02',
    title: 'Pyeongchang Trout', desc: '평창송어축제.',
    img: 'https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/e79ad504-4e44-46d4-950c-cff9292665c1_3.jpg',
    minZoom: 2.5, x: 620, y: 240, slot: 0,
    link: 'https://www.festival700.or.kr/'
},
{
    id: 'gangwon-4', region: 'GANGWON',
    date: '2025.05.27 - 06.03', startDate: '2025-05-27', endDate: '2025-06-03',
    title: 'Gangneung Danoje', desc: '유네스코 인류무형문화유산 강릉단오제.',
    img: 'https://thefestival.co.kr/upfile/img/2025/05/thefestival_1746418546.jpg',
    minZoom: 2.5, x: 675, y: 220, slot: 1,
    link: 'http://www.danojefestival.or.kr/'
},

// 11. 충북 (Chungbuk)
{
    id: 'chungbuk-1', region: 'CHUNGBUK',
    date: '2025.09.04 - 11.02', startDate: '2025-09-04', endDate: '2025-11-02',
    title: 'Cheongju Craft', desc: '청주 공예 비엔날레.',
    img: 'https://newsimg-hams.hankookilbo.com/2025/05/08/6de01c5b-3a4e-4606-8515-c4ac8c3ec05b.jpg',
    minZoom: 1, x: 481, y: 362, slot: 0,
    link: 'https://www.okcj.org/'
},
{
    id: 'chungbuk-2', region: 'CHUNGBUK',
    date: '2025.08.04 - 08.09', startDate: '2025-08-04', endDate: '2025-08-09',
    title: 'Jecheon Music Film', desc: '제천국제음악영화제.',
    img: 'https://www.jimff.org/kor/img/pages/2025_poster_01.jpg',
    minZoom: 2.5, x: 550, y: 320, slot: 1,
    link: 'https://www.jimff.org/'
},
{
    id: 'chungbuk-3', region: 'CHUNGBUK',
    date: '2025.09.18 - 09.21', startDate: '2025-09-18', endDate: '2025-09-21',
    title: 'Yeongdong Grape', desc: '포도 향기에 취하고 국악 매력에 빠지는 영동 포도 축제.',
    img: 'https://www.ydgrape.co.kr/',
    minZoom: 2.5, x: 490, y: 400, slot: 2,
    link: 'https://yd21.go.kr/'
},
{
    id: 'chungbuk-4', region: 'CHUNGBUK',
    date: '2025.09.27 - 09.29', startDate: '2025-09-27', endDate: '2025-09-29',
    title: 'Cheongju Cheongju', desc: '청주의 맛과 멋을 즐기는 특별한 축제.',
    img: 'https://sh1nsn.github.io/Cheongju-Cheongju-Fest/files/goods1.png',
    minZoom: 2.5, x: 491, y: 362, slot: 3,
    link: 'https://sh1nsn.github.io/Cheongju-Cheongju-Fest/'
},

// 12. 충남 (Chungnam)
{
    id: 'chungnam-1', region: 'CHUNGNAM',
    date: '2025.07.18 - 08.03', startDate: '2025-07-18', endDate: '2025-08-03',
    title: 'Boryeong Mud', desc: '보령 머드 축제.',
    img: 'https://images.unsplash.com/photo-1563293883-7c3d1f044955?w=600&q=60',
    minZoom: 1, x: 350, y: 400, slot: 0,
    link: 'https://mudfestival.or.kr/'
},
{
    id: 'chungnam-2', region: 'CHUNGNAM',
    date: '2025.10.03 - 10.12', startDate: '2025-10-03', endDate: '2025-10-12',
    title: 'Great Baekje', desc: '대백제전 (공주/부여).',
    img: 'https://lh5.googleusercontent.com/proxy/E71YrjRmmZsJnn2UAj5hItzycRXwujehvlhnQlIChhsP_j8Pe7bPMGfQXHn6_FuJIYS-_aAZULziSwrHbSxh01FRYd-JDyQl0g4XGlhjVYCs9JzGHBrgi8i7KRpnBM2cbW_CEu3i-9z0lRmh0hTaTRw',
    minZoom: 2.5, x: 390, y: 420, slot: 0,
    link: 'https://www.baekje.org/'
},
{
    id: 'chungnam-3', region: 'CHUNGNAM',
    date: '2025.09.19 - 09.28', startDate: '2025-09-19', endDate: '2025-09-28',
    title: 'Geumsan Ginseng', desc: '금산세계인삼축제.',
    img: 'https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/933425f6-3f59-4de2-9d0d-39cbfb478d8e_3.jpg',
    minZoom: 2.5, x: 420, y: 440, slot: 1,
    link: 'http://www.insamfestival.co.kr/html/kr/'
},

// 13. 전북 (Jeonbuk)
{
    id: 'jeonbuk-1', region: 'JEONBUK',
    date: '2025.04.30 - 05.09', startDate: '2025-04-30', endDate: '2025-05-09',
    title: 'Jeonju Int\'l Film', desc: '전주국제영화제 JIFF.',
    img: 'https://img.stibee.com/23374_2648548_1739423242010830410.jpg',
    minZoom: 1, x: 400, y: 530, slot: 0,
    link: 'https://www.jeonjufest.kr/?intro=hide'
},
{
    id: 'jeonbuk-2', region: 'JEONBUK',
    date: '2025.10.08 - 10.12', startDate: '2025-10-08', endDate: '2025-10-12',
    title: 'Gimje Horizon', desc: '김제지평선축제.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmXhh9vGd9_5006lj4C3YjNhWMwG3qZTm9Q&s',
    minZoom: 2.5, x: 390, y: 540, slot: 1,
    link: 'https://www.gimje.go.kr/festival/'
},
{
    id: 'jeonbuk-3', region: 'JEONBUK',
    date: '2025.05.02 - 05.05', startDate: '2025-05-02', endDate: '2025-05-05',
    title: 'Buan Masil Festival', desc: '부안마실축제.',
    img: 'https://www.buan.go.kr/upload_data/board_data/BBS_0000105/174357281331053.jpg',
    minZoom: 2.5, x: 360, y: 545, slot: 1,
    link: 'https://www.buanmasil.com/'
},

// 14. 전남 (Jeonnam)
{
    id: 'jeonnam-1', region: 'JEONNAM',
    date: '2025.03.15 - 03.23', startDate: '2025-03-15', endDate: '2025-03-23',
    title: 'Gurye Sansuyu', desc: '구례 산수유꽃축제.',
    img: 'https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/05b53e45-cc6e-4309-ae29-2cb2ad710910_3.jpg',
    minZoom: 1, x: 430, y: 640, slot: 0,
    link: 'https://www.gurye.go.kr/tour/detail.do?tourId=TOUR_0000000100&menuNo=104001002000'
},
{
    id: 'jeonnam-2', region: 'JEONNAM',
    date: '2025.08.30 - 10.31', startDate: '2025-08-30', endDate: '2025-10-31',
    title: 'Sumuk Biennale', desc: '전남국제수묵비엔날레.',
    img: 'https://api.culture.pl/sites/default/files/styles/1920_auto/public/2025-08/somewhere_over_the_yellow_sea_plakat_jp_1.jpg?itok=6uI8RkcX',
    minZoom: 2.5, x: 350, y: 680, slot: 0,
    link: 'http://sumukbiennale.kr/'
},
{
    id: 'jeonnam-3', region: 'JEONNAM',
    date: '2025.10.24 - 11.09', startDate: '2025-10-24', endDate: '2025-11-09',
    title: 'Hampyeong Chrysan', desc: '함평 대한민국 국향대전.',
    img: 'https://img5.yna.co.kr/etc/inner/KR/2025/10/23/AKR20251023104700054_01_i_P2.jpg',
    minZoom: 2.5, x: 370, y: 640, slot: 1,
    link: 'https://www.hampyeong.go.kr/'
},

// 15. 경북 (Gyeongbuk)
{
    id: 'gyeongbuk-1', region: 'GYEONGBUK',
    date: '2025.09.26 - 10.05', startDate: '2025-09-26', endDate: '2025-10-05',
    title: 'Andong Mask Dance', desc: '안동국제탈춤페스티벌.',
    img: 'https://iyeongnam.com/data/tmp/2506/20250615124157_eqakxkgx.jpg',
    minZoom: 1, x: 650, y: 350, slot: 0,
    link: 'http://www.maskdance.com/'
},
{
    id: 'gyeongbuk-2', region: 'GYEONGBUK',
    date: '2025.07.26 - 08.03', startDate: '2025-07-26', endDate: '2025-08-03',
    title: 'Bonghwa Sweetfish', desc: '봉화은어축제.',
    img: 'https://bhftf.or.kr/theme/festival/img/newimg/fbs_2025poster_bs.png',
    minZoom: 2.5, x: 650, y: 320, slot: 0,
    link: 'https://bhftf.or.kr/festival/bonghwa_sweetfish/'
},

// 16. 경남 (Gyeongnam)
{
    id: 'gyeongnam-1', region: 'GYEONGNAM',
    date: '2025.03.29 - 04.06', startDate: '2025-03-29', endDate: '2025-04-06',
    title: 'Jinhae Gunhangje', desc: '창원 진해군항제.',
    img: 'https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/43c334af-9024-4c3f-8742-39f57db887f6_1.jpg',
    minZoom: 1, x: 650, y: 620, slot: 0,
    link: 'https://www.jgfestival.or.kr/'
},
{
    id: 'gyeongnam-2', region: 'GYEONGNAM',
    date: '2025.10.04 - 10.19', startDate: '2025-10-04', endDate: '2025-10-19',
    title: 'Jinju Lantern', desc: '진주남강유등축제.',
    img: 'https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/aebdd924-73cd-4187-be5e-ba29ccf19c49_23.jpg',
    minZoom: 2.5, x: 580, y: 610, slot: 0,
    link: 'https://yudeung.com/'
},
{
    id: 'gyeongnam-3', region: 'GYEONGNAM',
    date: '2025.03.28 - 04.06', startDate: '2025-03-28', endDate: '2025-04-06',
    title: 'Tongyeong Music', desc: '통영국제음악제.',
    img: 'https://ticketimage.interpark.com/Play/image/large/24/24017737_p.gif',
    minZoom: 2.5, x: 620, y: 660, slot: 1,
    link: 'https://www.timf.org/'
},

// 17. 제주 (Jeju)
{
    id: 'jeju-1', region: 'JEJU',
    date: '2025.03.14 - 03.16', startDate: '2025-03-14', endDate: '2025-03-16',
    title: 'Jeju Fire Festival', desc: '제주 들불 축제.',
    img: 'https://www.dwbnews.kr/news/photo/202502/83918_114104_1848.jpg',
    minZoom: 1, x: 335, y: 925, slot: 0,
    link: 'https://firefestivaljeju.com/'
},
{
    id: 'jeju-2', region: 'JEJU',
    date: '2025.10.10 - 10.14', startDate: '2025-10-10', endDate: '2025-10-14',
    title: 'Tamna Culture', desc: '탐라문화제.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAWbRRoJQPG3bh30wqB7JDhmQiGNUtAEtlg&s',
    minZoom: 2.5, x: 350, y: 920, slot: 1,
    link: 'http://www.tamnafestival.kr/'
}
];