import { StringManipulationService } from "./main-service";
import { NumberManipulationService } from "./main-service";

class StringManipulation implements StringManipulationService {
  print(word: string): void {
    //Display the given string without any modifications:
    console.log(word);
    //Display the given string in lowercase:
    console.log(word.toLowerCase);
    //Display the given string in uppercase
    console.log(word.toUpperCase);
    //Display the character at a particular position in a given string
    console.log(word.charAt(5));
    //Concatenate the given string with another string
    console.log(word.concat("Hello"));
    //Slice the given string and display
    console.log(word.slice(6, -1));
    //Find the length of the given string
    console.log(word.length);
  }
  //printWithSpace(sentence:string) : void method should take string as input and display the given string by adding space between every character.
  printWithSpace(sentence: string): void {
    console.log(sentence.split("").join(" "));
  }
  //findVowel(str: string) : void should take string as input and display the number of vowels in a given string.
  findVowel(str: string): void {}
}

class NumbersManipulations implements NumberManipulationService {
  //findPrime(num: number) : void method should check whether the given number is a prime number or not.
  findPrime(num: number): void {
    var flag: boolean = true;
    var n = num;
    for (var i = 2; i < Math.ceil(num / 2); i++) {
      if (num % i == 0) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      console.log(n + " is a prime number");
    } else {
      console.log(n + " is not a prime number");
    }
  }
  //findMagic(num: number) : void method to check whether the given number is a magic number. What's a magic number? Firstly add all the digits of the given number continuously until the sum becomes a single digit number. If the number obtained is equivalent to 1, then the given number is a magic number, else display that it is not a magic number.
  findMagic(num: number): void {
    console.log(num);
    if (num % 9 == 1) {
      console.log("MAGIC NUMBER");
    } else {
      console.log("NOT MAGIC NUMBER");
    }
  }
}
