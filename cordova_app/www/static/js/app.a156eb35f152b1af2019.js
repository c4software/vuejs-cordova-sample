webpackJsonp([0],[,,function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=function(t,e){navigator.notification?navigator.notification.alert(t,function(){},e,"Ok"):alert(t)}},function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i(31);i(1).a.use(n.a);var a={en:{title:"VueJS Cordova Sample",showSample:"Show code samples",drawer:{home:"Home",vibration:"Vibration",camera:"Camera",flash:"Flash",localisation:"Localisation",nfc:"Nfc"},see_on_github:"See On Github",getPosition:"Obtaining Position",positionNotAvailable:"Can’t get your position",startVibration:"Start vibration",flashlight:{start:"Start flashlight",stop:"Stop flashlight",notAvailable:"Plugin not installed"},nfcText:{waitingTag:"Scan a tag…",tagSerial:"Serial number",notAvailable:"Scan impossible. Cordova plugin not initialized."},takePhoto:"Take a picture",error:"Not available"},fr:{title:"Exemples VueJS + Cordova",showSample:"Afficher les examples",drawer:{home:"Accueil",vibration:"Vibreur",camera:"Camera",flash:"Flash",localisation:"Localisation",nfc:"Nfc"},see_on_github:"Voir sur Github",getPosition:"Localisation en cours",positionNotAvailable:"Localisation impossible",startVibration:"Démarrer la vibration",flashlight:{start:"Allumer la lampe torche",stop:"Éteindre la lampe torche",notAvailable:"Plugin Cordova non installé"},nfcText:{waitingTag:"En attente d’un tag…",tagSerial:"Numéro de série",notAvailable:"Scan impossible. Plugin Cordova non initialisé"},takePhoto:"Prendre une photo",error:"Non disponible"}},o=new n.a({locale:function(){try{return navigator.language.split("-")[0]}catch(t){return console.log(t),navigator.language}}(),fallbackLocale:"en",messages:a})},function(t,e,i){"use strict";var n=i(1),a=i(47),o=i(35),s=i.n(o),r=i(38),c=i.n(r),l=i(34),u=i.n(l),d=i(33),f=i.n(d),g=i(37),h=i.n(g),p=i(36),v=i.n(p);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:s.a},{path:"/vibration",name:"Vibration",component:c.a},{path:"/flash",name:"Flash",component:u.a},{path:"/camera",name:"Camera",component:f.a},{path:"/nfc",name:"Nfc",component:h.a},{path:"/localisation",name:"Localisation",component:v.a}]})},function(t,e){},function(t,e,i){function n(t){i(20)}var a=i(0)(i(8),i(42),n,null,null);t.exports=a.exports},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(32),a=i.n(n);e.default={name:"app",components:{myContentDrawer:a.a},data:function(){return{drawer:!1}},methods:{toggleOverlay:function(){this.drawer=!this.drawer},goHome:function(){window.location.hash="/"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"drawer",data:function(){return{items:[{icon:"home",text:this.$t("drawer.home"),action:"#/"},{icon:"vibration",text:this.$t("drawer.vibration"),action:"#vibration"},{icon:"camera",text:this.$t("drawer.camera"),action:"#camera"},{icon:"flash_on",text:this.$t("drawer.flash"),action:"#flash"},{icon:"gps_fixed",text:this.$t("drawer.localisation"),action:"#localisation"},{icon:"nfc",text:this.$t("drawer.nfc"),action:"#nfc"},{divider:!0},{icon:"help",text:this.$t("see_on_github"),action:"https://github.com/c4software/vuejs-cordova-sample"}]}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2);e.default={name:"camera",data:function(){return{imagePath:""}},methods:{takePicture:function(){navigator.camera?navigator.camera.getPicture(this.setPicture,this.error,{}):this.error()},setPicture:function(t){this.imagePath=t},error:function(){i.i(n.a)(this.$t("error"))}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"flash",mounted:function(){this.setBtnTitle()},beforeDestroy:function(){this.switchOff()},data:function(){return{btnTitle:""}},methods:{pluginInstalled:function(){return"undefined"!=typeof plugins&&void 0!==window.plugins.flashlight},toggle:function(){this.pluginInstalled()&&window.plugins.flashlight.toggle(this.setBtnTitle)},switchOff:function(){this.pluginInstalled()&&window.plugins.flashlight.switchOff()},setBtnTitle:function(){this.pluginInstalled()?window.plugins.flashlight.isSwitchedOn()?this.btnTitle=this.$t("flashlight.stop"):this.btnTitle=this.$t("flashlight.start"):this.btnTitle=this.$t("flashlight.notAvailable")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",methods:{openMenu:function(){document.getElementsByClassName("toolbar__side-icon")[0].click()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(17),a=(i.n(n),i(25)),o=i.n(a),s=i(2);delete o.a.Icon.Default.prototype._getIconUrl,o.a.Icon.Default.mergeOptions({iconRetinaUrl:i(26),iconUrl:i(27),shadowUrl:i(28)}),e.default={name:"localisation",data:function(){return{loading:!0}},mounted:function(){this.map=o.a.map("map").setView([47.47121,-.55198],5),o.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map),this.getUserLocation()},methods:{getUserLocation:function(){var t=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var i=[e.coords.latitude,e.coords.longitude];o.a.marker(i).addTo(t.map),t.map.setView(i,18),t.loading=!1},function(){t.loading=!1,i.i(s.a)(t.$t("positionNotAvailable",t.$t("localisation")))})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2);e.default={name:"nfc",data:function(){return{compatible:!0}},mounted:function(){"undefined"!=typeof nfc?nfc.addNdefListener(this.displayTagId,this.success,this.error):this.error()},beforeDestroy:function(){"undefined"!=typeof nfc&&nfc.removeNdefListener(this.displayTagId)},methods:{displayTagId:function(t){i.i(n.a)(this.$t("nfcText.tagSerial")+" : "+t.tag.id)},error:function(){this.compatible=!1},success:function(){console.log("Nfc initialized")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vibration",methods:{doVibrate:function(){navigator.vibrate?navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]):console.error("[cordova-plugin-vibration] Is required to use this function")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),a=i(6),o=i.n(a),s=i(4),r=i(7),c=i.n(r),l=i(3);n.a.config.productionTip=!0,i(5),n.a.use(c.a),new n.a({el:"#app",router:s.a,i18n:l.a,template:"<App/>",components:{App:o.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7c3grY3grg8hJo3grY4g7c4g7c3grU0gLI4grY9hrpBi79HkMM2frE0daA0fq82gbROlslbo9Vgp9dcpNZQmcxFjsIwd6QzeKk3gbRfptdepdZcpdY2gLMtd5s3gLNZotVSntNPnNJLmtFImdBZodU1f7A2f7A1frA2f7I2f7FHmNBUnM9Wn9VGmNAydaNYoNJOm9M9hLc0e6w3fa46f7BKmdFFltBVndE1fK1Els82fq41fK1Dlc89g7RClc9XoNVUndQ0eqxClM9Jl9FRms81eqo0eqpHltFBk89Fi75Qm9M/k89KkcYzealSjbadvdPH2ufz9/r4+vzP3+qlxNljmL08gLNSnNQzeKgydqUzeKg/ks6NtM/////+/v8+kc/f6fFAgK1CiLwydKIzd6c8kM6Tt9C1zd5OmdNBh7pTjLRzn78xdKIydqU7j86jwdbM3egxdKIydaQydaMydKNGlNE6js5OiLAxc6FKkshDk9E5jc09e6Zekrcxc6I4jc03eagyc6FIldI3jM0wcaBMl9J+psNKltIwcZ82i83k7fMubJhLlc81is1Lg6pklbZNl9I/j9AvbJlEjcVdkLPt8/cwcZ4ubZkwcJ00icy0y9swcJwvb5wzicxHkcpTh60ubZhCkNAyiMwvbpoxh8xAicBHj8hGk9FHks0+jdAubJcubJdEkdEwhsw6i88ubJgta5cvhswxapgubJcuhcstbJcubZcuhMsubJcvbJZBjMgthMsubJcvbZkubJcrg8stbJctbZcubJgrgssua5gubJc6is8qgcs8i9A9iMYtg8spgcoogMo7hcMrbZcubJcngMonf8olfsoubJc4gr8kfckua5g5iM8jfMk4iM8he8k1froua5g7itAgeskubJc2hs8eecgzfLcofssdeMg0hc4ubJccd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqjbZ8obAAAA7HRSTlMAHDdTb4yPA+L/7ZxE/////yYLgvb///////8SYf/////qB/////////+1wNHd//////8s////r/////////+O/P///////////8f///////////////////////+P2P///////////3f//////////5j/////tczn//////L///////////////////////8+////////R/////Ww////tf////9q////////////4P/////Yd/8W+P/xov+UNv///STN/7hc1P/AUv//////////MMT///+m//+e//////+M//+C////////6cqo94AAAAXmSURBVHgBrNKDoipBGADgbHMRpjuKi2xOdu//MHe2Y6tvOdZvuhGzxWqzO2xWi9lp+g6L3eV+5PH6vmpltrv8nDsQDIWCAbef83jDpo9FojFeJxhPJO8JosQzYnb5oxYpVzodiCcyhiwA2esPEAPpdM727vT+eSH0x7McwoTmOUpxIcvF/RAWI29byCUIpUQ2m8A0/xwx8kIQls2vW4QrihIHQMDqGyQBgAiVnOXVTuWUtAaAnq++I48B0PxKrPZiq8qKvy4IpPqBhiDUm0rl+ca12h1NQN3eh7pI6MN26WnfooNBPIHU4SdUlBAHg9Hj0seDEEJ08pxKqfoio4tQaDAOP0xrMEWIzB4NCWaIK8xJ7ymXItQcFO/jcLGIF+bLRytW4LS18Wbd5SNcEBcLn8mw2TYZ2+3vLRuMaYdme7sdTA8iY8flQ0mPscC2fB1ku12z4+necs7YebDlri9JZ3rvoazB1tutxdiuy1TXl4/Zer95ufzneq7524qBAIBr61TmtxXX/MK4FC6cKIwvViozXMDMzLbCTF+1JBn/4/EtLi2vrK6tbywsbE506vVxnZ3fF7YIIQamdX7dVqb/RtnCr1X+n3F9gA2MdA7Vsl87nzEDId2MTUCHSdr+As/Y1DKvM1uYFWBGpTtggrFuYrMPApgc0jhMTNmdvInLbn8NqNImgEG7jWzZnwB1KAg79t1V3mzPvgm6Q+n9m98n/e5ZQI+iw6Dby1v43AzApPIIs24/Cbg1GFcRE+h29xpvseJ2v4cxjzQOmjtAgqF5PRyRZvTXIfcqbxUNPdOnI1JYnw8FSSwUp4mklKDzoRRvkw7N0vF6QTwUI4aMRsNZyUQnMhkzb2HMZeJ0RhUMUy1jIP68lRaKUpLSXN7FW5jz+QnqKEoFas37yX6pD8tFpYybpQpv4S3lEGv5KvaV9olNDPwNHUhh1ETex5scpsQOVg8UxAFhI0dCHKPjRIogDorT1aZPzkTuHC9U2oPnQlySRzFxhYkTJYHHIXFt5srNnhBxLDSyV+L2IyF395vnhQflpHCuifv80g3/a+UPIXWNEDEAQEE0HR23weEk6XGnwR1iH3eJu7udbt26fe30I17x/PYH+9iv+CB5qT1v+YhlL5WeS5ZV72RZftvlNF6Wj75Zdn2kHcl6e5Sy/A3D7DsBMP0gd/DkC/Bp9l3gW5Y7a5asWVCm3WcaAFSHnFtxAXivwwAsWf9E25dl+TiwhwIKPVRgD33Ct6wvom0ijKapOBllpkEcf6ZCMsqjyCgjuvKIoajXYgya8vhIJ7rKKnKOP+sxjOPJZmV0DRRHGIZx/KW6npaOvor3M/G+pqalS00TT5q4G7qzPGe4O+wu7mxw59wt8p3LCre//pn/J+iupIwe1HKcpVdXI8c9QB9l9QMDnHVQF8+9xdAw5YzgBmfuHdVh4bj7GKO8cZYxW/UmvHkAeEl5pgncMJt7JzVZzOYaTFGh6WRGEDVJ5pniCDOCWw0Ns3MaLA0NdRijYm+AmQZhXoO1YQFYpBJLqGloGF1W1ZuMfKRSL1OZFVXJyNBlUhhD7evXk6sqZl+/rscaKfUDC68FtYn19Xr64xU+oo7nxQ2FWZ6vxyapuTyEdV5WTgR+HZ3DpGoN9Szzu8Qkzz9CH6kbZhlpa7uELO2gs4I0bOKRJInFC1GyPsMuaanoxPre1n6hbXlvB90dpKkPj4Q9sXAi7gnfcEDaOjqxIxwe5e1vCcforiIdu/gkyyenOSeyrBthqrpxvHV2lF0cHW4d47ySdB3g29bWiSPjZMvZBDvpqzxPZk7Ti9PDLZcyomBHk/PwxJ1ycsgiv4guzrgOz9wexn126EVbNV3oVzLj8zBaEYXqNnjP/G4W8Z8F0GYiKisTPGMZ31kQGKdymGwIhMIeTzgUgM1EZRkHgmGfL8wi01Qe0wQCYSaAESrXNBCJRiN6EYURxKLRmF5E4Q0QjwNvyIAlJBKYIiNegnlJhowBY2RMP9BPBn38SEYtLpKG/+tgQe8M5cY7AAAAAElFTkSuQmCC"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"},function(t,e,i){t.exports=i.p+"static/img/cordova_256.216157e.png"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},,function(t,e,i){function n(t){i(19)}var a=i(0)(i(9),i(41),n,null,null);t.exports=a.exports},function(t,e,i){function n(t){i(21)}var a=i(0)(i(10),i(43),n,"data-v-420d39a9",null);t.exports=a.exports},function(t,e,i){function n(t){i(22)}var a=i(0)(i(11),i(44),n,"data-v-5e74ce9c",null);t.exports=a.exports},function(t,e,i){function n(t){i(18)}var a=i(0)(i(12),i(39),n,"data-v-093da963",null);t.exports=a.exports},function(t,e,i){function n(t){i(24)}var a=i(0)(i(13),i(46),n,"data-v-d5526b78",null);t.exports=a.exports},function(t,e,i){var n=i(0)(i(14),i(40),null,null,null);t.exports=n.exports},function(t,e,i){function n(t){i(23)}var a=i(0)(i(15),i(45),n,"data-v-7605863e",null);t.exports=a.exports},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"middle-centered"},[n("div",{staticClass:"home"},[n("img",{staticClass:"logo",attrs:{src:i(30)}}),t._v(" "),n("img",{staticClass:"logo",attrs:{src:i(29)}}),t._v(" "),n("h4",[t._v(t._s(t.$t("title")))]),t._v(" "),n("v-btn",{nativeOn:{click:function(e){e.stopPropagation(),t.openMenu(e)}}},[t._v(t._s(t.$t("showSample")))])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"middle-centered"},[t.compatible?i("span",[t._v(t._s(t.$t("nfcText.waitingTag")))]):i("span",[t._v(t._s(t.$t("nfcText.notAvailable")))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-toolbar",{staticClass:"primary indigo"}),t._v(" "),i("v-list",{attrs:{dense:""}},[t._l(t.items,function(e,n){return[e.divider?i("v-divider",{key:n,attrs:{dark:""}}):i("v-list-tile",{key:n,attrs:{href:e.action}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1)]})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{toolbar:"","fill-height":""}},[i("v-navigation-drawer",{model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("myContentDrawer")],1),t._v(" "),i("v-toolbar",{staticClass:"primary indigo",attrs:{fixed:""}},[i("v-toolbar-side-icon",{attrs:{dark:""},on:{click:t.toggleOverlay}}),t._v(" "),i("v-toolbar-title",{staticClass:"white--text",on:{click:t.goHome}},[t._v(t._s(t.$t("title")))])],1),t._v(" "),i("main",[i("v-container",{attrs:{fluid:"","pa-0":""}},[i("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"middle-centered"},[i("div",{staticClass:"text-center"},[""!==t.imagePath?i("img",{attrs:{src:t.imagePath}}):t._e(),t._v(" "),i("v-btn",{on:{click:t.takePicture}},[t._v(t._s(t.$t("takePhoto")))])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"middle-centered"},[i("v-btn",{on:{click:t.toggle}},[t._v(t._s(t.btnTitle))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"middle-centered"},[i("v-btn",{on:{click:t.doVibrate}},[t._v(t._s(t.$t("startVibration")))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"map"}}),t._v(" "),t.loading?i("div",{staticClass:"loading elevation-2"},[i("div",[i("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:""}}),t._v(" "),i("br"),i("br"),t._v(" "),i("div",[t._v(t._s(t.$t("getPosition")))])],1)]):t._e()])},staticRenderFns:[]}}],[16]);
//# sourceMappingURL=app.a156eb35f152b1af2019.js.map