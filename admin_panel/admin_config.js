let apiurl = "";
let baseUrl = "";
let assetsUrl = "";
let domainname = "";
let serve_baseUrl = "";

if (process.env.NODE_ENV === "production") {

    ///----------------------- Live ----------------------------------- 

    // baseUrl = "https://www.kinjatoken.com/kinja-api/api/";
    // serve_baseUrl ="https://www.kinjatoken.com/kinja-api/api/admin/";
    // assetsUrl = "https://www.kinjatoken.com/kinja-admin/admin-assets";
    // domainname = "https://www.kinjatoken.com/";


    ///----------------------- Replia -----------------------------------

    apiurl = "https://www.clubquestcapital.com/api/admin";
    baseUrl = "https://www.clubquestcapital.com/api/admin";
    serve_baseUrl = "https://www.clubquestcapital.com/api/admin/";
    assetsUrl = "https://www.clubquestcapital.com/replica/clubquestcapital-admin/admin-assets";
    domainname = "https://www.clubquestcapital.com/";
   // domainReferral_link = "https://www.clubquestcapital.com/";

     ///---------------------------------------------------------

} else {
    apiurl="http://localhost:8080/api/admin";
    //serve_baseUrl = "http://localhost:8082/api/admin/";
    serve_baseUrl = "http://localhost:8080/api/admin/";
    assetsUrl = "http://localhost/clubquestcapital-vue/admin_panel/public/admin-assets";
    domainname = "https://www.clubquestcapital.com/";

    
}
export const apiUserHost = baseUrl;
export const serveApiUserHost = serve_baseUrl;
export const adminAssets = assetsUrl;
export const domain = domainname;
export const url = apiurl;