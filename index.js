var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","Welcome in SOC IPS Academy","How can I help you?"],
        options: ["Information 💁","News 📰","Shopping 🛍️","Music 📖"]
    },
    information: {
        title:["Please select category"],
        options:['Schedule','Result','Exam Material','Others'],
        url : {
            
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:["Educational News","Technology News","Politics News","Govt. News"],
        url : {
            more:"https://www.hindustantimes.com/",
            link:["https://www.hindustantimes.com/education/news","https://www.hindustantimes.com/technology","https://www.hindustantimes.com/india-news","https://www.hindustantimes.com/topic/government"]
        }
    },
    shopping: {
        title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {
            more:"https://www.verical.com/",
            link:["https://www.lotuselectronics.com/search?q=tv&alias=","https://www.amazon.com/s?k=camera&crid=2RJ1B478RJKQH&sprefix=solar+pcamera+%2Caps%2C370&ref=nb_sb_noss_2","https://www.amazon.com/s?k=gaming+console&crid=1WEFJJGU63C2O&sprefix=gaming+console%2Caps%2C398&ref=nb_sb_noss_1","https://www.walmart.com/search/?query=amazing+headphones&&adid=22222222224-1&wmlspartner=wmtlabs&wl0=e&wl1=o&wl2=c&wl3=72636895311387&wl4=kwd-72637324308435:loc-90&wl5=149846&wl6=&wl7=&wl14=headphones&veh=sem&msclkid=346a2899bc58168c9aa44ed6870d1969","https://www.amazon.com/speakers/s?k=speakers"]
        }
    },
    beauty: {
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.faire.com/",
            link:["https://www.faire.com/search?q=makeup&refReqId=2ssz2e4v74n7n4tjuuskbm84h&refType=SUGGESTIONS_SEARCH_QUERIES","https://www.faire.com/search?q=sakin%20care","#","https://www.faire.com/search?q=hair%20care"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.flipkart.com/",
            link:["https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_45fa71bc-504f-47da-834a-d7205b4247ca_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J","https://www.flipkart.com/search?q=covers%20for%20phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off","https://www.flipkart.com/search?q=power+bank&sid=tyy%2C4mr%2Cfu6&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&as-pos=1&as-type=RECENT&suggestionId=power+bank%7CPower+Banks&requestId=9b149e35-177e-440a-b183-ebc511ad8a88&as-backfill=on","https://www.flipkart.com/search?q=tablet&sid=tyy%2Chry&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_na&as-pos=2&as-type=RECENT&suggestionId=tablet%7CTablets&requestId=77d85996-ac20-4cd1-b1fb-c2d74b5caea1&as-backfill=on"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.flipkart.com/",
            link:["https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_8b291a6a-23ff-4759-95a9-1d5fffd48d34_1_372UD5BXDFYS_MC.AHHHWF67UPNB&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~All_AHHHWF67UPNB&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=AHHHWF67UPNB","https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_8b291a6a-23ff-4759-95a9-1d5fffd48d34_1_372UD5BXDFYS_MC.AHHHWF67UPNB&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~All_AHHHWF67UPNB&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=AHHHWF67UPNB","https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_8b291a6a-23ff-4759-95a9-1d5fffd48d34_1_372UD5BXDFYS_MC.AHHHWF67UPNB&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~All_AHHHWF67UPNB&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=AHHHWF67UPNB","#","#"]
        }
    },
    women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.flipkart.com/",
            link:["https://www.flipkart.com/","https://www.meesho.com/","https://www.amazon.com/s?k=ethnic+wear+kids&adgrpid=1346903306839215&hvadid=84181698049003&hvbmt=bb&hvdev=c&hvlocphy=149846&hvnetw=o&hvqmt=b&hvtargid=kwd-84182419043760%3Aloc-90&hydadcr=7693_13467793&tag=mh0b-20&ref=pd_sl_4ti7tzsett_b","https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_8b291a6a-23ff-4759-95a9-1d5fffd48d34_1_372UD5BXDFYS_MC.AHHHWF67UPNB&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~All_AHHHWF67UPNB&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=AHHHWF67UPNB"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["song 1","song 2","song 3","song 4","song 5"],
        url : {
            more:"https://youtu.be/R9cAHnMtVSw?si=6eUU5i-QW-fY5DqS",
            link:["https://www.youtube.com/watch?v=PA6Z7KyI8Jo","https://www.youtube.com/watch?v=PA6Z7KyI8Jo","https://www.youtube.com/watch?v=PA6Z7KyI8Jo","https://www.youtube.com/watch?v=PA6Z7KyI8Jo"]
        }
    },
    schedule: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Class-time","MST-date","Codding-test","Presentation","Event"],
        url: {
            more:"https://www.ipsacademy.org/college/school-of-computers",
            link:["","#","#","#","#"]
        }
    },
    result: {
        title: ["Thanks for your response","Some Reults Type"],
        options: ["Test","MST","Practial","Codding-Test","Sem-result"],
        url: {
            more:"https://www.ipsacademy.org/",
            link:["https://www.rgpv.ac.in/Login/StudentLogin.aspx","https://www.rgpv.ac.in/Login/StudentLogin.aspx","","https://www.rgpv.ac.in/Login/StudentLogin.aspx","https://www.rgpv.ac.in/Login/StudentLogin.aspx "]
        }
    },
    exam: {
        title: ["Thanks for your response","Here are some genre based Exam material"],
        options: ["Pdf","Schems","Syllabus","books","Previous Paper"],
        url: {
            more:"https://www.ipsacademy.org/",
            link:["","https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx","https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx","https://www.rgpv.ac.in/campus/elibrary20.html","https://www.rgpvonline.com/mca.html#list"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","W3School","Geeks for Geeks","StackOverFlow","Web Devlopement help"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/@indoreprofessionalstudiesa6935","https://www.w3schools.com/","https://www.geeksforgeeks.org/","https://stackoverflow.com/","https://developer.mozilla.org/en-US/"]
        }
    },
}
window.onload = function() {
    setInterval(function(){
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        var displayTime = date.toLocaleTimeString();

        document.getElementById('datetime').innerHTML = displayDate + " " + displayTime;
    }, 1000); // 1000 milliseconds = 1 second
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

document.getElementById("chat").addEventListener("click",openChat)


var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        document.getElementById('chat').disabled=true
        initChat();
    }
    else{
        location.reload();
    }
}


function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}




function openChat(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT API'){
        document.getElementById('ai').style.display='block';
        document.getElementById('chat').innerText='CLOSE AI CHAT';
        document.getElementById('init').disabled=true
        let btn=document.getElementById("chat-button")
        btn.addEventListener("click",()=>{
            console.log("get request")
            let inp=document.getElementById("input-user").value 
            getresult(inp);
           
        })
    }
    else{
        location.reload();
    }
}

function getresult(inp){
    let result=document.getElementById("result")
        
    const token='sk-proj-ShzujZTL8IgNxsJuzxv2T3BlbkFJnYv6LzbfrtUn20rDPyPQ'
    
    fetch('https://api.openai.com/v1/chat/completions',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            "Authorization":`Bearer`+token,

        },
        body:JSON.stringify({
            "model":"gpt-3.5-turbo",
            "messages":[
                {role:"user",content:inp}]
        })
    }).then(response=>{
        console.log(inp)
            console.log(response)
            return response.json()
    }).then(data=>
            {
                result.innerText=data.messages //.choices[0].message.content
    })
    document.getElementById('init').disabled=false
}