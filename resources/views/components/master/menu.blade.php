    
    <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
        <div class="app-header-menu app-header-mobile-drawer w-100" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
            <div class="headerMenu" id="kt_app_header_menu" data-kt-menu="true">
                <a href="{{ route('dashboard.index')}}" onclick="loadContent(event,this);" class="menuLink active">
                    <span class="menu-link">
                        <span class="menu-title">Dashboards</span>
                    </span>
                </a>
                <a href="{{ route('main.index')}}?type=dataUser" onclick="loadContent(event,this);" class="menuLink">
                    <span class="menu-link">
                        <span class="menu-title">User Admin</span>
                    </span>
                </a>
                <a href="{{ route('main.index')}}?type=dataConfig" onclick="loadContent(event,this);" class="menuLink">
                    <span class="menu-link">
                        <span class="menu-title">Config</span>
                    </span>
                </a>
                <a href="{{ route('main.index')}}?type=dataReport" onclick="loadContent(event,this);" class="menuLink">
                    <span class="menu-link">
                        <span class="menu-title">Laporan</span>
                    </span>
                </a>
            </div>
        </div>
        <div class="app-navbar flex-shrink-0">
            <div class="app-navbar-item ms-5" id="kt_header_user_menu_toggle">
                <div class="nameRole">
                    <div class="name">{{Auth::user()->username}}</div>
                    <div class="role">Admin</div>
                </div>
                <div class="cursor-pointer symbol symbol-35px symbol-md-45px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                    <span class="svg-icon svg-icon-primary svg-icon-3hx">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"/>
                            <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"/>
                            <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"/>
                        </svg>
                    </span>
                </div>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
                    <div class="menu-item px-3">
                        <div class="menu-content d-flex align-items-center px-3">
                            <div class="symbol symbol-50px me-5">
                                <span class="svg-icon svg-icon-muted svg-icon-3hx">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"/>
                                        <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"/>
                                        <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"/>
                                    </svg>
                                </span>
                            </div>
                            <div class="d-flex flex-column">
                                <div class="justify-start">
                                    <div class="displayName">{{Auth::user()->username}}</div>
                                    <!-- <div class="badge badge-light-primary fw-bold fs-8 px-2 py-1 ms-2">Admin</div> -->
                                </div>
                                <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">{{substr(Auth::user()->email,0,22)}} </a>
                            </div>
                        </div>
                    </div>
                    <div class="menu-item px-5">
                        <button type="button" class="menu-link px-5"  onclick="changePasswordShow()">Ubah Kata Sandi</button>
                    </div>
                    <div class="menu-item px-5">
                        <button type="button" class="menu-link px-5"  onclick="actLogout()">Keluar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>