webpackJsonp([1],{139:function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=i(26);i(438);var a=function(){function ZoomDirective(e,t){this.element=e,this.renderer=t,this.transitionEndEvent=this.getTransitionEndEvent(),this.isTransitionSupported=this.checkIfTransitionSupported(),this.isZoomActive=!1,this.initialScrollPosition=null,this.WINDOW_HEIGHT_OFFSET=80,this.WINDOW_WIDTH_OFFSET=80,this._imgScaleFactor=0,this._element=this.element.nativeElement}return Object.defineProperty(ZoomDirective.prototype,"zoom",{set:function(e){},enumerable:!0,configurable:!0}),ZoomDirective.prototype.renderZoom=function(e){this.isZoomActive||this._element&&"IMG"==this._element.tagName&&(this._element.width>=window.innerWidth-this.WINDOW_WIDTH_OFFSET||(this.parentDivTag=this.renderer.createElement("div"),this.renderer.addClass(this.parentDivTag,"zoom-img-wrap"),this.renderer.insertBefore(this._element.parentElement,this.parentDivTag,this._element),this.renderer.appendChild(this.parentDivTag,this._element),this.renderer.addClass(this._element,"zoom-img"),this.overlayDivTag=this.renderer.createElement("div"),this.renderer.addClass(this.overlayDivTag,"zoom-overlay"),this.renderer.appendChild(document.body,this.overlayDivTag),this.calculateZoom(),this.triggerAnimation(),this.initialScrollPosition=window.pageYOffset||document.documentElement.scrollTop,this.renderer.listen("document","scroll",this.scrollHandler.bind(this)),this.renderer.listen("document","keyup",this.keyUpHandler.bind(this)),this.renderer.listen("document","click",this.clickHandler.bind(this)),"bubbles"in e?e.bubbles&&e.stopPropagation():e.cancelBubble=!0,this.isZoomActive=!0))},ZoomDirective.prototype.clickHandler=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,"bubbles"in e?e.bubbles&&e.stopPropagation():e.cancelBubble=!0,this.closeActiveZoom(!1)},ZoomDirective.prototype.keyUpHandler=function(e){27==e.keyCode&&this.closeActiveZoom(!1)},ZoomDirective.prototype.scrollHandler=function(e){null===this.initialScrollPosition&&(this.initialScrollPosition=window.pageYOffset||document.documentElement.scrollTop);var t=this.initialScrollPosition-(window.pageYOffset||document.documentElement.scrollTop);Math.abs(t)>=40&&this.closeActiveZoom(!1)},ZoomDirective.prototype.calculateZoom=function(){this._element.offsetWidth;var e=this._element.naturalWidth,t=this._element.naturalHeight,i=e/this._element.width,r=window.innerHeight-this.WINDOW_HEIGHT_OFFSET,n=window.innerWidth-this.WINDOW_WIDTH_OFFSET,o=e/t,a=n/r;this._imgScaleFactor=e<n&&t<r?i:o<a?r/t*i:n/e*i},ZoomDirective.prototype.triggerAnimation=function(){this._element.offsetWidth;var e=window.scrollX,t=e+window.innerHeight/2,i=window.innerWidth/2,r=this._element.getBoundingClientRect().top+this._element.height/2,n=this._element.getBoundingClientRect().left+this._element.width/2,o=t-r,a=i-n,s="scale("+this._imgScaleFactor+")",l="translate("+a+"px, "+o+"px)";this.isTransitionSupported&&(l+=" translateZ(0)"),this.renderer.setStyle(this._element,"transform",s),this.renderer.setStyle(this._element,"-ms-transform",s),this.renderer.setStyle(this._element,"-webkit-transform",s),this.renderer.setStyle(this.parentDivTag,"transform",l),this.renderer.setStyle(this.parentDivTag,"-ms-transform",l),this.renderer.setStyle(this.parentDivTag,"-webkit-transform",l),this.renderer.addClass(document.body,"zoom-overlay-open")},ZoomDirective.prototype.closeActiveZoom=function(e){this.isZoomActive&&(e?this.disposeZoom():this.unZoom(),this.initialScrollPosition=null,document.removeEventListener("scroll",this.scrollHandler,!0),document.removeEventListener("click",this.clickHandler,!0),document.removeEventListener("keyup",this.keyUpHandler,!0),this.isZoomActive=!1)},ZoomDirective.prototype.unZoom=function(){if(this.renderer.removeClass(document.body,"zoom-overlay-open"),this.renderer.addClass(document.body,"zoom-overlay-transitioning"),this.renderer.setStyle(this._element,"transform",""),this.renderer.setStyle(this._element,"-ms-transform",""),this.renderer.setStyle(this._element,"-webkit-transform",""),this.renderer.setStyle(this.parentDivTag,"transform",""),this.renderer.setStyle(this.parentDivTag,"-ms-transform",""),this.renderer.setStyle(this.parentDivTag,"-webkit-transform",""),!this.isTransitionSupported)return this.disposeZoom();this.emulateTransitionEnd(this._element,300,this.disposeZoom.bind(this))},ZoomDirective.prototype.disposeZoom=function(){this.parentDivTag&&this.parentDivTag.parentNode&&(this.renderer.removeClass(this._element,"zoom-img"),this.parentDivTag.parentNode.replaceChild(this._element,this.parentDivTag),this.overlayDivTag.parentNode.removeChild(this.overlayDivTag),this.renderer.removeClass(document.body,"zoom-overlay-transitioning"))},ZoomDirective.prototype.checkIfTransitionSupported=function(){var e=document.body.style;return void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.OTransition||void 0!==e.transition},ZoomDirective.prototype.emulateTransitionEnd=function(e,t,i){var r=this,n=!1,o=function(e){i(),n=!0,e.target.removeEventListener(e.type,o)};this.element.nativeElement.addEventListener(this.transitionEndEvent,o);var a=function(){n||e.dispatchEvent(new Event(r.transitionEndEvent))};setTimeout(a,t)},ZoomDirective.prototype.getTransitionEndEvent=function(){var e=this.renderer.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==e.style[i])return this.renderer.destroyNode(e),t[i]},ZoomDirective}();r([o.Input("zoom"),n("design:type",Object),n("design:paramtypes",[Object])],a.prototype,"zoom",null),r([o.HostListener("click",["$event"]),n("design:type",Function),n("design:paramtypes",[Object]),n("design:returntype",Object)],a.prototype,"renderZoom",null),a=r([o.Directive({selector:"img[zoom]"}),n("design:paramtypes",[o.ElementRef,o.Renderer2])],a),t.ZoomDirective=a},274:function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};Object.defineProperty(t,"__esModule",{value:!0});var n=i(26),o=i(98),a=i(280),s=i(282),l=function(){function AppModule(){}return AppModule}();l=r([n.NgModule({imports:[o.BrowserModule,s.ZoomModule],declarations:[a.AppComponent],bootstrap:[a.AppComponent]})],l),t.AppModule=l},280:function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};Object.defineProperty(t,"__esModule",{value:!0});var n=i(26);i(437);var o=function(){function AppComponent(){}return AppComponent}();o=r([n.Component({selector:"my-app",template:i(441),styles:[i(443)]})],o),t.AppComponent=o},281:function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};Object.defineProperty(t,"__esModule",{value:!0});var n=i(26),o=i(75),a=i(139),s=function(){function ZoomModule(){}return ZoomModule}();s=r([n.NgModule({imports:[o.CommonModule],declarations:[a.ZoomDirective],exports:[a.ZoomDirective]})],s),t.ZoomModule=s},282:function(e,t,i){"use strict";function __export(e){for(var i in e)t.hasOwnProperty(i)||(t[i]=e[i])}Object.defineProperty(t,"__esModule",{value:!0}),__export(i(281)),__export(i(139))},437:function(e,t){},438:function(e,t){},439:function(e,t,i){e.exports=i.p+"angular-zoom.github.io/palm1.f1224ebcc42b44226aa414bce80fd715.jpg"},440:function(e,t,i){e.exports=i.p+"angular-zoom.github.io/trees1.550bf5a18fa80308ccc9bc8cb817a9fa.jpeg"},441:function(e,t,i){e.exports='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n\n  <style>\n    /* SIMPLE DEMO STYLES */\n    body {\n      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\n      font-size: 12px;\n      line-height: 1.6;\n    }\n    .container {\n      margin: 50px;\n      max-width: 700px;\n    }\n    .container img {\n      width: 100%;\n    }\n    .container .pull-left {\n      width: 55%;\n      float: left;\n      margin: 20px 20px 20px -80px;\n    }\n    @media (min-width: 750px) {\n      body {\n        font-size: 16px;\n        line-height: 1.6;\n      }\n      .container {\n        margin: 100px auto;\n      }\n    }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <h1>Image Zoom</h1>\n    <p>\n      Trust fund seitan chia, wolf lomo letterpress Bushwick before they sold out. Carles kogi fixie, squid twee Tonx readymade cred typewriter scenester locavore kale chips vegan organic. Meggings pug wolf Shoreditch typewriter skateboard. McSweeney\'s iPhone chillwave, food truck direct trade disrupt flannel irony tousled Cosby sweater single-origin coffee. Organic disrupt bicycle rights, tattooed messenger bag flannel craft beer fashion axe bitters. Readymade sartorial craft beer, quinoa sustainable butcher Marfa Echo Park Terry Richardson gluten-free flannel retro cred mlkshk banjo. Salvia 90\'s art party Blue Bottle, PBR&B cardigan 8-bit.\n    </p>\n    <p>\n      Meggings irony fashion axe, tattooed master cleanse Blue Bottle stumptown bitters authentic flannel freegan paleo letterpress ugh sriracha. Wolf PBR&B art party aesthetic meh cliche. Sartorial before they sold out deep v, aesthetic PBR&B craft beer post-ironic synth keytar pork belly skateboard pour-over. Tonx cray pug Etsy, gastropub ennui wolf ethnic Odd Future viral master cleanse skateboard banjo. Pitchfork scenester cornhole, whatever try-hard ethnic banjo +1 gastropub American Apparel vinyl skateboard Shoreditch seitan. Blue Bottle keffiyeh Austin Helvetica art party. Portland ethnic fixie, beard retro direct trade ugh scenester Tumblr readymade authentic plaid pickled hashtag biodiesel.\n    </p>\n    <img src="'+i(439)+"\" zoom>\n    <p>\n      Thundercats freegan Truffaut, four loko twee Austin scenester lo-fi seitan High Life paleo quinoa cray. Schlitz butcher ethical Tumblr, pop-up DIY keytar ethnic iPhone PBR sriracha. Tonx direct trade bicycle rights gluten-free flexitarian asymmetrical. Whatever drinking vinegar PBR XOXO Bushwick gentrify. Cliche semiotics banjo retro squid Wes Anderson. Fashion axe dreamcatcher you probably haven't heard of them bicycle rights. Tote bag organic four loko ethical selfies gastropub, PBR fingerstache tattooed bicycle rights.\n    </p>\n    <p>\n      Ugh Portland Austin, distillery tattooed typewriter polaroid pug Banksy Neutra keffiyeh. Shoreditch mixtape wolf PBR&B, tote bag dreamcatcher literally bespoke Odd Future selfies 90's master cleanse vegan. Flannel tofu deep v next level pickled, authentic Etsy Shoreditch literally swag photo booth iPhone pug semiotics banjo. Bicycle rights butcher Blue Bottle, actually DIY semiotics Banksy banjo mixtape Austin pork belly post-ironic. American Apparel gastropub hashtag, McSweeney's master cleanse occupy High Life bitters wayfarers next level bicycle rights. Wolf chia Terry Richardson, pop-up plaid kitsch ugh. Butcher +1 Carles, swag selfies Blue Bottle viral.\n    </p>\n    <p>\n      Keffiyeh food truck organic letterpress leggings iPhone four loko hella pour-over occupy, Wes Anderson cray post-ironic. Neutra retro fixie gastropub +1, High Life semiotics. Vinyl distillery Etsy freegan flexitarian cliche jean shorts, Schlitz wayfarers skateboard tousled irony locavore XOXO meh. Ethnic Wes Anderson McSweeney's messenger bag, mixtape XOXO slow-carb cornhole aesthetic Marfa banjo Thundercats bitters. Raw denim banjo typewriter cray Tumblr, High Life single-origin coffee. 90's Tumblr cred, Terry Richardson occupy raw denim tofu fashion axe photo booth banh mi. Trust fund locavore Helvetica, fashion axe selvage authentic Shoreditch swag selfies stumptown +1.\n    </p>\n      <img src=\""+i(440)+"\" class=\"pull-left\" zoom>\n    <p>\n      Scenester chambray slow-carb, trust fund biodiesel ugh bicycle rights cornhole. Gentrify messenger bag Truffaut tousled roof party pork belly leggings, photo booth jean shorts. Austin readymade PBR plaid chambray. Squid Echo Park pour-over, wayfarers forage whatever locavore typewriter artisan deep v four loko. Locavore occupy Neutra Pitchfork McSweeney's, wayfarers fingerstache. Actually asymmetrical drinking vinegar yr brunch biodiesel. Before they sold out sustainable readymade craft beer Portland gastropub squid Austin, roof party Thundercats chambray narwhal Bushwick pug.\n    </p>\n    <p>\n      Literally typewriter chillwave, bicycle rights Carles flannel wayfarers. Biodiesel farm-to-table actually, locavore keffiyeh hella shabby chic pour-over try-hard Bushwick. Sriracha American Apparel Brooklyn, synth cray stumptown blog Bushwick +1 VHS hashtag. Wolf umami Carles Marfa, 90's food truck Cosby sweater. Fanny pack try-hard keytar pop-up readymade, master cleanse four loko trust fund polaroid salvia. Photo booth kitsch forage chambray, Carles scenester slow-carb lomo cardigan dreamcatcher. Swag asymmetrical leggings, biodiesel Tonx shabby chic ethnic master cleanse freegan.\n    </p>\n    <p>\n      Raw denim Banksy shabby chic, 8-bit salvia narwhal fashion axe. Ethical Williamsburg four loko, chia kale chips distillery Shoreditch messenger bag swag iPhone Pitchfork. Viral PBR&B single-origin coffee quinoa readymade, ethical chillwave drinking vinegar gluten-free Wes Anderson kitsch Tumblr synth actually bitters. Butcher McSweeney's forage mlkshk kogi fingerstache. Selvage scenester butcher Shoreditch, Carles beard plaid disrupt DIY. Pug readymade selvage retro, Austin salvia vinyl master cleanse flexitarian deep v bicycle rights plaid Terry Richardson mlkshk pour-over. Trust fund try-hard banh mi Brooklyn, 90's Etsy kogi YOLO salvia.\n    </p>\n\n  </div>\n</body>\n</html>"},443:function(e,t){e.exports="main {\n  padding: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  margin-top: 50px;\n  display: block;\n  color: greenyellow; }\n"},737:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(99),n=i(26),o=i(274);n.enableProdMode(),r.platformBrowserDynamic().bootstrapModule(o.AppModule)}},[737]);
