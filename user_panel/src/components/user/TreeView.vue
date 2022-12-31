<template>
    <Navbar />
    <main class="content-wrapper-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="comn-title">
                        <h2 class="f-size-22">Team</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="tremview-bg">
                        <div class="row">
                            <div class="col-12">
                                <div class="teamheader d-flex align-items-center justify-content-between">
                                    <div class="text-left mb-3">
                                        <div class="input-group search-input">
                                            <input type="text" class="form-control" v-model="searchText"
                                                v-on:keyup="checkUserExisted"
                                                onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode >= 48 && event.charCode <= 57) "
                                                placeholder="Search ID">
                                            <div class="input-group-append">
                                                <button class="btn search-btn" @click="onSearchClick" type="button">
                                                    <img src="user-assets/images/search-icon.svg" />
                                                </button>
                                                <button class="btn btn-search" @click="onBackClick">
                                                    <i class="fa fa-arrow-left"></i>
                                                </button>
                                                <button class="btn btn-search" @click="onForwardClick">
                                                    <i class="fa fa-arrow-right"></i>
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                    <!---------<div class="text-right mb-3">
                                        <button class="blue-btn">Create Structure</button>
                                    </div>-->
                                </div>
                                <span :class="{
                                  'text-success': isAvialable == 'Available',
                                  'text-danger': isAvialable == 'Not Available',
                                }" v-if="isAvialable != ''">{{ isAvialable }}
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mx-auto">
                                <div class="profitTree">
                                    <div class="row midline VHline-4">
                                        <div class="col-12">
                                            <div class="tree-level1">
                                                <a href="javascript:void(0)" data-toggle="tooltip"
                                                    data-placement="bottom" id="myTooltip1" class="mytooltip activetree"
                                                    data-original-title="" title="">
                                                    <img :src="'user-assets/images/' + userdata.image">
                                                    <div class="profitTree-info">
                                                        <div
                                                            class="treview-hover-show d-flex justify-content-between align-items-center">
                                                            <div class="user-info">
                                                                <ul class="list-unstyled text-left">
                                                                    <li>
                                                                        <p>Username : <span class="blue-text">
                                                                                {{ userdata.fullname }}
                                                                            </span></p>
                                                                    </li>
                                                                    <li>
                                                                        <p>User Id: <span class="blue-text">
                                                                                {{ userdata.user_id }}
                                                                            </span></p>
                                                                    </li>
                                                                    <li>
                                                                        <div class="user-bill">
                                                                            <p>Package</p>
                                                                            <p>: {{ userdata.product_name }}</p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="user-bill">
                                                                            <p>Total Investment</p>
                                                                            <p class="blue-text">: ${{
                                                                            userdata.usertopup }}</p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{userdata.entry_time}}</p>
                                                                      </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="user-bill">
                                                                            <p>Sponsor Id</p>
                                                                            <p>:  {{ userdata.sponsor_id }}</p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="user-bill">
                                                                            <p>Placement Id</p>
                                                                            <p>: {{
                                                                            userdata.virtual_parent_id
                                                                            }}</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div class="user-right-info">
                                                                <!-- Topup date 22/02/2022</h5> -->
                                                                <table class="table user-table">
                                                                    <thead class="border-0">
                                                                        <tr>
                                                                            <th>Details</th>
                                                                            <th>Left</th>
                                                                            <th>Right</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody class="user-table-body">
                                                                        <tr>
                                                                            <td>
                                                                                <h4>Team</h4>
                                                                            </td>
                                                                            <td>
                                                                                <h5>{{ userdata.l_c_count }}</h5>
                                                                            </td>
                                                                            <td>
                                                                                <p>{{ userdata.r_c_count }}</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4>Bussiness</h4>
                                                                            </td>
                                                                            <td>
                                                                                <h5>{{ userdata.l_bv }}</h5>
                                                                            </td>
                                                                            <td>
                                                                                <p> {{ userdata.r_bv }}</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4>Carry Forward</h4>
                                                                            </td>
                                                                            <td>
                                                                                <h5> {{ userdata.left_bv }}</h5>
                                                                            </td>
                                                                            <td>
                                                                                <p> {{ userdata.right_bv }}</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <h6> {{ userdata.user_id }}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row midline VHline">
                                        <div class="col-6 tree-2-1">
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom"
                                                id="myTooltip1" class="mytooltip" data-original-title="" title="">
                                                <img :src="'user-assets/images/'+treelevel0.image"
                                                    @click="getMatrixTreeData(treelevel0.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel0.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel0.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel0.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel0.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel0.entry_time}}</p>
                                                                     </div>
                                                                 </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor id</p>
                                                                        <p>: {{ treelevel0.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel0.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel0.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel0.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel0.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel0.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel0.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel0.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <h6>  {{ treelevel0.user_id }}</h6>
                                        </div>
                                        <div class="col-6 tree-2-2">
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom"
                                                id="myTooltip1" class="mytooltip activetree" data-original-title=""
                                                title="">
                                                <img :src="'user-assets/images/'+treelevel1.image"
                                                    @click="getMatrixTreeData(treelevel1.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel1.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel1.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel1.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{treelevel1.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel1.entry_time}}</p>
                                                                    </div>
                                                                 </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel1.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel1.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel1.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel1.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel1.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel1.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel1.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel1.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <h6> {{ treelevel1.user_id }}</h6>
                                        </div>
                                    </div>

                                    <div class="row rowline-3">
                                        <div class="col-6">
                                            <div class="row midline VHline">
                                                <div class="col-6 tree-3-1">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1" class="mytooltip"
                                                        data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel10.image"
                                                    @click="getMatrixTreeData(treelevel10.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel10.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel10.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel10.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel10.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel10.entry_time}}</p>
                                                                     
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel10.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel10.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel10.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel10.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel10.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel10.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel10.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel10.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel10.user_id }}</h6>
                                                </div>
                                                <div class="col-6 tree-3-2">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1"
                                                        class="mytooltip activetree" data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel11.image"
                                                    @click="getMatrixTreeData(treelevel11.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel11.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel11.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel11.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel11.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel11.entry_time}}</p>
                                                                     
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel11.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel11.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel11.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel11.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel11.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel11.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel11.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel11.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel11.user_id }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row midline VHline">
                                                <div class="col-6 tree-3-3">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1"
                                                        class="mytooltip activetree" data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel12.image"
                                                    @click="getMatrixTreeData(treelevel12.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel12.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel12.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel12.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel12.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel12.entry_time}}</p>
                                                                     
                                                                      </div>
                                                                 </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel12.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel12.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel12.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel12.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel12.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel12.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel12.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel12.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel12.user_id }}</h6>
                                                </div>
                                                <div class="col-6 tree-3-4">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1" class="mytooltip"
                                                        data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel13.image"
                                                    @click="getMatrixTreeData(treelevel13.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel13.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel13.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel13.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel13.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel13.entry_time}}</p>
                                                                     
                                                                      </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel13.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel13.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel13.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel13.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel13.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel13.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel13.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel13.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel13.user_id }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row rowline-4">
                                        <div class="col-3">
                                            <div class="row midline VHline-5">
                                                <div class="col-6 tree-4-1">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1" class="mytooltip"
                                                        data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel20.image"
                                                    @click="getMatrixTreeData(treelevel20.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel20.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel20.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel20.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel20.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel20.entry_time}}</p>
                                                                     
                                                                      </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel20.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel20.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel20.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel20.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel20.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel20.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel20.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel20.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel20.user_id }}</h6>
                                                </div>
                                                <div class="col-6 tree-4-2">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1"
                                                        class="mytooltip activetree" data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel21.image"
                                                    @click="getMatrixTreeData(treelevel21.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel21.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel21.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel21.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel21.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel21.entry_time}}</p>
                                                                     
                                                                          
                                                                      </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel21.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel21.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel21.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel21.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel21.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel21.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel21.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel21.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel21.user_id }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="row midline VHline-5">
                                                <div class="col-6 tree-4-3">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1"
                                                        class="mytooltip activetree" data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel22.image"
                                                    @click="getMatrixTreeData(treelevel22.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel22.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel22.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel22.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel22.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel22.entry_time}}</p>
                                                                     
                                                                      </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel22.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel22.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel22.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel22.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel22.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel22.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel22.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel22.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel22.user_id }}</h6>
                                                </div>
                                                <div class="col-6 tree-4-4">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1" class="mytooltip"
                                                        data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel23.image"
                                                    @click="getMatrixTreeData(treelevel23.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel23.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel23.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel23.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel23.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel23.entry_time}}</p>
                                                                     
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel23.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel23.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel23.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel23.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel23.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel23.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel23.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel23.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel23.user_id }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="row midline VHline-5">
                                                <div class="col-6 tree-4-5">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1"
                                                        class="mytooltip activetree" data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel24.image"
                                                    @click="getMatrixTreeData(treelevel24.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel24.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel24.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel24.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel24.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel24.entry_time}}</p>
                                                                     
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel24.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel24.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel24.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel24.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel24.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel24.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel24.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel24.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel24.user_id }}</h6>
                                                </div>
                                                <div class="col-6 tree-4-6">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1" class="mytooltip "
                                                        data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel25.image"
                                                    @click="getMatrixTreeData(treelevel25.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel25.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel25.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel25.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel25.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel25.entry_time}}</p>
                                                                     
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel25.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel25.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel25.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel25.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel25.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel25.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel25.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel25.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel25.user_id }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="row midline VHline-5">
                                                <div class="col-6 tree-4-7">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1"
                                                        class="mytooltip activetree" data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel26.image"
                                                    @click="getMatrixTreeData(treelevel26.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel26.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel26.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel26.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel26.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel26.entry_time}}</p>
                                                                     
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel26.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel26.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel26.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel26.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel26.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel26.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel26.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel26.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel26.user_id }}</h6>
                                                </div>
                                                <div class="col-6 tree-4-8">
                                                    <a href="javascript:void(0)" data-toggle="tooltip"
                                                        data-placement="bottom" id="myTooltip1"
                                                        class="mytooltip activetree" data-original-title="" title="">
                                                        <img :src="'user-assets/images/'+treelevel27.image"
                                                    @click="getMatrixTreeData(treelevel27.user_id)">
                                                <div class="profitTree-info">
                                                    <div
                                                        class="treview-hover-show d-flex justify-content-between align-items-center">
                                                        <div class="user-info">
                                                            <ul class="list-unstyled text-left">
                                                                <li>
                                                                    <p>Username : <span class="blue-text">
                                                                            {{ treelevel27.fullname }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <p>User Id: <span class="blue-text">
                                                                            {{ treelevel27.user_id }}
                                                                        </span></p>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Package</p>
                                                                        <p>: {{ treelevel27.product_name }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Total Investment</p>
                                                                        <p class="blue-text">: ${{
                                                                        treelevel27.selftopup }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                            <p>Joining Date</p>
                                                                            <p>: {{treelevel27.entry_time}}</p>
                                                                     
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Sponsor Id</p>
                                                                        <p>: {{ treelevel27.sponsor_id }}</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="user-bill">
                                                                        <p>Placement Id</p>
                                                                        <p>: {{
                                                                        treelevel27.virtual_parent_id
                                                                        }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="user-right-info">
                                                            <!-- <h5>Topup date 22/02/2022</h5> -->
                                                            <table class="table user-table">
                                                                <thead class="border-0">
                                                                    <tr>
                                                                        <th>Details</th>
                                                                        <th>Left</th>
                                                                        <th>Right</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="user-table-body">
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Team</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel27.l_c_count }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p>{{ treelevel27.r_c_count }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Bussiness</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5>{{ treelevel27.l_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel27.r_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h4>Carry Forward</h4>
                                                                        </td>
                                                                        <td>
                                                                            <h5> {{ treelevel27.left_bv }}</h5>
                                                                        </td>
                                                                        <td>
                                                                            <p> {{ treelevel27.right_bv }}</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </a>
                                                    <h6>{{ treelevel27.user_id }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-6 m-auto">
                                <div class="treview">
                                    <div class="active mr-3">
                                        <img src="user-assets/images/active-icon.png" />
                                        <h6>Active</h6>
                                    </div>
                                    <div class="active mr-3">
                                        <img src="user-assets/images/inactive-icon.png" />
                                        <h6>Inactive</h6>
                                    </div>
                                    <div class="active">
                                        <img src="user-assets/images/absent-icon.png" />
                                        <h6>Absent</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    </main>
</template>
<script>
import moment from 'moment';
import Navbar from '../../components/user/Navbar.vue';
import { userAssets } from "../../../user_config.js";
import { ADMIN_PRODUCTBASE, CHECKUSEREXISTED } from "@/store/actions.type";
import $ from "jquery";

export default {
    name: "app",
    created: function () {
    this.moment = moment;
  },
    components: { Navbar },
    data() {
        return {
            imgURL: userAssets,
            user_id: "",
            userdata: {},
            treelevel0: {},
            treelevel1: {},
            treelevel10: {},
            treelevel11: {},
            treelevel12: {},
            treelevel13: {},

            treelevel20: {},
            treelevel21: {},
            treelevel22: {},
            treelevel23: {},
            treelevel24: {},
            treelevel25: {},
            treelevel26: {},
            treelevel27: {},
            lengthOFlastlevelOfTree: 0,
            isAvialable: "",
            searchText: "",
            nameForBack: "",
            BackListArray: [],
            ForwordListArray: [],
            back_status: false,
            forward_status: false,
            usersleft: "",
            usersright: "",
            todayleft: "",
            todayright: "",
            usersrightcounts: "",
            usersleftcounts: "",
            userdata_for_rank: {},
        };
    },
    computed: {
        getClassName() {
            return (i) => {
                if (i === 0) return "col-6 col-md-6 left-cols";
                else if (i === 1) return "col-6 col-md-6 right-cols";
                else return "NoClass";
                // In this way you can maintain as many classNames you want based on the condition
            };
        },
        getClassName3() {
            return (i) => {
                if (i === 0) return "col-3 col-md-3 left-cols";
                else if (i === 1) return "col-3 col-md-3 mid-cols";
                else if (i === 2) return "col-3 col-md-3 mid-2-cols";
                else if (i === 3) return "col-3 col-md-3 right-cols";
                else return "NoClass";
                // In this way you can maintain as many classNames you want based on the condition
            };
        },
        getsrc() {
            return (i) => {
                if (i === 0) return "public/user_files/assets/images/tree-line4.png";
                else if (i === 1)
                    return "public/user_files/assets/images/tree-line7.png";
                else if (i === 2)
                    return "public/user_files/assets/images/tree-line6.png";
                else if (i === 3)
                    return "public/user_files/assets/images/tree-line5.png";
                else return "NoClass";
            };
        },
        getClassForbox() {
            return (i) => {
                if (i === 0) return "img-box imgs-3rdleft";
                else if (i === 1) return "img-box imgs-3rdright";
                else if (i === 2) return "img-box imgs-3rdleft-level";
                else if (i === 3) return "img-box imgs-3rdright-level";
                else return "NoClass";
           };
        },
    },
    mounted() {
        this.getTreeViewManual();
        $("li").hover(
            function () {
                $(this).addClass("is-active");
            },
            function () {
                $(this).removeClass("is-active");
            }
        );

    },
    methods: {  
        getTreeViewManual() {
       
                var data = { id: this.user_id, reqFrom: "user" };
                this.$store
                .dispatch(ADMIN_PRODUCTBASE, data)
                .then((resp) => {
                    if (resp.code === 200) {
                        this.userdata = resp.data.user;

                        this.treelevel0 = resp.data.tree_data[0].level[0];
                        this.treelevel1 = resp.data.tree_data[0].level[1];

                        this.treelevel10 = resp.data.tree_data[1].level[0];
                        this.treelevel11 = resp.data.tree_data[1].level[1];

                        this.treelevel12 = resp.data.tree_data[1].level[2];
                        this.treelevel13 = resp.data.tree_data[1].level[3];

                        this.treelevel20 = resp.data.tree_data[2].level[0];
                        this.treelevel21 = resp.data.tree_data[2].level[1];

                        this.treelevel22 = resp.data.tree_data[2].level[2];
                        this.treelevel23 = resp.data.tree_data[2].level[3];

                        this.treelevel24 = resp.data.tree_data[2].level[4];
                        this.treelevel25 = resp.data.tree_data[2].level[5];

                        this.treelevel26 = resp.data.tree_data[2].level[6];
                        this.treelevel27 = resp.data.tree_data[2].level[7];


                        if (!this.back_status) {
                            this.nameForBack = this.userdata.user_id;
                            if (
                                this.BackListArray[this.BackListArray.length - 1] !==
                                this.nameForBack
                            ) {
                                this.BackListArray.push(this.nameForBack);
                            }
                            this.back_status = false;
                        }
                    }
                })
                .catch();
        },
        getWidth(data) {
            switch (data.level) {
                case 1:
                    return "50%";
                case 2:
                    return "25%";
            }
        },
        changeStyle() {
            $(".nav li").hover(function () {
                $(this).addClass("is-active").siblings().removeClass("is-active");
            });

            $(".nav li").mouseleave(function () {
                $(this).removeClass("is-active");
            });
        },
        getMatrixTreeData(id) {
            this.user_id = id;
            this.getTreeViewManual();
        },
        onSearchClick() {
            this.isAvialable = "";
            if (this.searchText === "") {
                this.isAvialable = "";
            } else {
                this.user_id = this.searchText;
                this.getTreeViewManual();
            }
        },
        onBackClick() {
            if (this.BackListArray.length === 1) {
                this.back_status = false;
                this.$toast.error("You are on root, you can not back");
            } else {
                this.back_status = true;
                const lengthOfArray = this.BackListArray.length;
                const userIdForBack = this.BackListArray[lengthOfArray - 2];
                const userIdForForword = this.BackListArray[lengthOfArray - 1];
                this.getMatrixTreeData(userIdForBack);
                this.BackListArray.splice(lengthOfArray - 1, 1);
                this.ForwordListArray.push(userIdForForword);
            }
            this.searchText = "";
            this.isAvialable = "";
        },
        onForwardClick() {
            if (this.ForwordListArray.length === 0) {
                this.forward_status = false;
                this.$toast.error("You are on root, you can not back");
            } else {
                this.forward_status = true;
                const lengthOfArray = this.ForwordListArray.length;

                /*if(lengthOfArray > 1){
                                const userIdForForword = this.ForwordListArray[lengthOfArray - 2];
                                this.getMatrixTreeData(this.ForwordListArray[lengthOfArray - 1]);
                            } else {
                                const userIdForForword = this.ForwordListArray[lengthOfArray - 1];
                                this.getMatrixTreeData(this.ForwordListArray[lengthOfArray - 1]);
                            }*/
                const userIdForBack = this.ForwordListArray[lengthOfArray - 1];
                //this.getMatrixTreeData(userIdForForword);
                this.getMatrixTreeData(this.ForwordListArray[lengthOfArray - 1]);
                this.ForwordListArray.splice(lengthOfArray - 1, 1);
                this.BackListArray.push(userIdForBack);
            }
            this.searchText = "";
            this.isAvialable = "";
        },
        checkUserExisted() {
          var data = { user_id: this.searchText };
          this.$store
            .dispatch(CHECKUSEREXISTED, data)
            .then((resp) => {
              if (resp.code === 200) {
                this.user_id_exp = resp.data.user_id;
                this.fullname_exp = resp.data.fullname;
                this.isAvialable = "Available";
              } else {
                this.isAvialable = "Not Available";
              }
            })
            .catch();
        },

    },
};
</script>