let baseUrl = '';
let assetsUrl = '';
let domainname = '';
let reward = '';

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://www.clubquestcapital.com/public/api/';

} else {


    baseUrl = 'https://www.clubquestcapital.com/api/';
    assetsUrl = 'https://www.clubquestcapital.com/public/user_files';
   //baseUrl = 'http://localhost/clubquestcapital/api/';
   //assetsUrl = 'http://localhost/clubquestcapital/public/user_files';

    domainname = 'https://www.clubquestcapital.com/';

}
export const apiUserHost = baseUrl;
export const userAssets = assetsUrl;
export const domain = domainname;