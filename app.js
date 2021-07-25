var name = prompt("Put your name ....")

alert("Welcome! to our website" + " " + name)
var infoType = prompt("What type of information about cryptocurrency you want to know?... Please choose of of the mentioned cryptocurrencies")




while(infoType != "Bitcoin" && infoType != "Ethereum" && infoType != "Litecoin"){
 infoType = prompt("Enter the chosen currency")

}
var infoNum = prompt(" How many times do you want to check the info ?")
while(infoNum > 10){
  alert("Please input a number that less than 10!")

  infoNum = prompt("Enter the number again")

var text;
var yes = confirm("Do you want to confirm your answer ?");
if (yes == true) {
  text = "You pressed OK!";
} else {
  text = "You pressed Cancel!";
}

}
//  A function that adds a description for the pics 
  function addDescription(){
  return  'Bitcoin is a digital currency created in January 2009. It follows the ideas set out in a whitepaper by the mysterious and pseudonymous Satoshi Nakamoto.1 The identity of the person or persons who created the technology is still a mystery. Bitcoin offers the promise of lower transaction fees than traditional online payment mechanisms and, unlike government-issued currencies, it is operated by a decentralized authority.'
  }

if(infoType == "Bitcoin"){

for(var n = 0 ; n < infoNum ; n++)
document.write("<div>" + "<h3>" + infoType + "</h3>" + "<img src='https://cdn.discordapp.com/attachments/851190421689335839/864859019759059014/BTC-2.png' width='300' height='200'/>" + "</div>")

// Here i called the function to print the result
document.write(addDescription());
 

}
else if(infoType == "Ethereum"){

for(var n = 0 ; n < infoNum ; n++)
document.write("<div>" + "<h3>" + infoType + "</h3>" + "<img src='https://cdn.discordapp.com/attachments/851190421689335839/864859974102155304/1200px-Ethereum-icon-purple.png'  width='300' height='250' />" + "</div>")

}
else if(infoType == "Litecoin"){

for(var n = 0 ; n < infoNum ; n++ )
 document.write("<div>" + "<h3>" + infoType + "</h3>" + "<img src='https://cdn.discordapp.com/attachments/851190421689335839/864861097357606912/litecoin_main.png'  width='300' height='200' />" + "</div>")
} 




/*if(infoType == "Bitcoin"){
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
} */

