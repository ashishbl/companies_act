 app.controller("finalctrl", function($scope, $ionicPopup, $ionicLoading, $ionicActionSheet, $location, $state, $compile,$filter){
     
var elemid, elemi, fi, parentElemid, secNo, d, defTitle, tempDef, count, secNo, subSecNo, temp, temp1, temp2, circularNo, chapterNo, ruleNo, subRuleNo, orderNo, newRuleId, rid, secId, subSecId;      
     
$scope.rulesTitleAlias=[
    {'rulesChapterId':'1','aliasName':'I'},
    {'rulesChapterId':'2','aliasName':'II'},
    {'rulesChapterId':'3','aliasName':'III'},
    {'rulesChapterId':'3A','aliasName':'III(I)'},
    {'rulesChapterId':'4','aliasName':'IV'},
    {'rulesChapterId':'4(1)','aliasName':'IV(I)'},
    {'rulesChapterId':'5','aliasName':'V'},
    {'rulesChapterId':'6','aliasName':'VI'},
    {'rulesChapterId':'7','aliasName':'VII'},
    {'rulesChapterId':'8','aliasName':'VIII'},
    {'rulesChapterId':'8A','aliasName':'VIII(I)'},
    {'rulesChapterId':'9','aliasName':'IX'},
    {'rulesChapterId':'9A','aliasName':'IX(I)'},
    {'rulesChapterId':'9B','aliasName':'IX(II)'},
    {'rulesChapterId':'10','aliasName':'X'},
    {'rulesChapterId':'10(1)','aliasName':'X(I)'},
    {'rulesChapterId':'11','aliasName':'XI'},
    {'rulesChapterId':'12','aliasName':'XII'},
    {'rulesChapterId':'13','aliasName':'XIII'},
    {'rulesChapterId':'14','aliasName':'XIV'},
    {'rulesChapterId':'15','aliasName':'XV'},
    {'rulesChapterId':'18','aliasName':'XVIII'},
    {'rulesChapterId':'22','aliasName':'XXII'},
    {'rulesChapterId':'21','aliasName':'XXI'},
    {'rulesChapterId':'24','aliasName':'XXIV'},
    {'rulesChapterId':'26','aliasName':'XXVI'},
    {'rulesChapterId':'27','aliasName':'XXVII'},
    {'rulesChapterId':'27(1)','aliasName':'XXVII(I)'},
    {'rulesChapterId':'27(2)','aliasName':'XXVII(II)'},
    {'rulesChapterId':'29','aliasName':'XXIX'},
]
     
     
$scope.showChapters=function()
   {
	console.log("ENTERED showChapters FUNCTION");
    $location.path('/chapters');

    var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult1(xhttp.responseXML);
        console.log("CONNECTION ESTABLISHED");
    }
	};

	xhttp.open("GET", "temp.xml", true);
	xhttp.send(); 
	
	function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		//var l=3;
		//path = "/Acts/Chapter/SectionName[attribute::id]";
		path = "/Acts/Chapter";
		var c=1;
		//path1= "/Acts/Chapter/ChapterName";
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        //var nodes1 = xml.evaluate(path1, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        //var result1 = nodes1.iterateNext();
        //while (result && result1)
        txt+='<div class="list card">';
        while (result) {

            //txt += '<div ng-controller="newctrl"><div class="card"><div class="item item-text-wrap">'+c+'. '+result.childNodes[0].nodeValue+'</div></div></div>';

            txt += '<a class="item item-icon-left" id="'+c+'" ng-click="showSections('+c+')">'+result.childNodes[0].nodeValue+'</a>';
            
            result = nodes.iterateNext();

            c++;
        } 
        txt+='</div>';
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
            xml.setProperty("SelectionLanguage", "XPath");
            nodes = xml.selectNodes(path);
            for (i = 0; i < nodes.length; i++) {
                txt += nodes[i].childNodes[0].nodeValue + "<br>";
            }
		}
        document.getElementById("demo1").innerHTML = txt;
        
        var element = angular.element(document.querySelector('#demo1'));
        var generated = element.html(txt);
        
        $compile(generated.contents())($scope);
    }
}

$scope.showSections=function(chapterid)
   {
       d=1; 
        //console.log("first value of d is "+d);
        console.log("ENTERED showSections FUNCTION once again");
        $location.path('/Sections');
        
        
        //cli();
        //window.addEventListener('click', function(e) {
            elemid=chapterid;
            console.log("clicked element's id is "+elemid);
                //localStorage.setItem("elemid", elemid); 
             
             //assigning id according to sections
            
             if(elemid==2)
                 {
                     d=3;
                 }
             else if(elemid==3)
                 {
                     d=23;
                 }
             else if(elemid==4)
                 {
                     d=43;
                 }
             else if(elemid==5)
                 {
                     d=73;
                 }
             else if(elemid==6)
                 {
                     d=77;
                 }
             else if(elemid==7)
                 {
                     d=88;
                 }
             else if(elemid==8)
                 {
                     d=123;
                 }
             else if(elemid==9)
                 {
                     d=128;
                 }
             else if(elemid==10)
                 {
                     d=139;
                 }
             else if(elemid==11)
                 {
                     d=149;
                 }
             else if(elemid==12)
                 {
                     d=173;
                 }
             else if(elemid==13)
                 {
                     d=196;
                 }
             else if(elemid==14)
                 {
                     d=206;
                 }
             else if(elemid==15)
                 {
                     d=230;
                 }
             else if(elemid==16)
                 {
                     d=241;
                 }
             else if(elemid==17)
                 {
                     d=247;
                 }
             else if(elemid==18)
                 {
                     d=248;
                 }
             else if(elemid==19)
                 {
                     d=253;
                 }
             else if(elemid==20)
                 {
                     d=270;
                 }
             else if(elemid==21)
                 {
                     d=366;
                 }
             else if(elemid==22)
                 {
                     d=379;
                 }
             else if(elemid==23)
                 {
                     d=394;
                 }
             else if(elemid==24)
                 {
                     d=396;
                 }
             else if(elemid==25)
                 {
                     d=405;
                 }
             else if(elemid==26)
                 {
                     d=406;
                 }
             else if(elemid==27)
                 {
                     d=407;
                 }
             else if(elemid==28)
                 {
                     d=435;
                 }
             else if(elemid==29)
                 {
                     d=447;
                 }
             else
                 {
                     d=1;
                 }
             
             
             //});
        
         //fi=localStorage.getItem("firstname");
        

         
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
                showResult1(xhttp.responseXML);
                console.log("CONNECTION ESTABLISHED");
            }
		};
		xhttp.open("GET", "temp.xml", true);
		xhttp.send(); 
		function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/Chapter[@id="+elemid+"]/child::SectionName";
       
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        txt+='<div class="list card">';
        while (result) {
            if(elemid==5 && d==77)
                {
                    d="76A";
                }
            txt += '<a class="item item-icon-left item-text-wrap special"  data-parentid="'+elemid+'" id="'+d+'" ng-click="showSubSections('+elemid+', '+d+')">'+d+'. '+result.childNodes[0].nodeValue+'</a>';

            
            result = nodes.iterateNext();
            d++;
        } 
        txt+='</div>';
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
            xml.setProperty("SelectionLanguage", "XPath");
            nodes = xml.selectNodes(path);
            for (i = 0; i < nodes.length; i++) {
                    txt += nodes[i].childNodes[0].nodeValue + "<br>";
                }
        }
        document.getElementById("section").innerHTML = txt;
            
        var element = angular.element(document.querySelector('#section'));
        var generated = element.html(txt);
        
        $compile(generated.contents())($scope);
    }
  }
     
 $scope.showSubSections=function(chapterid, sectionid)
 {
     //document.removeEventListener('click', headerall);
     console.log("ENTERED showSubSections FUNCTION");
     $location.path('/SubSections');
    /* window.addEventListener('click', function(event) {
         elemi=event.target.id;
         if (event.target.attributes["data-parentid"] != undefined)
         {
            parentElemid = event.target.attributes["data-parentid"].value;
            console.log(parentElemid);
         }
         console.log("id is "+elemi);
     });*/
     
     parentElemid=chapterid;
     elemi=sectionid;
     
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            showResult1(xhttp.responseXML);
            console.log("CONNECTION ESTABLISHED");
        }
    };
    xhttp.open("GET", "temp.xml", true);
    xhttp.send(); 
    function showResult1(xml) {
        console.log("entered showResult function");  

        var txt = "";

        
        path = "/Acts/Chapter[@id="+parentElemid+"]/Section[@id='"+elemi+"']/child::*";

       
        path1 = "/Acts/Chapter[@id="+parentElemid+"]/Section[@id='"+elemi+"']";

        console.log(path);
       
        if (xml.evaluate) {
            var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
            var nodes1 = xml.evaluate(path1, xml, null, XPathResult.ANY_TYPE, null);
            var result = nodes.iterateNext();
            var result1 = nodes1.iterateNext();
            txt+=elemi+'. ';
            //while (result && result1)
            while (result && result1) {
                document.getElementById("subSectionSubHeading").innerHTML = "SECTION " + elemi;
                //if(result1.attributes[1].value == "true") 
                if(result1.lastElementChild.tagName == "SubSection")
                {

                    for(var i=0;i<result.childNodes.length;i++) 
                    {
                        
                        if(result.childNodes[i].tagName == "Definition" || result.childNodes[i].tagName == "SectionLink" || result.childNodes[i].tagName == "Circular" || result.childNodes[i].tagName == "Rule" || result.childNodes[i].tagName == "ROD")
                        {
                            //definition links
                            if(result.childNodes[i].tagName == "Definition")
                                {
                                    defTitle=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openDefinition(\'' + defTitle + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            //section links
                            if(result.childNodes[i].tagName == "SectionLink")
                                {
                                    secNo=result.childNodes[i].attributes[0].value;
                                    
                                    
                                    if(result.childNodes[i].attributes.length>1)
                                    {            
                                        if(result.childNodes[i].attributes[1].nodeName == "subsection_id")
                                        {
                                            subSecNo=result.childNodes[i].attributes[1].value;
                                             
                                            txt += '<a href="javascript:void(0)" ng-click="openSectionLink('+ secNo +', '+subSecNo+')">'+result.childNodes[i].textContent+'</a>';    
                                        }
                                    }
                                    else
                                    {
                                        txt += '<a href="javascript:void(0)" ng-click="openSectionLink1(\'' + secNo + '\' )">'+result.childNodes[i].textContent+'</a>';
                                            
                                    }
                                } 
                            
                            //circular links
                            if(result.childNodes[i].tagName == "Circular")
                                {
                                    circularNo=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openCircularLink(\'' + circularNo + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            //rule links
                            if(result.childNodes[i].tagName == "Rule")
                                {
                                    
                                    if(result.childNodes[i].attributes.length>2)
                                    {            
                                        
                                            chapterNo=result.childNodes[i].attributes[0].value;
                                            ruleNo=result.childNodes[i].attributes[1].value;
                                            subRuleNo=result.childNodes[i].attributes[2].value;
                                        
                                             
                                            txt += '<a href="javascript:void(0)" ng-click="openRuleLink('+ chapterNo +', '+ruleNo+', '+subRuleNo+')">'+result.childNodes[i].textContent+'</a>';    
                                        
                                    }
                                    else
                                    {
                                         chapterNo=result.childNodes[i].attributes[0].value;
                                         ruleNo=result.childNodes[i].attributes[1].value;
                                        
                                       /* txt += '<a href="javascript:void(0)" ng-click="openRuleLink1(\'' + chapterNo + '\' )">'+result.childNodes[i].textContent+'</a>';*/
                                        
                                         txt += '<a href="javascript:void(0)" ng-click="openRuleLink1('+ chapterNo +', '+ruleNo+' )">'+result.childNodes[i].textContent+'</a>';    
                                    }
                                    
                                }
                            
                            //order links
                            if(result.childNodes[i].tagName == "ROD")
                                {
                                    orderNo=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openOrderLink(\'' + orderNo + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            
                        }
                        else
                        {
                             txt += result.childNodes[i].textContent;
                        }
                    }

                    result = nodes.iterateNext();
                }
                else
                {
                    for(var i=0;i<result1.childNodes.length;i++)
                    {

                        if(result1.childNodes[i].tagName == "Definition")
                        {
                            txt += '<a>'+result1.childNodes[i].textContent+'</a>';
                        }
                        else
                        {
                            txt += result1.childNodes[i].textContent+'<br>';
                        }
                    }
                result1 = nodes1.iterateNext();
               }
            } 
        } 
        else if (window.ActiveXObject || xhttp.responseType == "msxml-document") 
        {
            xml.setProperty("SelectionLanguage", "XPath");
            nodes = xml.selectNodes(path);
            for (i = 0; i < nodes.length; i++) {
                txt += nodes[i].childNodes[0].nodeValue + "<br>";
            }
        }
        document.getElementById("SubSection").innerHTML = txt;
        
        var element = angular.element(document.querySelector('#SubSection'));
        var generated = element.html(txt);
        
        $compile(generated.contents())($scope);
    }   
}
 
 $scope.openDefinition=function(deftitle)
    {
    
        console.log("ENTERED openDefinition FUNCTION");
        $location.path('/Definition');
        tempDef=deftitle;
        console.log("definition value is "+tempDef);
     
        var xhttp = new XMLHttpRequest();
	
	   xhttp.onreadystatechange = function() 
       {
            if (this.readyState == 4 && this.status == 200) 
            {
                showResult1(xhttp.responseXML);
                console.log("CONNECTION ESTABLISHED");
            }
	   };

	   xhttp.open("GET", "temp.xml", true);
	   xhttp.send(); 
	
	   function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/FullDefinition[@id='"+tempDef+"']";
		var c=1;
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
            
        txt += tempDef+"- <br><br>";
            
        while (result) {
            
            txt += result.childNodes[0].nodeValue;

            result = nodes.iterateNext();
            c++;
        } 
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("Definition1").innerHTML = txt;
           
        var element = angular.element(document.querySelector('#Definition1'));
        var generated = element.html(txt);
        
        $compile(generated.contents())($scope);
           
		} 
    }
 
 
 $scope.openSectionLink1=function(secNo)
    {
    
        console.log("ENTERED openSectionLink FUNCTION");
        $location.path('/sectionLink');
        temp=secNo;
     
        var xhttp = new XMLHttpRequest();
	
	   xhttp.onreadystatechange = function() 
       {
            if (this.readyState == 4 && this.status == 200) 
            {
                showResult1(xhttp.responseXML);
                console.log("CONNECTION ESTABLISHED");
            }
	   };

	   xhttp.open("GET", "temp.xml", true);
	   xhttp.send(); 
	
	   function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/Chapter/Section[@id='"+temp+"']";
		var c=1;
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
            
        while (result) {
            document.getElementById("sectionLinkSubHeading").innerHTML = "SECTION " + temp;
            for(var i=0;i<result.childNodes.length;i++) 
                {
                      //txt += result.childNodes[i].textContent;
                    
                    
                    if(result.childNodes[i].tagName == "Definition" || result.childNodes[i].tagName == "Circular" || result.childNodes[i].tagName == "Rule" || result.childNodes[i].tagName == "ROD")
                        {
                            //definition links
                            if(result.childNodes[i].tagName == "Definition")
                                {
                                    defTitle=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openDefinition(\'' + defTitle + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            //circular links
                            if(result.childNodes[i].tagName == "Circular")
                                {
                                    circularNo=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openCircularLink(\'' + circularNo + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            //rule links
                            if(result.childNodes[i].tagName == "Rule")
                                {
                                    
                                    if(result.childNodes[i].attributes.length>2)
                                    {            
                                        
                                            chapterNo=result.childNodes[i].attributes[0].value;
                                            ruleNo=result.childNodes[i].attributes[1].value;
                                            subRuleNo=result.childNodes[i].attributes[2].value;
                                        
                                             
                                            txt += '<a href="javascript:void(0)" ng-click="openRuleLink('+ chapterNo +', '+ruleNo+', '+subRuleNo+')">'+result.childNodes[i].textContent+'</a>';    
                                        
                                    }
                                    else
                                    {
                                         chapterNo=result.childNodes[i].attributes[0].value;
                                         ruleNo=result.childNodes[i].attributes[1].value;
                                        
                                       /* txt += '<a href="javascript:void(0)" ng-click="openRuleLink1(\'' + chapterNo + '\' )">'+result.childNodes[i].textContent+'</a>';*/
                                        
                                         txt += '<a href="javascript:void(0)" ng-click="openRuleLink1('+ chapterNo +', '+ruleNo+' )">'+result.childNodes[i].textContent+'</a>';    
                                    }
                                    
                                }
                            
                            //order links
                            if(result.childNodes[i].tagName == "ROD")
                                {
                                    orderNo=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openOrderLink(\'' + orderNo + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            
                        }
                        else
                        {
                             txt += result.childNodes[i].textContent+'<br>';
                        }
                    
                    
                    
                }

            result = nodes.iterateNext();
        } 
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("sectionLink1").innerHTML = txt;
           
        var element = angular.element(document.querySelector('#sectionLink1'));
        var generated = element.html(txt);
        
        $compile(generated.contents())($scope);
           
		} 
    }
 
 
 $scope.openSectionLink=function(secNo, subSecNo)
    {
    
        console.log("ENTERED openSectionLink FUNCTION");
        $location.path('/sectionLink');
        
        temp=secNo;
        temp1=subSecNo;
        
        console.log("value of section is "+temp);
        console.log("value of subsection is "+temp1);
     
        var xhttp = new XMLHttpRequest();
	
	   xhttp.onreadystatechange = function() 
       {
            if (this.readyState == 4 && this.status == 200) 
            {
                showResult1(xhttp.responseXML);
                console.log("CONNECTION ESTABLISHED");
            }
	   };

	   xhttp.open("GET", "temp.xml", true);
	   xhttp.send(); 
	
	   function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/Chapter/Section[@id='"+temp+"']/SubSection[@id='"+temp1+"']";
        path1 = "/Acts/Chapter/Section[@id='"+temp+"']";
        path2 = "/Acts/Chapter/Section[@id='"+temp+"']/Name";
		var c=1;
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var nodes1 = xml.evaluate(path1, xml, null, XPathResult.ANY_TYPE, null);
        var nodes2 = xml.evaluate(path2, xml, null, XPathResult.ANY_TYPE, null);
            
        var result = nodes.iterateNext();
        var result1 = nodes1.iterateNext();
        var result2 = nodes2.iterateNext();
            
        while (result && result1 &&result2) {
            document.getElementById("sectionLinkSubHeading").innerHTML = "SECTION " + temp;
            txt += result1.childNodes[0].textContent+result2.childNodes[0].textContent+"<br><br>";
            for(var i=0;i<result.childNodes.length;i++) 
                {
                    
                      //txt += result.childNodes[i].textContent;
                    
                    if(result.childNodes[i].tagName == "Definition" || result.childNodes[i].tagName == "Circular" || result.childNodes[i].tagName == "Rule" || result.childNodes[i].tagName == "ROD")
                        {
                            
                            if(result.childNodes[i].tagName == "Definition")
                                {
                                    defTitle=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openDefinition(\'' + defTitle + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            
                            if(result.childNodes[i].tagName == "Circular")
                                {
                                    circularNo=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openCircularLink(\'' + circularNo + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            
                            if(result.childNodes[i].tagName == "Rule")
                                {
                                    
                                    if(result.childNodes[i].attributes.length>2)
                                    {            
                                        
                                            chapterNo=result.childNodes[i].attributes[0].value;
                                            ruleNo=result.childNodes[i].attributes[1].value;
                                            subRuleNo=result.childNodes[i].attributes[2].value;
                                        
                                             
                                            txt += '<a href="javascript:void(0)" ng-click="openRuleLink('+ chapterNo +', '+ruleNo+', '+subRuleNo+')">'+result.childNodes[i].textContent+'</a>';    
                                        
                                    }
                                    else
                                    {
                                         chapterNo=result.childNodes[i].attributes[0].value;
                                         ruleNo=result.childNodes[i].attributes[1].value;
                                        
                                        //txt += '<a href="javascript:void(0)" ng-click="openRuleLink1(\'' + chapterNo + '\' )">'+result.childNodes[i].textContent+'</a>';
                                        
                                         txt += '<a href="javascript:void(0)" ng-click="openRuleLink1('+ chapterNo +', '+ruleNo+' )">'+result.childNodes[i].textContent+'</a>';    
                                    }
                                    
                                }
                            
                            //order links
                            if(result.childNodes[i].tagName == "ROD")
                                {
                                    orderNo=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openOrderLink(\'' + orderNo + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            
                        }
                        else
                        {
                             txt += result.childNodes[i].textContent+'<br>';
                        }
                    
                    
                    
                }

            result = nodes.iterateNext();
            result1 = nodes1.iterateNext();
            result2 = nodes2.iterateNext();
        } 
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("sectionLink1").innerHTML = txt;
           
        var element = angular.element(document.querySelector('#sectionLink1'));
        var generated = element.html(txt);
        
        $compile(generated.contents())($scope);
           
		} 
    }
 
 
 $scope.openRuleLink=function(chapterNo, ruleNo, subRuleNo)
    {
    
        console.log("ENTERED openRuleLink FUNCTION");
        $location.path('/ruleLink');
        
        temp=chapterNo;
        temp1=ruleNo;
        temp2=subRuleNo;
        
        console.log("chapter id is "+temp);
        console.log("rule id is "+temp1);
        console.log("sub rule id is "+temp2);
     
        var xhttp = new XMLHttpRequest();
	
	   xhttp.onreadystatechange = function() 
       {
            if (this.readyState == 4 && this.status == 200) 
            {
                showResult1(xhttp.responseXML);
                console.log("CONNECTION ESTABLISHED");
            }
	   };

	   xhttp.open("GET", "temp.xml", true);
	   xhttp.send(); 
	
	   function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/FullRule[@chapter_id='"+temp+"']/OneRule[@rule_id='"+temp1+"']/SubRule[@subrule_id='"+temp2+"']";
		var c=1;
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
            
        var result = nodes.iterateNext();
            
        while (result) {
            document.getElementById("ruleLinkSubHeading").innerHTML = "CHAPTER " + temp + " RULE " +temp1;
            for(var i=0;i<result.childNodes.length;i++) 
                {
                    
                      //txt += result.childNodes[i].textContent;
                    
                    
                    
                        if(result.childNodes[i].tagName == "Definition" || result.childNodes[i].tagName == "SectionLink" || result.childNodes[i].tagName == "Circular" || result.childNodes[i].tagName == "ROD")
                        {
                            //definition links
                            if(result.childNodes[i].tagName == "Definition")
                                {
                                    defTitle=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openDefinition(\'' + defTitle + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            //section links
                            if(result.childNodes[i].tagName == "SectionLink")
                                {
                                    secNo=result.childNodes[i].attributes[0].value;
                                    
                                    
                                    if(result.childNodes[i].attributes.length>1)
                                    {            
                                        if(result.childNodes[i].attributes[1].nodeName == "subsection_id")
                                        {
                                            subSecNo=result.childNodes[i].attributes[1].value;
                                             
                                            txt += '<a href="javascript:void(0)" ng-click="openSectionLink('+ secNo +', '+subSecNo+')">'+result.childNodes[i].textContent+'</a>';    
                                        }
                                    }
                                    else
                                    {
                                        txt += '<a href="javascript:void(0)" ng-click="openSectionLink1(\'' + secNo + '\' )">'+result.childNodes[i].textContent+'</a>';
                                            
                                    }
                                } 
                            
                            //circular links
                            if(result.childNodes[i].tagName == "Circular")
                                {
                                    circularNo=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openCircularLink(\'' + circularNo + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            //order links
                            if(result.childNodes[i].tagName == "ROD")
                                {
                                    orderNo=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openOrderLink(\'' + orderNo + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                            
                            
                        }
                        else
                        {
                             txt += result.childNodes[i].textContent+'<br>';
                        }
                    
                    
                    
                }

            result = nodes.iterateNext();
        } 
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("ruleLink1").innerHTML = txt;
           
        var element = angular.element(document.querySelector('#ruleLink1'));
        var generated = element.html(txt);
        
        $compile(generated.contents())($scope);
           
		} 
    }
 
 
 $scope.openRuleLink1=function(chapterNo, ruleNo)
    {
    
        console.log("ENTERED openRuleLink1 FUNCTION");
        $location.path('/ruleLink');
        
        temp=chapterNo;
        temp1=ruleNo;
        
        console.log("chapter id is "+temp);
        console.log("rule id is "+temp1);
     
        var xhttp = new XMLHttpRequest();
	
	   xhttp.onreadystatechange = function() 
       {
            if (this.readyState == 4 && this.status == 200) 
            {
                showResult1(xhttp.responseXML);
                console.log("CONNECTION ESTABLISHED");
            }
	   };

	   xhttp.open("GET", "temp.xml", true);
	   xhttp.send(); 
	
	   function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/FullRule[@chapter_id='"+temp+"']/OneRule[@rule_id='"+temp1+"']";
		var c=1;
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
            
        var result = nodes.iterateNext();
            
        while (result) {
            document.getElementById("ruleLinkSubHeading").innerHTML = "CHAPTER " + temp + " RULE " +temp1;
            for(var i=0;i<result.childNodes.length;i++) 
                {
                    
                      txt += result.childNodes[i].textContent;

                    
                }

            result = nodes.iterateNext();
        } 
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("ruleLink1").innerHTML = txt;
           
        var element = angular.element(document.querySelector('#ruleLink1'));
        var generated = element.html(txt);
        
        $compile(generated.contents())($scope);
           
		} 
    }
 
 
 
 $scope.openCircularLink=function(circularNo)
    {
    
        console.log("ENTERED openCircularLink FUNCTION");
        $location.path('/'+circularNo);
        console.log("circular value is "+circularNo);
     
    }
 
 $scope.openOrderLink=function(orderNo)
    {
    
        console.log("ENTERED openOrderLink FUNCTION");
        $location.path('/'+orderNo);
        console.log("order value is "+orderNo);
     
    }
 
 
 
 
 $scope.showCirculars=function()
   {
      console.log("ENTERED showCirculars FUNCTION");
      $location.path('/circulars');
     
      var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult1(xhttp.responseXML);
        console.log("CONNECTION ESTABLISHED");
    }
	};

	xhttp.open("GET", "temp.xml", true);
	xhttp.send(); 
	
	function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/FullCircular";
		var c=1;
		
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        
        var result = nodes.iterateNext();
        txt+='<div class="list">';
        while (result) {
            
            txt += '<a class="item item-icon-left" id="'+c+'">'+c+'. '+result.childNodes[0].nodeValue+'</a>';

            result = nodes.iterateNext();
            c++;
        } 
        txt+='</div>';
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("circular").innerHTML = txt;
		}  
    }
    
    $scope.openCirculars=function()
    {
      var ele,t1;
      console.log("ENTERED openCirculars FUNCTION");
       window.addEventListener('click', function(e) {
            ele=e.target.id;
           t1=$(event.target).text();
           console.log(t1);

           angular.forEach(ele, function(child){
               $state.go('circulars'+ele); 
                    });
             });   
    }
 
 $scope.showRules=function()
   {
      console.log("ENTERED showRules FUNCTION");
      $location.path('/rules');
     
     var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult1(xhttp.responseXML);
        console.log("CONNECTION ESTABLISHED");
    }
	};

	xhttp.open("GET", "temp.xml", true);
	xhttp.send(); 
	
	function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/FullRule";
        path1= "/Acts/FullRule/OneRule[@rule_id=1]/SubRule[@subrule_id=1]";
		var c=1;
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var nodes1 = xml.evaluate(path1, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        var result1 = nodes1.iterateNext();
        txt+='<div class="list card" id="bt1">';
        while (result && result1) {
            
            /*var str = result.childNodes[0].textContent;
            var start_pos = str.indexOf('(') + 1;
            var end_pos = str.indexOf(')',start_pos);
            var text_to_get = str.substring(start_pos,end_pos);*/
            
            //result.attributes[0]    chapter_id=​"1"
            var chapterName = "";
            var chapterId = '';
            var aliasChapterIdRoman = '';
            if(result.attributes.length>0){
                for(x=0;x<result.attributes.length;x++){
                    if(result.attributes[x].nodeName == 'chapter_id')
                        {
                           chapterName="CHAPTER"; 
                        }
                    if(result.attributes[x].nodeValue != undefined){
                        chapterId = result.attributes[x].nodeValue;
                        
                        aliasChapterIdRoman = $scope.findRulesChapterAlias(chapterId);
                        
                        chapterName += " " + aliasChapterIdRoman +'<br/>';
                        /*chapterName += " " + result.attributes[x].nodeValue +'<br/>';*/
                        /*chapterId = result.attributes[x].nodeValue;*/
                       }
                }
            }
             var companiesSubstring = '<b>'+chapterName +'</b>' + result1.childNodes[0].textContent.substring(result1.childNodes[0].textContent.indexOf('Companies'));
            
            
            txt += '<a class="item item-icon-left" id="'+chapterId+'" href="javascript:void(0)" ng-click="openRules('+ c +')">'+companiesSubstring+'</a>';
              
            
            /*for(n=0;n<result.childNodes.length;n++){
                if(result.childNodes[n].nodeName == "OneRule")
                    {
                        if(result.childNodes[n].attributes.length > 0)
                            {
                                for(m=0;m<result.childNodes[n].attributes.length;m++){
                                    if(result.childNodes[n].attributes[m].nodeName=='rule_id'){
                                        if(result.childNodes[n].attributes[m].nodeValue = '1')
                                            {
                                                for(p=0;p<result.childNodes[n].childNodes.length;p++){
                                                               if(result.childNodes[n].childNodes[p].tagName == 'SubRule' ){
                                                                   for(q=0;q<result.childNodes[n].childNodes[p].attributes.length;q++){
                                                                           if(result.childNodes[n].childNodes[p].attributes[q].nodeName == 'subrule_id')
                                                                               {
                                                                                    if(result.childNodes[n].childNodes[p].attributes[q].nodeValue == '1'){
                                                                                      chapterName += " " + result.childNodes[n].childNodes[p].textContent.substring(result.childNodes[n].childNodes[p].textContent.indexOf('Companies '));
                                                                                       txt+=chapterName;
                                                                                       chapterName='';
                                                                                       //return;
                                                                                      }
                                                                               }
                                                                           break;
                                                                       }

                                                                   }
                                                           }

                                            }

                                    }

                                }
                            }
                    }
            }*/
            
            
            /*txt += '<a class="item item-icon-left" id="'+c+'" href="javascript:void(0)" ng-click="openRules('+ c +')">'+c+'. '+result.childNodes[0].textContent+'</a>';*/
              //txt+=chapterName;
            /*txt+='<a class="item item-icon-left" id="'+chapterId+'" href="javascript:void(0)" ng-click="openRules('+ chapterId +')">'+chapterName+'</a>';*/

            result = nodes.iterateNext();
            result1 = nodes1.iterateNext();
            c++;
        } 
        txt+='</div>';
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("rule").innerHTML = txt;
        
            var element = angular.element(document.querySelector('#rule'));
            var generated = element.html(txt);
        
            $compile(generated.contents())($scope);
		}
     
    }
 
 
 $scope.openRules=function(rid,rulesChaperId)
 {
    console.log("ENTERED openRules FUNCTION");
    $location.path('/rulesData');
    console.log("clicked chapter's id is "+rid);
     
     //assigning id to rules
            if(rid == 1)
                {
                    newRuleId = 1;
                }
            else if(rid == 2)
                {
                    newRuleId = 2;
                }
            else if(rid == 3)
                {
                    newRuleId = 3;
                }
            else if(rid == 4)
                {
                    newRuleId = "3A";
                }
            else if(rid == 5)
                {
                    newRuleId = 4;
                }
             else if(rid == 6)
                {
                    newRuleId = "4(1)";
                }
            else if(rid == 7)
                {
                    newRuleId = 5;
                }
            else if(rid == 8)
                {
                    newRuleId = 6;
                }
            else if(rid == 9)
                {
                    newRuleId = 7;
                }
            else if(rid == 10)
                {
                    newRuleId = 8;
                }
            else if(rid == 11)
                {
                    newRuleId = "8A";
                }
            else if(rid == 12)
                {
                    newRuleId = 9;
                }
            else if(rid == 13)
                {
                    newRuleId = "9A";
                }
            else if(rid == 14)
                {
                    newRuleId = "9B";
                }
            else if(rid == 15)
                {
                    newRuleId = 10;
                }
            else if(rid == 16)
                {
                    newRuleId = "10A";
                }
            else if(rid == 17)
                {
                    newRuleId = 11;
                }
            else if(rid == 18)
                {
                    newRuleId = 12;
                }
            else if(rid == 19)
                {
                    newRuleId = 13;
                }
            else if(rid == 20)
                {
                    newRuleId = 14;
                }
            else if(rid == 21)
                {
                    newRuleId = 15;
                }
            else if(rid == 22)
                {
                    newRuleId = 18;
                }
            else if(rid == 23)
                {
                    newRuleId = 22;
                }
            else if(rid == 24)
                {
                    newRuleId = 21;
                }
            else if(rid == 25)
                {
                    newRuleId = 24;
                }
            else if(rid == 26)
                {
                    newRuleId = 26;
                }
            else if(rid == 27)
                {
                    newRuleId = 27;
                }
            else if(rid == 28)
                {
                    newRuleId = "27(1)";
                }
            else if(rid == 29)
                {
                    newRuleId = "27(2)";
                }
            else if(rid == 30)
                {
                    newRuleId = 29;
                }
            else
                {}
     
        console.log("new id is "+newRuleId);
     
     var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult1(xhttp.responseXML);
        console.log("CONNECTION ESTABLISHED");
    }
	};

	xhttp.open("GET", "temp.xml", true);
	xhttp.send(); 
	
	function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/FullRule[@chapter_id='"+newRuleId+"']";
		var c=1;
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext(); 
        while (result) {
            document.getElementById("chapterSubHeading").innerHTML = "CHAPTER " + newRuleId;
            //txt+="<h1>"+ "Chapter" + " " + newRuleId +"</h1>";
            //txt += '<div class="bar bar-subheader bar-dark"><h2 class="title">Chapter '+newRuleId+'</h2></div><br>';
            
            for(var i=0;i<result.childNodes.length;i++) 
                { 
                   
                    //txt += result.childNodes[i].textContent;
                    //By Aditya
                    /*if(result.childNodes[i].hasChildNodes() == true)
                        {
                            for(var j=0; j<result.childNodes[i].childNodes.length; j++)
                                {
                                    if(result.childNodes[i].childNodes[j].tagName == "SectionLink")
                                        {
                                            txt += "<a>"+result.childNodes[i].childNodes[j].textContent+"</a>";
                                        }
                                    else if(result.childNodes[i].childNodes[j].hasChildNodes() == true)
                                        {
                                          
                                            for(var k=0; k<result.childNodes[i].childNodes[j].childNodes.length; k++)
                                                {
                                                    if(result.childNodes[i].childNodes[j].childNodes[k].tagName == "SectionLink")
                                                        {
                                                            txt += "<a>"+result.childNodes[i].childNodes[j].childNodes[k].textContent+"</a>";
                                                        }
                                                    else
                                                        {
                                                            txt += result.childNodes[i].textContent;
                                                        }
                                                }
                                                   
                                        }
                                    else
                                        {
                                            txt += result.childNodes[i].textContent;
                                        }
                                        
                                }
                        }
                    else
                        {
                            txt += result.childNodes[i].textContent;
                        }*/
                    
                    
                    //By Shital
                    
                    if(result.childNodes[i].hasChildNodes() == true)
                        {
                            for(var j=0; j<result.childNodes[i].childNodes.length; j++)
                                {
                                    if(result.childNodes[i].childNodes[j].nodeName == '#text')
                                        {
                                            txt += result.childNodes[i].childNodes[j].textContent;
                                        }
                                     if(result.childNodes[i].childNodes[j].nodeName == 'SubRule')
                                        {
                                            if(result.childNodes[i].childNodes[j].hasChildNodes() == true)
                                            {
                                                if(result.childNodes[i].childNodes[j].childNodes.length> 0)
                                                    {
                                                        for(k=0;k<result.childNodes[i].childNodes[j].childNodes.length;k++)
                                                            {
                                                            if(result.childNodes[i].childNodes[j].childNodes[k].hasChildNodes()==false)
                                                            {
                                                                txt += result.childNodes[i].childNodes[j].childNodes[k].textContent;
                                                            }
                                                            else
                                                            {
                                                                if(result.childNodes[i].childNodes[j].childNodes[k].tagName=='SectionLink')
                                                                    {
                                                                       if(result.childNodes[i].childNodes[j].childNodes[k].attributes.length > 1)
                                                                       {
                                                                           secId=result.childNodes[i].childNodes[j].childNodes[k].attributes[0].nodeValue;
                                                                            subSecId=result.childNodes[i].childNodes[j].childNodes[k].attributes[1].nodeValue;
                                                                        
                                                                            txt += '<a href="javascript:void(0)" ng-click="openRuleSectionSubSectionLink(\'' + secId + '\',\'' + subSecId + '\')">'+result.childNodes[i].childNodes[j].childNodes[k].textContent+'</a>';
                                                                       }
                                                                        else
                                                                        {
                                                                           if(result.childNodes[i].childNodes[j].childNodes[k].attributes.length == 1) 
                                                                           {
                                                                              secId=result.childNodes[i].childNodes[j].childNodes[k].attributes[0].nodeValue; 
                                                                               txt += '<a href="javascript:void(0)" ng-click="openRuleSectionLink('+ secId +')">'+result.childNodes[i].childNodes[j].childNodes[k].textContent+'</a>';
                                                                           }
                                                                        }
                                                                                                                                                     
                                                                    }
                                                                if(result.childNodes[i].childNodes[j].childNodes[k].tagName=='Notification')
                                                                    {
                                                                        txt += '<a href="javascript:void(0)">'+result.childNodes[i].childNodes[j].childNodes[k].textContent+'</a>';
                                                                    }
                                                            }
                                                            }
                                                    }
                                            }
                                        }
                                       
                                    if(result.childNodes[i].childNodes[j].tagName == 'SectionLink')
                                    {
                                        var section_id = 0;
                                        var subsection_id = 0;
                                        if(result.childNodes[i].childNodes[j].attributes.length>0)   
                                            { 
                                                
                                                for(m=0;m<result.childNodes[i].childNodes[j].attributes.length;m++)
                                                    {
                                                        if(result.childNodes[i].childNodes[j].attributes[m].nodeName == 'section_id')
                                                            {
                                                               section_id =  result.childNodes[i].childNodes[j].attributes[m].textContent;
                                                            }
                                                        if(result.childNodes[i].childNodes[j].attributes[m].nodeName == 'subsection_id')
                                                            {
                                                               subsection_id =  result.childNodes[i].childNodes[j].attributes[m].textContent;
                                                            }                                                        
                                                    }
                                            }
/*                                        txt+= '<a href="javascript:void(0)" section_id="' + section_id +'" subsection_id = "' + subsection_id + '"  ng-click="openRuleSectionSubSectionLink('+ section_id +', '+subsection_id+')">'+result.childNodes[i].childNodes[j].textContent+'</a>';*/
                                                                                txt+= '<a href="javascript:void(0)" section_id="' + section_id +'" subsection_id = "' + subsection_id + '"  ng-click="openRuleSectionSubSectionLink(\'' + section_id + '\',\'' + subsection_id + '\')">'+result.childNodes[i].childNodes[j].textContent+'</a>';
                                    }
                                    
                                    if(result.childNodes[i].childNodes[j].tagName == 'Notification')
                                    {
                                        /*var section_id = 0;
                                        var subsection_id = 0;
                                        if(result.childNodes[i].childNodes[j].attributes.length>0)   
                                            {
                                                
                                                for(m=0;m<result.childNodes[i].childNodes[j].attributes.length;m++)
                                                    {
                                                        if(result.childNodes[i].childNodes[j].attributes[m].nodeName == 'section_id')
                                                            {
                                                               section_id =  result.childNodes[i].childNodes[j].attributes[m].textContent;
                                                            }
                                                        if(result.childNodes[i].childNodes[j].attributes[m].nodeName == 'subsection_id')
                                                            {
                                                               subsection_id =  result.childNodes[i].childNodes[j].attributes[m].textContent;
                                                            }                                                        
                                                    }
                                            }*/
                                        txt+= '<a href="javascript:void(0)">'+result.childNodes[i].childNodes[j].textContent+'</a>';
                                    }
                                }
                        }
                    else
                        {
                            txt += result.childNodes[i].textContent;
                        }               
                    
                    //END By Shital
                        
                }
            

            result = nodes.iterateNext();
            c++;
        } 
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("rulesData").innerHTML = txt;
        
            var element = angular.element(document.querySelector('#rulesData'));
            var generated = element.html(txt);
        
            $compile(generated.contents())($scope);
		}
    
 }
 
 $scope.opensam=function(secno,subsecno){
     console.log(secno);
     console.log(subsecno);
 }
 
 $scope.openRuleSectionSubSectionLink=function(secNo, subSecNo)
    {
    
        var subSubSecNo = "";
        var subSectionNo="";
        console.log("ENTERED openRuleSectionSubSectionLink FUNCTION");
        $location.path('/ruleSectionLink');

        
        console.log("value of section is "+secNo);
        console.log("value of subsection is "+subSecNo);
     
     if(subSecNo.indexOf(",")> -1 )
         {
             subSectionNo = subSecNo.substring(0, subSecNo.indexOf(","));
             subSubSecNo = subSecNo.substring( subSecNo.indexOf(",")+1);
         }else{
             subSectionNo = subSecNo;
         }
        console.log(subSectionNo);
        console.log(subSubSecNo);
        var xhttp = new XMLHttpRequest();
	
	   xhttp.onreadystatechange = function() 
       {
            if (this.readyState == 4 && this.status == 200) 
            {
                showResult1(xhttp.responseXML);
                console.log("CONNECTION ESTABLISHED");
            }
	   };

	   xhttp.open("GET", "temp.xml", true);
	   xhttp.send(); 
	
	   function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/Chapter/Section[@id='"+secNo+"']/SubSection[@id='"+subSectionNo+"']";
        path1 = "/Acts/Chapter/Section[@id='"+secNo+"']";
        path2 = "/Acts/Chapter/Section[@id='"+secNo+"']/Name";
        
        /*if(subSubSecNo!=""){
            path3 = "/Acts/Chapter/Section[@id='"+secNo+"']/SubSection[@id='"+subSubSecNo+"']";
        }*/
           
           
		var c=1;
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var nodes1 = xml.evaluate(path1, xml, null, XPathResult.ANY_TYPE, null);
        var nodes2 = xml.evaluate(path2, xml, null, XPathResult.ANY_TYPE, null);
            
           /* if(path3 != "" && path3 != undefined){
                var nodes3 = xml.evaluate(path3, xml, null, XPathResult.ANY_TYPE, null);
            }*/
            
        var result = nodes.iterateNext();
        var result1 = nodes1.iterateNext();
        var result2 = nodes2.iterateNext();
        /*if(nodes3 != "" && nodes3!= undefined){
            var result3 = nodes3.iterateNext();        
        }*/
            
        while (result && result1 && result2) {
            document.getElementById("linkSubHeading").innerHTML = "SECTION " + secNo;
            txt += result1.childNodes[0].textContent+"<br>"+result2.childNodes[0].textContent+"<br><br>";
            for(var i=0;i<result.childNodes.length;i++) 
                {
                    // FOR LINKS WITHIN LINKS OF RULE
                    if(result.childNodes[i].tagName == "Rule" || result.childNodes[i].tagName == "Definition" || result.childNodes[i].tagName == "SectionLink" || result.childNodes[i].tagName == "Notification" || result.childNodes[i].tagName == "TableLink")
                       {
                            if(result.childNodes[i].tagName == "Rule")
                                {
                                    
                                if(result.childNodes[i].attributes.length == 2)
                                    {
                                        
                                    var ruleLinkChapterId = result.childNodes[i].attributes[0].nodeValue;
                                    var ruleLinkRuleId = result.childNodes[i].attributes[1].nodeValue;
                                    
                                    txt += '<a href="javascript:void(0)" ng-click="openRuleLink1('+ ruleLinkChapterId +', '+ruleLinkRuleId+' )">'+result.childNodes[i].textContent+'</a>';
                                        
                                    }
                                if(result.childNodes[i].attributes.length == 3)
                                    {
                                        
                                    var ruleLinkChapterId = result.childNodes[i].attributes[0].nodeValue;
                                    var ruleLinkRuleId = result.childNodes[i].attributes[1].nodeValue;
                                    var ruleLinkSubRuleId = result.childNodes[i].attributes[2].nodeValue;
                                        
                                    txt += '<a href="javascript:void(0)" ng-click="openRuleLink('+ ruleLinkChapterId +', '+ruleLinkRuleId+', '+ruleLinkSubRuleId+')">'+result.childNodes[i].textContent+'</a>';
                                        
                                    } 
                                    
                                }
                           if(result.childNodes[i].tagName == "Definition")
                                {
                                    var definitionTitle=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openDefinition(\'' + definitionTitle + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                           if(result.childNodes[i].tagName == "SectionLink")
                                {
                                    var sectionNumber=result.childNodes[i].attributes[0].value;

                                    if(result.childNodes[i].attributes.length>1)
                                    {            
                                        if(result.childNodes[i].attributes[1].nodeName == "subsection_id")
                                        {
                                            var subSectionNumber=result.childNodes[i].attributes[1].value;
                                             
                                            txt += '<a href="javascript:void(0)" ng-click="openSectionLink('+ sectionNumber +', '+subSectionNumber+')">'+result.childNodes[i].textContent+'</a>';    
                                        }
                                    }
                                    else
                                    {
                                        txt += '<a href="javascript:void(0)" ng-click="openSectionLink1(\'' + sectionNumber + '\' )">'+result.childNodes[i].textContent+'</a>';
                                            
                                    }
                                }
                           
                           if(result.childNodes[i].tagName == "Notification")
                                {
                                    var notificationTitle=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openNotification(\'' + notificationTitle + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                           
                           if(result.childNodes[i].tagName == "TableLink")
                                {
                                    var TableLinkTitle=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openTableLink(\'' + TableLinkTitle + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                           
                       }
                    else
                       {
                            txt += result.childNodes[i].textContent;
                       }
                    
                    /*if(result3 != "" && result3 != undefined )
                        {
                             txt += result3.childNodes[i].textContent;
                        }*/
                }

            result = nodes.iterateNext();
            result1 = nodes1.iterateNext();
            result2 = nodes2.iterateNext();
            
            /*if(result3 != "" && result3 != undefined)
                {
                   result3 = nodes3.iterateNext(); 
                }*/
            
        } 
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("ruleSectionLink").innerHTML = txt;
           
        var element = angular.element(document.querySelector('#ruleSectionLink'));
        var generated = element.html(txt);
        
        $compile(generated.contents())($scope);
           
		} 
    }
 
 $scope.openRuleSectionLink=function(secNo)
    {
    
        console.log("ENTERED openRuleSectionLink FUNCTION");
        $location.path('/ruleSectionLink');
        
        temp=secNo;
        //temp1=subSecNo;
        
        console.log("value of section is "+temp);
        //console.log("value of subsection is "+temp1);
     
        var xhttp = new XMLHttpRequest();
	
	   xhttp.onreadystatechange = function() 
       {
            if (this.readyState == 4 && this.status == 200) 
            {
                showResult1(xhttp.responseXML);
                console.log("CONNECTION ESTABLISHED");
            }
	   };

	   xhttp.open("GET", "temp.xml", true);
	   xhttp.send(); 
	
	   function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/Chapter/Section[@id='"+temp+"']";
        path1 = "/Acts/Chapter/Section[@id='"+temp+"']";
        path2 = "/Acts/Chapter/Section[@id='"+temp+"']/Name";
		var c=1;
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var nodes1 = xml.evaluate(path1, xml, null, XPathResult.ANY_TYPE, null);
        var nodes2 = xml.evaluate(path2, xml, null, XPathResult.ANY_TYPE, null);
            
        var result = nodes.iterateNext();
        var result1 = nodes1.iterateNext();
        var result2 = nodes2.iterateNext();
            
        while (result && result1 &&result2) {
            document.getElementById("linkSubHeading").innerHTML = "SECTION " + secNo;
            txt += result1.childNodes[0].textContent+"<br>"+result2.childNodes[0].textContent+"<br><br>";
            for(var i=0;i<result.childNodes.length;i++) 
                {
                    
                    //txt += result.childNodes[i].textContent;
                    
                    // FOR LINKS WITHIN LINKS OF RULE
                    if(result.childNodes[i].tagName == "Rule" || result.childNodes[i].tagName == "Definition" || result.childNodes[i].tagName == "SectionLink" || result.childNodes[i].tagName == "Notification" || result.childNodes[i].tagName == "TableLink")
                       {
                            if(result.childNodes[i].tagName == "Rule")
                                {
                                    
                                if(result.childNodes[i].attributes.length == 2)
                                    {
                                        
                                    var ruleLinkChapterId = result.childNodes[1].attributes[0].nodeValue;
                                    var ruleLinkRuleId = result.childNodes[1].attributes[1].nodeValue;
                                    
                                    txt += '<a href="javascript:void(0)" ng-click="openRuleLink1('+ ruleLinkChapterId +', '+ruleLinkRuleId+' )">'+result.childNodes[i].textContent+'</a>';
                                        
                                    }
                                if(result.childNodes[i].attributes.length == 3)
                                    {
                                        
                                    var ruleLinkChapterId = result.childNodes[1].attributes[0].nodeValue;
                                    var ruleLinkRuleId = result.childNodes[1].attributes[1].nodeValue;
                                    var ruleLinkSubRuleId = result.childNodes[1].attributes[2].nodeValue;
                                        
                                    txt += '<a href="javascript:void(0)" ng-click="openRuleLink('+ ruleLinkChapterId +', '+ruleLinkRuleId+', '+ruleLinkSubRuleId+')">'+result.childNodes[i].textContent+'</a>';
                                        
                                    } 
                                    
                                }
                           if(result.childNodes[i].tagName == "Definition")
                                {
                                    var definitionTitle=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openDefinition(\'' + definitionTitle + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                           if(result.childNodes[i].tagName == "SectionLink")
                                {
                                    
                                    var sectionNumber=result.childNodes[i].attributes[0].value;

                                    if(result.childNodes[i].attributes.length>1)
                                    {            
                                        if(result.childNodes[i].attributes[1].nodeName == "subsection_id")
                                        {
                                            var subSectionNumber=result.childNodes[i].attributes[1].value;
                                             
                                            txt += '<a href="javascript:void(0)" ng-click="openSectionLink('+ sectionNumber +', '+subSectionNumber+')">'+result.childNodes[i].textContent+'</a>';    
                                        }
                                    }
                                    else
                                    {
                                        txt += '<a href="javascript:void(0)" ng-click="openSectionLink1(\'' + sectionNumber + '\' )">'+result.childNodes[i].textContent+'</a>';
                                            
                                    }
                                    
                                }
                           
                            if(result.childNodes[i].tagName == "Notification")
                                {
                                    var notificationTitle=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openNotification(\'' + notificationTitle + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                           
                           if(result.childNodes[i].tagName == "TableLink")
                                {
                                    var TableLinkTitle=result.childNodes[i].attributes[0].value;
                            
                                    txt += '<a href="javascript:void(0)" ng-click="openTableLink(\'' + TableLinkTitle + '\')">'+result.childNodes[i].textContent+'</a>';
                                }
                       }
                    else
                       {
                            txt += result.childNodes[i].textContent;
                       }
                    
                }

            result = nodes.iterateNext();
            result1 = nodes1.iterateNext();
            result2 = nodes2.iterateNext();
        } 
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("ruleSectionLink").innerHTML = txt;
           
        var element = angular.element(document.querySelector('#ruleSectionLink'));
        var generated = element.html(txt);
        
        $compile(generated.contents())($scope);
           
		} 
    } 
 
 //orders functions
 $scope.showOrders=function()
   {
      console.log("ENTERED showOrders FUNCTION");
      $location.path('/orders');
     
      var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult1(xhttp.responseXML);
        console.log("CONNECTION ESTABLISHED");
    }
	};

	xhttp.open("GET", "temp.xml", true);
	xhttp.send(); 
	
	function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/FullROD";
        path1 = "/Acts/FullRODNomenclature";
		var c=1;
		
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var nodes1 = xml.evaluate(path1, xml, null, XPathResult.ANY_TYPE, null);
        
        var result = nodes.iterateNext();
        var result1 = nodes1.iterateNext();
            
        txt+='<div class="list">';
            
        while (result && result1) {
            
            txt += '<a class="item item-thumbnail-left" id="'+c+'"><img src="img/logo6.png"><h3>'+result.childNodes[0].nodeValue+'</h3><p>'+result1.childNodes[0].nodeValue+'</p></a>';

            result = nodes.iterateNext();
            c++;
        } 
        txt+='</div>';
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("order").innerHTML = txt;
		}
     
    }
 
 $scope.openOrders=function()
    {
      var ele,t1;
      console.log("ENTERED openOrders FUNCTION");
       window.addEventListener('click', function(e) {
            ele=e.target.id;
           t1=$(event.target).text();
           console.log(t1);

           angular.forEach(ele, function(child){
               $state.go('orders'+ele); 
                    });
             });   
    }
 
 //Secretarial Standards Functions
 $scope.showSS=function()
   {
      console.log("ENTERED showSS FUNCTION");
      $location.path('/ss');

      var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult1(xhttp.responseXML);
        console.log("CONNECTION ESTABLISHED");
    }
	};

	xhttp.open("GET", "temp.xml", true);
	xhttp.send(); 
	
	function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/FullSTD";
		var c=1;
		
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        
        var result = nodes.iterateNext();
        txt+='<div class="list">';
        while (result) {
            
            txt += '<a class="item item-icon-left" id="'+c+'"><i class="icon ion-home"></i>'+result.childNodes[0].nodeValue+'</a>';
            

            result = nodes.iterateNext();
            c++;
        } 
        txt+='</div>';
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("ss1").innerHTML = txt;
		}
     
   }
 
 
  $scope.openSS=function()
    {
      var ele,t1;
      console.log("ENTERED openSS FUNCTION");
       window.addEventListener('click', function(e) {
            ele=e.target.id;
           t1=$(event.target).text();
           console.log(t1);
           
          angular.forEach(ele, function(child){
               $state.go('ss'+ele); 
                    });
           });   
    }
  
 //WhatsNew Functions
 $scope.showWhatsNew=function()
   {
      console.log("ENTERED showWhatsNew FUNCTION");
      $location.path('/whatsnew');
     
     var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult1(xhttp.responseXML);
        console.log("CONNECTION ESTABLISHED");
    }
	};

	xhttp.open("GET", "temp.xml", true);
	xhttp.send(); 
	
	function showResult1(xml) {
		console.log("entered showResult function");
		var txt = "";
		path = "/Acts/WhatsNew";
		var c=1;
		
		if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        
        var result = nodes.iterateNext();
        txt+='<div class="list card">';
        while (result) {
            
            txt += '<a class="item" id="'+c+'">'+result.childNodes[0].nodeValue+'</a>';

            result = nodes.iterateNext();
            c++;
        } 
        txt+='</div>';
		// Code For Internet Explorer
		} else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
		}
			document.getElementById("whatsnew").innerHTML = txt;
		}
     
    }
 
 $scope.openWhatsNew=function()
    {
      var ele,t1;
      console.log("ENTERED openWhatsNew FUNCTION");
       window.addEventListener('click', function(e) {
            ele=e.target.id;
           t1=$(event.target).text();
           console.log(t1);
           
           
           angular.forEach(ele, function(child){
               $state.go('whatsnew'+ele); 
                    });
           
           //window.location.assign("/views/files/whatsnew/"+t1);
           
             });  
          
    }
 
$scope.findRulesChapterAlias = function(chapterId){
    //var rulesChapterArray = $filter('filter')($scope.rulesTitleAlias, {'rulesChapterId':chapterId});
    
    for (var i = 0; i < $scope.rulesTitleAlias.length; i++)
      {
        if($scope.rulesTitleAlias[i].rulesChapterId == chapterId){
            return $scope.rulesTitleAlias[i].aliasName;
        }
      }
}  
 

})
