document.querySelector('#buttons').addEventListener('click',findSign)

function findSign(n1,n2){

    n1 = parseFloat(document.querySelector('#month').value)
    n2 = parseFloat(document.querySelector('#day').value)

    let date = n1 * 100 + n2; // Combine month and day numerically
    let sign= " " // let sign be blank for now
    let desc= " " // let description  be blank for now


    console.log(n1)
    console.log(n2)
    console.log(sign)
    console.log(date)

    
    if(date>='121'&&date<='219'){//Aquarius
        sign='Aquarius'
        desc='A deep-thinker with a humanitarian streak, an Aquarian has grand plans to change the world. Shame that they left the party early though because their reclusive nature makes it hard for them to establish bonds with those around them. '

    }else if(date>='220'&&date<='320'){//Pisces
        sign='Pisces'
        desc='If you are looking to escape the mundane everyday grind, a Pisces’s imaginative mind can whisk you away into a realm of fantasy. Their kind, nurturing personality can prove to be a double-edged sword though, because their overtly sensitive heart is easily wounded, further compounded by a tendency to play the victim.'

    }else if(date>='320'&&date<='420'){ // Aries
        sign='Aries'
        desc='There is nothing an Aries cannot achieve once they set their mind to it—no mountain is too high. However, you will also find them nursing a hidden imposter syndrome that can chip away at their confidence if allowed free rein.'

    }else if(date>='421'&&date<='521'){//Taurus
        sign='Taurus'
        desc='Loyal to a fault, a Taurean is the most reliable person you can have in your corner when the chips are down. However, they have a stubborn streak a mile wide and can hold a grudge like no one else, so make sure you do not cross them.'

    }else if(date>='522'&&date<='621'){//Gemini
        sign='Gemini'
        desc='Throw a Gemini to the wolves, and they will come back leading the pack—the air element in this sign means that they can adapt easily to any situation. But their fuse runs short and once they run out of patience with someone, there is no wiggle room for second chances. That said they are the worst of the signs. Very two faced'

    }else if(date>='622'&&date<='722'){//Cancer
        sign='Cancer'
        desc='Behind the brooding fortress that a Cancer has erected to protect themselves are abundant reserves of deep, undying love and loyalty. Pity that few will get to experience it because they aren’t the best at communicating what is in their hearts.'

    }else if(date>='723'&&date<='822'){//Leo
        sign='Leo'
        desc='Born to be under the spotlight, there is nothing that this lion enjoys as much as being the cynosure of all eyes. However, this innate conviction that they are always in the right means that they can often run roughshod over others’ feelings and sentiments.'

    }else if(date>='823'&&date<='922'){// Virgo
        sign='Virgo'
        desc='Meticulous, organised and diligent, if the world were to end tomorrow, you would want a Virgo to lead the march into the new dawn. However, that pesky niggle of self-doubt in their head means that they are often harsher on themselves than anybody else can be.'

    }else if(date>='923'&&date<='1022'){//Libra
        sign='Libra'
        desc='If you are looking for someone to lend a comforting shoulder during times of distress and truly put themselves in your shoes, ring up the first Libra in your contacts. This empathetic side of theirs can sometimes get derailed by their inability to make up their mind, compounded by a fear of confrontations, which means that you never truly know which side they stand on.'
    }else if(date>='1023'&&date<='1121'){//Scorpio
        sign='Scorpio'
        desc='The fiery, intense personality of a Scorpio can make any time spent together a wild, dizzying ride. But while they will go the extra mile to take care of your emotional needs, they remain notoriously secretive about their own—good luck cracking open the spine of this closed book. '
    }else if(date>='1122'&&date<='1221'){//Sagittarius
        sign='Sagittarius'
        desc='There is no storyteller quite like a Sagittarius—they can have the entire room hanging on their every word. But while they can show you grand dreams, it can sometimes be hard to pin them down and make them deliver on their promises. '
    }else if(date>='1222'&&date<='120'){//Capricorn
        sign='Capricorn'
        desc='Not everyone can conquer the world but if a Cap were to set out to do it, nothing would deter them until they had accomplished their goal. With a personality that is hardwired in practicality, they can often fail to appreciate nuance and are known to be unforgiving of others’ mistakes. '
    }else{
        alert("Error. Input not valid")
    }

    document.querySelector('#placeResult').innerText=sign
    document.querySelector('#description').innerText=desc
}



