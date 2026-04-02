document.addEventListener("DOMContentLoaded", () => {
    // 1. Ensure FontAwesome is available
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(fa);
    }

    // Security Check
    const loggedInId = localStorage.getItem('logged_in_id');
    if (!loggedInId && !window.location.pathname.includes('index.html')) {
        window.location.href = '../index.html';
        return;
    }

    const user = typeof getUser === "function" ? getUser() : { name: "User", id: "A0000000000", photo: "" };
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    
    // Breadcrumb and Page Title Logic
    const pageDisplayNames = {
        'dashboard.html': 'Dashboard',
        'calendar.html': 'My Calendar',
        'programme_structure.html': 'Programme Structure',
        'timetable.html': 'Time Table',
        'examination.html': 'Examination',
        'profile.html': 'My Profile',
        'id_card.html': 'ID Card',
        'fees.html': 'Fee Details'
    };
    const breadcrumbName = pageDisplayNames[currentPage] || 'Page';

    const appShell = document.createElement('div');
    appShell.id = "amizone-shell";
    appShell.className = 'flex flex-col h-screen w-full bg-[#e9ebee] font-sans text-[#333] fixed inset-0';
    
    appShell.innerHTML = `
        <header class="bg-[#fdb913] h-[60px] flex items-center px-4 z-[1000] shadow-md flex-shrink-0">
            <button class="flex items-center justify-center w-12 h-12 text-[#005689] hover:bg-black/5 rounded-md transition-colors" 
                    onclick="window.toggleSidebar()">
                <i class="fas fa-bars text-2xl"></i>
            </button>
            <div class="ml-3 flex items-center">
                <span class="font-bold text-[#005689] italic text-xl md:text-2xl tracking-tighter uppercase">AMI<span>ZONE</span></span>
            </div>
            
            <div class="ml-auto mr-4 text-[#005689] relative hidden sm:block">
                <i class="fas fa-bell text-xl"></i>
                <span class="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center border border-white">3</span>
            </div>
        </header>

        <div class="bg-[#005689] min-h-[45px] py-1 flex items-center justify-between px-4 text-white z-[900] shadow-sm flex-shrink-0">
            <div class="text-[11px] md:text-sm font-semibold opacity-90 truncate pr-2 flex items-center uppercase tracking-wider">
                <i class="fas fa-home mr-2"></i> HOME <i class="fas fa-chevron-right mx-2 text-[8px]"></i> ${breadcrumbName}
            </div>
            
            <div class="relative" id="profile-container">
                <div id="profile-trigger" class="flex items-center space-x-3 flex-shrink-0 hover:bg-white/10 p-1.5 px-3 rounded transition-all cursor-pointer group">
                    <div class="hidden xs:block text-[11px] text-right leading-tight">
                        <p class="font-bold uppercase truncate max-w-[150px] group-hover:underline">${user.name}</p>
                        <p class="opacity-75 tracking-tighter">${user.id}</p>
                    </div>
                    <div class="relative">
                        <img src="${user.photo}" class="w-8 h-8 rounded border border-white/50 object-cover shadow-sm group-hover:border-white transition-all" 
                             onerror="this.src='https://ui-avatars.com/api/?name=${user.name}&background=fff&color=005689'">
                        <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#005689] rounded-full"></div>
                    </div>
                    <i class="fas fa-chevron-down text-[10px] opacity-70 group-hover:opacity-100 transition-opacity"></i>
                </div>

                <div id="profile-dropdown" class="absolute right-0 top-full mt-1 w-48 bg-white rounded shadow-2xl py-2 z-[9999] hidden border border-gray-200">
                    <a href="profile.html" class="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        <i class="fas fa-user-circle mr-3 text-[#005689] text-lg"></i> My Profile
                    </a>
                    <div class="border-t border-gray-100 my-1"></div>
                    <button onclick="window.handleLogout(event)" class="w-full flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors">
                        <i class="fas fa-sign-out-alt mr-3 text-lg"></i> Logout
                    </button>
                </div>
            </div>
        </div>

        <div class="flex flex-1 overflow-hidden relative">
            <div id="sidebar-overlay" class="fixed inset-0 bg-black/60 z-[1100] hidden opacity-0 transition-opacity duration-300" onclick="window.toggleSidebar()"></div>

            <aside id="app-sidebar" class="fixed inset-y-0 left-0 z-[1200] w-[280px] bg-white border-r border-[#d1d5db] flex flex-col transition-transform duration-300 ease-in-out transform -translate-x-full shadow-2xl">
                <div class="h-[60px] bg-[#fdb913] flex items-center px-4 flex-shrink-0">
                     <button class="text-[#005689] mr-4 w-10 h-10 flex items-center justify-center" onclick="window.toggleSidebar()"><i class="fas fa-arrow-left text-xl"></i></button>
                     <span class="font-bold text-[#005689] italic text-xl uppercase tracking-tight">Navigation</span>
                </div>
                <nav class="flex-1 overflow-y-auto bg-white scrollbar-thin">${generateNavLinks(currentPage)}</nav>
            </aside>

            <main class="flex-1 overflow-y-auto w-full bg-[#e9ebee] flex flex-col relative" id="main-scroller">
                
                <div class="flex-1 p-3 md:p-6 relative" id="page-mount">
                    <div id="skeleton-screen" class="absolute inset-0 z-[800] bg-[#e9ebee] p-4 flex flex-col space-y-4 transition-opacity duration-500">
                        <div class="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div class="flex space-x-4 flex-1">
                            <div class="w-1/2 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="w-1/2 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                </div>

                <footer class="bg-white border-t border-gray-300 py-4 px-6 flex-shrink-0">
                    <div class="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
                        <div class="text-[11px] md:text-[12px] text-gray-500 font-semibold uppercase tracking-tight">
                            &copy; 2026 Amity University. All rights reserved.
                        </div>
                        <div class="flex items-center space-x-4 text-[11px] md:text-[12px] text-[#005689] font-bold uppercase">
                            <a href="#" class="hover:underline">Privacy Policy</a>
                            <span class="text-gray-300">|</span>
                            <a href="#" class="hover:underline">Terms of Use</a>
                            <span class="text-gray-300">|</span>
                            <a href="#" class="hover:underline">Contact Support</a>
                        </div>
                        <div class="text-[10px] text-gray-400 font-bold uppercase italic">
                            Powered by Amizone ERP v4.2
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    `;

    // Move existing body content into the page mount container
    const pageMount = appShell.querySelector('#page-mount');
    while (document.body.firstChild) {
        pageMount.appendChild(document.body.firstChild);
    }
    document.body.appendChild(appShell);

    // Profile Dropdown Logic
    const trigger = document.getElementById('profile-trigger');
    const dropdown = document.getElementById('profile-dropdown');
    
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && e.target !== trigger) {
            dropdown.classList.add('hidden');
        }
    });

    // Sidebar Logic
    window.toggleSidebar = function() {
        const sidebar = document.getElementById('app-sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const isHidden = sidebar.classList.contains('-translate-x-full');
        if (isHidden) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            setTimeout(() => overlay.classList.add('opacity-100'), 10);
        } else {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.remove('opacity-100');
            setTimeout(() => overlay.classList.add('hidden'), 300);
        }
    };

    // Logout Handler
    window.handleLogout = function(e) {
        if(e) e.preventDefault();
        if(confirm("Are you sure you want to logout from Amizone?")) {
            localStorage.clear();
            window.location.href = '../index.html';
        }
    };

    // Simulate Fake Data Fetching (Skeleton Screen fade out)
    setTimeout(() => {
        const skeleton = document.getElementById('skeleton-screen');
        if(skeleton) {
            skeleton.style.opacity = '0';
            setTimeout(() => skeleton.remove(), 500);
        }
    }, 600);

    // Run Page-specific injections
    if (currentPage.includes('dashboard.html')) injectDashboard(user);
    if (currentPage.includes('fees.html')) injectFees(user);
    if (currentPage.includes('profile.html')) injectProfile(user);
});

function generateNavLinks(current) {
    const links = [
        { file: 'dashboard.html', icon: 'fa-home', text: 'Home' },
        { file: 'calendar.html', icon: 'fa-calendar-alt', text: 'My Calendar' },
        { file: 'structure.html', icon: 'fa-sitemap', text: 'Programme Structure' },
        { file: 'timetable.html', icon: 'fa-clock', text: 'Time Table' },
        { file: 'examination.html', icon: 'fa-edit', text: 'Examination' },
        { file: 'profile.html', icon: 'fa-user', text: 'My Profile' },
        { file: 'id_card.html', icon: 'fa-id-card', text: 'ID Card' },
        { file: 'fees.html', icon: 'fa-file-invoice-dollar', text: 'Fee Details' },
    ];

    return links.map(l => {
        const isActive = current.includes(l.file);
        return `
        <a href="${l.file}" 
           class="flex items-center py-5 px-6 border-b border-[#f0f0f0] transition-colors active:bg-gray-200 text-gray-700
                  ${isActive ? 'bg-[#f0f7ff] text-[#005689] font-bold border-l-4 border-l-[#005689]' : ''}">
            <i class="fas ${l.icon} w-8 text-center text-xl mr-4 ${isActive ? 'text-[#005689]' : 'text-gray-400'}"></i> 
            <span class="text-[16px]">${l.text}</span>
        </a>`;
    }).join('');
}

function injectDashboard(user) {
    const attText = document.getElementById('dyn-att-text');
    if(attText) attText.innerText = (user.attendance ? user.attendance.overall : "82") + "%";

    const attCircle = document.getElementById('dyn-att-circle');
    if(attCircle) attCircle.setAttribute('stroke-dasharray', `${user.attendance ? user.attendance.overall : 82}, 100`);

    if (user.program && user.program.includes("Anthropology")) {
        const subIds = ['tt-sub-1', 'tt-sub-2', 'tt-sub-3', 'tt-sub-4'];
        const subjects = ["ANT301 - APPLIED ANTHROPOLOGY", "ANT302 - INDIAN ANTHROPOLOGY", "ANT321 - DISSERTATION", "BS101 - BEHAVIORAL SCIENCE"];
        subIds.forEach((id, i) => {
            const el = document.getElementById(id);
            if(el) el.innerText = subjects[i];
        });
    }
}

function injectFees(user) {
    const progTitle = document.getElementById('dyn-prog-title');
    if(progTitle) progTitle.innerText = `${user.name} (${user.program})`;
}

function injectProfile(user) {
    const nameInput = document.getElementById('dyn-prof-name');
    if(nameInput) nameInput.value = user.name;
}