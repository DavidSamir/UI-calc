let res = document.createElement("div"),
    body = document.createElement("div");

	res.className = "res";
	body.className = "body";

	document.querySelector('.Calc').appendChild(res)
	document.querySelector('.Calc').appendChild(body)

	for (var i = 1; i < 10; i++) {
			let num = document.createElement("div")
			let name = ['one','two','three','four','five','six','seven','eight','nine','ten']
			num.className = "number " + name[i] ;
			num.setAttribute('onClick', "num(this.innerHTML)")
			num.innerHTML = i;
			document.querySelector('.body').appendChild(num)
		}

		let zero = document.createElement("div")
    	zero.className = "number zero"
		zero.setAttribute('onClick', "num(this.innerHTML)")
    	zero.innerHTML = "0"
		document.querySelector('.body').appendChild(zero)

    	let mark = document.createElement("div")
    	mark.className = "number mark"
		mark.setAttribute('onClick', "num(this.innerHTML)")
    	mark.innerHTML = "."
		document.querySelector('.body').appendChild(mark)
		function num(number) {
			document.querySelector('.res').innerHTML += number ; 
		}