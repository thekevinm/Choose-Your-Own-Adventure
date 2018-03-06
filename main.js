alert("Welcome to my game! You are living in a post apocalyptic world with zombies!")
var zombie = prompt("You wake up to noise upstairs. What do you grab to check it out? A GUN, NOTHING, or EXIT your house.").toUpperCase();

switch(zombie) {
	case 'GUN':
		var door = prompt("The noise is coming from behind the door. Do you OPEN it or SHOOT through the door?").toUpperCase();
		if(door == 'SHOOT') {
			alert("Congratulations! You killed the zombie behind the door and saved yourself from getting bit!");
		}
		if(door == 'OPEN') {
			var reflex = prompt("The zombie looks in your eyes when you open the door. Do you have quick reflexes? (YES or NO)");
		}
		if(reflex == 'YES') {
			alert("Congratulations you were quick with the trigger to kill the zombie!");
		}
		if(reflex == 'NO') {
			var dog = prompt("Lucky you the zombie is too busy eating your dog to attack you. Do you RUN or TAKE THE SHOT?").toUpperCase();
		}
		if(dog == 'RUN') {
			alert("You run downstairs but slip and fall losing your gun. The zombie catches you. GAME OVER.");
		}
		else if(dog == 'TAKE THE SHOT') {
			alert("Congratulations you survived but sadly lost your dog, I'm sure there is other dogs out there.");
		}
		break;

	case 'NOTHING':
		var nothing = prompt("The noise is coming from behind the door. When you open the door. Do you RUN or stay and FIGHT?").toUpperCase();
		if(nothing == 'RUN') {
			alert("The zombie behind the door is fast and catches you. GAME OVER.");
		}
		if(nothing == 'FIGHT') {
			var experienced = prompt("You open the door to find a zombie eating your dog. Are you an EXPERIENCED or INEXPERIENCED fighter?").toUpperCase();
		}
		
		if(experienced == 'EXPERIENCED') {
			alert("Congratulations! You fought and killed the zombie to survive another day.");
		}

		if (experienced == 'INEXPERIENCED') {
			alert("Why would you try to fight a zombie if you don't know how to fight? You go to punch the zombie but it catches your fist in its mouth and infects you. GAME OVER.");
		}
		break;

	case 'EXIT':
		var exit = prompt ("You run out of your house through the FRONT or BACK door?").toUpperCase();
		if(exit == 'FRONT') {
			alert("Congratulations, you have escaped safely!");
		}
		if(exit == 'BACK') {
			var inside = prompt("You have made a grave mistake. You are confronted with fifty zombies and you are unarmed. Do you run back INSIDE or RUN past the zombies?").toUpperCase();
		}
		if(inside == 'INSIDE') {
			alert("Good idea to come back in where your gun is. You get your gun and spray down zombies as they break down your door and survive to see another day congratulations!");
		}
		if(inside == 'RUN') {
			var yelling = prompt("These zombies are fast and catch up to you fast. Do you risk YELLING for help or attempting to HIDE?").toUpperCase();
		}

		if(yelling == 'YELLING') {
			alert("It's your lucky day, a group of survivors were near you and killed the zombies for you!");
		}
		else if(yelling == 'HIDE') {
			alert("Really? Hide? You are better than this. GAME OVER.");
		}
		break;
}
