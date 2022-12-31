<template>
    <!-- <div class="dash-wrapper"> -->
    <!-- Header -->
    <header class="header-fix-top-cust">
        <nav class="navbar fixed-top">
            <ul class="d-flex align-items-center mr-auto align-items-center hdr-top-box">
                <li class="nav-item">
                    <div class="hdr-top-box-inr">
                        <div class="toggle-icon-main toggle-icon-main-sec d-xl-none d-block ">
                            <img src="user-assets/images/sidemenu-arrow.svg" alt="" v-on:click="ontogglemenudes">
                        </div>
                        <div class="d-xl-none d-block responsive-view-logo">
                            <router-link to="/dashboard">
                                <img src="user-assets/images/logo/Logo.svg" alt="">
                            </router-link>
                        </div>
                        <div class="header-btn d-md-block d-none">
                            <div class="hdr-pdf-btn">
                                <div class="gradiant-btn">
                                    <span>User ID</span>
                                    <p>{{profile.user_id}}</p>
                                </div>
                                <div class="gradiant-btn ml-2">
                                    <span>IP Address</span>
                                    <p>{{dashboard.ip_address}}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>
                <li class="nav-item">
                    <i class="fa fa-ellipsis-v d-md-none d-none" aria-hidden="true" v-on:click="onclickmblelips"></i>
                </li>
            </ul>
            <ul class="d-flex align-items-center align-items-center ml-auto responsive-view-menu hdr-top-box">

                <!-- <li class="nav-item right-nav-link-new notification-custom-main">
                    <a href="javascript:void(0);">
                        <img src="user-assets/images/Notification.svg" class="notification-click" alt=""
                            v-on:click="onclciknotification">
                    </a>
                    <div class="notification-custom">
                        <div class="notification-scroll">
                            <ul class="notifcn-row-wrapper">
                                <li class="">
                                    <a href="javascript:void(0);">
                                        <div class="snrs-notifcn-title">
                                            New Message
                                        </div>
                                        <div class="snrs-notifcn_item-time">
                                            2 hrs ago
                                        </div>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="javascript:void(0);">
                                        <div class="snrs-notifcn-title">
                                            New order has been received
                                        </div>
                                        <div class="snrs-notifcn_item-time">
                                            3 hrs ago
                                        </div>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="javascript:void(0);">
                                        <div class="snrs-notifcn-title">
                                            Application has been reject
                                        </div>
                                        <div class="snrs-notifcn_item-time">
                                            5 hrs ago
                                        </div>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="javascript:void(0);">
                                        <div class="snrs-notifcn-title">
                                            Bruce's Party
                                        </div>
                                        <div class="snrs-notifcn_item-time">
                                            5 hrs ago
                                        </div>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="javascript:void(0);">
                                        <div class="snrs-notifcn-title">
                                            New Message
                                        </div>
                                        <div class="snrs-notifcn_item-time">
                                            2 hrs ago
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div class="p-3">
                                <a href="javascript:void(0);" class="notifcn-btn">view all</a>
                            </div>
                        </div>
                    </div>
                </li>-->
                <li>
                    <div class="header-user-profile-inner-cust" v-on:click="onclickprofile">
                        <div class="pro-sec-cust">
                            <img v-if="profile.user_image" v-bind:src="profile.user_image">
                            <img v-else src="user-assets/images/profile-img.png">
                        </div>
                        <div class="profile-inner-cust">
                            <ul>
                                <li>
                                    <router-link class="menu-title" @click="goto('art1')" to="/my-profile"><i
                                            class="fa fa-user"></i> My Profile</router-link>
                                </li>

                                <li>
                                    <a class="menu-title" href="" @click="logout"><i
                                            class="fa fa-sign-out"></i>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>

        </nav>
    </header>


    <div class="sidebar-main-section">
        <div class="brand-title">
            <router-link class="menu-title" onclick="moveTop();" to="/dashboard">
                <img src="user-assets/images/logo/Logo.svg" alt="">
            </router-link>
            <div class="toggle-icon-main">
                <img src="user-assets/images/sidemenu-arrow.svg" alt="" v-on:click="ontogglemenudes">
            </div>
        </div>
        <div class="sidebar-main-section-inner">
            <ul class="sidebar-main-inner-menu">
                <li>
                    <router-link class="menu-title" onclick="moveTop();" to="/dashboard">
                        <img src="user-assets/images/Dashboard.svg" alt="">
                        <span>Dashboard</span>
                    </router-link>
                </li>
                <li>

                    <router-link class="menu-title" onclick="moveTop();" to="/my-profile">
                        <img src="user-assets/images/Profile.svg" alt="">
                        <span>Profile</span>
                    </router-link>
                </li>
                <li class="dropdownmenu" v-on:click="onclickMenu">
                    <a href="javascript:void(0)" class="justify-content-between">
                        <div class="d-flex align-items-center ">
                            <img src="user-assets/images/Deposite.svg" alt="">
                            <span>Deposit</span>
                        </div>
                        <div>
                            <i class="fa fa-angle-down"></i>
                        </div>
                    </a>

                    <ul class="dropdown-menu-class">
                        <li>
                            <router-link to="/add-fund">
                                <img src="user-assets/images/Deposite.svg" alt="">
                                <span>Deposit</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/confirm-fund">
                                <img src="user-assets/images/Deposite.svg" alt="">
                                <span>Confirm Fund</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/pending-fund">
                                <img src="user-assets/images/Deposite.svg" alt="">
                                <span>Pending Fund</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li class="dropdownmenu" v-on:click="onclickMenu">
                    <a href="javascript:void(0)" class="justify-content-between">
                        <div class="d-flex align-items-center ">
                            <img src="user-assets/images/Report.svg" alt="">
                            <span>Activation</span>
                        </div>
                        <div>
                            <i class="fa fa-angle-down"></i>
                        </div>
                    </a>

                    <ul class="dropdown-menu-class">
                        <li>
                            <router-link onclick="moveTop();" to="/self-topup">
                                <img src="user-assets/images/Report.svg" alt="">
                                <span>Topup</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link onclick="moveTop();" to="/topup-report">
                                <img src="user-assets/images/Report.svg" alt="">
                                <span>Topup Report</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link onclick="moveTop();" to="/downline-topup-report">
                                <img src="user-assets/images/Report.svg" alt="">
                                <span>Topup downline Report</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="dropdownmenu" v-on:click="onclickMenu">
                    <a href="javascript:void(0)" class="justify-content-between">
                        <div class="d-flex align-items-center ">
                            <img src="user-assets/images/Report.svg" alt="">
                            <span>Report</span>
                        </div>
                        <div>
                            <i class="fa fa-angle-down"></i>
                        </div>
                    </a>

                    <ul class="dropdown-menu-class">

                        <li>
                            <router-link onclick="moveTop();" to="/roi-income">
                                <img src="user-assets/images/Report.svg" alt="">
                                <span>RIO Earnings Report</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link onclick="moveTop();" to="/direct-income">
                                <img src="user-assets/images/Report.svg" alt="">
                                <span>Direct Earnings Report</span>
                            </router-link>
                        </li>

                        <li>
                            <router-link onclick="moveTop();" to="/binary-income">
                                <img src="user-assets/images/Report.svg" alt="">
                                <span>Binary Earnings Report</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li class="dropdownmenu" v-on:click="onclickMenu">
                    <a href="javascript:void(0)" class="justify-content-between">
                        <div class="d-flex align-items-center ">
                            <img src="user-assets/images/Withdraw.svg" alt="">
                            <span>Wallet Transfer</span>
                        </div>
                        <div>
                            <i class="fa fa-angle-down"></i>
                        </div>
                    </a>

                    <ul class="dropdown-menu-class">
                        <li>
                            <router-link onclick="moveTop();" to="/CWallettoPWalletTransfer">
                                <img src="user-assets/images/Withdraw.svg" alt="">
                                <span>C Wallet to P Wallet Transfer</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link onclick="moveTop();" to="/IWallettoPWalletTransfer">
                                <img src="user-assets/images/Withdraw.svg" alt="">
                                <span>I Wallet to P Wallet Transfer</span>
                            </router-link>
                        </li>

                    </ul>
                </li>

                <li class="dropdownmenu" v-on:click="onclickMenu">
                    <a href="javascript:void(0)" class="justify-content-between">
                        <div class="d-flex align-items-center ">
                            <img src="user-assets/images/Withdraw.svg" alt="">
                            <span>Withdrawal Summary</span>
                        </div>
                        <div>
                            <i class="fa fa-angle-down"></i>
                        </div>
                    </a>

                    <ul class="dropdown-menu-class">
                        <li>
                            <router-link onclick="moveTop();" to="/withdraw">
                                <img src="user-assets/images/Withdraw.svg" alt="">
                                <span>Place Withdrawal</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link onclick="moveTop();" to="/withdrawals-income-report">
                                <img src="user-assets/images/Withdraw.svg" alt="">
                                <span>Withdrawal Report</span>
                            </router-link>
                        </li>

                    </ul>
                </li>
                <li class="dropdownmenu" v-on:click="onclickMenu">
                    <a href="javascript:void(0)" class="justify-content-between">
                        <div class="d-flex align-items-center ">
                            <img src="user-assets/images/Team.svg" alt="">
                            <span>Team</span>
                        </div>
                        <div>
                            <i class="fa fa-angle-down"></i>
                        </div>
                    </a>

                    <ul class="dropdown-menu-class">
                        <li>
                            <router-link onclick="moveTop();" to="/tree-view">
                                <img src="user-assets/images/Team.svg" alt="">
                                <span>Tree View</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link onclick="moveTop();" to="/direct-user-list">
                                <img src="user-assets/images/Report.svg" alt="">
                                <span>Direct Member</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link onclick="moveTop();" to="/team-view">
                                <img src="user-assets/images/Report.svg" alt="">
                                <span>Team View</span>
                            </router-link>
                        </li>
                    </ul>
                    <ul>

                        <li>
                            <a class="menu-title" href="" @click="logout">
                                <img src="user-assets/images/logout.svg" alt="">
                                <span>Logout</span>
                            </a>
                        </li>

                    </ul>
                </li>



                <!-- <li>
                    <router-link onclick="moveTop();" to="/tree-view">
                     <img src="user-assets/images/Team.svg" alt="">
                        <span>Tree View</span>
                    </router-link>
                </li> -->
            </ul>
            <!--  <div class="logout-cont">
                <a class="menu-title" href="" @click="logout">
                    <img src="user-assets/images/logout.svg" alt="">
                    <span>Log Out</span>
                </a>
            </div>-->
        </div>
    </div>
    <!-- </div> -->

</template>

<script>
    import $ from "jquery";
    import axios from "axios";
    import {
        GETPROFILEINFO,
        GETDASHBOARDDETAILS
    } from '@/store/actions.type';

    export default {
        name: 'User-Navbar',
        // name: "app",
        data() {
            return {
                dashboard: {
                    current_time: '',
                    ip_address: '',
                },
                profile: {
                    fullname: '',
                    user_id: '',
                },
            }
        },
        mounted() {
            this.readProfile();
            this.getDashboardData();

        },

        methods: {
            goto(refName) {
                var element = this.$refs[refName];
                var top = element.offsetTop;
                window.scrollTo(0, top);
            },

            hidemenu() {
                var windowWidth = window.screen.width;
                if (windowWidth < 768) {
                    $('.navbar-collapse').toggleClass('show');
                }
            },

            onclciknotification() {
                $(".notification-custom-main").toggleClass("active");
                $('.header-user-profile-inner-cust').removeClass("active");
            },
            onclickprofile(e) {
                console.log('object', 'hiiii');
                $('.header-user-profile-inner-cust').toggleClass("active");
                $(".notification-custom-main").removeClass("active");
                e.stopPropagation();
            },
            onclickmblelips() {
                $(".responsive-view-menu").toggleClass("active")
            },
            ontogglemenudes() {
                $(".dash-wrapper").toggleClass("toggled-custom-class");
            },
            onclickMenu(event) {
                $(".dropdownmenu").removeClass("active");
                var togglemenu = $(event.target).closest('.dropdownmenu');
                togglemenu.toggleClass('active');
            },

            getDashboardData() {
                this.$store
                    .dispatch(GETDASHBOARDDETAILS)
                    .then(response => {
                        if (response.code === 200) {
                            this.dashboard = response.data;
                            //console.log(this.dashboard);
                        } else {
                            this.$toast.error(response.message)
                        }
                    }).catch(error => {
                        this.message = error.response.data.message;
                        this.flash(this.message, 'error', {
                            timeout: 500000,
                        });
                    });
            },

            readProfile() {
                this.$store
                    .dispatch(GETPROFILEINFO, {})
                    .then(response => {
                        this.profile = response.data;
                    })
                    .catch(error => {
                        this.$toast.error(error);
                    })
            },
            logout() {
                localStorage.clear();
                this.$router.push({
                    name: 'login'
                });
                setTimeout(function () {
                    location.reload();
                }, 100);
            },

            logout1() {
                axios
                    .post("/logout", {})
                    .then((resp) => {
                        if (resp.data.code === 200) {
                            localStorage.removeItem("user-token");
                            localStorage.removeItem("type");
                            localStorage.clear();
                            this.$router.push({
                                name: "login"
                            });
                            setTimeout(function () {
                                location.reload();
                            }, 300);
                        }
                        localStorage.removeItem("user-token");
                        localStorage.removeItem("type");
                        localStorage.clear();
                        this.$router.push({
                            name: "login"
                        });
                        setTimeout(function () {
                            location.reload();
                        }, 300);
                    })
                    .catch((err) => {
                        this.$toast.error(err);
                    });
            }
        },
    }

    $('body').on('click', function (e) {
        if ($(e.target).find('.dash-wrapper.toggled-custom-class').length != 0) {
            $('.dash-wrapper').removeClass('toggled-custom-class');
        }
    })
</script>