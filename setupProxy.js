const proxy = require('http-proxy-middleware');

module.exports = function(app) {
// var  options={
//     target: 'https://www.missevan.com/' ,
//           changeOrigin:true,
//           pathRewrite:{
//             '^/albums/info':'',
//             '^/albums/sound':''
//         }
// }
// var proxys=proxy(options)
//   app.use("/albums",proxys);
app.use(proxy('/albums/info', {
     target: 'https://www.missevan.com/malbum/recommand',
     changeOrigin:true,
     pathRewrite:{
                '^/albums/info':'',
    }   
}));

};

