import { Pipe, PipeTransform } from '@angular/core';
import {Md5} from 'ts-md5';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {


  morseCode: { [key: string]: string } = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '\'': '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
    ' ': ' ',
  }

  transform(value: string, args: string): string {

    if(args == 'morse') {
      let output: string='';
      for(let i = 0; i < value.length; i++) {
        output += this.morseCode[value.at(i)!];
      }
      return output;
    }else if(args == 'MD5'){
      let md5 = new Md5();
      return md5.appendStr(value).end()?.toString()!;
    }

    return "Wrong Argument";
  }

}
