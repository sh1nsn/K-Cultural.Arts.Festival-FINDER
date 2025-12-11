const festivalData = [
    // 1. 서울
    {
        id: 'seoul-1', region: 'SEOUL',
        date: '2025.10.04 - 10.08', startDate: '2025-10-04', endDate: '2025-10-08',
        title: 'Seoul Int\'l Fireworks', desc: '여의도 한강공원에서 펼쳐지는 가을밤의 불꽃 예술.',
        img: 'https://images.unsplash.com/photo-1533230125158-b1849908785b?w=600&q=60',
        minZoom: 1, x: 411, y: 230, slot: 0
    },
    {
        id: 'seoul-2', region: 'SEOUL',
        date: '2025.04.26 - 05.06', startDate: '2025-04-26', endDate: '2025-05-06',
        title: 'Seoul Festa 2025', desc: 'K-Culture의 모든 것. 서울 전역 대축제.',
        img: 'https://images.unsplash.com/photo-1542640244-7e67286feb8f?w=600&q=60',
        minZoom: 2.5, x: 405, y: 235, slot: 1
    },
    {
        id: 'seoul-3', region: 'SEOUL',
        date: '2025.05.03 - 05.05', startDate: '2025-05-03', endDate: '2025-05-05',
        title: 'Seoul Circus Festival', desc: '노들섬에서 펼쳐지는 아찔한 서커스 아트.',
        img: 'https://images.unsplash.com/photo-1512401831889-1307b22416b2?w=600&q=60',
        minZoom: 2.5, x: 415, y: 240, slot: 2
    },
    {
        id: 'seoul-4', region: 'SEOUL',
        date: '2025.09.04 - 09.10', startDate: '2025-09-04', endDate: '2025-09-10',
        title: 'Seoul Fringe Festival', desc: '독립 예술가들의 실험적인 공연 예술 축제.',
        img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=60',
        minZoom: 2.5, x: 400, y: 230, slot: 3
    },
    {
        id: 'seoul-5', region: 'SEOUL',
        date: '2025.10.03 - 10.06', startDate: '2025-10-03', endDate: '2025-10-06',
        title: 'Seoul Street Arts', desc: '서울 광장과 거리가 무대가 되는 축제.',
        img: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?w=600&q=60',
        minZoom: 2.5, x: 408, y: 225, slot: 4
    },

    // 2. 부산
    {
        id: 'busan-1', region: 'BUSAN',
        date: '2025.10.08 - 10.17', startDate: '2025-10-08', endDate: '2025-10-17',
        title: 'Busan Int\'l Film Fest', desc: '아시아 최고의 영화제 BIFF.',
        img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=60',
        minZoom: 1, x: 670, y: 630, slot: 0
    },
    {
        id: 'busan-2', region: 'BUSAN',
        date: '2025.05.23 - 05.25', startDate: '2025-05-23', endDate: '2025-05-25',
        title: 'Busan Port Festival', desc: '부산항에서 열리는 해양 문화 축제.',
        img: 'https://images.unsplash.com/photo-1569429528659-aa929837cf59?w=600&q=60',
        minZoom: 2.5, x: 675, y: 635, slot: 1
    },
    {
        id: 'busan-3', region: 'BUSAN',
        date: '2025.08.02 - 08.06', startDate: '2025-08-02', endDate: '2025-08-06',
        title: 'Busan Sea Festival', desc: '여름 바다 예술 축제.',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=60',
        minZoom: 2.5, x: 685, y: 630, slot: 2
    },
    {
        id: 'busan-4', region: 'BUSAN',
        date: '2025.11.09 - 11.09', startDate: '2025-11-09', endDate: '2025-11-09',
        title: 'Busan Fireworks', desc: '광안리 해수욕장 초대형 불꽃쇼.',
        img: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=600&q=60',
        minZoom: 2.5, x: 680, y: 625, slot: 3
    },

    // 3. 대구
    {
        id: 'daegu-1', region: 'DAEGU',
        date: '2025.05.10 - 05.11', startDate: '2025-05-10', endDate: '2025-05-11',
        title: 'Daegu Powerful Fest', desc: '아시아 최대 거리 퍼레이드.',
        img: 'https://images.unsplash.com/photo-1543423719-7d8481498263?w=600&q=60',
        minZoom: 1, x: 632, y: 518, slot: 0
    },
    {
        id: 'daegu-2', region: 'DAEGU',
        date: '2025.06.21 - 07.08', startDate: '2025-06-21', endDate: '2025-07-08',
        title: 'DIMF (Musical)', desc: '대구 국제 뮤지컬 페스티벌.',
        img: 'https://images.unsplash.com/photo-1503095392269-271ff49bd814?w=600&q=60',
        minZoom: 2.5, x: 625, y: 520, slot: 1
    },
    {
        id: 'daegu-3', region: 'DAEGU',
        date: '2025.10.06 - 11.02', startDate: '2025-10-06', endDate: '2025-11-02',
        title: 'Daegu Opera Fest', desc: '대구 국제 오페라 축제.',
        img: 'https://images.unsplash.com/photo-1507676184212-d03ec36d8cce?w=600&q=60',
        minZoom: 2.5, x: 638, y: 515, slot: 2
    },

    // 4. 인천
    {
        id: 'incheon-1', region: 'INCHEON',
        date: '2025.08.02 - 08.04', startDate: '2025-08-02', endDate: '2025-08-04',
        title: 'Incheon Pentaport', desc: '송도에서 펼쳐지는 록 페스티벌.',
        img: 'https://images.unsplash.com/photo-1459749411177-334504d61da3?w=600&q=60',
        minZoom: 1, x: 342, y: 230, slot: 0
    },
    {
        id: 'incheon-2', region: 'INCHEON',
        date: '2025.09.07 - 09.07', startDate: '2025-09-07', endDate: '2025-09-07',
        title: 'INK Concert', desc: '최고의 K-POP 축제.',
        img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=60',
        minZoom: 2.5, x: 350, y: 235, slot: 1
    },
    {
        id: 'incheon-3', region: 'INCHEON',
        date: '2025.10.12 - 10.14', startDate: '2025-10-12', endDate: '2025-10-14',
        title: 'Bupyeong Pungmul', desc: '부평 풍물 대축제.',
        img: 'https://images.unsplash.com/photo-1627568582736-228770258169?w=600&q=60',
        minZoom: 2.5, x: 345, y: 225, slot: 2
    },

    // 5. 광주
    {
        id: 'gwangju-1', region: 'GWANGJU',
        date: '2025.09.07 - 11.07', startDate: '2025-09-07', endDate: '2025-11-07',
        title: 'Gwangju Design Biennale', desc: '아시아 최대 규모의 디자인 비엔날레.',
        img: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=60',
        minZoom: 1, x: 394, y: 620, slot: 0
    },
    {
        id: 'gwangju-2', region: 'GWANGJU',
        date: '2025.10.02 - 10.06', startDate: '2025-10-02', endDate: '2025-10-06',
        title: 'Chungjang Festival', desc: '추억의 7080 거리 퍼레이드.',
        img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=60',
        minZoom: 2.5, x: 400, y: 615, slot: 1
    },
    {
        id: 'gwangju-3', region: 'GWANGJU',
        date: '2025.05.17 - 05.27', startDate: '2025-05-17', endDate: '2025-05-27',
        title: 'Gwangju Fringe', desc: '자유로운 거리 예술의 장.',
        img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=60',
        minZoom: 2.5, x: 390, y: 625, slot: 2
    },

    // 6. 대전
    {
        id: 'daejeon-1', region: 'DAEJEON',
        date: '2025.08.11 - 08.17', startDate: '2025-08-11', endDate: '2025-08-17',
        title: 'Daejeon 0 O\'Clock', desc: '대전 원도심 올나잇 축제.',
        img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=60',
        minZoom: 1, x: 461, y: 430, slot: 0
    },
    {
        id: 'daejeon-2', region: 'DAEJEON',
        date: '2025.10.13 - 10.16', startDate: '2025-10-13', endDate: '2025-10-16',
        title: 'Daejeon Science Fest', desc: '과학과 문화예술의 융합.',
        img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=60',
        minZoom: 2.5, x: 465, y: 435, slot: 1
    },

    // 7. 울산
    {
        id: 'ulsan-1', region: 'ULSAN',
        date: '2025.05.22 - 05.26', startDate: '2025-05-22', endDate: '2025-05-26',
        title: 'Ulsan Rose Festival', desc: '울산대공원 장미원 꽃 축제.',
        img: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=600&q=60',
        minZoom: 1, x: 703, y: 607, slot: 0
    },
    {
        id: 'ulsan-2', region: 'ULSAN',
        date: '2025.10.10 - 10.13', startDate: '2025-10-10', endDate: '2025-10-13',
        title: 'Cheoyong Culture', desc: '울산 대표 전통 문화 예술 축제.',
        img: 'https://images.unsplash.com/photo-1604928157293-1815104d49d9?w=600&q=60',
        minZoom: 2.5, x: 710, y: 605, slot: 1
    },

    // 8. 세종
    {
        id: 'sejong-1', region: 'SEJONG',
        date: '2025.10.09 - 10.12', startDate: '2025-10-09', endDate: '2025-10-12',
        title: 'Sejong Festival', desc: '세종호수공원 도시 문화 축제.',
        img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=60',
        minZoom: 1, x: 425, y: 416, slot: 0
    },

    // 9. 경기
    {
        id: 'gyeonggi-1', region: 'GYEONGGI',
        date: '2025.04.26 - 05.12', startDate: '2025-04-26', endDate: '2025-05-12',
        title: 'Goyang Int\'l Flower', desc: '일산 호수공원 꽃 박람회.',
        img: 'https://images.unsplash.com/photo-1490750967868-bcdf92dd2184?w=600&q=60',
        minZoom: 1, x: 390, y: 200, slot: 0
    },
    {
        id: 'gyeonggi-2', region: 'GYEONGGI',
        date: '2025.10.01 - 10.03', startDate: '2025-10-01', endDate: '2025-10-03',
        title: 'Jarasum Jazz Festival', desc: '가평 자라섬 국제 재즈 페스티벌.',
        img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=60',
        minZoom: 1, x: 440, y: 180, slot: 1
    },
    {
        id: 'gyeonggi-3', region: 'GYEONGGI',
        date: '2025.06.26 - 07.13', startDate: '2025-06-26', endDate: '2025-07-13',
        title: 'BIFAN Film Festival', desc: '부천국제판타스틱영화제.',
        img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=60',
        minZoom: 2.5, x: 370, y: 240, slot: 2
    },
    {
        id: 'gyeonggi-4', region: 'GYEONGGI',
        date: '2025.09.20 - 09.28', startDate: '2025-09-20', endDate: '2025-09-28',
        title: 'DMZ Int\'l Docu Fest', desc: '국제 다큐멘터리 영화제.',
        img: 'https://images.unsplash.com/photo-1512106374988-c97f427af0ca?w=600&q=60',
        minZoom: 2.5, x: 380, y: 170, slot: 3
    },
    {
        id: 'gyeonggi-5', region: 'GYEONGGI',
        date: '2025.10.03 - 10.05', startDate: '2025-10-03', endDate: '2025-10-05',
        title: 'Suwon Hwaseong', desc: '수원화성문화제.',
        img: 'https://images.unsplash.com/photo-1533561096933-5561e8c60813?w=600&q=60',
        minZoom: 2.5, x: 410, y: 280, slot: 0
    },
    {
        id: 'gyeonggi-6', region: 'GYEONGGI',
        date: '2025.05.04 - 05.06', startDate: '2025-05-04', endDate: '2025-05-06',
        title: 'Ansan Street Arts', desc: '안산거리극축제.',
        img: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&q=60',
        minZoom: 2.5, x: 380, y: 260, slot: 1
    },

    // 10. 강원
    {
        id: 'gangwon-1', region: 'GANGWON',
        date: '2025.05.25 - 06.01', startDate: '2025-05-25', endDate: '2025-06-01',
        title: 'Chuncheon Mime', desc: '춘천마임축제.',
        img: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=600&q=60',
        minZoom: 1, x: 520, y: 190, slot: 0
    },
    {
        id: 'gangwon-2', region: 'GANGWON',
        date: '2025.10.07 - 10.12', startDate: '2025-10-07', endDate: '2025-10-12',
        title: 'Gangneung Coffee', desc: '강릉 커피 축제.',
        img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=60',
        minZoom: 1, x: 670, y: 230, slot: 0
    },
    {
        id: 'gangwon-3', region: 'GANGWON',
        date: '2025.01.20 - 01.28', startDate: '2025-01-20', endDate: '2025-01-28',
        title: 'Pyeongchang Trout', desc: '평창송어축제.',
        img: 'https://images.unsplash.com/photo-1547754980-3df97fed72a8?w=600&q=60',
        minZoom: 2.5, x: 620, y: 240, slot: 0
    },
    {
        id: 'gangwon-4', region: 'GANGWON',
        date: '2025.08.08 - 08.13', startDate: '2025-08-08', endDate: '2025-08-13',
        title: 'Jecheon Music Film', desc: '제천국제음악영화제.',
        img: 'https://images.unsplash.com/photo-1470229722913-7ea9959207e9?w=600&q=60',
        minZoom: 2.5, x: 580, y: 320, slot: 1
    },

    // 11. 충북
    {
        id: 'chungbuk-1', region: 'CHUNGBUK',
        date: '2025.09.01 - 10.19', startDate: '2025-09-01', endDate: '2025-10-19',
        title: 'Cheongju Craft', desc: '청주 공예 비엔날레.',
        img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=60',
        minZoom: 1, x: 481, y: 362, slot: 0
    },
    {
        id: 'chungbuk-2', region: 'CHUNGBUK',
        date: '2025.08.28 - 09.01', startDate: '2025-08-28', endDate: '2025-09-01',
        title: 'Chungju Martial Arts', desc: '충주세계무술축제.',
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=60',
        minZoom: 2.5, x: 520, y: 350, slot: 1
    },
    {
        id: 'chungbuk-3', region: 'CHUNGBUK',
        date: '2025.10.12 - 10.15', startDate: '2025-10-12', endDate: '2025-10-15',
        title: 'Yeongdong Grape', desc: '영동 난계국악축제 & 와인축제.',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=60',
        minZoom: 2.5, x: 490, y: 400, slot: 2
    },

    // 12. 충남
    {
        id: 'chungnam-1', region: 'CHUNGNAM',
        date: '2025.07.19 - 07.28', startDate: '2025-07-19', endDate: '2025-07-28',
        title: 'Boryeong Mud', desc: '보령 머드 축제.',
        img: 'https://images.unsplash.com/photo-1563293883-7c3d1f044955?w=600&q=60',
        minZoom: 1, x: 350, y: 400, slot: 0
    },
    {
        id: 'chungnam-2', region: 'CHUNGNAM',
        date: '2025.09.28 - 10.07', startDate: '2025-09-28', endDate: '2025-10-07',
        title: 'Great Baekje', desc: '대백제전 (공주/부여).',
        img: 'https://images.unsplash.com/photo-1544256273-c65191280678?w=600&q=60',
        minZoom: 2.5, x: 390, y: 420, slot: 0
    },
    {
        id: 'chungnam-3', region: 'CHUNGNAM',
        date: '2025.10.05 - 10.09', startDate: '2025-10-05', endDate: '2025-10-09',
        title: 'Geumsan Ginseng', desc: '금산세계인삼축제.',
        img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&q=60',
        minZoom: 2.5, x: 420, y: 440, slot: 1
    },

    // 13. 전북
    {
        id: 'jeonbuk-1', region: 'JEONBUK',
        date: '2025.05.01 - 05.10', startDate: '2025-05-01', endDate: '2025-05-10',
        title: 'Jeonju Int\'l Film', desc: '전주국제영화제 JIFF.',
        img: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=60',
        minZoom: 1, x: 400, y: 530, slot: 0
    },
    {
        id: 'jeonbuk-2', region: 'JEONBUK',
        date: '2025.10.03 - 10.07', startDate: '2025-10-03', endDate: '2025-10-07',
        title: 'Gimje Horizon', desc: '김제지평선축제.',
        img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=60',
        minZoom: 2.5, x: 390, y: 540, slot: 1
    },
    {
        id: 'jeonbuk-3', region: 'JEONBUK',
        date: '2025.05.03 - 05.06', startDate: '2025-05-03', endDate: '2025-05-06',
        title: 'Buan Masil Festival', desc: '부안마실축제.',
        img: 'https://images.unsplash.com/photo-1533230125158-b1849908785b?w=600&q=60',
        minZoom: 2.5, x: 360, y: 545, slot: 1
    },

    // 14. 전남
    {
        id: 'jeonnam-1', region: 'JEONNAM',
        date: '2025.03.15 - 03.23', startDate: '2025-03-15', endDate: '2025-03-23',
        title: 'Gurye Sansuyu', desc: '구례 산수유꽃축제.',
        img: 'https://images.unsplash.com/photo-1490750967868-bcdf92dd2184?w=600&q=60',
        minZoom: 1, x: 430, y: 640, slot: 0
    },
    {
        id: 'jeonnam-2', region: 'JEONNAM',
        date: '2025.09.01 - 10.31', startDate: '2025-09-01', endDate: '2025-10-31',
        title: 'Sumuk Biennale', desc: '전남국제수묵비엔날레.',
        img: 'https://images.unsplash.com/photo-1579783902614-a3fb39279c0f?w=600&q=60',
        minZoom: 2.5, x: 350, y: 680, slot: 0
    },
    {
        id: 'jeonnam-3', region: 'JEONNAM',
        date: '2025.10.24 - 11.09', startDate: '2025-10-24', endDate: '2025-11-09',
        title: 'Hampyeong Chrysan', desc: '함평 대한민국 국향대전.',
        img: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&q=60',
        minZoom: 2.5, x: 370, y: 640, slot: 1
    },

    // 15. 경북
    {
        id: 'gyeongbuk-1', region: 'GYEONGBUK',
        date: '2025.09.26 - 10.05', startDate: '2025-09-26', endDate: '2025-10-05',
        title: 'Andong Mask Dance', desc: '안동국제탈춤페스티벌.',
        img: 'https://images.unsplash.com/photo-1627568582736-228770258169?w=600&q=60',
        minZoom: 1, x: 650, y: 350, slot: 0
    },
    {
        id: 'gyeongbuk-2', region: 'GYEONGBUK',
        date: '2025.03.22 - 03.31', startDate: '2025-03-22', endDate: '2025-03-31',
        title: 'Gyeongju Cherry', desc: '경주 벚꽃 축제.',
        img: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=60',
        minZoom: 2.5, x: 690, y: 550, slot: 0
    },
    {
        id: 'gyeongbuk-3', region: 'GYEONGBUK',
        date: '2025.07.25 - 08.03', startDate: '2025-07-25', endDate: '2025-08-03',
        title: 'Bonghwa Sweetfish', desc: '봉화은어축제.',
        img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=60',
        minZoom: 2.5, x: 650, y: 320, slot: 0
    },

    // 16. 경남
    {
        id: 'gyeongnam-1', region: 'GYEONGNAM',
        date: '2025.03.22 - 04.03', startDate: '2025-03-22', endDate: '2025-04-03',
        title: 'Jinhae Gunhangje', desc: '창원 진해군항제.',
        img: 'https://images.unsplash.com/photo-1491258661609-b681ee72782e?w=600&q=60',
        minZoom: 1, x: 650, y: 620, slot: 0
    },
    {
        id: 'gyeongnam-2', region: 'GYEONGNAM',
        date: '2025.10.08 - 10.22', startDate: '2025-10-08', endDate: '2025-10-22',
        title: 'Jinju Lantern', desc: '진주남강유등축제.',
        img: 'https://images.unsplash.com/photo-1510253687831-0f982d906d89?w=600&q=60',
        minZoom: 2.5, x: 580, y: 610, slot: 0
    },
    {
        id: 'gyeongnam-3', region: 'GYEONGNAM',
        date: '2025.03.29 - 04.06', startDate: '2025-03-29', endDate: '2025-04-06',
        title: 'Tongyeong Music', desc: '통영국제음악제.',
        img: 'https://images.unsplash.com/photo-1507838153414-b4b713384ebd?w=600&q=60',
        minZoom: 2.5, x: 620, y: 660, slot: 1
    },

    // 17. 제주
    {
        id: 'jeju-1', region: 'JEJU',
        date: '2025.03.06 - 03.09', startDate: '2025-03-06', endDate: '2025-03-09',
        title: 'Jeju Fire Festival', desc: '제주 들불 축제.',
        img: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=600&q=60',
        minZoom: 1, x: 335, y: 925, slot: 0
    },
    {
        id: 'jeju-2', region: 'JEJU',
        date: '2025.05.15 - 05.18', startDate: '2025-05-15', endDate: '2025-05-18',
        title: 'Tamna Culture', desc: '탐라문화제.',
        img: 'https://images.unsplash.com/photo-1533230125158-b1849908785b?w=600&q=60',
        minZoom: 2.5, x: 350, y: 920, slot: 1
    }
];