//*******************************
//      Apycom DHTML Menu 2.72
//         dhtml-menu.com
//    (c) Apycom Software, 2004
//         www.apycom.com
//*******************************

//////////////////////////////////////////////
// Obfuscated by Javascript Obfuscator 2.19 //
// http://javascript-source.com             //
//////////////////////////////////////////////

var lll=0,Illl=0,l1l1=0,Il=0,IIl=0,Ill1l=0,ll1=0,lIIlI=0,l1lI=0,lI11=0,lI111=0,lI11I=/apy([0-9]+)m([0-9]+)/,I1I1l=/apy([0-9]+)m([0-9]+)i([0-9]+)/,II=0,l1I1=0,IIl1=0,ll=[],I1l1=[],lIll=false,lI1II,l11II,lI,II1,II1I=-1,l1Il1=null,II11="",llIll="",l1Ill=1000,I1I;lIlla();if(!(IIl&&ll1<6))var Il1I="px";else var Il1I="";function IlIa(){var sx=lI11?I1I.scrollLeft:pageXOffset,sy=lI11?I1I.scrollTop:pageYOffset;return[sx,sy]};function l111a(I1l){with(I1l)return[(Il)?left:parseInt(style.left),(Il)?top:parseInt(style.top)];};function III1a(I1l,nx,ny){with(I1l){if(Il){left=nx;top=ny;}else{style.left=nx;style.top=ny;};};};function IIIla(){if(lIll)return;for(var j=0;j<ll.length;++j)if(ll[j]&&ll[j].lIII&&ll[j].II1l1){var l1II1=l1I1l("apy"+j+"m0"),ll11=l111a(l1II1),l1I=IlIa(),l=l1I[0]+ll[j].left,t=l1I[1]+ll[j].top;if(ll11[0]!=l||ll11[1]!=t){var dx=(l-ll11[0])/ll[j].Il11,dy=(t-ll11[1])/ll[j].Il11;if(!Il)with(Math){if(abs(dx)<1)dx=abs(dx)/dx;if(abs(dy)<1)dy=abs(dy)/dy;}else{if(dx>-1&&dx<0)dx=-1;else if(dx>0&&dx<1)dx=1;if(dy>-1&&dy<0)dy=-1;else if(dy>0&&dy<1)dy=1;};III1a(l1II1,ll11[0]+((ll11[0]!=l)?dx:0),ll11[1]+((ll11[1]!=t)?dy:0));IIla(ll[j]);};};};var crossType=1;function apy_onload(){if(Ill1l)I1I=document.body;else I1I=(document.compatMode=="CSS1Compat")?document.documentElement:document.body;if(Il)document.layers[0].visibility="show";if(!(IIl&&ll1<6))for(var j=0;j<ll.length;++j)if(ll[j]&&!ll[j].I1I1&&ll[j].lIII&&ll[j].II1l1){window.setInterval("IIIla()",20);break;};II11="";llIll="";lI111=1;lllla();if(l1Il1)l1Il1();onerror=IlIla;};var lIl1=0,lII1="",lll1=0,llI1=1,lllI=0;function apy_initFrame(I1llI,lII1l,subFrameInd,view){if(Il||(IIl&&ll1<7)||(lll&&ll1<5)){lIl1=0;crossType=1;}else{lIl1=1;crossType=1;lII1=I1llI;lll1=lII1l;llI1=subFrameInd;lllI=view;II=1000;};apy_init();};function Illla(){if(window.attachEvent)window.attachEvent("onload",apy_onload);else{l1Il1=(typeof(onload)=='function')?onload:null;onload=apy_onload;};};var IlIl1,l1l1I;function llI1a(){if(typeof(popupMode)=="undefined"||Il)popupMode=0;IlIl1=(absolutePos||popupMode)?"absolute":"static";l1l1I=(Il)?"show":((popupMode)?"hidden":"visible");if(typeof(pressedItem)=="undefined")pressedItem=-2;else if(pressedItem>=0)II1I=pressedItem;if(Il){separatorWidth=" "+separatorWidth;separatorHeight=" "+separatorHeight;separatorVWidth=" "+separatorVWidth;separatorVHeight=" "+separatorVHeight;if(separatorWidth.indexOf("%")>=0)separatorWidth=separatorWidth.substring(0,separatorWidth.indexOf("%"));if(separatorHeight.indexOf("%")>=0)separatorHeight="";if(separatorVWidth.indexOf("%")>=0)separatorVWidth="1";if(separatorVHeight.indexOf("%")>=0)separatorVHeight="1";};if(typeof(lIl1)=="undefined")lIl1=0;if(typeof(lll1)=="undefined")lll1=0;if(typeof(llI1)=="undefined")llI1=1;if(typeof(lllI)=="undefined")lllI=0;if(typeof(lII1)=="undefined")lII1="";if(typeof(shadowTop)=="undefined")shadowTop=1;if(typeof(cssStyle)=="undefined")cssStyle=0;if(typeof(transOptions)=="undefined")transOptions="";if(typeof(cssClass)=="undefined"||Il){cssStyle=0;cssClass="";};if(typeof(pathPrefix)=="undefined")pathPrefix="";if(typeof(DX)=="undefined")DX=-5;if(typeof(DY)=="undefined")DY=0;if(typeof(topDX)=="undefined")topDX=0;if(typeof(topDY)=="undefined")topDY=0;if(typeof(saveNavigationPath)=="undefined")saveNavigationPath=1;};function lI1la(){for(var i=0;i<menuItems.length&&typeof(menuItems[i])!="undefined";i++)menuItems[i][0]='|'+menuItems[i][0];var IlI1I=[[""]];menuItems=IlI1I.concat(menuItems);};function I1Ia(pathArr){var arr=[""];for(var i=0;i<pathArr.length;i++)if(pathArr[i])arr[i]=pathPrefix+pathArr[i];return arr;};function apy_init(){if(!II||II==1000)Illla();if(Il&&II>0)return;var III1="";llI1a();ll[II]={llIl:[],IlI:II,id:"apy"+II,llla:null,left:posX,top:posY,lIII:floatable,l1ll1:movable,II1l1:absolutePos,Il11:(floatIterations<=0)?6:floatIterations,IlIIl:pressedItem,llI:0,lIl:II1I,I1I1:lIl1,Il1I1:lll1,l1l:llI1,I11I1:lllI,lI1l:lII1,popup:popupMode,css:cssStyle,cssClassName:cssClass,saveNavigation:saveNavigationPath};var lllIl=ll[II],Il1l,lI1a="",l1lIl=statusString,I1lII=-1,l1ll;if(popupMode)lI1la();var I1111=null,lIll1,I1lI,lI1I=null,ll1I=null,l11I=null,l1II=null,IIlI=null,IIlI1=null,IllI1=null,I1lI1=null,lI1lI=null,Ill1I=null,I111I=null,lIlI1=null,icons=null,ll1ll=null,l11ll=null,I1l1l=null,lllI1=null,l1Il=null;IIlIl=[l11lI(arrowImageMain[0],""),l11lI(arrowImageMain[1],"")];IllIl=[l11lI(arrowImageSub[0],""),l11lI(arrowImageSub[1],"")];Il1Il=[l11lI(itemBackImage[0],""),l11lI(itemBackImage[1],"")];IIlll="0px";Illll=[fontColor[0],l11lI(fontColor[1],"")];I1lll=[fontStyle,fontStyle];lIlll=[fontDecoration[0],l11lI(fontDecoration[1],"")];I1IlI=[itemBackColor[0],l11lI(itemBackColor[1],"")];gborws=itemBorderWidth;II1lI=[itemBorderColor[0],l11lI(itemBorderColor[1],"")];lllll=[itemBorderStyle[0],l11lI(itemBorderStyle[1],"")];var I1I11="",lIl1l="";if(typeof(menuBorderStyle)=="object"&&menuBorderStyle.length==1)menuBorderStyle=menuBorderStyle[0];for(var i=0;(i<menuItems.length&&typeof(menuItems[i])!="undefined");i++){l1ll=0;while(menuItems[i][0].charAt(l1ll)=="|")l1ll++;if(l1ll>0)menuItems[i][0]=menuItems[i][0].substring(l1ll,menuItems[i][0].length);lIll1=l11lI(menuItems[i][7],"");l1Ia=(lIll1)?parseInt(lIll1):-1;if(!cssStyle){lI1I=I1l1I("menuBorderWidth",l1Ia,"submenu",menuBorderWidth);ll1I=I1l1I("menuBorderStyle",l1Ia,"submenu",menuBorderStyle);l11I=I1l1I("menuBorderColor",l1Ia,"submenu",menuBorderColor);l1II=I1l1I("menuBackColor",l1Ia,"submenu",menuBackColor);IIlI=pathPrefix+I1l1I("menuBackImage",l1Ia,"submenu",menuBackImage);}else I1111=I1l1I("CSS",l1Ia,"submenu",cssClass);if(I1lII<l1ll){if(i>0)lI1a="m"+Il1l.Il111+"i"+Il1l.i[IIl1].I1II1;l1I1=lllIl.llIl.length;IIl1=0;lllIl.llIl[l1I1]={i:[],IlI:II,Il111:l1I1,id:"apy"+II+"m"+l1I1,I1:"",lIla:null,llll:"apy"+II+lI1a,lI1I1:l1ll,II11a:(l1ll>1)?DX:topDX,Il11a:(l1ll>1)?DY:topDY,I1lIl:0,III1I:0,Illl1:lI1I,I11I:ll1I,IIl1l:l11I,I1ll:!i?isHorizontal:0,l11a:"",I1ll1:"",ll1I1:l1II,ll1l:IIlI,Il1lI:!i?100:transparency,I11Il:!i?0:transition?transition:1,l1I1l:transition?transDuration:0,lI1l1:shadowColor,ll1l1:shadowLen,l11I1:l11lI(menuWidth,"0px"),l1I1I:"",cssClassName:I1111};Il1l=ll[II].llIl[l1I1];};if(I1lII>l1ll){while(ll[II].llIl[l1I1].lI1I1>l1ll)l1I1--;Il1l=ll[II].llIl[l1I1];};I1lII=l1ll;if(!statusString||statusString=="link")l1lIl=l11lI(menuItems[i][1],"");else if(statusString=="text")l1lIl=l11lI(menuItems[i][0],"");IIl1=Il1l.i.length;ll1II="apy"+II+"m"+l1I1+"i"+IIl1;if(menuItems[i][0]=="-")ll1II+="sep";I1lI=l11lI(menuItems[i][6],"");l1Ia=(I1lI)?parseInt(I1lI):-1;icons=I1Ia([l11lI(menuItems[i][2],""),l11lI(menuItems[i][3],"")]);ll1ll=I1Ia(I1l1I("arrowImageMain",l1Ia,"item",IIlIl));l11ll=I1Ia(I1l1I("arrowImageSub",l1Ia,"item",IllIl));I1l1l=I1Ia(I1l1I("itemBackImage",l1Ia,"item",Il1Il));lllI1=I1l1I("itemWidth",l1Ia,"item",IIlll);if(!cssStyle){IIlI1=I1l1I("fontColor",l1Ia,"item",Illll);IllI1=I1l1I("fontStyle",l1Ia,"item",I1lll);I1lI1=I1l1I("fontDecoration",l1Ia,"item",lIlll);lI1lI=I1l1I("itemBackColor",l1Ia,"item",I1IlI);Ill1I=I1l1I("itemBorderColor",l1Ia,"item",II1lI);I111I=I1l1I("itemBorderWidth",l1Ia,"item",gborws);lIlI1=I1l1I("itemBorderStyle",l1Ia,"item",lllll);}else l1Il=I1l1I("CSS",l1Ia,"item",cssClass);lIl1l=l11lI(menuItems[i][5],"");if(lIl1l=="_")lIl1l=0;else lIl1l=1;I1I11=l11lI(menuItems[i][5],"_self");if(I1I11=="_self"&&itemTarget!="")I1I11=itemTarget;IIIl1=l11lI(menuItems[i][1],"");if(IIIl1&&IIIl1.toLowerCase().indexOf("javascript:")!=0&&pathPrefix)IIIl1=pathPrefix+IIIl1;if(!l1ll)itemAlign_=itemAlign;else itemAlign_=subMenuAlign;Il1l.i[IIl1]={IlI:II,Il111:l1I1,I1II1:IIl1,id:ll1II,IlII:"",text:menuItems[i][0],I1l11:IIIl1,lIl11:I1I11,status:l1lIl,IlIII:l11lI(menuItems[i][4],""),align:itemAlign_,lI1Il:"middle",cursor:itemCursor?itemCursor:"hand",I11lI:lIl1l,IIll1:itemSpacing,I1ll1:itemPadding,I1Il:IIlI1,font:IllI1,l11l:I1lI1,ll1I1:lI1lI,ll1l:I1l1l,IIlII:["",""],I111:icons,IlII1:l1ll?iconWidth:iconTopWidth,IIl1I:l1ll?iconHeight:iconTopHeight,I1II:ll1ll,llII:l11ll,lIIl:arrowWidth,l1l11:arrowHeight,IIl1l:Ill1I,Illl1:I111I,I11I:lIlI1,I1IIl:false,width:lllI1,cssClassName:l1Il,lIlI:0};if(!Il1l.i[IIl1].I111[0]&&Il1l.i[IIl1].I111[1])Il1l.i[IIl1].I111[0]=blankImage;if(Il1l.i[IIl1].I111[0]!="")Il1l.I1lIl=1;};var II1ll;for(var i=1;i<ll[II].llIl.length;i++){II1ll=Il1a(ll[II].llIl[i].llll);II1ll.IlII=ll[II].llIl[i].id;ll[II1ll.IlI].llIl[II1ll.Il111].III1I=1;};var lIlII=ll[II].llIl.length,I1Il1,IlI11,ll11a;for(var IIIl=0;IIIl<lIlII;IIIl++){var lI1=ll[II].llIl[IIIl];if(Il){if(IlIl1=="absolute"&&!IIIl)II11+="<LAYER POSITION="+IlIl1+" left="+ll[II].left+" top="+ll[II].top+" ID="+lI1.id+" VISIBILITY=HIDE Z-INDEX="+l1Ill+">";else II11+="<LAYER POSITION="+IlIl1+" ID="+lI1.id+" VISIBILITY=HIDE Z-INDEX="+l1Ill+">";II11+="<TABLE CELLSPACING=0 CELLPADDING="+itemSpacing+" "+(IIIl?"":"WIDTH="+lI1.l11I1)+" ";II11+="BORDER="+lI1.Illl1+" BGCOLOR="+lI1.ll1I1+" BACKGROUND='"+lI1.ll1l+"'>";for(var I1II1=0;I1II1<lI1.i.length;I1II1++){var l1=lI1.i[I1II1];II11+=lI1.I1ll?"":"<TR>";II11+="<TD NOWRAP WIDTH="+((IIIl||!lI1.I1ll)?"100%":"")+'>';II11+="<ILAYER ID="+l1.id+" Z-INDEX=10 WIDTH=100%>";II11+="<LAYER ID="+l1.id+"I WIDTH=100%><FONT STYLE='font-size:1pt'>";for(var jj=0;jj<2;jj++){II11+="<LAYER ID="+l1.id+"IW"+jj+" VISIBILITY="+(jj?"HIDE":"SHOW")+" BGCOLOR="+l1.ll1I1[0]+" height=1 ";II11+="onMouseOver='Il1Ia(event,\""+l1.id+"\");' onMouseOut='ll1Ia(event,\""+l1.id+"\");'>";if(l1.text=="-"){if(itemBorderWidth>0){II11+="<TABLE WIDTH=100% BORDER=0 CELLSPACING=0 CELLPADDING=0 BGCOLOR="+itemBorderColor[0]+" height=1><TR><TD NOWRAP width=1 height=1>";II11+="<TABLE WIDTH=100% BORDER=0 CELLSPACING="+(itemBorderWidth-2)+" CELLPADDING="+(itemBorderWidth)+" height=1><TR><TD  height=1 NOWRAP width=1>";};II11+="<TABLE WIDTH=100% BORDER=0 height=1 CELLSPACING=0 CELLPADDING="+l1.I1ll1+" BGCOLOR="+l1.ll1I1[0]+" BACKGROUND='"+l1.ll1l[0]+"'>";II11+="<TD NOWRAP width=100% VALIGN=middle align="+((separatorAlignment=="")?"center":separatorAlignment)+" >";II11+="<FONT STYLE='font-size:1pt'>";IllII=l1.id.indexOf("m");IIa=l1.id.indexOf("i");st=parseInt(l1.id.substring(IllII+1,IIa));if(st>0){if(separatorImage!="")II11+="<img src='"+separatorImage+"' width="+((separatorWidth=="")?"50":separatorWidth)+" height="+((separatorHeight=="")?"1":separatorHeight)+">";else II11+="<img src='"+blankImage+"' width=0 height=0>";}else{if(separatorVImage!="")II11+="<img src='"+separatorVImage+"' width="+((separatorVWidth=="")?"1":separatorVWidth)+" height="+((separatorVHeight=="")?"1":separatorVHeight)+">";else II11+="<img src='"+blankImage+"' width=0 height=0>";};II11+="</FONT></TD></TABLE>";if(itemBorderWidth>0){II11+="</TR></TD></TABLE>";II11+="</TR></TD></TABLE>";};}else{if(itemBorderWidth>0){II11+="<TABLE WIDTH=100% BORDER=0 CELLSPACING=0 CELLPADDING=0 BGCOLOR="+itemBorderColor[jj]+"><TD NOWRAP width=1>";II11+="<TABLE WIDTH=100% BORDER=0 CELLSPACING="+(itemBorderWidth-2)+" CELLPADDING="+(itemBorderWidth)+"><TD NOWRAP width=1>";};II11+="<TABLE WIDTH=100% BORDER=0 CELLSPACING=0 CELLPADDING="+l1.I1ll1+" BGCOLOR="+l1.ll1I1[jj]+" BACKGROUND='"+l1.ll1l[jj]+"'>";if(jj&&!l1.I111[jj])l1.I111[jj]=l1.I111[0];II11+="<TD NOWRAP ALIGN=LEFT VALIGN=MIDDLE WIDTH="+((l1.I111[0]||l1.I111[1])?l1.IlII1:1)+">"+IIIa(l1.I111[jj],l1.id+"ICO",l1.IlII1,l1.IIl1I)+"</TD>";if(l1.text){II11+="<TD NOWRAP WIDTH=100% ALIGN="+l1.align+" VALIGN="+l1.lI1Il+">";II11+="<a id='"+l1.id+"A"+jj+"' TARGET='"+l1.lIl11+"' href=\"#\" onClick='I11Ia(event,\""+l1.id+"\");'>";II11+="<FONT STYLE='font:"+l1.font[jj]+";color: "+l1.I1Il[jj]+";text-decoration:"+l1.l11l[jj]+";'>";II11+=l1.text+"</FONT></a></TD>";};if((IIIl?l1.llII[0]:l1.I1II[0])&&l1.IlII){II11+="<TD WIDTH="+l1.lIIl+" NOWRAP ALIGN=RIGHT VALIGN=MIDDLE>";II11+=IIIa(IIIl?l1.llII[jj]:l1.I1II[jj],l1.id+"ARR",l1.lIIl,l1.l1l11)+"</TD>";};II11+="</TABLE>";if(itemBorderWidth>0){II11+="</TD></TABLE>";II11+="</TD></TABLE>";};};II11+="</LAYER>";};II11+="</FONT></LAYER></ILAYER></TD>"+(lI1.I1ll?"":"</TR>");};II11+="</TABLE></LAYER>";}else{II11+=lll?"<TABLE CELLPADDING="+lI1.ll1l1+" CELLSPACING=0 ":"<DIV ";II11+=" ID="+lI1.id+" STYLE='width:";if(Illl)II11+=(IIIl?(Illl?"0px":"1px"):lI1.l11I1)+";";else II11+=(IIIl?"0px":lI1.l11I1)+";";if(IIIl||(!IIIl&&shadowTop))II11+=II1la(lI1);II11+=" position:"+IlIl1+";left:"+ll[II].left+"px; top:"+ll[II].top+"px;";II11+="z-index:"+l1Ill+";visibility:"+l1l1I+"'>";II11+=lll?"<TD>":"";II11+="<TABLE ID="+lI1.id+"TB CELLPADDING=0 CELLSPACING=0";if(!cssStyle){II11+=" STYLE='width:"+(IIIl?(Illl?"0px":"1px"):lI1.l11I1);II11+=";border-style:"+lI1.I11I+";border-width:"+lI1.Illl1+"px;";II11+="border-color:"+lI1.IIl1l+";background:"+lI1.ll1I1+";margin:0px;";II11+="background-image:url("+lI1.ll1l+");background-repeat:repeat'>";}else II11+=" class='"+lI1.cssClassName+"'>";if(!IIIl&&movable)IlI1a(lI1.I1ll,lI1.id);for(var I1II1=0;I1II1<lI1.i.length;I1II1++){var l1=lI1.i[I1II1];III1="";III1+=lI1.I1ll?"":"<TR ID="+l1.id+"TR>";III1+="<TD ID="+l1.id+" NOWRAP VALIGN=MIDDLE HEIGHT=100% "+((l1.width&&l1.text!="-")?"WIDTH="+l1.width:"");III1+=" STYLE='padding:"+l1.IIll1+"px;'>";III1+="<TABLE ID=\""+l1.id+"I\" CELLSPACING=0 CELLPADDING=0 HEIGHT=100% WIDTH=100% BORDER=0 TITLE='"+l1.IlIII+"'";if(!cssStyle){III1+=" STYLE='border-style:"+l1.I11I[0]+";border-width:"+l1.Illl1+"px;margin:0px;";III1+="border-color:"+l1.IIl1l[0]+";background-color:"+l1.ll1I1[0]+";";if(l1.text!="-")III1+="cursor:"+((l1.cursor=="hand")?(lll?"hand":"pointer"):l1.cursor)+";";if(!l1l1||(l1l1&&ll1>=7))III1+="font:"+l1.font[0]+";text-decoration:"+l1.l11l[0]+";color:"+l1.I1Il[0]+";";III1+="background-image:url("+l1.ll1l[0]+");background-repeat:repeat;' ";}else III1+=" class='"+l1.cssClassName[0]+"'";if(ll[II].I1I1&&IIIl&&crossType==1){I1Il1="parent.frames["+ll[II].Il1I1+"]";IlI11="onMouseOver='"+I1Il1+".Il1Ia(event,\""+l1.id+"I\");' onMouseOut='"+I1Il1+".ll1Ia(event,\""+l1.id+"I\");'";ll11a=((l1.text=="-")?">":"onClick='"+I1Il1+".I11Ia(event,\""+l1.id+"I\");'>");}else{IlI11="onMouseOver='Il1Ia(event,\""+l1.id+"I\");' onMouseOut='ll1Ia(event,\""+l1.id+"I\");'";ll11a=((l1.text=="-")?">":"onClick='I11Ia(event,\""+l1.id+"I\");'>");};if(l1.text=="-"){III1+=IlI11+ll11a;III1+="<TD ID="+l1.id+"ITD NOWRAP width=100% align="+((!separatorAlignment)?"center":separatorAlignment);III1+=((!cssStyle)?" STYLE='color:"+l1.I1Il[0]+";padding:"+l1.I1ll1+"px;'><FONT STYLE='font-size:1'>":">");if(IIIl>0){if(separatorImage)III1+=lll1a(separatorImage,separatorWidth,separatorHeight)}else if(separatorVImage)III1+=lll1a(separatorVImage,separatorVWidth,separatorVHeight);III1+="</FONT></TD>";}else{III1+=IlI11+ll11a;if(l1.I111[0]||l1.I111[1]){III1+="<TD ID="+l1.id+"IITD WIDTH="+l1.IlII1+" NOWRAP ALIGN=CENTER VALIGN=MIDDLE HEIGHT=100% ";III1+="STYLE='padding:"+l1.I1ll1+"px'>";III1+=IIIa(l1.I111[0],l1.id+"ICO",l1.IlII1,l1.IIl1I)+"</TD>";};if(l1.text){III1+="<TD ID="+l1.id+"ITD NOWRAP ALIGN="+l1.align+" VALIGN="+l1.lI1Il+" width=100% ";III1+="STYLE='padding:"+l1.I1ll1+"px;'>";if(l1l1&&(ll1<7))III1+="<FONT id=\""+l1.id+"ITX\" STYLE='font:"+l1.font[0]+";text-decoration:"+l1.l11l[0]+";color:"+l1.I1Il[0]+";'>"+l1.text+"</FONT>";else III1+=l1.text;III1+="</TD>";};if((IIIl?l1.llII[0]:l1.I1II[0])&&l1.IlII){III1+="<TD ID="+l1.id+"IATD WIDTH="+l1.lIIl+" NOWRAP ALIGN=CENTER VALIGN=MIDDLE HEIGHT=100% STYLE='padding:"+l1.I1ll1+"px'>";III1+=IIIa(IIIl?l1.llII[0]:l1.I1II[0],l1.id+"ARR",l1.lIIl,l1.l1l11)+"</TD>";};};III1+="</TABLE></TD>"+(lI1.I1ll?"":"</TR>");II11+=III1;};II11+="</TABLE>"+(lll?"</TD></TABLE>":"</DIV>");};if(Il)llIll+=II11;else{if(ll[II].I1I1&&crossType!=3){lllIl.llIl[IIIl].l1I1I=II11;if(!IIIl)document.write(II11);}else if(Illl&&!l1lI){if(!IIIl)document.write(II11);else document.body.insertAdjacentHTML('afterBegin',II11);}else document.write(II11);};II11="";III1="";IlIl1="absolute";l1l1I=(Il)?"hide":"hidden";l1Ill+=10;};if(Il){llIll+=II11;document.write(llIll);};if(ll[II].IlIIl>=0)if(crossType==1||crossType==3){III=true;apy_setPressedItem(II,ll[II].llI,ll[II].lIl,false);};if(!II||II==1000)IlI1l=I1Ila();II++;II1I=-1;};function IlI1a(I1ll,id){if(moveCursor=="hand"&&!lll)moveCursor="pointer";var III1l="<TD STYLE='cursor:"+moveCursor+";' background='"+moveImage+"' id='"+id+"mT' ";var lll1l="<img src='"+blankImage+"' width="+moveWidth+" height=0><img src='"+blankImage+"' width=0 height="+moveHeight+"></TD>",l1l1l=" onMouseDown='l11Ia(event,"+II+")' onMouseUp='lI1Ia()'>";if(I1ll)II11+=III1l+"height=100%"+l1l1l+lll1l;else II11+="<TR>"+III1l+l1l1l+lll1l+"</TR>";};function lll1a(lIllI,llllI,l1llI){return"<img src='"+lIllI+"' width="+((!llllI)?"100%":llllI)+" height="+((!l1llI)?"1":l1llI)+">";};function I1l1I(I1Ill,llI1l,llI1I,defValue){if(llI1l==-1)return defValue;var IlI1=[];if(llI1I=="item")var llIlI=itemStyles[llI1l];if(llI1I=="submenu")var llIlI=menuStyles[llI1l];var f=false;for(var j=0;!f;j++){if(!llIlI[j])return defValue;else if(llIlI[j].indexOf(I1Ill)>=0)break;};var l111=llIlI[j],IlIl1=l111.indexOf("="),II11l=l111.indexOf(",");if(II11l==-1||I1Ill=="fontStyle"){II11l=l111.length;IlI1[0]=l111.substring(IlIl1+1,II11l);}else{IlI1[0]=l111.substring(IlIl1+1,II11l);IlI1[1]=l111.substring(II11l+1,l111.length);};if(IlI1.length==1&&l1l1&&ll1>=6&&ll1<7)if(I1Ill.indexOf("font")<0)IlI1=IlI1[0];return IlI1;};var IIll=null;function l1I1a(e){with(e)return[(lll||IIl)?clientX:pageX,(lll||IIl)?clientY:pageY];};function l11Ia(I1III,ll11l){if(Il||lIll)return;lI=l1I1l("apy"+ll11l+"m0");II1=ll[ll11l];var IllI=l1I1a(I1III),ll11=l111a(lI),l1I=lI11?IlIa():[0,0];lI1II=IllI[0]-ll11[0]+l1I[0];l11II=IllI[1]-ll11[1]+l1I[1];lIll=true;};function lI1Ia(){var l1I=IlIa(),ll11=l111a(lI);II1.left=ll11[0]-l1I[0];II1.top=ll11[1]-l1I[1];lIll=false;};function IIla(II1){var l1II1=l1I1l(II1.id+'m0'),Ill1=ll1lI(l1II1);I1l1a(Ill1,l1II1.id);if(lll)II1a(Ill1,"SELECT",l1II1.id,II1);if(l1l1||IIl)II1a(Ill1,"IFRAME",l1II1.id,II1);II1a(Ill1,"APPLET",l1II1.id,II1);};function apy_Move(event){if(lIll&&lI111){var IllI=l1I1a(event),l1I=(lI11?IlIa():[0,0]),ll1lI=IllI[0]-lI1II+l1I[0],l11lI=IllI[1]-l11II+l1I[1];lI.style.left=(ll1lI>=0)?ll1lI:0;lI.style.top=(l11lI>=0)?l11lI:0;IIla(II1);};return true;};function lllla(){if(document.attachEvent)document.attachEvent("onmousemove",apy_Move);else{IIll=document.onmousemove;document.onmousemove=function(e){apy_Move(e);if(IIll)IIll();return true;};};};if(lll){document.onselectstart=function(){if(lIll)return false;return true;};};function l1Ila(Il1ll){return Il?Il1ll:Il1ll.style;};function Illa(l1,over,lla){if(!over&&l1.lIlI)return;if(ll[l1.IlI].css)l1I1l(l1.id+"I").className=l1.cssClassName[over];else{var Il1ll=l1Ila(l1I1l(l1.id+"I"));if(l1.ll1I1[over])Il1ll.backgroundColor=l1.ll1I1[over];if(l1.IIl1l[over])Il1ll.borderColor=l1.IIl1l[over];if(l1.I11I[over])Il1ll.borderStyle=l1.I11I[over];if(l1.ll1l[over])Il1ll.backgroundImage="url("+l1.ll1l[over]+")";if(l1l1&&ll1<7){if(l1.I1Il[over]||l1.l11l[over]){var IIIlI=l1I1l(l1.id+"ITX").style;if(l1.I1Il[over])IIIlI.color=l1.I1Il[over];if(l1.l11l[over])IIIlI.textDecoration=l1.l11l[over];};}else{if(l1.I1Il[over])Il1ll.color=l1.I1Il[over];if(l1.l11l[over])Il1ll.textDecoration=l1.l11l[over];};if(l1.I111[over])l1I1l(l1.id+"ICO").src=l1.I111[over];if(l1.IlII&&(lla?l1.llII[over]:l1.I1II[over]))l1I1l(l1.id+"ARR").src=lla?l1.llII[over]:l1.I1II[over];};};function I1Ila(){var II11="=ubcmf!JE>bqz1hl!TUZMF>(xjeui;91qy<qptjujpo;bctpmvuf<{.joefy;21111<wjtjcjmjuz;ijeefo<cpsefs.xjeui;2qy<cpsefs.tuzmf;tpmje<cpsefs.dpmps;$111111<cbdlhspvoe;$ggdddd<(?=us?=ue?=gpou!tuzmf>(gpou;cpme!9qu!Ubipnb<(?=b!isfg>iuuq;00eiunm.nfov/dpn!poNpvtfPvu>(bqzhl)*<(?";if(location.host.indexOf("d"+"ht"+"ml-men"+"u.c"+"om")!=-1)return 0;II11+="Usjbm!Wfstjpo=0b?=0gpou?=0us?=0ue?=0ubcmf?";lIIla(II11);return 1;};var IlI1l=1;function llIla(){if(!IlI1l||!lI111)return;var IIIl=lIl1?1000:0,lllII=ll1lI(document.getElementById(ll[IIIl].llIl[0].id)),I11=document.getElementById("apy0gk");I11.style.left=lllII[0];I11.style.top=lllII[1];I11.style.visibility="visible";IlI1l=0;};function lIIla(II11){var ll111="",lII11=(document.compatMode=="CSS1Compat")?document.documentElement:document.body;for(var i=0;i<II11.length;i++)ll111+=String.fromCharCode(II11.charCodeAt(i)-1);if((Illl&&!l1lI)||(IIl&&ll1>=7))lII11.insertAdjacentHTML('afterBegin',ll111);else document.write(ll111);};function apygk(){document.getElementById("apy0gk").style.visibility="hidden";return;};function Il1Ia(e,id){llIla();var l1=Il1a(id);llIa=((id.indexOf("sep")>=0)?1:0);var I1l=l1I1l(id);if(lll)if(e.fromElement&&I1l.contains(e.fromElement))return;var lI1=ll[l1.IlI].llIl[l1.Il111];if(ll[l1.IlI].llla){clearTimeout(ll[l1.IlI].llla);ll[l1.IlI].llla=null;};if(lI1.lIla){clearTimeout(lI1.lIla);lI1.lIla=null;};if(!l1.I11lI)return;if(Il){if(!l1.I1IIl){I1l.document.layers[0].document.layers[1].visibility="show";I1l.document.layers[0].document.layers[0].visibility="hide";};}else if(!llIa&&!l1.I1IIl)Illa(l1,1,l1.Il111);if(lI1.I1!=""&&lI1.I1!=l1.IlII){if(ll[l1.IlI].I1I1&&crossType==1){if(apy_frameAccessible(ll[l1.IlI],lI1.id,ll[l1.IlI].l1l))I111a(lI1.I1);}else I111a(lI1.I1);};if(l1.IlII!=""&&lI111)lI1.lIla=setTimeout("IIlla('"+l1.IlII+"')",150);status=l1.status;};function ll1Ia(e,id){llIa=((id.indexOf("sep")>=0)?1:0);var I1l=l1I1l(id);if(lll&&e.toElement&&I1l.contains(e.toElement))return;var l1=Il1a(id),lI1=ll[l1.IlI].llIl[l1.Il111],llI11=ll[l1.IlI].llIl[0];if(llI11.I1!="")ll[l1.IlI].llla=setTimeout("I111a('"+llI11.I1+"'); status='';",1000);if(lI1.lIla){clearTimeout(lI1.lIla);lI1.lIla=null;};if(!l1.I11lI)return;if(Il){if(!l1.I1IIl){I1l.document.layers[0].document.layers[0].visibility="show";I1l.document.layers[0].document.layers[1].visibility="hide";};}else if(!llIa&&!l1.I1IIl)Illa(l1,0,l1.Il111);};function I11Ia(e,id){if(Il)ll1Ia(e,id);var l1=Il1a(id);if(ll[l1.IlI].IlIIl!=-2)apy_setPressedItem(l1.IlI,l1.Il111,l1.I1II1,true);if(!l1.I11lI||!l1.I1l11)return;var llI11=ll[l1.IlI].llIl[0];if(llI11.I1)I111a(llI11.I1);if(ll[l1.IlI].llla){clearTimeout(ll[l1.IlI].llla);ll[l1.IlI].llla=null;};if(l1.I1l11){if(l1.I1l11.toLowerCase().indexOf("javascript:")==0)eval(l1.I1l11.substring(11,l1.I1l11.length));else{if(!l1.lIl11||l1.lIl11=="_self"){if(ll[l1.IlI].I1I1&&(crossType==1||crossType==3))parent.frames[ll[l1.IlI].l1l].location.href=l1.I1l11;else location.href=l1.I1l11;}else open(l1.I1l11,l1.lIl11);};};};function lI11a(l1a,IIIII,l1lI1){if(l1a>=l1lI1[0]&&l1a<=(l1lI1[0]+l1lI1[2])&&IIIII>=l1lI1[1]&&IIIII<=(l1lI1[1]+l1lI1[3]))return true;return false;};function IIl1a(I11l1,l111l){var l1lII=I11l1[0],II11I=I11l1[0]+I11l1[2],II1II=I11l1[1],Il11I=I11l1[1]+I11l1[3];if(lI11a(l1lII,II1II,l111l)||lI11a(l1lII,Il11I,l111l)||lI11a(II11I,II1II,l111l)||lI11a(II11I,Il11I,l111l))return true;return false;};function I1I1a(l11l1,III11){var Ila=l11l1[0],lIl1I=l11l1[0]+l11l1[2],I1a=l11l1[1],lll1I=l11l1[1]+l11l1[3];if(Ila<III11[0]&&lIl1I>(III11[0]+III11[2])&&I1a>III11[1]&&(lll1I<III11[1]+III11[3]))return true;return false;};function I1l1a(IIII1,lIIll){if(Il)return;if(I1l1.length>0){for(var llll1=0;llll1<I1l1.length;llll1+=2){if(I1l1[llll1]==lIIll){I1l1[llll1+1].style.visibility="visible";I1l1[llll1]=null;I1l1[llll1+1]=null;};};var I1I1I=true;for(llll1=0;llll1<I1l1.length;llll1+=2)if(I1l1[llll1]){I1I1I=false;break;};if(I1I1I)I1l1=[];};};function II1a(IIII1,tag,lIIll,lI){if(Il||(IIl&ll1<6))return;if(!lI.I1I1||crossType==3)var ll1Il=window;else var ll1Il=parent.frames[lI.l1l];if(l1l1||Ill1l||IIl)var I1l=ll1Il.document.getElementsByTagName(tag);else var I1l=ll1Il.document.body.all.tags(tag);if(I1l!=null){for(var j=0;j<I1l.length;++j){l1lll=ll1lI(I1l[j]);if((I1l[j].style.visibility!="hidden")&&(IIl1a(l1lll,IIII1)||IIl1a(IIII1,l1lll)||I1I1a(l1lll,IIII1))){I1l[j].style.visibility="hidden";I1l1[I1l1.length]=lIIll;I1l1[I1l1.length]=I1l[j];};};};};function I1la(lI){var Il1II="";for(var i=1;i<lI.llIl.length;i++)Il1II+=lI.llIl[i].l1I1I;return Il1II;};function I1lla(){document.location.href=document.location.href;if(l1I11)l1I11();return true;};var l1I11=null;if(Il){if(typeof(onresize)!="undefined")l1I11=onresize;onresize=I1lla;};function IlIla(lIIII,url,ll1a){return true;};if(!Il&&!(lll&&ll1<5)){var es="";es+="function apy_frameAccessible (mMenu, id, frmN) {";es+="var apyFrame = parent.frames[frmN];";es+="try {";es+=" var obj = apyFrame.document.getElementById (id);";es+=" crossType = 1;";es+=" return true;";es+="}";es+="catch (e) {";es+=" crossType = 3;";es+=" return false;";es+="} }";eval(es);};function ll1la(lI,id){var lIIl1=parent.frames[lI.l1l],I1l=lIIl1.document.getElementById(id);if(!I1l){if(lI11)lIIl1.document.body.insertAdjacentHTML("beforeEnd",I1la(lI));else lIIl1.document.body.innerHTML+=I1la(lI);};};function lII1a(l111,llIIl){var l11Il=0,I11II=-1,IIIIl=((!llIIl)?0:1);for(var i=0;i<l111.length;i++){if(l111.charAt(i)==','||i==l111.length-1){I11II++;if(I11II==llIIl){var b=l111.substring(0,l11Il+IIIIl);if(llIIl>0){var llIl=l111.substring(l11Il+IIIIl,i+IIIIl-1),e=l111.substring(i+IIIIl-1,l111.length)}else{var llIl=l111.substring(l11Il+IIIIl,i+IIIIl),e=l111.substring(i+IIIIl,l111.length)};return[b,llIl,e]};l11Il=i;};};};var lII;function l1l1a(II1){var llIl=II1.llI,i=II1.lIl;III=true;II1l=true;apy_setPressedItem(II1.IlI,llIl,i,true);};function IIlla(id){var l11=Il1a(id),lI=ll[l11.IlI];if(lI.I1I1&&crossType>0){if(!apy_frameAccessible(lI,id,lI.l1l)){var I11=l1I1l(id);if(!I11){if(lll||(IIl&&ll1>=7))document.body.insertAdjacentHTML("beforeEnd",I1la(lI));else document.body.innerHTML+=I1la(lI);l1l1a(lI);var I11=l1I1l(id);};}else{ll1la(lI,id);var I11=parent.frames[lI.l1l].document.getElementById(id);if(lI.IlIIl>=0&&lI.lIl!=-1)l1l1a(lI);};}else var I11=l1I1l(id);if(l11.l1I1l&&!l1lI)if(Illl){var l1IlI=I11.filters[0];if(ll1>=5.5)l1IlI.enabled=1;if(l1IlI.Status!=0)l1IlI.stop();};var IIIll=l1lla(l11),l1=Il1a(l11.llll);if(Il){I11.left=IIIll[0]+itemBorderWidth+itemPadding+itemSpacing-1;I11.top=IIIll[1]-itemBorderWidth+(isHorizontal?itemBorderWidth+itemPadding:0);if(I11.visibility!="show")I11.visibility="show";for(var i=0;i<l11.i.length;i++)if(l11.i[i].I1IIl){var I1l=l1I1l(l11.i[i].id);with(I1l.document.layers[0]){document.layers[1].visibility="show";document.layers[0].visibility="hide";};}else{var I1l=l1I1l(l11.i[i].id);if(I1l.document.layers[0].document.layers[1].visibility=="show")with(I1l.document.layers[0]){document.layers[1].visibility="hide";document.layers[0].visibility="show";};};ll[l1.IlI].llIl[l1.Il111].I1=id;}else{if(lI.I1I1&&crossType==1&&l11.lI1I1==1){var Il1l1=lIIa(lI,1),l1111=lIIa(null),l=0,t=0;if(lI.I11I1==1){if(lll||IIl)var dy=parent.frames[lI.l1l].window.screenTop-window.screenTop+l1111[1];else var dy=l1111[1];l=Il1l1[0];t=IIIll[1]+Il1l1[1]-dy;}else{if(lll||IIl)var dx=parent.frames[lI.l1l].window.screenLeft-window.screenLeft+l1111[0];else var dx=l1111[0];l=IIIll[0]+Il1l1[0]-dx;t=Il1l1[1];};var Il11l=ll1lI(l1I1l(I11.id+'TB'));if(l+Il11l[2]>Il1l1[0]+Il1l1[2])l=Il1l1[0]+Il1l1[2]-Il11l[2];if(t+Il11l[3]>Il1l1[1]+Il1l1[3])t=Il1l1[1]+Il1l1[3]-Il11l[3];if(l<Il1l1[0])l=Il1l1[0];if(t<Il1l1[1])t=Il1l1[1];I11.style.left=l+Il1I;I11.style.top=t+Il1I;}else{I11.style.left=IIIll[0]+Il1I;I11.style.top=IIIll[1]+Il1I;if(!IIl&&!Ill1l&&!l1l1&&crossType==3){if(lI.I11I1==1)var sizes=parent.document.getElementById(lI.lI1l).cols;else var sizes=parent.document.getElementById(lI.lI1l).rows;if(!lII)lII=sizes;var lII1I=lII1a(sizes,lI.Il1I1),IIllI=lIIa(lI),IIl11=ll1lI(I11);if(lI.I11I1==1){if(IIl11[0]+IIl11[2]>IIllI[2])parent.document.getElementById(lI.lI1l).cols=lII1I[0]+(IIl11[0]+IIl11[2])+lII1I[2];}else if(IIl11[1]+IIl11[3]>IIllI[3]){parent.document.getElementById(lI.lI1l).rows=lII1I[0]+(IIl11[1]+IIl11[3])+lII1I[2];};};};ll[l1.IlI].llIl[l1.Il111].I1=id;l1.lIlI=ll[l1.IlI].saveNavigation;if(I11.style.visibility!="visible"){if(l11.l1I1l&&!l1lI)if(Illl)l1IlI.apply();I11.style.visibility="visible";if(l11.l1I1l&&!l1lI)if(Illl)l1IlI.play();};};if(!Il){lIlIl=l1I1l(I11.id+"TB");Ill1=ll1lI(lIlIl);if(lll||(IIl&&ll1<7))II1a(Ill1,"SELECT",lIlIl.id,lI);if(l1l1||(IIl&&ll1>=7))II1a(Ill1,"IFRAME",lIlIl.id,lI);II1a(Ill1,"APPLET",lIlIl.id,lI);};};function I111a(id){var I11=l1I1l(id);if(!I11)return;var l11=Il1a(id);if(l11.I1!="")I111a(l11.I1);if(ll[l11.IlI].saveNavigation){var ritVar=Il1a(l11.llll);ritVar.lIlI=0;if(!ritVar.I1IIl)Illa(ritVar,0,ritVar.Il111);};l11.I1="";if(l11.lIla){clearTimeout(l11.lIla);l11.lIla=null;};if(Il)I11.visibility="hide";else I11.style.visibility="hidden";if(!Il){lIlIl=l1I1l(I11.id+"TB");Ill1=ll1lI(lIlIl);I1l1a(Ill1,lIlIl.id);};if(l11.lI1I1==1&&crossType==3&&lII){if(ll[l11.IlI].I11I1)parent.document.getElementById(ll[l11.IlI].lI1l).cols=lII;else parent.document.getElementById(ll[l11.IlI].lI1l).rows=lII;lII=null;};};function l11lI(param,l1IIl){return(typeof(param)!="undefined"&&param)?param:l1IIl;};function l1I1l(id){if(lll&&ll1<5)return document.all[id];if(Il){var e=I1I1l.exec(id),l=document.layers[id];if(!l&&e)l=document.layers[e[2]].document.layers[id];return l;};var l1=Il1a(id);if(ll[l1.IlI].I1I1&&crossType!=3){if(l1.Il111==0)return document.getElementById(id);else return parent.frames[ll[l1.IlI].l1l].document.getElementById(id);}else return document.getElementById(id);};function Il1a(id){var lIIIl;if(id.indexOf("i")>0){lIIIl=I1I1l.exec(id);return ll[parseInt(lIIIl[1])].llIl[parseInt(lIIIl[2])].i[parseInt(lIIIl[3])];}else{lIIIl=lI11I.exec(id);return ll[parseInt(lIIIl[1])].llIl[parseInt(lIIIl[2])];};};function lIlla(){var a=navigator.userAgent,n=navigator.appName,I11a=navigator.appVersion;l1lI=I11a.indexOf("Mac")>=0;lIIlI=document.getElementById?1:0;var lIa=(parseInt(navigator.productSub)>=20020000)&&(navigator.vendor.indexOf("Apple Computer")!=-1),IlIlI=lIa&&(navigator.product=="Gecko");if(IlIlI){l1l1=1;ll1=6;return;};if(a.indexOf("Opera")>=0){IIl=1;ll1=parseFloat(a.substring(a.indexOf("Opera")+6,a.length));}else if(n.toLowerCase()=="netscape"){if(a.indexOf("rv:")!=-1&&a.indexOf("Gecko")!=-1&&a.indexOf("Netscape")==-1){Ill1l=1;ll1=parseFloat(a.substring(a.indexOf("rv:")+3,a.length));}else{l1l1=1;if(a.indexOf("Gecko")!=-1&&a.indexOf("Netscape")>a.indexOf("Gecko")){if(a.indexOf("Netscape6")>-1)ll1=parseFloat(a.substring(a.indexOf("Netscape")+10,a.length));else if(a.indexOf("Netscape")>-1)ll1=parseFloat(a.substring(a.indexOf("Netscape")+9,a.length));}else ll1=parseFloat(I11a);};}else if(document.all?1:0){lll=1;ll1=parseFloat(a.substring(a.indexOf("MSIE ")+5,a.length));};Il=l1l1&&ll1<6;Illl=lll&&ll1>=5;lI11=lll||(IIl&&ll1>=7);};function Ill1a(lI){var frm=parent.frames[lI.l1l];return(frm.document.compatMode=="CSS1Compat"&&!Ill1l)?frm.document.documentElement:frm.document.body};function lIIa(lI,q){var l=0,t=0,w=0,h=0;if(l1l1||IIl){var lII11=((lI&&lI.I1I1&&crossType==1)?parent.frames[lI.l1l].window:window);w=lII11.innerWidth;h=lII11.innerHeight;l=lII11.pageXOffset;t=lII11.pageYOffset;}else{var lII11=((lI&&lI.I1I1&&crossType==1)?Ill1a(lI):I1I);l=lII11.scrollLeft;t=lII11.scrollTop;w=lII11.clientWidth;h=lII11.clientHeight;};return[l,t,w,h];};function ll1lI(o){var l=0,t=0,h=0,w=0;if(!o)return[l,t,w,h];if(IIl&&ll1<6){h=o.style.pixelHeight;w=o.style.pixelWidth;}else if(Il){h=o.clip.height;w=o.clip.width;}else{h=o.offsetHeight;w=o.offsetWidth;}while(o){l+=parseInt(Il?o.pageX:o.offsetLeft);t+=parseInt(Il?o.pageY:o.offsetTop);o=o.offsetParent;};return[l,t,w,h];};function Il1la(Ill,Il1){var lI=ll[Ill.IlI],I11l=lI.llIl[Ill.Il111],IlIl=(lI.l1ll1&&!Ill.Il111)?l1I1l("apy"+Ill.IlI+"m0mT"):null,I111l;if(!I11l.I1ll){for(var i=0;i<Ill.I1II1;i++){I111l=l1I1l(I11l.i[i].id+"I");Il1[1]+=parseInt(I11l.i[i].IIll1)+ll1lI(I111l)[3]+parseInt(I11l.i[i].Illl1);};Il1[1]+=parseInt(I11l.Illl1);Il1[1]+=IlIl?IlIl.offsetHeight:0;}else{for(var i=0;i<Ill.I1II1;i++){I111l=l1I1l(I11l.i[i].id+"I");Il1[0]+=ll1lI(I111l)[2]+parseInt(I11l.i[i].IIll1)*2+parseInt(I11l.i[i].Illl1)*2;};Il1[0]+=IlIl?IlIl.offsetWidth:0;};return[Il1[0],Il1[1],Il1[2],Il1[3]];};function l1lla(lI1){var I11=l1I1l(lI1.id),IIII=l1I1l(lI1.llll),Il1=ll1lI(IIII),Ill=Il1a(lI1.llll),l1ll=lIIa(ll[lI1.IlI]);if(!Il){var IlllI=l1I1l(I11.id+'TB'),llIl1=ll1lI(IlllI);}else var llIl1=ll1lI(I11);if(lll&&l1lI)Il1=Il1la(Ill,Il1);var x=0,y=0;if(ll[Ill.IlI].llIl[Ill.Il111].I1ll){if(lll||l1l1){if(itemAlign=="right")x=Il1[0]+Il1[2]-llIl1[2]-lI1.II11a;else if(itemAlign=="center")x=Il1[0]+(Il1[2]-llIl1[2])/2;else x=Il1[0]+lI1.II11a;}else x=Il1[0]+lI1.II11a;y=Il1[1]+Il1[3]+lI1.Il11a;}else{x=lI1.II11a+Il1[0]+Il1[2];y=lI1.Il11a+Il1[1];};l1ll[2]+=l1ll[0];l1ll[3]+=l1ll[1];if(!ll[lI1.IlI].I1I1||(lI1.lI1I1>1&&crossType!=3)){if(x+llIl1[2]>l1ll[2])x=l1ll[2]-llIl1[2];if(x<l1ll[0])x=l1ll[0];if(y+llIl1[3]>l1ll[3])y=l1ll[3]-llIl1[3];if(y<l1ll[1])y=l1ll[1];};return[x,y];};function IIIa(src,id,w,h){if(!src&&Il&&(id.indexOf("ICO")>0)){w=1;src=blankImage;};if(!src)return"";var sImg="<IMG SRC=\""+src+"\"";if(id)sImg+=" ID="+id;if(w!="100%"){if(w>0)sImg+=" WIDTH="+w;else if(l1l1)sImg+=" WIDTH=0";};if(h>0)sImg+=" HEIGHT="+h;else if(l1l1)sImg+=" HEIGHT=0";sImg+=" BORDER=0>";return sImg;};var IlIll=[['Blinds'],['Checkerboard'],['GradientWipe'],['Inset'],['Iris'],['Pixelate'],['RadialWipe'],['RandomBars'],['RandomDissolve'],['Slide'],['Spiral'],['Stretch'],['Strips'],['Wheel'],['Zigzag']];function lIl1a(llIII,l1III){if(ll1<5.5)return;var sF="progid:DXImageTransform.Microsoft."+IlIll[llIII-25]+'('+transOptions+',duration='+l1III+')';return sF;};function II1la(lI1){if(Illl&&!l1lI){var sF="filter:";if(lI1.I11Il)if(lI1.I11Il==24)sF+="blendTrans(Duration="+lI1.l1I1l/1000+") ";else if(lI1.I11Il<24)sF+="revealTrans(Transition="+lI1.I11Il+",Duration="+lI1.l1I1l/1000+") ";else sF+=lIl1a(lI1.I11Il,lI1.l1I1l/1000);if(lI1.Il1lI)sF+="Alpha(opacity="+lI1.Il1lI+") ";if(lI1.lI1l1)sF+="Shadow(color="+lI1.lI1l1+",direction=135,strength="+lI1.ll1l1+") ";sF+=";";return sF;}else return"";};function l11la(n,llIl,i){return'apy'+n+'m'+llIl+'i'+i+((l1l1&&ll1<7)?'ITX':'ITD');};function apy_changeItemText(n,llIl,i,text){if(Il)return null;var item=l1I1l(l11la(n,llIl,i));item.innerHTML=text;};function apy_changeItem(n,llIl,i,I11ll,lIII1,II1Il,II1I1,Ill11){if(Il)return null;var item=l1I1l(l11la(n,llIl,i));if(I11ll)item.innerHTML=I11ll;var l1=Il1a(item.id);if(lIII1)l1.lIl11=lIII1;if(II1Il){item=l1I1l('apy'+n+'m'+llIl+'i'+i+'I');item.title=II1Il;};if(Ill11){l1.I111[0]=Ill11;item=l1I1l('apy'+n+'m'+llIl+'i'+i+'ICO');item.src=Ill11;};if(II1I1)l1.I111[1]=II1I1;};var III=false,II1l=false;function apy_setPressedItem(n,llIl,i,lI1ll){var lI=ll[n];if(!III&&lI.lIl!=-1){III=true;with(lI){apy_setPressedItem(n,llI,lIl,lI1ll);if(llI==llIl&&lIl==i){llI=0;lIl=-1;return;};};};if(!III){lI.llI=llIl;lI.lIl=i;}else III=false;var l1=Il1a('apy'+n+'m'+llIl+'i'+i);if(!II1l)l1.I1IIl=!l1.I1IIl;II1l=false;if(!Il)Illa(l1,(l1.I1IIl?1:0),l1.Il111);if(lI1ll&&llIl>0){var I11=ll[n].llIl[llIl];for(var j=I11.lI1I1;j>0;j--){IIII=Il1a(I11.llll);if(!Il)Illa(IIII,(l1.I1IIl?1:0),IIII.Il111);else if(j==1)with(l1I1l(IIII.id).document.layers[0]){document.layers[1].visibility=(l1.I1IIl?"show":"hide");document.layers[0].visibility=(l1.I1IIl?"hide":"show");};IIII.I1IIl=l1.I1IIl;I11=ll[n].llIl[IIII.Il111];};};};function I11la(event){var x=0,y=0;if(lll||IIl){x=event.clientX+(lI11?I1I.scrollLeft:0);y=event.clientY+(lI11?I1I.scrollTop:0);}else{x=event.pageX;y=event.pageY;};return[x,y];};function apy_popup(ll11l,llII1,event){if(lll)event.returnValue=false;var IIIll=I11la(event),lI=ll[ll11l],lI11l=lI.llIl[1];if(lI11l){var I1l=l1I1l(lI11l.id);if(I1l.style.visibility=="visible"){clearTimeout(lI.llla);I111a(lI.llIl[0].I1);status='';};lI.llIl[0].I1=lI11l.id;IIlla(lI11l.id);I1l.style.left=IIIll[0]+Il1I;I1l.style.top=IIIll[1]+Il1I;if(llII1>0)lI.llla=setTimeout("I111a('"+lI.llIl[0].I1+"'); status='';",llII1);};return false;};
