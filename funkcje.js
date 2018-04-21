/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function przygotowanie()
{
    var tekst=document.getElementById('pole1');
    tekst.disabled="disabled";
    tekst=tekst.value;
    tekst=tekst.toUpperCase();
    tekst=podloga(tekst);
    var kreski=document.getElementById('pole2');
    kreski.value=tekst;
    document.getElementById('OK').disabled="disabled";
    document.getElementById('ile').value=9;
}

function litera(l)
{
    var tekst=document.getElementById('pole1').value.toUpperCase();
    var kreski=document.getElementById('pole2').value;
    if(tekst.indexOf(l)>=0)
    {
        if((kreski.indexOf("A")<0)&&(l!=="A")){while(tekst.indexOf("A")>=0) tekst=tekst.replace("A",".");}
        if((kreski.indexOf("Ą")<0)&&(l!=="Ą")){while(tekst.indexOf("Ą")>=0) tekst=tekst.replace("Ą",".");}
        if((kreski.indexOf("B")<0)&&(l!=="B")){while(tekst.indexOf("B")>=0) tekst=tekst.replace("B",".");}
        if((kreski.indexOf("C")<0)&&(l!=="C")){while(tekst.indexOf("C")>=0) tekst=tekst.replace("C",".");}
        if((kreski.indexOf("Ć")<0)&&(l!=="Ć")){while(tekst.indexOf("Ć")>=0) tekst=tekst.replace("Ć",".");}
        if((kreski.indexOf("D")<0)&&(l!=="D")){while(tekst.indexOf("D")>=0) tekst=tekst.replace("D",".");}
        if((kreski.indexOf("E")<0)&&(l!=="E")){while(tekst.indexOf("E")>=0) tekst=tekst.replace("E",".");}
        if((kreski.indexOf("Ę")<0)&&(l!=="Ę")){while(tekst.indexOf("Ę")>=0) tekst=tekst.replace("Ę",".");}
        if((kreski.indexOf("F")<0)&&(l!=="F")){while(tekst.indexOf("F")>=0) tekst=tekst.replace("F",".");}
        if((kreski.indexOf("G")<0)&&(l!=="G")){while(tekst.indexOf("G")>=0) tekst=tekst.replace("G",".");}
        if((kreski.indexOf("H")<0)&&(l!=="H")){while(tekst.indexOf("H")>=0) tekst=tekst.replace("H",".");}
        if((kreski.indexOf("I")<0)&&(l!=="I")){while(tekst.indexOf("I")>=0) tekst=tekst.replace("I",".");}
        if((kreski.indexOf("J")<0)&&(l!=="J")){while(tekst.indexOf("J")>=0) tekst=tekst.replace("J",".");}
        if((kreski.indexOf("K")<0)&&(l!=="K")){while(tekst.indexOf("K")>=0) tekst=tekst.replace("K",".");}
        if((kreski.indexOf("L")<0)&&(l!=="L")){while(tekst.indexOf("L")>=0) tekst=tekst.replace("L",".");}
        if((kreski.indexOf("Ł")<0)&&(l!=="Ł")){while(tekst.indexOf("Ł")>=0) tekst=tekst.replace("Ł",".");}
        if((kreski.indexOf("M")<0)&&(l!=="M")){while(tekst.indexOf("M")>=0) tekst=tekst.replace("M",".");}
        if((kreski.indexOf("N")<0)&&(l!=="N")){while(tekst.indexOf("N")>=0) tekst=tekst.replace("N",".");}
        if((kreski.indexOf("Ń")<0)&&(l!=="Ń")){while(tekst.indexOf("Ń")>=0) tekst=tekst.replace("Ń",".");}
        if((kreski.indexOf("O")<0)&&(l!=="O")){while(tekst.indexOf("O")>=0) tekst=tekst.replace("O",".");}
        if((kreski.indexOf("Ó")<0)&&(l!=="Ó")){while(tekst.indexOf("Ó")>=0) tekst=tekst.replace("Ó",".");}
        if((kreski.indexOf("P")<0)&&(l!=="P")){while(tekst.indexOf("P")>=0) tekst=tekst.replace("P",".");}
        if((kreski.indexOf("R")<0)&&(l!=="R")){while(tekst.indexOf("R")>=0) tekst=tekst.replace("R",".");}
        if((kreski.indexOf("S")<0)&&(l!=="S")){while(tekst.indexOf("S")>=0) tekst=tekst.replace("S",".");}
        if((kreski.indexOf("Ś")<0)&&(l!=="Ś")){while(tekst.indexOf("Ś")>=0) tekst=tekst.replace("Ś",".");}
        if((kreski.indexOf("T")<0)&&(l!=="T")){while(tekst.indexOf("T")>=0) tekst=tekst.replace("T",".");}
        if((kreski.indexOf("U")<0)&&(l!=="U")){while(tekst.indexOf("U")>=0) tekst=tekst.replace("U",".");}
        if((kreski.indexOf("W")<0)&&(l!=="W")){while(tekst.indexOf("W")>=0) tekst=tekst.replace("W",".");}
        if((kreski.indexOf("X")<0)&&(l!=="X")){while(tekst.indexOf("X")>=0) tekst=tekst.replace("X",".");}
        if((kreski.indexOf("Y")<0)&&(l!=="Y")){while(tekst.indexOf("Y")>=0) tekst=tekst.replace("Y",".");}
        if((kreski.indexOf("Z")<0)&&(l!=="Z")){while(tekst.indexOf("Z")>=0) tekst=tekst.replace("Z",".");}
        if((kreski.indexOf("Ź")<0)&&(l!=="Ź")){while(tekst.indexOf("Ź")>=0) tekst=tekst.replace("Ź",".");}
        if((kreski.indexOf("Ź")<0)&&(l!=="Ź")){while(tekst.indexOf("Ż")>=0) tekst=tekst.replace("Ż",".");}
        document.getElementById('pole2').value=tekst;
    }
    else document.getElementById('ile').value=document.getElementById('ile').value-1;
    var ile=document.getElementById('pole1').value.toUpperCase();
    var pozostalo=parseInt(document.getElementById('zostalo').value);
    while(ile.indexOf(l)>=0)
    {
        ile=ile.replace(l,".");
        pozostalo--;
    }
    document.getElementById('zostalo').value=pozostalo;
    if(pozostalo<=0) alert("GRATULACJE!\nWYGRAŁEŚ!\nHasło to: "+document.getElementById('pole1').value.toUpperCase());
    l=l.toLowerCase();
    document.getElementById(l).disabled="disabled";
    if(parseInt(document.getElementById('ile').value)<=0)
    {
        alert("PRZEGRAŁEŚ!\n Hasłem było:\n"+tekst);
        wyczysc();
    }
    
}

function wyczysc()
{
    document.getElementById('OK').disabled="";
    document.getElementById('pole1').disabled="";
    document.getElementById('pole1').value="";
    document.getElementById('pole2').value="";
    document.getElementById('ile').value="";
    document.getElementById('zostalo').value="";
    document.getElementById('a').disabled="";
    document.getElementById('ą').disabled="";
    document.getElementById('b').disabled="";
    document.getElementById('c').disabled="";
    document.getElementById('ć').disabled="";
    document.getElementById('d').disabled="";
    document.getElementById('e').disabled="";
    document.getElementById('ę').disabled="";
    document.getElementById('f').disabled="";
    document.getElementById('g').disabled="";
    document.getElementById('h').disabled="";
    document.getElementById('i').disabled="";
    document.getElementById('j').disabled="";
    document.getElementById('k').disabled="";
    document.getElementById('l').disabled="";
    document.getElementById('ł').disabled="";
    document.getElementById('m').disabled="";
    document.getElementById('n').disabled="";
    document.getElementById('ń').disabled="";
    document.getElementById('o').disabled="";
    document.getElementById('ó').disabled="";
    document.getElementById('p').disabled="";
    document.getElementById('r').disabled="";
    document.getElementById('s').disabled="";
    document.getElementById('ś').disabled="";
    document.getElementById('t').disabled="";
    document.getElementById('u').disabled="";
    document.getElementById('w').disabled="";
    document.getElementById('x').disabled="";
    document.getElementById('y').disabled="";
    document.getElementById('z').disabled="";
    document.getElementById('ź').disabled="";
    document.getElementById('ż').disabled="";
}

 function podloga(lancuch)
 {
    var ile=0;
    while(lancuch.indexOf("A")>=0){ lancuch=lancuch.replace("A","."); ile++;}
    while(lancuch.indexOf("Ą")>=0){ lancuch=lancuch.replace("Ą","."); ile++;}
    while(lancuch.indexOf("B")>=0){ lancuch=lancuch.replace("B","."); ile++;}
    while(lancuch.indexOf("C")>=0){ lancuch=lancuch.replace("C","."); ile++;}
    while(lancuch.indexOf("Ć")>=0){ lancuch=lancuch.replace("Ć","."); ile++;}
    while(lancuch.indexOf("D")>=0){ lancuch=lancuch.replace("D","."); ile++;}
    while(lancuch.indexOf("E")>=0){ lancuch=lancuch.replace("E","."); ile++;}
    while(lancuch.indexOf("Ę")>=0){ lancuch=lancuch.replace("Ę","."); ile++;}
    while(lancuch.indexOf("F")>=0){ lancuch=lancuch.replace("F","."); ile++;}
    while(lancuch.indexOf("G")>=0){ lancuch=lancuch.replace("G","."); ile++;}
    while(lancuch.indexOf("H")>=0){ lancuch=lancuch.replace("H","."); ile++;}
    while(lancuch.indexOf("I")>=0){ lancuch=lancuch.replace("I","."); ile++;}
    while(lancuch.indexOf("J")>=0){ lancuch=lancuch.replace("J","."); ile++;}
    while(lancuch.indexOf("K")>=0){ lancuch=lancuch.replace("K","."); ile++;}
    while(lancuch.indexOf("L")>=0){ lancuch=lancuch.replace("L","."); ile++;}
    while(lancuch.indexOf("Ł")>=0){ lancuch=lancuch.replace("Ł","."); ile++;}
    while(lancuch.indexOf("M")>=0){ lancuch=lancuch.replace("M","."); ile++;}
    while(lancuch.indexOf("N")>=0){ lancuch=lancuch.replace("N","."); ile++;}
    while(lancuch.indexOf("Ń")>=0){ lancuch=lancuch.replace("Ń","."); ile++;}
    while(lancuch.indexOf("O")>=0){ lancuch=lancuch.replace("O","."); ile++;}
    while(lancuch.indexOf("Ó")>=0){ lancuch=lancuch.replace("Ó","."); ile++;}
    while(lancuch.indexOf("P")>=0){ lancuch=lancuch.replace("P","."); ile++;}
    while(lancuch.indexOf("R")>=0){ lancuch=lancuch.replace("R","."); ile++;}
    while(lancuch.indexOf("S")>=0){ lancuch=lancuch.replace("S","."); ile++;}
    while(lancuch.indexOf("Ś")>=0){ lancuch=lancuch.replace("Ś","."); ile++;}
    while(lancuch.indexOf("T")>=0){ lancuch=lancuch.replace("T","."); ile++;}
    while(lancuch.indexOf("U")>=0){ lancuch=lancuch.replace("U","."); ile++;}
    while(lancuch.indexOf("W")>=0){ lancuch=lancuch.replace("W","."); ile++;}
    while(lancuch.indexOf("X")>=0){ lancuch=lancuch.replace("X","."); ile++;}
    while(lancuch.indexOf("Y")>=0){ lancuch=lancuch.replace("Y","."); ile++;}
    while(lancuch.indexOf("Z")>=0){ lancuch=lancuch.replace("Z","."); ile++;}
    while(lancuch.indexOf("Ź")>=0){ lancuch=lancuch.replace("Ź","."); ile++;}
    while(lancuch.indexOf("Ż")>=0){ lancuch=lancuch.replace("Ż","."); ile++;}
    document.getElementById("zostalo").value=ile;
    return lancuch;
 }