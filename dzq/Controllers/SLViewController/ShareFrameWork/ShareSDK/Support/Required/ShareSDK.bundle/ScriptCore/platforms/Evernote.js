var $pluginID = "com.mob.sharesdk.Evernote";eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([3-9a-mo-rt-zA-Z]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 1v="1w-1x://";7 l={"O":"consumer_key","P":"consumer_secret","10":"19","11":"covert_url"};8 e(p){3.12=4;3.1y=4;3.1V=p;3.j={"t":4,"u":4};3.Q=4;3.z="D-E"}e.h.p=8(){k 3.1V};e.h.r=8(){6(3.p()==$5.9.1a.e){k"e"}6(3.z=="D-E"){k"印象笔记"}f{k"1z"}};e.h.L=8(){6(3.j["u"]!=4&&3.j["u"][l.O]!=4){k 3.j["u"][l.O]}f 6(3.j["t"]!=4&&3.j["t"][l.O]!=4){k 3.j["t"][l.O]}k 4};e.h.S=8(){6(3.j["u"]!=4&&3.j["u"][l.P]!=4){k 3.j["u"][l.P]}f 6(3.j["t"]!=4&&3.j["t"][l.P]!=4){k 3.j["t"][l.P]}k 4};e.h.19=8(){6(3.j["u"]!=4&&3.j["u"][l.10]!=4){k 3.j["u"][l.10]}f 6(3.j["t"]!=4&&3.j["t"][l.10]!=4){k 3.j["t"][l.10]}k 1A};e.h.1B=8(){k"1W-J-"+3.p()+"-"+3.L()};e.h.1C=8(){6(3.j["u"]!=4&&3.j["u"][l.11]!=4){k 3.j["u"][l.11]}f 6(3.j["t"]!=4&&3.j["t"][l.11]!=4){k 3.j["t"][l.11]}k $5.9.1C()};e.h.1X=8(M){6(1Y.1D==0){k 3.j["t"]}f{3.j["t"]=3.1E(M)}};e.h.1Z=8(M){6(1Y.1D==0){k 3.j["u"]}f{3.j["u"]=3.1E(M)}};e.h.saveConfig=8(){7 d=3;7 R="1W-J";$5.K.20("21",13,R,8(c){6(c!=4){7 14=c.M;6(14==4){14={}}14["plat_"+d.p()]=d.L();$5.K.22("21",14,13,R,4)}})};e.h.setCurrentLanguage=8(M){3.z=M};e.h.isSupportAuth=8(){k 1A};e.h.1F=8(m,1G){7 g=4;6(3.23()){3.24(m,1G)}f{7 b=4;6(3.z=="D-E"){b="分享平台［"+3.r()+"］应用信息无效!"}f{b="J［"+3.r()+"］1H congfiguration!"}g={"v":$5.9.x.InvaildPlatform,"b":b};$5.A.I(m,$5.9.o.w,g)}};e.h.handleAuthCallback=8(m,T){7 g=4;7 d=3;7 1b=$5.q.parseUrl(T);6(1b!=4&&1b.1c!=4){7 15=$5.q.1I(1b.1c);6(15!=4){d.12=15["16"];7 25=15["26"];7 F=d.17()+"/1x";7 1d={"27":d.L(),"16":d.12,"28":"29-2a","2b":1e(1J 1K().1L()/1M).1f(),"2c":1e(2d.2e()*2f).1f(),"2g":"1.0","26":25};$5.K.2h(d.p(),4,F,"POST",4,4,1d,d.S(),d.1y,8(c){6(c!=4){6(c["v"]!=4){$5.A.I(m,$5.9.o.w,g)}f{7 G=$5.q.2i($5.q.1g(c["1h"]));6(c["2j"]==2k&&G==4){G=$5.q.1I($5.q.1g(c["1h"]));d.2l(m,G)}f{g={"v":$5.9.x.1i,"2m":G};$5.A.I(m,$5.9.o.w,g)}}}f{7 b=4;6(3.z=="D-E"){b="分享平台["+d.r()+"]请求授权失败!"}f{b="J ["+d.r()+"] 1F 2n 2o!"}g={"v":$5.9.x.1i,"b":b};$5.A.I(m,$5.9.o.w,g)}})}f{7 b=4;6(3.z=="D-E"){b="无效的授权回调:["+T+"]"}f{b="1H a F:["+T+"]"}g={"v":$5.9.x.2p,"b":b};$5.A.I(m,$5.9.o.w,g)}}f{7 b=4;6(3.z=="D-E"){b="无效的授权回调:["+T+"]"}f{b="1H a F:["+T+"]"}g={"v":$5.9.x.2p,"b":b};$5.A.I(m,$5.9.o.w,g)}};e.h.2q=8(1c,a){7 g=4;7 d=3;6(1c!=4){7 b=4;6(3.z=="D-E"){b="分享平台［"+d.r()+"］不支持获取其他用户资料!"}f{b="J ["+d.r()+"］do 1k 1l 2r other\'s userInfo!"}g={"v":$5.9.x.1m,"b":b};6(a!=4){a($5.9.o.w,g)}k}3.1n(8(i){6(i!=4&&i.B!=4){$5.K.ssdk_evernoteGetUserInfo(d.17(),i.B.1N,8(c){7 y=c.C;6(c.U==$5.9.o.1o){y={"2s":d.p()};d.2t(y,c.C);6(y["1p"]==i["1p"]){y["B"]=i["B"]}}6(a!=4){a(c.U,y)}})}f{7 1q=$5.9.x.2u;g={"v":1q};6(a){a($5.9.o.w,g)}}})};e.h.2v=8(F,method,15,headers,a){7 b=4;6(3.z=="D-E"){b="平台［"+3.r()+"］不支持调用API功能!"}f{b="J［"+3.r()+"］do 1k 1l 2v feature!"}7 g={"v":$5.9.x.1m,"b":b};6(a!=4){a($5.9.o.w,g)}};e.h.cancelAuthorize=8(){3.1r(4,4)};e.h.addFriend=8(m,i,a){7 b=4;6(3.z=="D-E"){b="平台［"+3.r()+"］不支持添加好友方法!"}f{b="J［"+3.r()+"］do 1k 1l adding friends"}7 g={"v":$5.9.x.1m,"b":b};6(a!=4){a($5.9.o.w,g)}};e.h.getFriends=8(cursor,size,a){7 b=4;6(3.z=="D-E"){b="平台［"+3.r()+"不支持获取好友列表方法!"}f{b="J［"+3.r()+"］do 1k 1l 2r friend list"}7 g={"v":$5.9.x.1m,"b":b};6(a!=4){a($5.9.o.w,g)}};e.h.share=8(m,N,a){7 d=3;7 g=4;7 1s=N!=4?N["@1s"]:4;7 2w={"@1s":1s};7 V=$5.9.18(3.p(),N,"V");7 H=$5.9.18(3.p(),N,"H");7 1O=$5.9.18(3.p(),N,"1O");7 1P=$5.9.18(3.p(),N,"1P");7 1Q=$5.9.18(3.p(),N,"1Q");3.2x([V],8(c){V=c.C[0];d.1n(8(i){6(i!=4&&i.B!=4){d.1R(H,0,8(2y){$5.K.ssdk_evernoteShare($5.q.1t(i.B["1u"]["edam_noteStoreUrl"]),i.B.1N,V,2y,1O,1Q,1P,8(c){7 y=c.C;6(c.U==$5.9.o.1o){y={};y["1u"]=c.C;y["cid"]=c.C!=4?c.C["guid"]:4;y["V"]=c.C!=4?c.C["content"]:4;y["H"]=H}6(a!=4){a(c.U,y,i,2w)}})})}f{7 1q=$5.9.x.2u;g={"v":1q};6(a){a($5.9.o.w,g)}}})})};e.h.2x=8(1S,a){6(3.1C()){7 d=3;3.1n(8(i){$5.9.convertUrl(d.p(),i,1S,a)})}f{6(a){a({"C":1S})}}};e.h.1R=8(H,W,a){6(H.1D>W){7 d=3;3.2z(H[W],8(2A){H[W]=2A;W++;d.1R(H,W,a)})}f{6(a!=4){a(H)}}};e.h.2z=8(F,a){6(!/^(file\\:\\/)?\\//.test(F)){$5.K.downloadFile(F,8(c){6(c.C!=4){6(a!=4){a(c.C)}}f{6(a!=4){a(4)}}})}f{6(a!=4){a(F)}}};e.h.2t=8(i,X){6(i!=4&&X!=4){i["1u"]=X;i["1p"]=X["id"];i["nickname"]=X["username"];i["gender"]=2;i["reg_at"]=X["created"]}};e.h.2l=8(m,Y){7 d=3;7 B={"1p":$5.q.1t(Y["edam_userId"]),"1N":$5.q.1t(Y["16"]),"secret":$5.q.1t(Y["2B"]),"expired":(1J 1K().1L()+Y["edam_expires"]*1M),"1u":Y,"p":$5.9.credentialType.OAuth1x};7 i={"2s":3.p(),"B":B};3.1r(i,8(){d.2q(4,8(U,c){6(U==$5.9.o.1o){c["B"]=i["B"];i=c;d.1r(i,4)}$5.A.I(m,$5.9.o.1o,i)})})};e.h.1r=8(i,a){3.Q=i;7 R=3.1B();$5.K.22("2C",3.Q,13,R,8(c){6(a!=4){a()}})};e.h.1n=8(a){6(3.Q!=4){6(a){a(3.Q)}}f{7 d=3;7 R=3.1B();$5.K.20("2C",13,R,8(c){d.Q=c!=4?c.M:4;6(a){a(d.Q)}})}};e.h.24=8(m,1G){7 d=3;7 g=4;7 F=3.17()+"/1x";7 1d={"27":3.L(),"28":"29-2a","2b":1e(1J 1K().1L()/1M).1f(),"2c":1e(2d.2e()*2f).1f(),"2g":"1.0","oauth_callback":1v};$5.K.2h(3.p(),4,F,"GET",4,4,1d,3.S(),4,8(c){6(c!=4){6(c["v"]!=4){$5.A.I(m,$5.9.o.w,g)}f{7 G=$5.q.2i($5.q.1g(c["1h"]));6(c["2j"]==2k&&G==4){G=$5.q.1I($5.q.1g(c["1h"]));d.12=G["16"];d.1y=G["2B"];7 2D=d.17()+"/OAuth.action?16="+d.12;$5.A.ssdk_openAuthUrl(m,2D,1v)}f{g={"v":$5.9.x.1i,"2m":G};$5.A.I(m,$5.9.o.w,g)}}}f{7 b=4;6(3.z=="D-E"){b="分享平台["+d.r()+"]请求授权失败!"}f{b="J ["+d.r()+"] 1F 2n 2o!"}g={"v":$5.9.x.1i,"b":b};$5.A.I(m,$5.9.o.w,g)}})};e.h.17=8(){6(3.19()){k"1T://19.1w.1U"}f 6(3.p()==$5.9.1a.1z){k"1T://app.yinxiang.1U"}f{k"1T://www.1w.1U"}};e.h.23=8(){6(3.L()!=4&&3.S()!=4){k 1A}$5.A.log("#warning:["+3.r()+"]应用信息有误，不能进行相关操作。请检查本地代码中和服务端的["+3.r()+"]平台应用配置是否有误! \\n本地配置:"+$5.q.2E(3.1X())+"\\n服务器配置:"+$5.q.2E(3.1Z()));k 13};e.h.1E=8(Z){7 L=$5.q.2F(Z[l.O]);7 S=$5.q.2F(Z[l.P]);Z[l.O]=L;Z[l.P]=S;k Z};$5.9.2G($5.9.1a.1z,e);$5.9.2G($5.9.1a.e,e);',[],167,'|||this|null|mob|if|var|function|shareSDK|callback|error_message|data|self|Evernote|else|error|prototype|user|_appInfo|return|EvernoteInfoKeys|sessionId||responseState|type|utils|name||local|server|error_code|Fail|errorCode|resultData|_currentLanguage|native|credential|result|zh|Hans|url|response|images|ssdk_authStateChanged|Platform|ext|consumerKey|value|parameters|ConsumerKey|ConsumerSecret|_currentUser|domain|consumerSecret|callbackUrl|state|text|index|rawData|credentialRawData|appInfo|Sandbox|ConvertUrl|_oauthToken|false|curApps|params|oauth_token|_baseUrl|getShareParam|sandbox|platformType|urlInfo|query|oauthParams|parseInt|toString|base64Decode|response_data|APIRequestFail||not|support|UnsupportFeature|_getCurrentUser|Success|uid|code|_setCurrentUser|flags|urlDecode|raw_data|EvernoteRedirectUri|evernote|oauth|_oauthTokenSecret|YinXiang|true|cacheDomain|convertUrlEnabled|length|_checkAppInfoAvailable|authorize|settings|invalid|parseUrlParameters|new|Date|getTime|1000|token|title|tags|notebook|_convertImages|contents|https|com|_type|SSDK|localAppInfo|arguments|serverAppInfo|getCacheData|currentApp|setCacheData|_isAvailable|_webAuthorize|oauthVerifier|oauth_verifier|oauth_consumer_key|oauth_signature_method|HMAC|SHA1|oauth_timestamp|oauth_nonce|Math|random|100000|oauth_version|ssdk_callOAuthApi|jsonStringToObject|status_code|200|_succeedAuthorize|user_data|request|fail|InvalidAuthCallback|getUserInfo|getting|platform_type|_updateUserInfo|UserUnauth|callApi|userData|_convertUrl|imgs|_getImagePath|imageUrl|oauth_token_secret|currentUser|authUrl|objectToJsonString|trim|registerPlatformClass'.split('|'),0,{}))