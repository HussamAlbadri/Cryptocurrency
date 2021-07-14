var name = prompt("Put your name ....")

alert("Welcome! to our website" + " " + name)

var infoType = prompt("What type of information about cryptocurrency you want to know?")

if(infoType == "Bitcoin"){
  document.write("<div>" + "<h3>" + infoType + "</h3>" + "<img src='https://cdn.discordapp.com/attachments/851190421689335839/864859019759059014/BTC-2.png' width='300' height='200'/>" + "</div>")
}
else if(infoType == "Ethereum") {
 document.write("<div>" + "<h3>" + infoType + "</h3>" + "<img src='https://cdn.discordapp.com/attachments/851190421689335839/864859974102155304/1200px-Ethereum-icon-purple.png'  width='300' height='250' />" + "</div>")
}
else if(infoType == "Litecoin"){
   document.write("<div>" + "<h3>" + infoType + "</h3>" + "<img src='https://cdn.discordapp.com/attachments/851190421689335839/864861097357606912/litecoin_main.png'  width='300' height='200' />" + "</div>")
}
else{
  alert(" Sorry, This cryptocurrency is not available")
}
