import clashApi from 'clash-of-clans-api';
let client = clashApi({
  token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijc2YjRjMDJkLTU0YjktNGNmYS04ODZlLWFiYWE1MmM0YjJjNiIsImlhdCI6MTUwMjI3NjI3OSwic3ViIjoiZGV2ZWxvcGVyLzIxMzY3ZWE1LTE0NDctZTk0Zi0zYzExLTFmOWY4YzViMmU5YyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM1LjE5OC4yNDEuMTIyIl0sInR5cGUiOiJjbGllbnQifV19.Sq0-PPb5d4QHlQXL8Nj1EIRpXBOcYQwxevu--CZ4V-7TGSghEbDVwfaBW7Q8U02twSCKdNTTf06ZXhSkc5WXDQ
});
const line = require('line.js');
var client = new line.Client({
  channelAccessToken: "q70gbuUC1DFfdq0heIaIsvKk0wLncyToWBkV/Awt8Fe08TinpaLSb7rIgA4QsxY8/vUXsveismlOI+SF1IViRmRonCnsSQKWdIqi8SclvD+p5NEP3d1jck4VvmudcJF+h+xWsHn6Jqv1N0z9kvfR2QdB04t89/1O/w1cDnyilFU=",
  channelSecret: "764d21aa6838a85e5ab7d5e3b473ecb7",
  port: "8080"
})
var peopleArray = new Array(31);
peopleArray.fill("empty");
peopleArray[0] == "dont use me"; 



client.on('message', function (msg) {
	console.log('received message:', msg);
	var content = msg.content.toLowerCase();
	content = content.replace(/ +$/, "");
	var number = parseInt(content.split(" ")[1]);
	function theList(call,uncall,a)
	{
		var list = "";
		for (var i = 1; i < peopleArray.length; i++) {
			if(peopleArray[i] == "hide") {

			} else if (peopleArray[i] === "empty") {
				list += `${i} \n`;
			} else {
				list +=  `${i} ${peopleArray[i] } \n`;

			}
		}
	return list; 
	}

		

	
	if(content.startsWith('call')) {
		var index = peopleArray.indexOf(msg.author.displayName);

		if (peopleArray[number] === "empty") {
			peopleArray[number] = msg.author.displayName;
			msg.reply(`GOM vs             \n\n${peopleArray[number]} has called ${number} \n\n${theList()}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
		} else {
			peopleArray[number] = msg.author.displayName;
			msg.reply(`GOM vs              \n\nThat spot is now taken by ${peopleArray[number]}  \n\n${theList()}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
		}
	}
	
	if(content.startsWith('!')) {
		var numbers = content.split(" ");
		if(numbers[2] == 3) {
			peopleArray[number] = "hide";
			msg.reply(`You have 3 Stared ${number} and, I have updated the list.\nGreat JobGOM VS         \n\n \n\n \n${theList()}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
		} else if(numbers.length === 4) {
			var starString = Array(parseInt(numbers[2]) + 1).join("☆")  + "  " + numbers[3] + "%"; 
			peopleArray[parseInt(numbers[1])] = starString;
		}
		msg.reply(`GOM VS         \n\nList Updated \n\n${theList()}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
	}
	
	if(content === 'paddy') {
		msg.reply('Taylor Swift Junkie');
	}
	
	
	if(content.startsWith('uncall')) {
		var number = parseInt(content.split(" ")[1]);
		if (peopleArray[number] === "empty") {
			msg.reply(`GOM VS         \n\nThat spot is not called yet\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
			peopleArray[number] = msg.author.displayName;
		} else if (peopleArray[number] !== msg.author.displayName) {
			msg.reply("you cant cancel someone elses call");
		} else {
			peopleArray[number] = "empty";
			msg.reply(`GOM VS         \n\nI have cancelled your call \n\n${theList()}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
		}
	}
	
	if(content === 'help') {
		msg.author.sendMessage('BOT v1.7\nHere are all my commands\n 1.Call BaseNumber\nExample "Call 7"\n2.Uncall BaseNumber\nExample"Uncall 3"\n3."Bases" shows all Called/Unclaimed Bases\n4."Open" shows only unclaimed bases.[BETA]\n\nUpdate the list after an Attack\n1.If 1/2 Star/s "! BaseNumber Star/s Percentage"\nExample "! 7 2 90"\nIf 3 Stars\n"! BaseNumber 3"\n Example"A 7 3"\n\nHopefully you will get familiar with me soon :)\nHaving Issues? PM Rob or Aayush');
	}
	
	if(content === 'bases') {
		var list = "";
		for (var i = 1; i < peopleArray.length; i++) {
			if(peopleArray[i] == "hide") {
			} else if (peopleArray[i] === "empty") {
				list += `${i} \n`;
			} else {
				list += `${i} ${peopleArray[i] } \n`;
			}
		}
		msg.reply("GOM VS         \n\n" +list +"\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately");
	}
	
	if(content === 'open') {
		var list = "";
		for(var i = 1; i < peopleArray.length; i++) {
			if(peopleArray[i] === "empty" || peopleArray[i].includes("%") && peopleArray[i] != "hide") {
				list += `${i}    OPEN   \n`;
			}
		}
		msg.reply("GOM VS         \n\n" +list +"\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately");
	}
	
	if(content === 'ping') {
		msg.reply('Pong');
	}
});