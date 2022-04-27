let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("{client_id}", "{client_secret}", "{access_token}");
const fs =require('fs');

for(let i=0; i<{totalpages}; i++) {
client.request({
  method: "GET",
  path: "/me/videos",
  query: {"fields":"name,link,created_time,description,duration", "per_page":"100", "page":1+i}
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error) ;
  }

  fs.writeFileSync('vimeoexport.json', JSON.stringify(body),{flag:'a'});
  
})

}
