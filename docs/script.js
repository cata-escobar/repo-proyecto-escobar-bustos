  (function () {
      const DATA = {"disc":[{"y":1991,"b":"Blur","s":"albarn","t":"Leisure","k":"Album","uk":7,"bpi":"Oro"},{"y":1993,"b":"Blur","s":"albarn","t":"Modern Life Is Rubbish","k":"Album","uk":15,"bpi":"Oro"},{"y":1994,"b":"Oasis","s":"gallagher","t":"Definitely Maybe","k":"Album","uk":1,"bpi":"10xPlatino"},{"y":1994,"b":"Oasis","s":"gallagher","t":"1994-04-24: Glastonbury Festival of Contemporary Performing Arts UK","k":"Live album","uk":null,"bpi":null},{"y":1994,"b":"Oasis","s":"gallagher","t":"Oasis - Evening Session 1993","k":"Live broadcast","uk":null,"bpi":null},{"y":1994,"b":"Blur","s":"albarn","t":"Parklife","k":"Album","uk":1,"bpi":"4xPlatino"},{"y":1994,"b":"Blur","s":"albarn","t":"The Special Collectors Edition","k":"Compilation","uk":null,"bpi":null},{"y":1995,"b":"Oasis","s":"gallagher","t":"(What's the Story) Morning Glory?","k":"Album","uk":1,"bpi":"19xPlatino"},{"y":1995,"b":"Oasis","s":"gallagher","t":"Live by the Sea","k":"Live album","uk":null,"bpi":"3xPlatino"},{"y":1995,"b":"Blur","s":"albarn","t":"The Great Escape","k":"Album","uk":1,"bpi":"3xPlatino"},{"y":1996,"b":"Oasis","s":"gallagher","t":"… There and Then","k":"Live album","uk":null,"bpi":"8xPlatino"},{"y":1996,"b":"Blur","s":"albarn","t":"Live at the Budokan","k":"Live album","uk":77,"bpi":null},{"y":1996,"b":"Blur","s":"albarn","t":"Planet Live!","k":"Live album","uk":null,"bpi":null},{"y":1997,"b":"Oasis","s":"gallagher","t":"Be Here Now","k":"Album","uk":1,"bpi":"7xPlatino"},{"y":1997,"b":"Oasis","s":"gallagher","t":"Brothers: From childhood to Oasis Real Story","k":"Spokenword album","uk":null,"bpi":null},{"y":1997,"b":"Blur","s":"albarn","t":"Blur","k":"Album","uk":1,"bpi":"Platino"},{"y":1997,"b":"Blur","s":"albarn","t":"Live","k":"Live album","uk":null,"bpi":null},{"y":1998,"b":"Oasis","s":"gallagher","t":"The Masterplan","k":"Compilation","uk":2,"bpi":"3xPlatino"},{"y":1998,"b":"Blur","s":"albarn","t":"Bustin' + Dronin'","k":"Live remix album","uk":100,"bpi":null},{"y":1999,"b":"Blur","s":"albarn","t":"13","k":"Album","uk":1,"bpi":"Platino"},{"y":1999,"b":"Blur","s":"albarn","t":"10 Year Anniversary Box Set","k":"Compilation","uk":null,"bpi":null},{"y":1999,"b":"Damon Albarn","s":"albarn","t":"Ravenous","k":"Soundtrack album","uk":null,"bpi":null},{"y":2000,"b":"Oasis","s":"gallagher","t":"Standing on the Shoulder of Giants","k":"Album","uk":1,"bpi":"2xPlatino"},{"y":2000,"b":"Oasis","s":"gallagher","t":"Familiar to Millions","k":"Live album","uk":5,"bpi":"Platino"},{"y":2000,"b":"Blur","s":"albarn","t":"Blur: The Best Of","k":"Compilation","uk":3,"bpi":null},{"y":2000,"b":"Gorillaz","s":"albarn","t":"Tomorrow Comes Today","k":"EP","uk":null,"bpi":null},{"y":2001,"b":"Blur","s":"albarn","t":"B-Sides Gig EP","k":"EP","uk":null,"bpi":null},{"y":2001,"b":"Gorillaz","s":"albarn","t":"Gorillaz","k":"Album","uk":3,"bpi":"3xPlatino"},{"y":2001,"b":"Gorillaz","s":"albarn","t":"G Sides","k":"Compilation","uk":65,"bpi":"Plata"},{"y":2001,"b":"Damon Albarn","s":"albarn","t":"101 Reykjavík","k":"Soundtrack album","uk":null,"bpi":null},{"y":2002,"b":"Oasis","s":"gallagher","t":"Heathen Chemistry","k":"Album","uk":1,"bpi":"4xPlatino"},{"y":2002,"b":"Damon Albarn","s":"albarn","t":"Mali Music","k":"Album","uk":81,"bpi":null},{"y":2002,"b":"Gorillaz","s":"albarn","t":"Laika Come Home","k":"Remix album","uk":null,"bpi":null},{"y":2003,"b":"Blur","s":"albarn","t":"Think Tank","k":"Album","uk":1,"bpi":"Oro"},{"y":2003,"b":"Damon Albarn","s":"albarn","t":"Democrazy","k":"Album","uk":null,"bpi":null},{"y":2004,"b":"Blur","s":"albarn","t":"Starshaped","k":"Documentary compilation","uk":null,"bpi":null},{"y":2005,"b":"Oasis","s":"gallagher","t":"Don't Believe the Truth","k":"Album","uk":1,"bpi":"3xPlatino"},{"y":2005,"b":"Oasis","s":"gallagher","t":"2005-06-20: UIC Pavilion Chicago IL USA","k":"Live album","uk":null,"bpi":null},{"y":2005,"b":"Gorillaz","s":"albarn","t":"Demon Days","k":"Album","uk":1,"bpi":"6xPlatino"},{"y":2006,"b":"Oasis","s":"gallagher","t":"Stop the Clocks","k":"Compilation","uk":2,"bpi":"5xPlatino"},{"y":2006,"b":"Oasis","s":"gallagher","t":"Stop the Clocks EP","k":"EP","uk":null,"bpi":null},{"y":2006,"b":"Noel Gallagher","s":"gallagher","t":"Rhapsody Originals","k":"EP","uk":null,"bpi":null},{"y":2006,"b":"Gorillaz","s":"albarn","t":"(Dare) (EP Series)","k":"EP","uk":null,"bpi":null},{"y":2006,"b":"Gorillaz","s":"albarn","t":"Demon Days: Live at the Manchester Opera House","k":"Live album","uk":null,"bpi":null},{"y":2007,"b":"Oasis","s":"gallagher","t":"Lord Don't Slow Me Down","k":"Live album","uk":null,"bpi":null},{"y":2007,"b":"Gorillaz","s":"albarn","t":"Feel Good Inc. (EP Series)","k":"EP","uk":null,"bpi":null},{"y":2007,"b":"Gorillaz","s":"albarn","t":"D-Sides","k":"Compilation","uk":63,"bpi":null},{"y":2008,"b":"Oasis","s":"gallagher","t":"Dig Out Your Soul","k":"Album","uk":1,"bpi":"2xPlatino"},{"y":2008,"b":"Oasis","s":"gallagher","t":"Greatest Hits","k":"Compilation","uk":null,"bpi":null},{"y":2008,"b":"Oasis","s":"gallagher","t":"OJAYZIS","k":"Remix mixtape album","uk":null,"bpi":null},{"y":2009,"b":"Oasis","s":"gallagher","t":"Boy With The Blues","k":"EP","uk":null,"bpi":null},{"y":2009,"b":"Oasis","s":"gallagher","t":"iTunes Festival: London 2009","k":"Live EP","uk":null,"bpi":null},{"y":2009,"b":"Oasis","s":"gallagher","t":"Falling Down (A Monstrous Psychedelic Bubble Exploding in Your Mind)","k":"Remix EP","uk":null,"bpi":null},{"y":2009,"b":"Noel Gallagher","s":"gallagher","t":"The Dreams We Have as Children","k":"Live album","uk":1,"bpi":null},{"y":2009,"b":"Blur","s":"albarn","t":"Midlife: A Begginers' Guide to Blur","k":"Compilation","uk":20,"bpi":null},{"y":2009,"b":"Blur","s":"albarn","t":"All the People: Blur Live at Hyde Park 02 July 2009","k":"Live album","uk":70,"bpi":null},{"y":2009,"b":"Blur","s":"albarn","t":"All the People: Blur Live at Hyde Park 03 July 2009","k":"Live album","uk":44,"bpi":null},{"y":2009,"b":"Blur","s":"albarn","t":"2009-06-28: Glastonbury Festival of Contemporary Performing Arts UK","k":"Live broadcast","uk":null,"bpi":null},{"y":2010,"b":"Oasis","s":"gallagher","t":"Time Flies… 1994-2009","k":"Compilation","uk":1,"bpi":"8xPlatino"},{"y":2010,"b":"Gorillaz","s":"albarn","t":"Plastic Beach","k":"Album","uk":2,"bpi":"Platino"},{"y":2010,"b":"Gorillaz","s":"albarn","t":"The Fall","k":"Album","uk":12,"bpi":null},{"y":2010,"b":"Gorillaz","s":"albarn","t":"iTunes Session","k":"Live EP","uk":null,"bpi":null},{"y":2011,"b":"Beady Eye","s":"gallagher","t":"iTunes Festival: London 2011","k":"Live EP","uk":null,"bpi":null},{"y":2011,"b":"Beady Eye","s":"gallagher","t":"Different Gear Still Speeding","k":"Album","uk":3,"bpi":"Oro"},{"y":2011,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"Noel Gallagher's High Flying Birds","k":"Album","uk":1,"bpi":"3xPlatino"},{"y":2011,"b":"Gorillaz","s":"albarn","t":"The Singles Collection 2001-2011","k":"Compilation","uk":42,"bpi":"Platino"},{"y":2012,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"International Magic Live at the O2","k":"Live album","uk":null,"bpi":null},{"y":2012,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"Songs From the Great White North…","k":"Compilation EP","uk":null,"bpi":null},{"y":2012,"b":"Blur","s":"albarn","t":"Blur 21: The Box","k":"Compilation","uk":71,"bpi":null},{"y":2012,"b":"Blur","s":"albarn","t":"Parklive","k":"Live album","uk":91,"bpi":null},{"y":2012,"b":"Blur","s":"albarn","t":"Live From the Brits","k":"Live EP","uk":null,"bpi":null},{"y":2007,"b":"The Good the Bad & the Queen","s":"albarn","t":"The Good the Bad & the Queen","k":"Album","uk":null,"bpi":"Oro"},{"y":2012,"b":"Damon Albarn","s":"albarn","t":"Dr Dee","k":"Album","uk":42,"bpi":null},{"y":2013,"b":"Beady Eye","s":"gallagher","t":"BE","k":"Album","uk":2,"bpi":"Plata"},{"y":2013,"b":"Beady Eye","s":"gallagher","t":"42.42","k":"EP","uk":null,"bpi":null},{"y":2013,"b":"Damon Albarn","s":"albarn","t":"Bankbusted Nuclear Detergent Blues","k":"Album","uk":null,"bpi":null},{"y":2014,"b":"Oasis","s":"gallagher","t":"Original 1993 Demos","k":"Demo album","uk":null,"bpi":null},{"y":2014,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"Chasing Yesterday","k":"Album","uk":1,"bpi":"Platino"},{"y":2014,"b":"Damon Albarn","s":"albarn","t":"Everyday Robots","k":"Album","uk":2,"bpi":"Plata"},{"y":2014,"b":"Damon Albarn","s":"albarn","t":"Live at the de de de der… (15 November 2014)","k":"Live album","uk":null,"bpi":null},{"y":2014,"b":"Damon Albarn","s":"albarn","t":"Live at the de de de der… (16 November 2014)","k":"Live album","uk":null,"bpi":null},{"y":2015,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"Where the City Meets the Sky - Chasing Yerterday: The Remixes","k":"Remix album","uk":35,"bpi":null},{"y":2015,"b":"Blur","s":"albarn","t":"The Magic Whip","k":"Album","uk":1,"bpi":"Oro"},{"y":2017,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"Who Built the Moon?","k":"Album","uk":1,"bpi":"Platino"},{"y":2017,"b":"Liam Gallagher","s":"gallagher","t":"As You Were","k":"Album","uk":1,"bpi":"Platino"},{"y":2017,"b":"Gorillaz","s":"albarn","t":"Humanz","k":"Album","uk":2,"bpi":"Oro"},{"y":2018,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"It´s a Beautiful World (Remixes)","k":"Remix EP","uk":null,"bpi":null},{"y":2018,"b":"Gorillaz","s":"albarn","t":"The Now Now","k":"Album","uk":5,"bpi":"Plata"},{"y":2019,"b":"Liam Gallagher","s":"gallagher","t":"Why Me? Why Not.","k":"Album","uk":1,"bpi":"Oro"},{"y":2019,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"Wait and Return","k":"Remix EP","uk":null,"bpi":null},{"y":2019,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"Black Star Dancing","k":"EP","uk":null,"bpi":null},{"y":2019,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"This Is the Place","k":"EP","uk":null,"bpi":null},{"y":2019,"b":"Blur","s":"albarn","t":"Live at the BBC","k":"Live EP","uk":null,"bpi":null},{"y":2020,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"Blue Moon Rising","k":"EP","uk":null,"bpi":null},{"y":2020,"b":"Liam Gallagher","s":"gallagher","t":"MTV Unplugged","k":"Live album","uk":1,"bpi":null},{"y":2020,"b":"Liam Gallagher","s":"gallagher","t":"Acoustic Sessions","k":"EP","uk":24,"bpi":null},{"y":2020,"b":"Gorillaz","s":"albarn","t":"Song Machine Season One: Strange Timez","k":"Album","uk":2,"bpi":"Plata"},{"y":2021,"b":"Oasis","s":"gallagher","t":"Knebworth 1996","k":"Live album","uk":4,"bpi":"Oro"},{"y":2021,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"Back the Way We Came: Vol. 1 (2011-2021)","k":"Compilation","uk":1,"bpi":"Oro"},{"y":2021,"b":"Blur","s":"albarn","t":"BBC Radio 1 Broadcast John Peel Sessions 5th May 1997","k":"Live album","uk":null,"bpi":null},{"y":2021,"b":"Gorillaz","s":"albarn","t":"G Collection","k":"Compilation","uk":null,"bpi":null},{"y":2021,"b":"Blur","s":"albarn","t":"1994-06-26: Glastonbury Festival of Contemporary Performing Arts UK","k":"Live broadcast","uk":null,"bpi":null},{"y":2021,"b":"Gorillaz","s":"albarn","t":"Meanwhile EP","k":"EP","uk":null,"bpi":null},{"y":2021,"b":"Damon Albarn","s":"albarn","t":"The Nearer the Fountain More Pure the Stream Flows","k":"Album","uk":7,"bpi":null},{"y":2022,"b":"Liam Gallagher","s":"gallagher","t":"C'mon You Know","k":"Album","uk":1,"bpi":"Oro"},{"y":2022,"b":"Liam Gallagher","s":"gallagher","t":"Down by the River Thames","k":"Live album","uk":4,"bpi":null},{"y":2022,"b":"Liam Gallagher","s":"gallagher","t":"Diamond In The Dark","k":"EP","uk":null,"bpi":null},{"y":2022,"b":"Damon Albarn","s":"albarn","t":"Live at The Photographers' Gallery (Amazon Music live)","k":"Live EP","uk":null,"bpi":null},{"y":2023,"b":"Noel Gallagher's High Flying Birds","s":"gallagher","t":"Council Skies","k":"Album","uk":2,"bpi":"Oro"},{"y":2023,"b":"Liam Gallagher","s":"gallagher","t":"Knebworth 22","k":"Live album","uk":1,"bpi":null},{"y":2023,"b":"Oasis","s":"gallagher","t":"Live at BBC Radio 1997","k":"Live album","uk":null,"bpi":null},{"y":2023,"b":"Gorillaz","s":"albarn","t":"Cracker Island","k":"Album","uk":1,"bpi":"Plata"},{"y":2023,"b":"Blur","s":"albarn","t":"The Ballad of Darren","k":"Album","uk":1,"bpi":"Plata"},{"y":2023,"b":"Blur","s":"albarn","t":"Live in Sweden 1996","k":"Live album","uk":null,"bpi":null},{"y":2024,"b":"Liam Gallagher","s":"gallagher","t":"Liam Gallagher John Squire","k":"Album","uk":1,"bpi":"Plata"},{"y":2024,"b":"Blur","s":"albarn","t":"Live at Wembley Stadium","k":"Live album","uk":6,"bpi":null},{"y":2024,"b":"Damon Albarn","s":"albarn","t":"Pure Love","k":"EP","uk":null,"bpi":null},{"y":2025,"b":"Oasis","s":"gallagher","t":"Complete Studio Album Collection","k":"Compilation","uk":null,"bpi":null},{"y":2025,"b":"Gorillaz","s":"albarn","t":"Demon Days: Live From the Apollo Theater","k":"Live album","uk":91,"bpi":null},{"y":2026,"b":"Gorillaz","s":"albarn","t":"The Mountain","k":"Album","uk":1,"bpi":"Plata"}],"popHighlights":{"Serie_albarn":{"total":129,"top":[{"song":"Song 2","band":"Blur","count":19,"works":["Ted Lasso","The Artful Dodger","Maxton Hall","Shrinking"]},{"song":"Feel Good Inc.","band":"Gorillaz","count":13,"works":["Tell Me Lies","Six Degrees","Entourage","Torchwood (UK)"]},{"song":"Clint Eastwood","band":"Gorillaz","count":11,"works":["For All Mankind","Scorpion","Cold Case","Smallville"]},{"song":"DARE","band":"Gorillaz","count":8,"works":["Outer Banks","Misfits (UK)","Entourage","American Auto"]},{"song":"Girls & Boys","band":"Blur","count":6,"works":["Derry Girls","My Mad Fat Diary","Being Erica","The A Word"]}]},"Videojuego_albarn":{"total":86,"top":[{"song":"Song 2","band":"Blur","count":24,"works":["Kinect Sports Season Two","FIFA Road to World Cup 98","SingStar Rocks!","Guitar Hero 5"]},{"song":"Feel Good Inc.","band":"Gorillaz","count":15,"works":["SingStar Pop","Battle of the Bands","Dance Dance Revolution Hottest Party 3","DJ Hero"]},{"song":"DARE","band":"Gorillaz","count":9,"works":["DJ Hero","Just Dance","SingStar","Just Dance 3"]},{"song":"Clint Eastwood","band":"Gorillaz","count":5,"works":["MTV Music Generator 2","Rock Band 2","NBA 2K14","Synth Riders"]},{"song":"Girls & Boys","band":"Blur","count":3,"works":["SingStar Summer Party","Just Dance","Dance Central"]}]},"Pelicula_albarn":{"total":26,"top":[{"song":"Song 2","band":"Blur","count":3,"works":["Atomic Blonde","Central Intelligence","Charlie's Angels"]},{"song":"Feel Good Inc.","band":"Gorillaz","count":3,"works":["The White Tiger","The Big Short","Perfect Stranger"]},{"song":"There's No Other Way","band":"Blur","count":2,"works":["The World's End","Ghosted"]},{"song":"19-2000","band":"Gorillaz","count":2,"works":["Cloverfield","How to Lose a Guy in 10 Days"]},{"song":"Clint Eastwood","band":"Gorillaz","count":2,"works":["Trolls","Fair Game"]}]},"Videojuego_gallagher":{"total":31,"top":[{"song":"Wonderwall","band":"Oasis","count":5,"works":["Rock Band","Rock Band Unplugged","Rocksmith 2014","SingStar Celebration"]},{"song":"Champagne Supernova","band":"Oasis","count":4,"works":["Rocksmith 2014","Rock Band 4","Rock Band VR","Rocksmith+"]},{"song":"Don't Look Back In Anger","band":"Oasis","count":3,"works":["Rock Band","Rocksmith 2014","Rocksmith+"]},{"song":"Live Forever","band":"Oasis","count":2,"works":["Rock Band","Rocksmith 2014"]},{"song":"Some Might Say","band":"Oasis","count":2,"works":["Guitar Hero World Tour","Rocksmith 2014"]}]},"Serie_gallagher":{"total":110,"top":[{"song":"Wonderwall","band":"Oasis","count":18,"works":["This Is Pop","Roswell New Mexico","Misfits (UK)","Girls"]},{"song":"Champagne Supernova","band":"Oasis","count":9,"works":["Twisted Metal","iZombie","My Mad Fat Diary","Journeyman"]},{"song":"Don't Look Back In Anger","band":"Oasis","count":9,"works":["Ted Lasso","Roswell New Mexico","Everything Sucks","Friends from College"]},{"song":"Fuckin' in the Bushes","band":"Oasis","count":4,"works":["Love Island (UK)","Ex on the Beach (UK)","Top Gear (UK)"]},{"song":"She's Electric","band":"Oasis","count":3,"works":["Shameless (UK)","My Mad Fat Diary","People Just Do Nothing"]}]},"Pelicula_gallagher":{"total":29,"top":[{"song":"Don't Look Back In Anger","band":"Oasis","count":3,"works":["Mike & Nick & Nick & Alice","To All the Boys Always and Forever Lara Jean","All My Life"]},{"song":"Cigarettes & Alcohol","band":"Oasis","count":2,"works":["Supersonic","The Brothers Grimsby"]},{"song":"Morning Glory","band":"Oasis","count":2,"works":["Supersonic","Goal! The Dream Begins"]},{"song":"Round Are Way","band":"Oasis","count":2,"works":["Camp","A Life Less Ordinary"]},{"song":"Stop Crying Your Heart Out","band":"Oasis","count":2,"works":["Made of Honor","The Butterfly Effect"]}]}},"tourList":[{"b":"Blur","s":"albarn","name":"Leisure Tour","start":"1991","end":"1992","shows":41},{"b":"Blur","s":"albarn","name":"Moder Life Is Rubbish Tour","start":"1993","end":"1993","shows":54},{"b":"Blur","s":"albarn","name":"Parklife Tour","start":"1994","end":"1994","shows":79},{"b":"Blur","s":"albarn","name":"The Great Escape Tour","start":"1995","end":"1996","shows":78},{"b":"Blur","s":"albarn","name":"Blur Tour","start":"1997","end":"1997","shows":113},{"b":"Blur","s":"albarn","name":"13 Tour","start":"1999","end":"1999","shows":35},{"b":"Blur","s":"albarn","name":"Think Tank Tour","start":"2003","end":"2003","shows":75},{"b":"Blur","s":"albarn","name":"2013/2014 Festival Tour","start":"2013","end":"2014","shows":27},{"b":"Blur","s":"albarn","name":"The Magic Whip Tour","start":"2015","end":"2015","shows":23},{"b":"Blur","s":"albarn","name":"The Ballad of Darren","start":"2023","end":"2023","shows":22},{"b":"Oasis","s":"gallagher","name":"Definitely Maybe Tour","start":"1994","end":"1995","shows":143},{"b":"Oasis","s":"gallagher","name":"(What's The Story) Morning Glory? Tour","start":"1995","end":"1996","shows":100},{"b":"Oasis","s":"gallagher","name":"Be Here Now Tour","start":"1997","end":"1998","shows":82},{"b":"Oasis","s":"gallagher","name":"Standing on the Shoulders of Giants","start":"1999","end":"2001","shows":133},{"b":"Oasis","s":"gallagher","name":"Heathen Chemistry Tour","start":"2002","end":"2003","shows":94},{"b":"Oasis","s":"gallagher","name":"Don't Believe the Truth Tour","start":"2005","end":"2006","shows":123},{"b":"Oasis","s":"gallagher","name":"Dig Out Your Soul Tour","start":"2008","end":"2009","shows":118},{"b":"Oasis","s":"gallagher","name":"Oasis Live '25 Tour","start":"2025","end":"2025","shows":41},{"b":"Gorillaz","s":"albarn","name":"Gorillaz Live","start":"2001","end":"2002","shows":22},{"b":"Gorillaz","s":"albarn","name":"Escape to Plastic Beach Tour","start":"2010","end":"2010","shows":37},{"b":"Gorillaz","s":"albarn","name":"Humanz Tour","start":"2017","end":"2018","shows":53},{"b":"Gorillaz","s":"albarn","name":"The Now Now Tour","start":"2018","end":"2018","shows":29},{"b":"Gorillaz","s":"albarn","name":"Gorillaz World Tour","start":"2022","end":"2022","shows":55},{"b":"Gorillaz","s":"albarn","name":"The Mountain Tour","start":"2026","end":"2027","shows":71},{"b":"Beady Eye","s":"gallagher","name":"Different Gear Still Speeding Tour","start":"2011","end":"2012","shows":87},{"b":"Beady Eye","s":"gallagher","name":"BE Tour","start":"2013","end":"2014","shows":48},{"b":"Liam Gallagher","s":"gallagher","name":"As You Were Tour","start":"2017","end":"2018","shows":130},{"b":"Liam Gallagher","s":"gallagher","name":"Why Me? Why Not Tour","start":"2019","end":"2020","shows":65},{"b":"Liam Gallagher","s":"gallagher","name":"C'Mon You Know Tour","start":"2022","end":"2023","shows":37},{"b":"Noel Gallagher's High Flying Birds","s":"gallagher","name":"High Flying Birds Tour","start":"2011","end":"2012","shows":136},{"b":"Noel Gallagher's High Flying Birds","s":"gallagher","name":"Chasing Yesterday Tour","start":"2015","end":"2016","shows":125},{"b":"Noel Gallagher's High Flying Birds","s":"gallagher","name":"Stranded on the Earth World Tour","start":"2018","end":"2019","shows":123},{"b":"Noel Gallagher's High Flying Birds","s":"gallagher","name":"Council Skies Tour","start":"2023","end":"2024","shows":71},{"b":"The Good the Bad & the Queen","s":"albarn","name":"The Good the Bad & the Queen Tour","start":"2007","end":"2007","shows":37},{"b":"Damon Albarn","s":"albarn","name":"Everyday Robots Tour","start":"2014","end":"2014","shows":67}]};

      // 1. Reading progress & top nav active highlight
      const progressEl = document.getElementById('readProgress');
      const navLinks = Array.from(document.querySelectorAll('.top-nav a'));
      const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

      function onScroll() {
        const st = window.scrollY || document.documentElement.scrollTop;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progressEl) progressEl.style.width = (max > 0 ? Math.min(100, (st / max) * 100) : 0).toFixed(1) + '%';
        let cur = '';
        sections.forEach(s => { if (s.getBoundingClientRect().top <= 140) cur = '#' + s.id; });
        navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === cur));
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      // 2. Resilient SVG Fallbacks for external photos
      function makePosterFallback(left, right, bgL, bgR, sub) {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
            <rect width="400" height="500" fill="${bgL}"/>
            <rect x="400" width="400" height="500" fill="${bgR}"/>
            <line x1="400" y1="0" x2="400" y2="500" stroke="#000" stroke-width="6"/>
            <rect x="348" y="190" width="104" height="72" fill="#C02126" stroke="#000" stroke-width="4"/>
            <text x="400" y="238" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="32" font-weight="900" fill="#FFF">VS</text>
            <text x="200" y="230" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="26" font-weight="900" fill="${bgL === '#1E2165' || bgL === '#C02126' ? '#FFF' : '#000'}">${left}</text>
            <text x="600" y="230" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="26" font-weight="900" fill="${bgR === '#1E2165' || bgR === '#C02126' ? '#FFF' : '#000'}">${right}</text>
            <rect x="70" y="380" width="660" height="44" fill="#FFF" stroke="#000" stroke-width="3"/>
            <text x="400" y="408" text-anchor="middle" font-family="Courier New, monospace" font-size="16" font-weight="700" fill="#000">${sub}</text>
          </svg>
        `;
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
      }

      document.querySelectorAll('img[data-fallback]').forEach(img => {
        img.addEventListener('error', function () {
          if (this.dataset.done) return;
          this.dataset.done = '1';
          this.src = makePosterFallback('BLUR · LONDRES', 'OASIS · MÁNCHESTER', '#FFE241', '#1E2165', 'BATALLA DEL BRITPOP · 1995');
        });
      });

      // 3. REPRODUCTOR DE MÚSICA (Web Audio API synth + Pixel Bar + Keypad 1/2/3)

      // 4. DIGITAL CAMERA CAROUSEL (BATALLA DEL BRITPOP)
      const CAM_SLIDES = [
        {
          src: 'https://archivedmusicpress.wordpress.com/files/2009/06/steve-sutherland-interviews-damon-albarn-16th-september-1995.jpg',
          fallback: makePosterFallback('BLUR: COUNTRY HOUSE', 'OASIS: ROLL WITH IT', '#FFE241', '#1E2165', '14 AGOSTO 1995 · DUELO DE SINGLES'),
          hud: 'PLAY ▶ BLUR',
          cap: ''
        },
        {
          src: 'https://i.redd.it/6yzgfbn4fo9f1.jpg',
          fallback: makePosterFallback('NME CHAMPIONSHIP', 'LONDRES VS MÁNCHESTER', '#C02126', '#1E2165', 'CAMPEONATO MEDIÁTICO DEL BRITPOP'),
          hud: 'PLAY ▶ OASIS',
          cap: ''
        },
        {
          src: 'https://www.rockaxis.com/rxidashboard/wisi_photos/1597424920_Brit%20Battle%204.jpg',
          fallback: makePosterFallback('MORNING GLORY (19x PLATINO)', 'THE GREAT ESCAPE (3x PLATINO)', '#1E2165', '#FFE241', 'EL VEREDICTO COMERCIAL DE LOS 90'),
          hud: 'PLAY ▶ BRITPOP BATTLE',
          cap: ''
        }
      ];

      let camIdx = 0;
      let camBW = false;

      function renderCamera() {
        const s = CAM_SLIDES[camIdx];
        const img = document.getElementById('camImg');
        const screen = document.getElementById('cameraScreen');
        screen.classList.toggle('is-bw', camBW);
        img.onerror = () => { img.src = s.fallback; };
        img.src = s.src || s.fallback;
        img.alt = s.cap;
        document.getElementById('camHudMode').textContent = s.hud + (camBW ? ' [B/N]' : '');
        document.getElementById('camHudCounter').textContent = '0' + (camIdx + 1) + ' / 0' + CAM_SLIDES.length;
        document.getElementById('camCaption').textContent = s.cap;

        const dots = document.getElementById('camDots');
        dots.innerHTML = '';
        CAM_SLIDES.forEach((_, i) => {
          const d = document.createElement('button');
          d.type = 'button';
          d.className = 'cam-dot' + (i === camIdx ? ' is-active' : '');
          d.setAttribute('aria-label', 'Foto ' + (i + 1));
          d.addEventListener('click', () => { camIdx = i; renderCamera(); });
          dots.appendChild(d);
        });
      }

      const stepCam = dir => { camIdx = (camIdx + dir + CAM_SLIDES.length) % CAM_SLIDES.length; renderCamera(); };
      document.getElementById('camPrev').addEventListener('click', () => stepCam(-1));
      document.getElementById('camNext').addEventListener('click', () => stepCam(1));
      document.getElementById('dpadLeft').addEventListener('click', () => stepCam(-1));
      document.getElementById('dpadRight').addEventListener('click', () => stepCam(1));
      document.getElementById('camSnapBtn').addEventListener('click', () => stepCam(1));
      document.getElementById('camFilterBtn').addEventListener('click', () => { camBW = !camBW; renderCamera(); });
      document.getElementById('dpadUp').addEventListener('click', () => { camBW = true; renderCamera(); });
      document.getElementById('dpadDown').addEventListener('click', () => { camBW = false; renderCamera(); });
      renderCamera();

      // 5. WIDE CAROUSEL FOR CRÓNICA 1
           const c1Track = document.getElementById('c1Track');
            const c1Slides = c1Track ? c1Track.children : [];
            let c1Idx = 0;

            function updateC1() {
              if (!c1Track || !c1Slides.length) return;
              c1Track.style.transform = `translateX(-${c1Idx * 100}%)`;
            }

           document.getElementById('c1Prev').addEventListener('click', () => {
             c1Idx = (c1Idx - 1 + c1Slides.length) % c1Slides.length;
             updateC1();
           });

           document.getElementById('c1Next').addEventListener('click', () => {
             c1Idx = (c1Idx + 1) % c1Slides.length;
             updateC1();
          });

      // 6. GRÁFICO 1: VIGENCIA DISCOGRÁFICA GESTIONADO POR FLOURISH (visualisation/31065277)

      // 7. GRÁFICO CULTURA POPULAR 1 (UNIDADES) + ANIMACIÓN DE VINILOS POR FORMATO
      const POP_CATS = [
        { key: 'Serie', label: 'Series', albarn: DATA.popHighlights.Serie_albarn.total, gallagher: DATA.popHighlights.Serie_gallagher.total },
        { key: 'Pelicula', label: 'Películas', albarn: DATA.popHighlights.Pelicula_albarn.total, gallagher: DATA.popHighlights.Pelicula_gallagher.total },
        { key: 'Videojuego', label: 'Videojuegos', albarn: DATA.popHighlights.Videojuego_albarn.total, gallagher: DATA.popHighlights.Videojuego_gallagher.total }
      ];

      function renderPopChart1() {
        const container = document.getElementById('popChartContainer');
        if (!container) return;
        const W = 820, H = 310;
        const padL = 56, padR = 24, padT = 26, padB = 46;
        const plotW = W - padL - padR, plotH = H - padT - padB;
        const maxVal = 140;
        const yOf = v => padT + plotH - (v / maxVal) * plotH;
        const ticks = [0, 20, 40, 60, 80, 100, 120, 140];

        let gridSVG = '';
        ticks.forEach(t => {
          const yy = yOf(t);
          gridSVG += `<line x1="${padL}" y1="${yy}" x2="${W - padR}" y2="${yy}" stroke="#9496A5" stroke-opacity="0.45" stroke-dasharray="${t === 0 ? '0' : '4 4'}" stroke-width="${t === 0 ? 1.5 : 1}"/>`;
          gridSVG += `<text x="${padL - 8}" y="${yy + 4}" text-anchor="end" font-family="Courier Prime, monospace" font-size="11" font-weight="700" fill="#121318">${t}</text>`;
        });

        const groupW = plotW / POP_CATS.length;
        const barW = 64;
        let barsSVG = '';

        POP_CATS.forEach((cat, i) => {
          const cx = padL + groupW * (i + 0.5);
          const vAlb = cat.albarn;
          const vGal = cat.gallagher;
          const yAlb = yOf(vAlb), yGal = yOf(vGal);

          barsSVG += `
            <g>
              <rect x="${cx - barW - 4}" y="${yAlb}" width="${barW}" height="${padT + plotH - yAlb}" fill="#FFE241" stroke="#000" stroke-width="2.2"/>
              <text x="${cx - barW / 2 - 4}" y="${yAlb - 6}" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="13" font-weight="900" fill="#000">${vAlb}</text>
              <rect x="${cx + 4}" y="${yGal}" width="${barW}" height="${padT + plotH - yGal}" fill="#1E2165" stroke="#000" stroke-width="2.2"/>
              <text x="${cx + barW / 2 + 4}" y="${yGal - 6}" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="13" font-weight="900" fill="#1E2165">${vGal}</text>
              <text x="${cx}" y="${padT + plotH + 24}" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="12" font-weight="900" fill="#121318">${cat.label.toUpperCase()}</text>
            </g>
          `;
        });

        container.innerHTML = `
          <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
            <rect x="${padL}" y="${padT}" width="${plotW}" height="${plotH}" fill="#FAF9F6" stroke="#000" stroke-width="1.5"/>
            ${gridSVG}
            <text x="16" y="${padT + plotH / 2}" text-anchor="middle" transform="rotate(-90 16 ${padT + plotH / 2})" font-family="Montserrat, sans-serif" font-size="11" font-weight="900" fill="#1E2165">NÚMERO DE APARICIONES</text>
            ${barsSVG}
          </svg>
        `;
      }

      renderPopChart1();

      // Animación de entrada en movimiento y frenado para el disco de vinilo único de Song 2
      const vinylShowcase = document.getElementById('vinylShowcase');
      if (vinylShowcase) {
        const vinylObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                vinylShowcase.classList.add('is-revealed');
                vinylObserver.unobserve(vinylShowcase);
              }
            });
          },
          { threshold: 0.25 }
        );
        vinylObserver.observe(vinylShowcase);
      }

      // FOTO RUPTURA: corte diagonal estilo fanzine ligado al scroll y reversible al regresar
      const fotoRuptura = document.getElementById('rupturaOasis');
      if (fotoRuptura) {
        const rupturaFallbackSvg = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
            <defs>
              <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.4" fill="#1E2165" fill-opacity="0.22"/>
              </pattern>
            </defs>
            <rect width="960" height="540" fill="#EAE6DC"/>
            <rect width="960" height="540" fill="url(#dots)"/>
            <!-- Silueta pop-art izquierda: Liam -->
            <g fill="#1E2165" stroke="#000000" stroke-width="4">
              <path d="M120 540 L145 330 Q185 270 270 270 Q355 270 390 330 L415 540 Z"/>
              <circle cx="268" cy="185" r="78" fill="#F5F2EA"/>
              <path d="M188 180 Q205 100 272 100 Q342 102 350 178 Q318 148 268 152 Q220 148 188 180 Z"/>
              <rect x="216" y="182" width="42" height="22" rx="4" fill="#000"/>
              <rect x="276" y="182" width="42" height="22" rx="4" fill="#000"/>
              <line x1="258" y1="190" x2="276" y2="190" stroke="#000" stroke-width="5"/>
            </g>
            <!-- Silueta pop-art derecha: Noel -->
            <g fill="#1E2165" stroke="#000000" stroke-width="4">
              <path d="M545 540 L570 330 Q610 270 695 270 Q780 270 815 330 L840 540 Z"/>
              <circle cx="692" cy="185" r="78" fill="#F5F2EA"/>
              <path d="M612 182 Q625 98 692 98 Q760 98 772 182 Q732 146 692 150 Q648 146 612 182 Z"/>
              <path d="M654 176 L682 172 M702 172 L730 176" stroke="#000" stroke-width="6" stroke-linecap="round"/>
              <circle cx="668" cy="194" r="6" fill="#000"/>
              <circle cx="716" cy="194" r="6" fill="#000"/>
            </g>
            <rect x="32" y="32" width="170" height="42" fill="#FFE241" stroke="#000" stroke-width="3"/>
            <text x="117" y="60" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="20" font-weight="900" fill="#000">LIAM</text>
            <rect x="758" y="32" width="170" height="42" fill="#1E2165" stroke="#000" stroke-width="3"/>
            <text x="843" y="60" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="20" font-weight="900" fill="#FFF">NOEL</text>
          </svg>
        `);

        fotoRuptura.querySelectorAll('.fragmento-foto').forEach((img) => {
          img.addEventListener('error', function () {
            if (this.dataset.fallbackApplied) return;
            this.dataset.fallbackApplied = '1';
            this.src = rupturaFallbackSvg;
          });
        });

        const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        let rupturaTicking = false;

        function updateRupturaOasis() {
          rupturaTicking = false;
          if (reduceMotionQuery.matches) {
            fotoRuptura.style.setProperty('--tear', '0');
            return;
          }
          const rect = fotoRuptura.getBoundingClientRect();
          const vh = window.innerHeight || document.documentElement.clientHeight;
          const startY = vh * 0.78;
          const endY = vh * 0.24;
          const raw = (startY - rect.top) / (startY - endY);
          const clamped = Math.max(0, Math.min(1, raw));
          const eased = clamped * clamped * (3 - 2 * clamped);
          fotoRuptura.style.setProperty('--tear', eased.toFixed(4));
        }

        function requestRupturaUpdate() {
          if (!rupturaTicking) {
            rupturaTicking = true;
            window.requestAnimationFrame(updateRupturaOasis);
          }
        }

        window.addEventListener('scroll', requestRupturaUpdate, { passive: true });
        window.addEventListener('resize', requestRupturaUpdate, { passive: true });
        updateRupturaOasis();
      }
      
      // PODIO PAÍSES

      const podiumItems = document.querySelectorAll(".podium-item");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, {
        threshold: 0.2
      });

      podiumItems.forEach(item => {
        observer.observe(item);
      });

      // 8. SECCIÓN GIRAS GESTIONADA POR FLOURISH (visualisation/31064780)

      // 9. VOTACIÓN FINAL EN NAVEGADOR (Damon Albarn | Los Gallagher — 1 voto definitivo)
      const LOCAL_POLL_STATE_KEY = 'sideb_final_poll_v1';
      const LOCAL_VOTE_KEY = 'sideb_final_vote_v1';
      const pollButtons = Array.from(document.querySelectorAll('[data-final-choice]'));
      const pollBox = document.getElementById('finalVerdictBox');
      let pollState = {
        counts: { albarn: 0, gallagher: 0 },
        userChoice: null
      };

      function readStoredPollState() {
        try {
          const raw = window.localStorage.getItem(LOCAL_POLL_STATE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            const albarn = Number(parsed && parsed.counts && parsed.counts.albarn);
            const gallagher = Number(parsed && parsed.counts && parsed.counts.gallagher);
            const userChoice = (parsed && (parsed.userChoice === 'albarn' || parsed.userChoice === 'gallagher'))
              ? parsed.userChoice
              : null;
            return {
              counts: {
                albarn: Number.isFinite(albarn) && albarn >= 0 ? Math.floor(albarn) : 0,
                gallagher: Number.isFinite(gallagher) && gallagher >= 0 ? Math.floor(gallagher) : 0
              },
              userChoice
            };
          }
          const legacyChoice = window.localStorage.getItem(LOCAL_VOTE_KEY);
          if (legacyChoice === 'albarn' || legacyChoice === 'gallagher') {
            return {
              counts: {
                albarn: legacyChoice === 'albarn' ? 1 : 0,
                gallagher: legacyChoice === 'gallagher' ? 1 : 0
              },
              userChoice: legacyChoice
            };
          }
        } catch {
          // Si localStorage no está disponible, se conserva el estado en memoria de la sesión
        }
        return null;
      }

      function saveStoredPollState(state) {
        try {
          window.localStorage.setItem(LOCAL_POLL_STATE_KEY, JSON.stringify({
            counts: state.counts,
            userChoice: state.userChoice
          }));
          if (state.userChoice === 'albarn' || state.userChoice === 'gallagher') {
            window.localStorage.setItem(LOCAL_VOTE_KEY, state.userChoice);
          }
        } catch {
          // Ignorar si el almacenamiento local está bloqueado
        }
      }

      function renderPollBox() {
        if (!pollBox) return;

        const cAlb = Number(pollState.counts.albarn) || 0;
        const cGal = Number(pollState.counts.gallagher) || 0;
        const total = cAlb + cGal;
        const pctAlb = total > 0 ? Math.round((cAlb / total) * 100) : 0;
        const pctGal = total > 0 ? 100 - pctAlb : 0;
        const lockedChoice = pollState.userChoice;
        const hasVoted = lockedChoice === 'albarn' || lockedChoice === 'gallagher';

        pollButtons.forEach(btn => {
          const choice = btn.dataset.finalChoice;
          btn.disabled = hasVoted;
          btn.classList.toggle('is-voted-picked', hasVoted && choice === lockedChoice);
        });

        pollBox.innerHTML = '';

        const header = document.createElement('div');
        header.className = 'poll-header';
        const titleEl = document.createElement('h3');
        titleEl.className = 'poll-title';
        titleEl.textContent = 'Resultado de la votación';
        const totalEl = document.createElement('span');
        totalEl.className = 'poll-total tabular';
        totalEl.textContent = `${total} ${total === 1 ? 'voto registrado' : 'votos registrados'}`;
        header.append(titleEl, totalEl);

        const track = document.createElement('div');
        track.className = 'poll-bar-track';

        const segAlb = document.createElement('div');
        segAlb.className = 'poll-bar-seg poll-bar-seg--albarn tabular';
        segAlb.style.width = total > 0 ? `${pctAlb}%` : '50%';
        segAlb.textContent = total > 0 && pctAlb >= 12 ? `${pctAlb}%` : '';

        const segGal = document.createElement('div');
        segGal.className = 'poll-bar-seg poll-bar-seg--gallagher tabular' + (total === 0 ? ' poll-bar-seg--empty' : '');
        segGal.style.width = total > 0 ? `${pctGal}%` : '50%';
        segGal.textContent = total > 0 && pctGal >= 12 ? `${pctGal}%` : '';

        if (total === 0) {
          segAlb.style.width = '0%';
          segGal.style.width = '0%';
        }

        track.append(segAlb, segGal);

        const statsRow = document.createElement('div');
        statsRow.className = 'poll-stats-row tabular';

        const itemAlb = document.createElement('div');
        itemAlb.className = 'poll-stat-item';
        const swAlb = document.createElement('span');
        swAlb.className = 'poll-swatch poll-swatch--albarn';
        const txtAlb = document.createElement('span');
        txtAlb.textContent = `Damon Albarn: ${pctAlb}% (${cAlb} ${cAlb === 1 ? 'voto' : 'votos'})`;
        itemAlb.append(swAlb, txtAlb);

        const itemGal = document.createElement('div');
        itemGal.className = 'poll-stat-item';
        const swGal = document.createElement('span');
        swGal.className = 'poll-swatch poll-swatch--gallagher';
        const txtGal = document.createElement('span');
        txtGal.textContent = `Los hermanos Gallagher: ${pctGal}% (${cGal} ${cGal === 1 ? 'voto' : 'votos'})`;
        itemGal.append(swGal, txtGal);

        statsRow.append(itemAlb, itemGal);

        const note = document.createElement('p');
        note.className = 'poll-status-note';
        if (hasVoted) {
          const label = lockedChoice === 'albarn' ? 'Damon Albarn' : 'Los hermanos Gallagher';
          note.textContent = `Tu voto definitivo quedó registrado por ${label}. Solo se permite un voto por navegador.`;
        } else {
          note.textContent = 'Elige una opción arriba para emitir tu voto único y definitivo.';
        }

        pollBox.append(header, track, statsRow, note);
      }

      function initPoll() {
        const stored = readStoredPollState();
        if (stored) {
          pollState = stored;
        }
        renderPollBox();
      }

      function submitPollVote(choice) {
        if (pollState.userChoice) return;
        pollState.counts[choice] = (Number(pollState.counts[choice]) || 0) + 1;
        pollState.userChoice = choice;
        saveStoredPollState(pollState);
        renderPollBox();
      }

      pollButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const choice = btn.dataset.finalChoice;
          if (choice === 'albarn' || choice === 'gallagher') {
            submitPollVote(choice);
          }
        });
      });

      initPoll();

      // 10. VIP CONCERT TICKET WELCOME GATE HANDLER
      const vipGate = document.getElementById('vipTicketGate');
      const vipBtn = document.getElementById('vipTicketBtn');
      function enterWithTicket() {
        if (!vipGate || vipGate.dataset.opened) return;
        vipGate.dataset.opened = '1';

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          vipGate.classList.add('is-dismissed');
          document.body.classList.remove('is-ticket-locked');
          window.scrollTo(0, 0);
          vipGate.style.display = 'none';
          return;
        }

        vipGate.classList.add('is-tearing');
        setTimeout(() => {
          vipGate.classList.add('is-dismissed');
          document.body.classList.remove('is-ticket-locked');
          window.scrollTo(0, 0);
        }, 520);
        setTimeout(() => {
          vipGate.style.display = 'none';
        }, 1520);
      }
      if (vipBtn) {
        vipBtn.addEventListener('click', enterWithTicket);
      }
    })()