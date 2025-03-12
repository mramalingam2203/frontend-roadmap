function averageMethod(passwd){
		let lower  = 0 ;
		var upper =  0;
		var digit = 0;
		var special = 0 ;
		
		var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
		
		console.log(lower)
		
		let index = 0;
	while (index < passwd.length) {    
		let char = passwd.charAt(index);
		console.log(char, isNumber(char))
		if (isLowerCase(char)){
			lower += 1; }
		else if (isUpperCase(char)){
			upper +=1 ;}
		else if (isNumber(char)){
			digit += 1; 
			console.log('number')}
		else if (format.test(char)){
			special += 1 }
		
		index++;
	}
	
	console.log(lower, upper, digit, special) 
	
}
			
function isUpperCase(c) { 
  return (c == c.toUpperCase()); 
} 
function isLowerCase(c) { 
  return (c == c.toLowerCase()); 
} 

function isNumber(c) {
  return c >= '0' && c <= '9';
}


function isPrime(n){
	
	if (n==2){
		return true;
	}
	if ( n < 2 && n %2 == 0){
		return false;
	}
	
	for (let i = 3 ; i*i <= n; i += 2){
		if (n%i == 0){
			return false;
		}
	}
	
	return true;
}

pwd = 'Govinda.1974'
averageMethod(pwd)

console.log(isPrime(number))		
		