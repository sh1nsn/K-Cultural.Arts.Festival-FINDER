document.addEventListener('DOMContentLoaded', () => {

    // 0. 인트로
    const introOverlay = document.getElementById('intro-overlay');
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    
    if (viewParam || sessionStorage.getItem('introShown')) {
        introOverlay.style.display = 'none';
        introOverlay.classList.add('hidden');
    }
    introOverlay.addEventListener('click', () => {
        introOverlay.classList.add('hidden');
        sessionStorage.setItem('introShown', 'true');
        setTimeout(() => { introOverlay.style.display = 'none'; }, 800);
    });

    // 1. 뷰 전환
    const btnMap = document.getElementById('btn-map');
    const btnCalendar = document.getElementById('btn-calendar');
    const viewMap = document.getElementById('view-map');
    const viewCalendar = document.getElementById('view-calendar');

    function switchView(viewName) {
        if (viewName === 'map') {
            btnMap.classList.add('active'); btnCalendar.classList.remove('active');
            viewMap.classList.add('active-view'); viewCalendar.classList.remove('active-view');
        } else {
            btnMap.classList.remove('active'); btnCalendar.classList.add('active');
            viewMap.classList.remove('active-view'); viewCalendar.classList.add('active-view');
        }
    }
    btnMap.addEventListener('click', () => switchView('map'));
    btnCalendar.addEventListener('click', () => switchView('calendar'));
    if (viewParam === 'calendar') switchView('calendar');


    // 2. 전체 지역 버튼 생성 & 자동 이동
    const allRegions = [
        { name: "Seoul", x: 411, y: 230, zoom: 8 },
        { name: "Busan", x: 670, y: 630, zoom: 8 },
        { name: "Daegu", x: 632, y: 518, zoom: 8 },
        { name: "Incheon", x: 342, y: 230, zoom: 8 },
        { name: "Gwangju", x: 394, y: 620, zoom: 8 },
        { name: "Daejeon", x: 461, y: 430, zoom: 8 },
        { name: "Ulsan", x: 703, y: 607, zoom: 8 },
        { name: "Sejong", x: 425, y: 416, zoom: 8 },
        { name: "Gyeonggi", x: 400, y: 250, zoom: 5 },
        { name: "Gangwon", x: 650, y: 250, zoom: 5 },
        { name: "Chungbuk", x: 500, y: 350, zoom: 6 },
        { name: "Chungnam", x: 370, y: 400, zoom: 6 },
        { name: "Jeonbuk", x: 400, y: 530, zoom: 6 },
        { name: "Jeonnam", x: 350, y: 680, zoom: 5 },
        { name: "Gyeongbuk", x: 650, y: 350, zoom: 5 },
        { name: "Gyeongnam", x: 550, y: 600, zoom: 6 },
        { name: "Jeju", x: 388, y: 910, zoom: 9 }
    ];

    const regionListContainer = document.getElementById('region-list');
    const svgMap = document.getElementById('korea-map');
    const mapContent = document.getElementById('map-content');
    
    let scale = 1, pointX = 0, pointY = 0, isPanning = false, startX = 0, startY = 0;

    allRegions.forEach(r => {
        const btn = document.createElement('button');
        btn.textContent = r.name;
        btn.addEventListener('click', () => {
            const containerWidth = svgMap.clientWidth;
            const containerHeight = svgMap.clientHeight;
            
            scale = r.zoom;
            pointX = (containerWidth / 2) - (r.x * scale);
            pointY = (containerHeight / 2) - (r.y * scale);
            
            updateTransform();
        });
        regionListContainer.appendChild(btn);
    });

    const mapPaths = document.querySelectorAll('.region-path');

mapPaths.forEach(path => {
    // 2. 각 구역에 클릭 이벤트 추가
    path.addEventListener('click', (e) => {
        // 클릭 시 이벤트가 부모로 전파되는 것 방지 (안전장치)
        e.stopPropagation();

        // 3. 클릭한 구역의 'name' 속성 가져오기
        const regionName = path.getAttribute('name'); 

        // 4. allRegions 데이터에서 이름이 같은 친구 찾기
        const targetData = allRegions.find(r => r.name === regionName);

        // 5. 데이터가 있다면? (기존 버튼 클릭 로직과 동일하게 실행!)
        if (targetData) {
            const containerWidth = svgMap.clientWidth;
            const containerHeight = svgMap.clientHeight;
            
            // 데이터에 있는 줌 레벨과 좌표 사용
            scale = targetData.zoom;
            pointX = (containerWidth / 2) - (targetData.x * scale);
            pointY = (containerHeight / 2) - (targetData.y * scale);
            
            updateTransform();
        } else {
            console.log("데이터를 찾을 수 없습니다: " + regionName);
        }
    });
});


    // 3. 지도 마커 생성
    const markersGroup = document.getElementById('markers');
    
    festivalData.forEach(data => {
        const marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        marker.setAttribute("class", "map-marker");
        marker.setAttribute("cx", data.x);
        marker.setAttribute("cy", data.y);
        marker.setAttribute("r", "9");
        
        marker.dataset.id = data.id; marker.dataset.region = data.region;
        marker.dataset.date = data.date; marker.dataset.title = data.title;
        marker.dataset.desc = data.desc; marker.dataset.img = data.img;
        marker.dataset.minZoom = data.minZoom || 1;

        markersGroup.appendChild(marker);
    });
    const mapMarkers = document.querySelectorAll('.map-marker');


    // 4. 캘린더 생성
    let currDate = new Date(2025, 9, 1); 
    const calTitle = document.getElementById('cal-month-year');
    const calGrid = document.getElementById('cal-grid');

    function renderCalendar() {
        const year = currDate.getFullYear();
        const month = currDate.getMonth();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        calTitle.innerText = `${monthNames[month]} ${year}`;
        calGrid.innerHTML = "";

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const prevLastDate = new Date(year, month, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const cell = document.createElement('div');
            cell.className = 'cal-cell other-month';
            cell.innerHTML = `<span class="date-num">${prevLastDate - firstDay + 1 + i}</span>`;
            calGrid.appendChild(cell);
        }

        for (let i = 1; i <= lastDate; i++) {
            const cell = document.createElement('div');
            cell.className = 'cal-cell';
            cell.innerHTML = `<span class="date-num">${i}</span>`;
            
            const currentMonthStr = (month + 1).toString().padStart(2, '0');
            const currentDayStr = i.toString().padStart(2, '0');
            const thisDateStr = `${year}-${currentMonthStr}-${currentDayStr}`;

            const activeEvents = festivalData.filter(event => 
                thisDateStr >= event.startDate && thisDateStr <= event.endDate
            );

            let maxSlotToday = -1;
            if (activeEvents.length > 0) {
                maxSlotToday = Math.max(...activeEvents.map(e => e.slot || 0));
            }

            for (let s = 0; s <= maxSlotToday; s++) {
                const event = activeEvents.find(e => (e.slot || 0) === s);
                if (event) {
                    const bar = document.createElement('div');
                    bar.className = 'event-bar';
                    bar.dataset.id = event.id; bar.dataset.region = event.region;
                    bar.dataset.date = event.date; bar.dataset.title = event.title;
                    bar.dataset.desc = event.desc; bar.dataset.img = event.img;

                    if (event.startDate === event.endDate) bar.classList.add('type-single');
                    else if (thisDateStr === event.startDate) bar.classList.add('type-start');
                    else if (thisDateStr === event.endDate) bar.classList.add('type-end');
                    else bar.classList.add('type-mid');
                    cell.appendChild(bar);
                } else {
                    const spacer = document.createElement('div');
                    spacer.className = 'event-spacer';
                    cell.appendChild(spacer);
                }
            }
            calGrid.appendChild(cell);
        }

        const filledCells = firstDay + lastDate;
        const remainingCells = 42 - filledCells;
        for (let i = 1; i <= remainingCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'cal-cell other-month';
            cell.innerHTML = `<span class="date-num">${i}</span>`;
            calGrid.appendChild(cell);
        }
        
        attachInteractions();
        // [NEW] 사이드바 리스트 업데이트
        updateSideList(year, month);
    }

    // [NEW] 사이드바 업데이트 함수
    function updateSideList(year, month) {
        const listContainer = document.getElementById('month-event-list');
        listContainer.innerHTML = ''; // 초기화

        // 이번 달에 속하는 축제 찾기 (겹치는 기간 포함)
        // 로직: (축제시작 <= 월말) AND (축제끝 >= 월초)
        const firstDayOfMonth = `${year}-${(month + 1).toString().padStart(2, '0')}-01`;
        const lastDayObj = new Date(year, month + 1, 0);
        const lastDayOfMonth = `${year}-${(month + 1).toString().padStart(2, '0')}-${lastDayObj.getDate()}`;

        const monthEvents = festivalData.filter(event => {
            return event.startDate <= lastDayOfMonth && event.endDate >= firstDayOfMonth;
        });

        // 날짜순 정렬
        monthEvents.sort((a, b) => a.startDate.localeCompare(b.startDate));

        if (monthEvents.length === 0) {
            listContainer.innerHTML = '<div style="color:rgba(255,255,255,0.3); font-size:0.8rem;">No events this month.</div>';
            return;
        }

        monthEvents.forEach(event => {
            const item = document.createElement('div');
            item.className = 'event-item';
            item.setAttribute('data-id', event.id); // 클릭 이벤트용 ID

            item.innerHTML = `
                <div class="event-thumb">
                    <img src="${event.img}" alt="${event.title}">
                </div>
                <div class="event-info">
                    <span class="event-region">${event.region}</span>
                    <h4 class="event-title">${event.title}</h4>
                    <span class="event-date">${event.date}</span>
                </div>
            `;
            
            // 리스트 아이템 클릭 시 상세페이지 이동
            item.addEventListener('click', () => {
                const currentView = viewCalendar.classList.contains('active-view') ? 'calendar' : 'map';
                window.location.href = `detail.html?id=${event.id}&view=${currentView}`;
            });

            listContainer.appendChild(item);
        });
    }


    document.getElementById('prev-month').addEventListener('click', () => { currDate.setMonth(currDate.getMonth() - 1); renderCalendar(); });
    document.getElementById('next-month').addEventListener('click', () => { currDate.setMonth(currDate.getMonth() + 1); renderCalendar(); });
    renderCalendar();


    // 5. 지도 줌 & 이동
    function updateTransform() {
        mapContent.style.transition = isPanning ? 'none' : 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
        mapContent.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;

        const markerScale = 1 / Math.pow(scale, 0.7); 

mapMarkers.forEach(marker => {
    marker.style.transform = `scale(${markerScale})`;
            const minZoom = parseFloat(marker.dataset.minZoom);
            if (scale >= minZoom) {
                marker.style.display = 'block';
                marker.style.opacity = 1;
                marker.style.pointerEvents = 'auto';
            } else {
                marker.style.opacity = 0;
                marker.style.pointerEvents = 'none';
            }
        });
    }
    updateTransform();

    svgMap.addEventListener('wheel', (e) => {
        e.preventDefault();
        isPanning = true; 
        const xs = (e.offsetX - pointX) / scale;
        const ys = (e.offsetY - pointY) / scale;
        const delta = -e.deltaY;
        const zoomStep = 0.1;
        if (delta > 0) scale *= (1 + zoomStep); else scale /= (1 + zoomStep);
        scale = Math.max(1, Math.min(scale, 10)); 
        pointX = e.offsetX - xs * scale; pointY = e.offsetY - ys * scale;
        updateTransform();
        isPanning = false; 
    });

    svgMap.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('map-marker')) return;
        isPanning = true; startX = e.clientX - pointX; startY = e.clientY - pointY;
        svgMap.style.cursor = 'grabbing';
    });
    window.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        e.preventDefault(); pointX = e.clientX - startX; pointY = e.clientY - startY;
        updateTransform();
    });
    window.addEventListener('mouseup', () => { isPanning = false; svgMap.style.cursor = 'grab'; });

    // (기존 5. 지도 줌 & 이동 코드 내의 버튼 이벤트 부분 수정)

    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomResetBtn = document.getElementById('zoom-reset');

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            const zoomFactor = 1.4;
            const newScale = Math.min(scale * zoomFactor, 10); // 최대 10배 제한

            if (newScale !== scale) { // 더 이상 확대할 수 없으면 계산 안 함
                const rect = svgMap.getBoundingClientRect();
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // 새로운위치 = 화면중심 - (화면중심 - 기존위치) * (새비율 / 옛비율)
                pointX = centerX - (centerX - pointX) * (newScale / scale);
                pointY = centerY - (centerY - pointY) * (newScale / scale);

                scale = newScale;
                updateTransform();
            }
        });

        zoomOutBtn.addEventListener('click', () => {
            const zoomFactor = 1.4;
            const newScale = Math.max(scale / zoomFactor, 1); // 최소 1배 제한

            if (newScale !== scale) {
                const rect = svgMap.getBoundingClientRect();
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // 줌인과 동일한 원리의 수식
                pointX = centerX - (centerX - pointX) * (newScale / scale);
                pointY = centerY - (centerY - pointY) * (newScale / scale);

                scale = newScale;
                updateTransform();
            }
        });

        // 리셋 버튼 (기존 유지)
        zoomResetBtn.addEventListener('click', () => { 
            scale = 1; 
            pointX = 0; 
            pointY = 0; 
            updateTransform(); 
        });
    }


    // 6. 인터랙션
    const infoCard = document.querySelector('.info-card');
    const pImg = document.getElementById('preview-img');
    const pRegion = document.getElementById('preview-region');
    const pDate = document.getElementById('preview-date');
    const pTitle = document.getElementById('preview-title');
    const pDesc = document.getElementById('preview-desc');

    function attachInteractions() {
        const interactables = document.querySelectorAll('.map-marker, .event-bar');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                pRegion.innerText = el.dataset.region; pDate.innerText = el.dataset.date;
                pTitle.innerText = el.dataset.title; pDesc.innerText = el.dataset.desc;
                pImg.src = el.dataset.img; infoCard.classList.add('show');
            });
            el.addEventListener('mouseleave', () => { infoCard.classList.remove('show'); });
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                if (isPanning) return; 
                const id = el.dataset.id;
                const currentView = viewCalendar.classList.contains('active-view') ? 'calendar' : 'map';
                window.location.href = `detail.html?id=${id}&view=${currentView}`;
            });
        });
    }
    attachInteractions();
});
