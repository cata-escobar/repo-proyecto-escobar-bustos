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
      const TRACKS = [
        {
          label: 'Reproductor Side-B · Pista 1 (Londres)',
          title: '1995 — Parklife / Country House Synth (Damon Albarn)',
          side: 'albarn',
          notes: [261.63, 329.63, 392.00, 329.63, 293.66, 349.23, 440.00, 392.00],
          tempo: 260
        },
        {
          label: 'Reproductor Side-B · Pista 2 (Mánchester)',
          title: '1995 — Morning Glory Anthem Chords (Liam & Noel)',
          side: 'gallagher',
          notes: [196.00, 246.94, 293.66, 220.00, 196.00, 246.94, 329.63, 293.66],
          tempo: 330
        },
        {
          label: 'Reproductor Side-B · Pista 3 (Siglo XXI)',
          title: '2005 — Feel Good Bassline Groove (Gorillaz)',
          side: 'albarn',
          notes: [164.81, 164.81, 196.00, 220.00, 246.94, 220.00, 196.00, 146.83],
          tempo: 290
        }
      ];

      const pixelBar = document.getElementById('pixelBarFrame');
      for (let i = 0; i < 16; i++) {
        const seg = document.createElement('div');
        seg.className = 'pixel-seg';
        pixelBar.appendChild(seg);
      }
      const segs = Array.from(pixelBar.children);

      let audioCtx = null;
      let isPlaying = false;
      let isMuted = false;
      let currentTrackIdx = 0;
      let stepIdx = 0;
      let elapsedSec = 0;
      let synthInterval = null;
      let secInterval = null;

      function updatePixelBar(step, side) {
        const litCount = (step % 16) + 1;
        segs.forEach((s, i) => {
          s.classList.toggle('is-lit', i < litCount);
          s.classList.toggle('is-albarn', side === 'albarn');
        });
      }

      function playStep() {
        const tr = TRACKS[currentTrackIdx];
        updatePixelBar(stepIdx, tr.side);
        if (!isMuted && audioCtx) {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = tr.side === 'albarn' ? 'triangle' : 'sawtooth';
          osc.frequency.value = tr.notes[stepIdx % tr.notes.length];
          gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.22);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.23);
        }
        stepIdx++;
      }

      function togglePlay(forceState) {
        const playerEl = document.getElementById('cassettePlayer');
        const statusEl = document.getElementById('playerStatusText');
        const playIcon = document.getElementById('playIcon');
        isPlaying = typeof forceState === 'boolean' ? forceState : !isPlaying;

        if (isPlaying) {
          if (!audioCtx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (AC) audioCtx = new AC();
          }
          if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
          playerEl.classList.add('is-playing');
          statusEl.textContent = isMuted ? 'REPRODUCIENDO (MUTE)' : 'REPRODUCIENDO CASETE...';
          playIcon.innerHTML = '<path d="M3 2h4v12H3V2zm6 0h4v12H9V2z"/>';
          clearInterval(synthInterval);
          clearInterval(secInterval);
          playStep();
          synthInterval = setInterval(playStep, TRACKS[currentTrackIdx].tempo);
          secInterval = setInterval(() => {
            elapsedSec++;
            const m = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
            const s = String(elapsedSec % 60).padStart(2, '0');
            document.getElementById('playerTimer').textContent = m + ':' + s;
          }, 1000);
        } else {
          playerEl.classList.remove('is-playing');
          statusEl.textContent = 'PAUSADO · PRESIONA PLAY';
          playIcon.innerHTML = '<path d="M3 2h2v2h2v2h2v2H7v2H5v2H3V2z"/>';
          clearInterval(synthInterval);
          clearInterval(secInterval);
        }
      }

      document.getElementById('playToggleBtn').addEventListener('click', () => togglePlay());
      document.getElementById('muteToggleBtn').addEventListener('click', () => {
        isMuted = !isMuted;
        document.getElementById('muteToggleBtn').style.background = isMuted ? '#C02126' : '#9496A5';
        if (isPlaying) {
          document.getElementById('playerStatusText').textContent = isMuted ? 'REPRODUCIENDO (MUTE)' : 'REPRODUCIENDO CASETE...';
        }
      });

      document.querySelectorAll('.keypad-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentTrackIdx = Number(btn.dataset.track);
          stepIdx = 0;
          elapsedSec = 0;
          document.getElementById('playerTimer').textContent = '00:00';
          document.getElementById('playerSideLabel').textContent = TRACKS[currentTrackIdx].label;
          document.getElementById('playerTrackTitle').textContent = TRACKS[currentTrackIdx].title;
          document.querySelectorAll('.keypad-btn').forEach(b => b.classList.toggle('is-active', b === btn));
          if (isPlaying) togglePlay(true);
          else updatePixelBar(4, TRACKS[currentTrackIdx].side);
        });
      });
      updatePixelBar(3, 'albarn');

      // 4. DIGITAL CAMERA CAROUSEL (BATALLA DEL BRITPOP)
      const CAM_SLIDES = [
        {
          src: 'https://consequence.net/wp-content/uploads/2025/06/Blur-v-Oasis.jpg?quality=80',
          fallback: makePosterFallback('BLUR: COUNTRY HOUSE', 'OASIS: ROLL WITH IT', '#FFE241', '#1E2165', '14 AGOSTO 1995 · DUELO DE SINGLES'),
          hud: 'PLAY ▶ 14/08/1995',
          cap: 'Agosto 1995: "Country House" (Blur) vendió 274 mil copias frente a 216 mil de "Roll With It" (Oasis), pero Oasis ganó el álbum del año.'
        },
        {
          src: 'https://www.thetimes.com/imageserver/image/5ec0ac3b-06e3-484d-aabe-f0e2ad1a6d6e.jpg?strip=all&format=webp&crop=1600px%2C900px%2C0px%2C0px&resize=1328',
          fallback: makePosterFallback('NME CHAMPIONSHIP', 'LONDRES VS MÁNCHESTER', '#C02126', '#1E2165', 'CAMPEONATO MEDIÁTICO DEL BRITPOP'),
          hud: 'PLAY ▶ OCT/1995',
          cap: 'La prensa musical convirtió una disputa de rankings en un choque de clases y ciudades entre el sur artístico y el norte obrero.'
        },
        {
          src: '',
          fallback: makePosterFallback('MORNING GLORY (19x PLATINO)', 'THE GREAT ESCAPE (3x PLATINO)', '#1E2165', '#FFE241', 'EL VEREDICTO COMERCIAL DE LOS 90'),
          hud: 'PLAY ▶ 1995–1997',
          cap: 'Oasis dominó las radios y estadios con "(What\'s the Story) Morning Glory?" (767 semanas en el chart británico).'
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
      const C1_SLIDES = [
        {
          tag: '1991–1997 · El despegue',
          title: 'De Parklife a Definitely Maybe',
          text: 'Mientras Oasis alcanzaba ventas históricas en Reino Unido (10x Platino y 19x Platino), Blur respondía cambiando de piel en cada disco: desde el britpop costumbrista hasta el giro alternativo de su álbum homónimo de 1997.',
          bgL: '#FFE241', bgR: '#1E2165', left: 'BLUR 1994–97', right: 'OASIS 1994–97', sub: 'EL PEAK COMERCIAL DE LA DÉCADA'
        },
        {
          tag: '2001–2005 · Mutación animada',
          title: 'El nacimiento de Gorillaz',
          text: 'Damon Albarn y Jamie Hewlett crearon una banda virtual que rompió los límites del Britpop. Con "Gorillaz" (2001) y "Demon Days" (2005, 6x Platino), Albarn abrió un frente global paralelo mientras Oasis lidiaba con cambios internos.',
          bgL: '#C02126', bgR: '#FFE241', left: 'GORILLAZ 2001', right: 'DEMON DAYS 2005', sub: '6X PLATINO EN REINO UNIDO'
        },
        {
          tag: '2009–2010 · El punto de inflexión',
          title: 'Quiebre en París y contraataque en estudio',
          text: 'En 2009 se separa Oasis tras la pelea de los hermanos Gallagher. Ese mismo año Blur publica cuatro discos y en 2010 Gorillaz lanza "Plastic Beach" y "The Fall", consolidando su década más prolífica.',
          bgL: '#1E2165', bgR: '#C02126', left: '4 DISCOS BLUR (2009)', right: 'PLASTIC BEACH (2010)', sub: 'EL AÑO EN QUE CAMBIÓ LA CORONA'
        },
        {
          tag: '2023–2026 · Presente activo',
          title: 'The Ballad of Darren y The Mountain',
          text: 'Más de tres décadas después, Albarn sigue encabezando los rankings británicos con material inédito en Blur (2023) y Gorillaz (2026). Oasis volvió a los escenarios en 2025, pero sin lanzar un álbum de estudio desde 2008.',
          bgL: '#FFE241', bgR: '#9496A5', left: 'THE MOUNTAIN (2026)', right: 'OASIS LIVE ’25', sub: 'ESTUDIO VS. NOSTALGIA EN VIVO'
        }
      ];

      let c1Idx = 0;
      function renderC1() {
        const s = C1_SLIDES[c1Idx];
        const stage = document.getElementById('c1Stage');
        stage.innerHTML = `
          <div class="wide-carousel-art">
            <img src="${makePosterFallback(s.left, s.right, s.bgL, s.bgR, s.sub)}" alt="${s.title}" style="width:100%; height:100%; object-fit:cover;"/>
          </div>
          <div class="wide-carousel-copy">
            <span style="font-family:var(--font-display); font-weight:900; font-size:0.75rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--yellow);">
              ${s.tag} · ${c1Idx + 1}/${C1_SLIDES.length}
            </span>
            <h3 style="font-family:var(--font-display); font-weight:900; font-size:1.45rem; text-transform:uppercase; margin:0; line-height:1.15;">
              ${s.title}
            </h3>
            <p style="margin:0; font-size:0.92rem; color:rgba(255,255,255,0.92); line-height:1.6;">
              ${s.text}
            </p>
          </div>
        `;
      }
      document.getElementById('c1Prev').addEventListener('click', () => { c1Idx = (c1Idx - 1 + C1_SLIDES.length) % C1_SLIDES.length; renderC1(); });
      document.getElementById('c1Next').addEventListener('click', () => { c1Idx = (c1Idx + 1) % C1_SLIDES.length; renderC1(); });
      renderC1();

      // 6. GRÁFICO 1: VIGENCIA DISCOGRÁFICA (1991–2026)
      const BAND_META = [
        { name: 'Blur', side: 'albarn', color: '#FFE241', stroke: '#000000' },
        { name: 'Gorillaz', side: 'albarn', color: '#C02126', stroke: '#000000' },
        { name: 'Damon Albarn', side: 'albarn', color: '#E09F1F', stroke: '#000000' },
        { name: 'The Good the Bad & the Queen', side: 'albarn', color: '#000000', stroke: '#FFE241' },
        { name: 'Oasis', side: 'gallagher', color: '#1E2165', stroke: '#000000' },
        { name: 'Noel Gallagher\'s High Flying Birds', side: 'gallagher', color: '#9496A5', stroke: '#000000' },
        { name: 'Liam Gallagher', side: 'gallagher', color: '#3F63A8', stroke: '#000000' },
        { name: 'Beady Eye', side: 'gallagher', color: '#5A6178', stroke: '#000000' },
        { name: 'Noel Gallagher', side: 'gallagher', color: '#FFFFFF', stroke: '#1E2165' }
      ];
      const BAND_MAP = Object.fromEntries(BAND_META.map(b => [b.name, b]));

      const pointMap = new Map();
      DATA.disc.forEach(d => {
        const k = d.y + '|' + d.b;
        if (!pointMap.has(k)) pointMap.set(k, { year: d.y, band: d.b, side: d.s, count: 0, items: [] });
        const e = pointMap.get(k);
        e.count++;
        e.items.push(d);
      });
      const ALL_POINTS = Array.from(pointMap.values()).sort((a, b) => a.year - b.year);

      let activeSideFilter = 'all';
      let hiddenBands = new Set();
      let selectedPointKey = '2009|Blur';

      function renderDiscLegend() {
        const legendEl = document.getElementById('discLegend');
        legendEl.innerHTML = '';
        BAND_META.forEach(b => {
          const isDimmed = (activeSideFilter !== 'all' && b.side !== activeSideFilter) || hiddenBands.has(b.name);
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'legend-item' + (isDimmed ? ' is-dimmed' : '');
          btn.innerHTML = `<span class="legend-swatch" style="background:${b.color}; border-color:${b.stroke === '#FFE241' ? '#000' : b.stroke};"></span><span>${b.name}</span>`;
          btn.addEventListener('click', () => {
            if (hiddenBands.has(b.name)) hiddenBands.delete(b.name);
            else hiddenBands.add(b.name);
            renderDiscLegend();
            renderDiscChart();
          });
          legendEl.appendChild(btn);
        });
      }

      function inspectDiscPoint(pt) {
        const box = document.getElementById('discInspector');
        if (!pt) return;
        const meta = BAND_MAP[pt.band] || { color: '#1E2165' };
        const sideLabel = pt.side === 'albarn' ? 'Bando Albarn · Londres' : 'Bando Gallagher · Mánchester';
        const rows = pt.items.map(it => {
          const ukTxt = it.uk ? `UK Peak #${it.uk}` : 'Sin chart UK';
          const bpiTxt = it.bpi ? ` · BPI: ${it.bpi}` : '';
          return `<li><strong>${it.t}</strong> (${it.k}) — <span class="tabular">${ukTxt}${bpiTxt}</span></li>`;
        }).join('');
        box.innerHTML = `
          <h4 class="inspector-title">
            <span style="display:inline-block;width:11px;height:11px;border-radius:50%;background:${meta.color};border:2px solid #000;vertical-align:middle;margin-right:6px;"></span>
            ${pt.band} · <span class="tabular">${pt.year}</span> (${pt.count} ${pt.count === 1 ? 'disco' : 'discos'}) — ${sideLabel}
          </h4>
          <ul class="inspector-list">${rows}</ul>
        `;
      }

      function renderDiscChart() {
        const container = document.getElementById('discChartContainer');
        const W = 980, H = 360;
        const padL = 56, padR = 24, padT = 24, padB = 62;
        const plotW = W - padL - padR, plotH = H - padT - padB;
        const xOf = y => padL + ((y - 1991) / (2026 - 1991)) * plotW;
        const yOf = c => padT + plotH - (c / 4.2) * plotH;

        let gridSVG = '';
        [0, 1, 2, 3, 4].forEach(val => {
          const yy = yOf(val);
          gridSVG += `<line x1="${padL}" y1="${yy}" x2="${W - padR}" y2="${yy}" stroke="#9496A5" stroke-opacity="0.45" stroke-dasharray="${val === 0 ? '0' : '4 4'}" stroke-width="${val === 0 ? 1.5 : 1}"/>`;
          gridSVG += `<text x="${padL - 10}" y="${yy + 4}" text-anchor="end" font-family="Courier Prime, monospace" font-size="12" font-weight="700" fill="#121318">${val}</text>`;
        });

        const x2009 = xOf(2009);
        gridSVG += `<line x1="${x2009}" y1="${padT}" x2="${x2009}" y2="${padT + plotH}" stroke="#C02126" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.7"/>`;
        gridSVG += `<text x="${x2009 + 5}" y="${padT + 13}" font-family="Montserrat, sans-serif" font-size="10" font-weight="900" fill="#C02126">2009: QUIEBRE OASIS</text>`;

        for (let y = 1991; y <= 2026; y++) {
          const xx = xOf(y);
          gridSVG += `<line x1="${xx}" y1="${padT + plotH}" x2="${xx}" y2="${padT + plotH + 5}" stroke="#000" stroke-width="1"/>`;
          gridSVG += `<text x="${xx}" y="${padT + plotH + 17}" text-anchor="end" transform="rotate(-65 ${xx} ${padT + plotH + 17})" font-family="Courier Prime, monospace" font-size="11" font-weight="700" fill="#121318">${y}</text>`;
        }

        const visible = ALL_POINTS.filter(pt => (activeSideFilter === 'all' || pt.side === activeSideFilter) && !hiddenBands.has(pt.band));
        const slotGroups = new Map();
        visible.forEach(pt => {
          const sk = pt.year + '|' + pt.count;
          if (!slotGroups.has(sk)) slotGroups.set(sk, []);
          slotGroups.get(sk).push(pt);
        });

        let dotsSVG = '';
        visible.forEach(pt => {
          const grp = slotGroups.get(pt.year + '|' + pt.count);
          const idx = grp.indexOf(pt);
          const cx = xOf(pt.year) + (idx - (grp.length - 1) / 2) * 7;
          const cy = yOf(pt.count);
          const meta = BAND_MAP[pt.band] || { color: '#1E2165', stroke: '#000' };
          const key = pt.year + '|' + pt.band;
          const isSel = key === selectedPointKey;
          dotsSVG += `<g class="chart-dot ${isSel ? 'is-selected' : ''}" data-key="${key}" tabindex="0" role="button" aria-label="${pt.band} ${pt.year}: ${pt.count} discos"><circle cx="${cx}" cy="${cy}" r="${isSel ? 8.5 : 6.5}" fill="${meta.color}" stroke="${meta.stroke}" stroke-width="2.2"/></g>`;
        });

        container.innerHTML = `
          <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
            <rect x="${padL}" y="${padT}" width="${plotW}" height="${plotH}" fill="#FAF9F6" stroke="#000" stroke-width="1.5"/>
            ${gridSVG}
            <text x="16" y="${padT + plotH / 2}" text-anchor="middle" transform="rotate(-90 16 ${padT + plotH / 2})" font-family="Montserrat, sans-serif" font-size="11" font-weight="900" fill="#1E2165">CANTIDAD DE DISCOS</text>
            <text x="${padL + plotW / 2}" y="${H - 6}" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="11" font-weight="900" fill="#1E2165">AÑO (1991–2026)</text>
            ${dotsSVG}
          </svg>
        `;

        container.querySelectorAll('.chart-dot').forEach(el => {
          const select = () => {
            selectedPointKey = el.dataset.key;
            inspectDiscPoint(ALL_POINTS.find(p => (p.year + '|' + p.band) === selectedPointKey));
            renderDiscChart();
          };
          el.addEventListener('click', select);
          el.addEventListener('mouseenter', () => inspectDiscPoint(ALL_POINTS.find(p => (p.year + '|' + p.band) === el.dataset.key)));
        });
      }

      document.querySelectorAll('[data-side-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
          activeSideFilter = btn.dataset.sideFilter;
          document.querySelectorAll('[data-side-filter]').forEach(b => b.classList.toggle('is-active', b === btn));
          renderDiscLegend();
          renderDiscChart();
        });
      });

      renderDiscLegend();
      renderDiscChart();
      inspectDiscPoint(ALL_POINTS.find(p => (p.year + '|' + p.band) === selectedPointKey));

      // 7. GRÁFICO CULTURA POPULAR 1 & 2
      const POP_CATS = [
        { key: 'Serie', label: 'Series', albarn: DATA.popHighlights.Serie_albarn.total, gallagher: DATA.popHighlights.Serie_gallagher.total },
        { key: 'Pelicula', label: 'Películas', albarn: DATA.popHighlights.Pelicula_albarn.total, gallagher: DATA.popHighlights.Pelicula_gallagher.total },
        { key: 'Videojuego', label: 'Videojuegos', albarn: DATA.popHighlights.Videojuego_albarn.total, gallagher: DATA.popHighlights.Videojuego_gallagher.total }
      ];

      let popMode = 'count';
      let activePopCat = 'Videojuego';

      function renderPopChart1() {
        const container = document.getElementById('popChartContainer');
        const W = 820, H = 310;
        const padL = 56, padR = 24, padT = 26, padB = 46;
        const plotW = W - padL - padR, plotH = H - padT - padB;
        const maxVal = popMode === 'count' ? 140 : 100;
        const yOf = v => padT + plotH - (v / maxVal) * plotH;
        const ticks = popMode === 'count' ? [0, 20, 40, 60, 80, 100, 120, 140] : [0, 25, 50, 75, 100];

        let gridSVG = '';
        ticks.forEach(t => {
          const yy = yOf(t);
          gridSVG += `<line x1="${padL}" y1="${yy}" x2="${W - padR}" y2="${yy}" stroke="#9496A5" stroke-opacity="0.45" stroke-dasharray="${t === 0 ? '0' : '4 4'}" stroke-width="${t === 0 ? 1.5 : 1}"/>`;
          gridSVG += `<text x="${padL - 8}" y="${yy + 4}" text-anchor="end" font-family="Courier Prime, monospace" font-size="11" font-weight="700" fill="#121318">${popMode === 'percent' ? t + '%' : t}</text>`;
        });

        const groupW = plotW / POP_CATS.length;
        const barW = 64;
        let barsSVG = '';

        POP_CATS.forEach((cat, i) => {
          const cx = padL + groupW * (i + 0.5);
          const total = cat.albarn + cat.gallagher;
          const vAlb = popMode === 'count' ? cat.albarn : Math.round((cat.albarn / total) * 100);
          const vGal = popMode === 'count' ? cat.gallagher : (100 - vAlb);
          const yAlb = yOf(vAlb), yGal = yOf(vGal);
          const isSel = activePopCat === cat.key;

          barsSVG += `
            <g data-pop-cat-bar="${cat.key}" style="cursor:pointer;">
              ${isSel ? `<rect x="${cx - barW - 14}" y="${padT + 4}" width="${barW * 2 + 28}" height="${plotH - 4}" fill="#C02126" fill-opacity="0.07" stroke="#C02126" stroke-width="1.5" stroke-dasharray="4 3"/>` : ''}
              <rect x="${cx - barW - 4}" y="${yAlb}" width="${barW}" height="${padT + plotH - yAlb}" fill="#FFE241" stroke="#000" stroke-width="2.2"/>
              <text x="${cx - barW / 2 - 4}" y="${yAlb - 6}" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="13" font-weight="900" fill="#000">${popMode === 'percent' ? vAlb + '%' : vAlb}</text>
              <rect x="${cx + 4}" y="${yGal}" width="${barW}" height="${padT + plotH - yGal}" fill="#1E2165" stroke="#000" stroke-width="2.2"/>
              <text x="${cx + barW / 2 + 4}" y="${yGal - 6}" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="13" font-weight="900" fill="#1E2165">${popMode === 'percent' ? vGal + '%' : vGal}</text>
              <text x="${cx}" y="${padT + plotH + 24}" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="12" font-weight="900" fill="${isSel ? '#C02126' : '#121318'}">${cat.label.toUpperCase()}</text>
            </g>
          `;
        });

        container.innerHTML = `
          <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
            <rect x="${padL}" y="${padT}" width="${plotW}" height="${plotH}" fill="#FAF9F6" stroke="#000" stroke-width="1.5"/>
            ${gridSVG}
            <text x="16" y="${padT + plotH / 2}" text-anchor="middle" transform="rotate(-90 16 ${padT + plotH / 2})" font-family="Montserrat, sans-serif" font-size="11" font-weight="900" fill="#1E2165">${popMode === 'percent' ? 'PORCENTAJE (%)' : 'NÚMERO DE APARICIONES'}</text>
            ${barsSVG}
          </svg>
        `;

        container.querySelectorAll('[data-pop-cat-bar]').forEach(el => {
          el.addEventListener('click', () => selectPopCategory(el.dataset.popCatBar));
        });
      }

      function renderPopChart2() {
        const cat = POP_CATS.find(c => c.key === activePopCat) || POP_CATS[2];
        const alb = DATA.popHighlights[cat.key + '_albarn'];
        const gal = DATA.popHighlights[cat.key + '_gallagher'];

        document.getElementById('pop2Kicker').textContent = 'Gráfico cultura popular 2 · ' + cat.label;
        document.getElementById('pop2Title').textContent = `Canciones más sincronizadas en ${cat.label} (${cat.albarn} Albarn vs. ${cat.gallagher} Gallagher)`;

        const combined = [
          ...alb.top.slice(0, 4).map(s => ({ ...s, side: 'albarn' })),
          ...gal.top.slice(0, 4).map(s => ({ ...s, side: 'gallagher' }))
        ].sort((a, b) => b.count - a.count);

        const maxC = Math.max(...combined.map(x => x.count), 1);
        const rowsHTML = combined.map(item => {
          const pct = Math.round((item.count / maxC) * 100);
          const barBg = item.side === 'albarn' ? 'var(--yellow)' : 'var(--navy)';
          const barTxt = item.side === 'albarn' ? '#000' : '#FFF';
          return `
            <div style="display:grid; grid-template-columns:220px 1fr 54px; gap:14px; align-items:center; padding:8px 0; border-bottom:1px dashed rgba(0,0,0,0.16);">
              <div>
                <strong style="font-size:0.86rem;">${item.song}</strong><br/>
                <span style="font-size:0.74rem; color:var(--ink-muted);">${item.band} · ${item.works.slice(0, 2).join(', ')}</span>
              </div>
              <div style="height:24px; background:var(--paper-alt); border:1.5px solid #000; position:relative;">
                <div style="width:${pct}%; height:100%; background:${barBg}; border-right:1.5px solid #000;"></div>
              </div>
              <div class="tabular" style="font-family:var(--font-display); font-weight:900; font-size:0.9rem; text-align:right; background:${barBg}; color:${barTxt}; border:1.5px solid #000; padding:2px 6px;">
                ${item.count}
              </div>
            </div>
          `;
        }).join('');

        document.getElementById('pop2Body').innerHTML = rowsHTML;
      }

      function selectPopCategory(catKey) {
        activePopCat = catKey;
        document.querySelectorAll('[data-pop-cat-btn]').forEach(b => b.classList.toggle('is-active', b.dataset.popCatBtn === catKey));
        renderPopChart1();
        renderPopChart2();
      }

      document.querySelectorAll('[data-pop-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          popMode = btn.dataset.popMode;
          document.querySelectorAll('[data-pop-mode]').forEach(b => b.classList.toggle('is-active', b === btn));
          renderPopChart1();
        });
      });

      document.querySelectorAll('[data-pop-cat-btn]').forEach(btn => {
        btn.addEventListener('click', () => selectPopCategory(btn.dataset.popCatBtn));
      });

      renderPopChart1();
      renderPopChart2();

      // 8. LAYERED DECK CAROUSEL + GRÁFICO TERCERA BASE (BASE_GIRAS.CSV)
      const FEATURED_TOURS = [
        { band: 'Oasis', side: 'gallagher', tour: 'Definitely Maybe Tour', years: '1994–1995', shows: 143, note: 'La gira más extensa del catálogo: 143 conciertos que cimentaron el fenómeno de masas de Mánchester.' },
        { band: 'Noel Gallagher\'s High Flying Birds', side: 'gallagher', tour: 'High Flying Birds Tour', years: '2011–2012', shows: 136, note: 'Tras la ruptura de Oasis, Noel mantuvo la escala mundial con 136 presentaciones en apenas trece meses.' },
        { band: 'Blur', side: 'albarn', tour: 'Blur Tour', years: '1997', shows: 113, note: 'El tour más intenso de Blur coincidió con su giro estético de 1997 y el estallido internacional de "Song 2".' },
        { band: 'Gorillaz', side: 'albarn', tour: 'The Mountain Tour', years: '2026–2027', shows: 71, note: 'Treinta años después de 1995, Damon Albarn proyecta 71 conciertos con la banda virtual en plena vigencia.' },
        { band: 'Oasis', side: 'gallagher', tour: 'Oasis Live \'25 Tour', years: '2025', shows: 41, note: 'El regreso en vivo de los hermanos Gallagher reunió estadios completos sin publicar música nueva.' }
      ];

      let deckIdx = 0;
      function renderDeck() {
        const prev = FEATURED_TOURS[(deckIdx - 1 + FEATURED_TOURS.length) % FEATURED_TOURS.length];
        const curr = FEATURED_TOURS[deckIdx];
        const next = FEATURED_TOURS[(deckIdx + 1) % FEATURED_TOURS.length];

        document.getElementById('deckLeft').innerHTML = `<div style="font-family:var(--font-display); font-weight:900; font-size:0.7rem; text-transform:uppercase;">${prev.band}</div><div style="font-size:0.75rem;">${prev.shows} shows</div>`;
        document.getElementById('deckRight').innerHTML = `<div style="font-family:var(--font-display); font-weight:900; font-size:0.7rem; text-transform:uppercase;">${next.band}</div><div style="font-size:0.75rem;">${next.shows} shows</div>`;

        const badgeBg = curr.side === 'albarn' ? 'var(--yellow)' : 'var(--navy)';
        const badgeColor = curr.side === 'albarn' ? '#000' : '#FFF';
        document.getElementById('deckMain').innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <span style="font-family:var(--font-display); font-weight:900; font-size:0.75rem; text-transform:uppercase; background:${badgeBg}; color:${badgeColor}; border:2px solid #000; padding:4px 10px;">
              ${curr.band} · ${curr.years}
            </span>
            <span class="tabular" style="font-family:var(--font-display); font-weight:900; font-size:1.35rem; color:var(--red);">
              ${curr.shows} CONCIERTOS
            </span>
          </div>
          <h3 style="font-family:var(--font-display); font-weight:900; font-size:1.45rem; text-transform:uppercase; color:var(--navy); margin:0;">
            ${curr.tour}
          </h3>
          <p style="margin:0; font-size:0.94rem; color:var(--ink);">${curr.note}</p>
        `;
      }
      const stepDeck = dir => { deckIdx = (deckIdx + dir + FEATURED_TOURS.length) % FEATURED_TOURS.length; renderDeck(); };
      document.getElementById('deckPrev').addEventListener('click', () => stepDeck(-1));
      document.getElementById('deckLeft').addEventListener('click', () => stepDeck(-1));
      document.getElementById('deckNext').addEventListener('click', () => stepDeck(1));
      document.getElementById('deckRight').addEventListener('click', () => stepDeck(1));
      renderDeck();

      // Aggregate tourList by band
      const tourMap = new Map();
      DATA.tourList.forEach(t => {
        if (!tourMap.has(t.b)) tourMap.set(t.b, { band: t.b, side: t.s, tours: 0, shows: 0 });
        const o = tourMap.get(t.b);
        o.tours++;
        o.shows += t.shows;
      });
      const TOUR_BANDS = Array.from(tourMap.values());
      let tourSort = 'shows';

      function renderTourChart() {
        const sorted = [...TOUR_BANDS].sort((a, b) => b[tourSort] - a[tourSort]);
        const W = 860, H = 330;
        const padL = 250, padR = 70, padT = 20, padB = 34;
        const plotW = W - padL - padR, plotH = H - padT - padB;
        const maxV = Math.max(...sorted.map(x => x[tourSort]));
        const rowH = plotH / sorted.length;

        let svgRows = '';
        sorted.forEach((b, i) => {
          const y = padT + i * rowH + 6;
          const barH = Math.max(18, rowH - 12);
          const barW = (b[tourSort] / maxV) * plotW;
          const fill = b.side === 'albarn' ? '#FFE241' : '#1E2165';
          const labelTxt = tourSort === 'shows' ? `${b.shows} shows (${b.tours} giras)` : `${b.tours} giras (${b.shows} shows)`;
          svgRows += `
            <text x="${padL - 12}" y="${y + barH * 0.68}" text-anchor="end" font-family="Courier Prime, monospace" font-size="12" font-weight="700" fill="#121318">${b.band}</text>
            <rect x="${padL}" y="${y}" width="${barW}" height="${barH}" fill="${fill}" stroke="#000" stroke-width="2"/>
            <text x="${padL + barW + 8}" y="${y + barH * 0.68}" font-family="Montserrat, sans-serif" font-size="11" font-weight="900" fill="#121318">${labelTxt}</text>
          `;
        });

        document.getElementById('tourChartContainer').innerHTML = `
          <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
            <rect x="${padL}" y="${padT}" width="${plotW}" height="${plotH}" fill="#FAF9F6" stroke="#000" stroke-width="1.5"/>
            ${svgRows}
          </svg>
        `;
      }

      document.querySelectorAll('[data-tour-sort]').forEach(btn => {
        btn.addEventListener('click', () => {
          tourSort = btn.dataset.tourSort;
          document.querySelectorAll('[data-tour-sort]').forEach(b => b.classList.toggle('is-active', b === btn));
          renderTourChart();
        });
      });
      renderTourChart();

      // 9. FINAL VERDICT TOGGLE (Damon Albarn | Los Gallagher)
      const FINAL_VERDICTS = {
        albarn: {
          title: 'Damon Albarn · La maratón de la reinvención (Londres)',
          bg: 'var(--yellow)',
          color: '#000',
          body: 'Con 64 lanzamientos discográficos (25 álbumes de estudio) hasta 2026 y 241 apariciones en series, películas y videojuegos —impulsadas por el fenómeno transmedia de Gorillaz—, Albarn ganó la batalla del largo plazo sin abandonar nunca el estudio.'
        },
        gallagher: {
          title: 'Los Gallagher · Hegemonía de estadios e himnos (Mánchester)',
          bg: 'var(--navy)',
          color: '#FFF',
          body: 'Con 56 discos, 29 apariciones en cine (único formato audiovisual donde superan a Albarn) y 1.656 conciertos en 17 giras masivas culminadas en Oasis Live \'25, Liam y Noel mantuvieron vivo el culto popular de la banda más grande de los noventa.'
        }
      };

      function renderFinalVerdict(choice) {
        const v = FINAL_VERDICTS[choice];
        const box = document.getElementById('finalVerdictBox');
        box.style.background = v.bg;
        box.style.color = v.color;
        box.innerHTML = `
          <h3 style="font-family:var(--font-display); font-weight:900; font-size:1.15rem; text-transform:uppercase; margin:0 0 8px;">
            ${v.title}
          </h3>
          <p style="margin:0; font-size:0.95rem; line-height:1.6;">${v.body}</p>
        `;
      }

      document.querySelectorAll('[data-final-choice]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('[data-final-choice]').forEach(b => b.classList.toggle('is-active', b === btn));
          renderFinalVerdict(btn.dataset.finalChoice);
        });
      });
      renderFinalVerdict('albarn');

      // 10. VIP CONCERT TICKET WELCOME GATE HANDLER
      const vipGate = document.getElementById('vipTicketGate');
      const vipBtn = document.getElementById('vipTicketBtn');
      function enterWithTicket() {
        if (!vipGate || vipGate.dataset.opened) return;
        vipGate.dataset.opened = '1';
        vipGate.classList.add('is-tearing');
        setTimeout(() => {
          vipGate.classList.add('is-dismissed');
          document.body.classList.remove('is-ticket-locked');
          window.scrollTo(0, 0);
        }, 180);
        setTimeout(() => {
          vipGate.style.display = 'none';
        }, 680);
      }
      if (vipBtn) {
        vipBtn.addEventListener('click', enterWithTicket);
      }
    })()