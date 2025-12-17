var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

if (url.indexOf('/v1/h5/vip/sub_detail.json') != -1) {
    if (obj.data) {
        obj.data.is_vip = 1;
        obj.data.vip_type = 1;
        obj.data.is_expire = 0;
        obj.data.screen_name = "Đã Hack";
    }
    
    body = JSON.stringify(obj)
        .replace(/"old_vip_type":\d+/g, '"old_vip_type":4')
        .replace(/"is_expire":\d+/g, '"is_expire":0')
        .replace(/"sub_type":\d+/g, '"sub_type":8')
        .replace(/"expire_days":.*?/g, '"expire_days":9999')
        .replace(/"screen_name":".*?"/g, '"screen_name":"Đã Hack"')
        .replace(/"invalid_time":\d+/g, '"invalid_time":4092599349');
} 

else if (url.indexOf('/v1/user/info') != -1 || url.indexOf('user_info') != -1) {
    body = body
        .replace(/"old_vip_type":\d+/g, '"old_vip_type":4')
        .replace(/"is_expire":\d+/g, '"is_expire":0')
        .replace(/"sub_type":\d+/g, '"sub_type":8')
        .replace(/"expire_days":.*?/g, '"expire_days":9999')
        .replace(/"screen_name":".*?"/g, '"screen_name":"Đã Hack"')
        .replace(/"invalid_time":\d+/g, '"invalid_time":4092599349');

    obj = JSON.parse(body);
    if (obj.data) {
        obj.data.valid_time = 4092599349;
        obj.data.vip_type = 1;
        obj.data.sub_name = 'Gói trọn đời'; 
    }
    body = JSON.stringify(obj);
} 

// Case 3: Xử lý trang chủ hoặc popup quảng cáo
else if (url.indexOf('home/index') != -1) {
    body = body
        .replace(/"free_trial":\d+/g, '"free_trial":1')
        .replace(/"vip_type":\d+/g, '"vip_type":1')
        .replace(/"screen_name":".*?"/g, '"screen_name":"Đã Hack"');
} 

else if (url.indexOf('configure') != -1) {
    body = body
        .replace(/"home_prompt":".*?"/g, '"home_prompt":"VIP Vĩnh Viễn"')
        .replace(/"home_btn_prompt":".*?"/g, '"home_btn_prompt":"Mở"')
        .replace(/"beautify_btn_prompt":".*?"/g, '"beautify_btn_prompt":""')
        .replace(/"beautify_prompt":".*?"/g, '"beautify_prompt":""');
} 

else if (url.indexOf('/v1/account/verify_credentials.json') != -1) {
    if (obj.data) {
        obj.data.is_vip = 1;
        obj.data.screen_name = "Đã Hack";
        obj.data.free_trial = 1;
    }
    body = JSON.stringify(obj);
}
$done({ body: body });
