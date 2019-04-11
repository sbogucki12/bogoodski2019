using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bogoodski2019.Controllers
{
    public class Track
    {
        public int Id { get; set; }
        public string artist { get; set; }
        public string trackTitle { get; set; }        
        public string trackLink { get; set; }
    }

    [ApiController]
    public class MusicController : ControllerBase
    {

        public static Track track0 = new Track
        {
            Id = 0,
            artist = "Hot Since 82",
            trackTitle = "Hit and Run",
            trackLink = "https://www.beatport.com/track/hit-and-run-original-mix/3604353"
        };

        public static Track track1 = new Track
        {
            Id = 1,
            artist = "Cristoph",
            trackTitle = "Closer (Dub)",
            trackLink = "https://www.beatport.com/track/closer-dub/8339093"
        };

        public static Track track2 = new Track
        {
            Id = 2,
            artist = "Adam Beyer, Green Velvet, Layton Giordani",
            trackTitle = "Space Date",
            trackLink = "https://www.beatport.com/track/space-date-original-mix/10829303"
        };

        public static Track track3 = new Track
        {
            Id = 3,
            artist = "Jeremy Olander, Cristoph",
            trackTitle = "Last Dance",
            trackLink = "https://www.beatport.com/track/last-dance-original-mix/9225651"
        };

        public static Track track4 = new Track
        {
            Id = 4,
            artist = "Tinlicker",
            trackTitle = "In All the Fire",
            trackLink = "https://www.beatport.com/track/in-all-the-fire-original-mix/8309334"
        };

        public static Track track5 = new Track
        {
            Id = 5,
            artist = "Fehrplay",
            trackTitle = "Rattata",
            trackLink = "https://www.beatport.com/track/rattata-original-mix/6198114"
        };

        public static Track track6 = new Track
        {
            Id = 6,
            artist = "Alan Fitzpatrick",
            trackTitle = "Turn Down the Lights",
            trackLink = "https://www.beatport.com/track/turn-down-the-lights-original-mix/5917332"
        };

        public static Track track7 = new Track
        {
            Id = 7,
            artist = "Cirez D",
            trackTitle = "Mokba",
            trackLink = "https://www.beatport.com/track/mokba-original-mix/2051621"
        };

        public static Track track8 = new Track
        {
            Id = 8,
            artist = "Alan Fitzpatrick",
            trackTitle = "1992",
            trackLink = "https://www.beatport.com/track/1992-original-mix/4981540"
        };

        public static Track track9 = new Track
        {
            Id = 9,
            artist = "Cirez D, Acki Kokotos",
            trackTitle = "Sirtos Madness",
            trackLink = "https://www.beatport.com/track/sirtos-madness-original-mix/1777721"
        };

        public static Track track10 = new Track
        {
            Id = 10,
            artist = "Adam Beyer, Bart Skils",
            trackTitle = "Your Mind",
            trackLink = "https://www.beatport.com/track/your-mind-original-mix/10670339"
        };

        public static Track track11 = new Track
        {
            Id = 11,
            artist = "Sharam feat. Anousheh Khalili",
            trackTitle = "Don't Say a Word",
            trackLink = "https://www.beatport.com/track/dont-say-a-word-feat-anousheh-khalili-original-mix/1059913"
        };

        public static Track track12 = new Track
        {
            Id = 12,
            artist = "Andrew Bayer",
            trackTitle = "Nobody Told Me",
            trackLink = "https://www.beatport.com/track/nobody-told-me-original-mix/7115304"
        };

        public static Track track13 = new Track
        {
            Id = 13,
            artist = "Arty",
            trackTitle = "Patriots",
            trackLink = "https://www.beatport.com/track/patriots-original-mix/7749617"
        };

        public static Track track14 = new Track
        {
            Id = 14,
            artist = "Serge Devant",
            trackTitle = "Sweet Harmony (Jerome Isma-Ae Remix)",
            trackLink = "https://www.beatport.com/track/sweet-harmony-isma-ae-remix/620744"
        };

        public static Track track15 = new Track
        {
            Id = 15,
            artist = "Morgan Page feat. Lissie",
            trackTitle = "The Longest Road (Deadmau5 Remix)",
            trackLink = "https://www.beatport.com/track/the-longest-road-feat-lissie-deadmau5-remix/516899"
        };

        public static Track track16 = new Track
        {
            Id = 16,
            artist = "Ilan Bluestone feat. Giuseppe De Luca",
            trackTitle = "Bigger Than Love",
            trackLink = "https://www.beatport.com/track/bigger-than-love-feat-giuseppe-de-luca-original-mix/7655079"
        };

        public static Track track17 = new Track
        {
            Id = 17,
            artist = "Pryda",
            trackTitle = "Rotonda",
            trackLink = "https://www.beatport.com/track/rotonda-original-mix/4495025"
        };

        public static Track track18 = new Track
        {
            Id = 18,
            artist = "Markus Schulz presents Dakota",
            trackTitle = "Sleepwalkers",
            trackLink = "https://www.beatport.com/track/sleepwalkers-original-mix/1938406"
        };

        public static Track track19 = new Track
        {
            Id = 19,
            artist = "Olivier Giacomotto",
            trackTitle = "Bipolar Star (Victor Ruiz Remix)",
            trackLink = "https://www.beatport.com/track/bipolar-star-victor-ruiz-remix/10150081"
        };

        public static Track track20 = new Track
        {
            Id = 20,
            artist = "Pryda",
            trackTitle = "Elements",
            trackLink = "https://www.beatport.com/track/elements-original-mix/10613266"
        };

        public static Track track21 = new Track
        {
            Id = 21,
            artist = "Adam Beyer",
            trackTitle = "The Color Out of Space",
            trackLink = "https://www.beatport.com/track/the-color-out-of-space-original-mix/3792532"
        };

        public static Track track22 = new Track
        {
            Id = 22,
            artist = "Zhu",
            trackTitle = "Faded",
            trackLink = "https://www.beatport.com/track/faded-original-mix/5350923"
        };

        public static Track track23 = new Track
        {
            Id = 23,
            artist = "Young Rebels, Francesco Diaz, Thomas Gold",
            trackTitle = "Don’t You Want Me (Dave Spoon Remix)",
            trackLink = "https://www.beatport.com/track/dont-you-want-me-dave-spoon-remix/4138742"
        };

        public static Track track24 = new Track
        {
            Id = 24,
            artist = "Calvin Harris",
            trackTitle = "Flashback (Eric Prydz Remix)",
            trackLink = "https://www.beatport.com/track/flashback-eric-prydz-remix/1032291"
        };

        public static Track track25 = new Track
        {
            Id = 25,
            artist = "Hilight Tribe",
            trackTitle = "Free Tibet (Vini Vici Remix)",
            trackLink = "https://www.beatport.com/track/free-tibet-vini-vici-remix/7509573"
        };

        public static Track track26 = new Track
        {
            Id = 26,
            artist = "Markus Schulz",
            trackTitle = "Sestertius",
            trackLink = "https://www.beatport.com/track/sestertius-original-mix/8285255"
        };

        public static Track track27 = new Track
        {
            Id = 27,
            artist = "Cosmic Gate",
            trackTitle = "Exploration of Space (Cosmic Gate’s Back 2 the Future Remix)",
            trackLink = "https://www.beatport.com/track/exploration-of-space-cosmic-gates-back-2-the-future-remix/2709275"
        };

        public static Track track28 = new Track
        {
            Id = 28,
            artist = "Veracocha",
            trackTitle = "Carte Blanche (KhoMha Remix)",
            trackLink = "https://www.beatport.com/track/carte-blanche-khomha-extended-remix/11694926"
        };

        public static Track track29 = new Track
        {
            Id = 29,
            artist = "Ferry Corsten feat. Betsie Larkin",
            trackTitle = "Made of Love",
            trackLink = "https://www.beatport.com/track/made-of-love-feat-betsie-larkin-original-extended/786688"
        };

        public static Track track30 = new Track
        {
            Id = 30,
            artist = "Ferry Corsten, Paul Oakenfold",
            trackTitle = "A Slice of Heaven",
            trackLink = "https://www.beatport.com/track/a-slice-of-heaven-extended-mix/10322696"
        };

        public static Track track31 = new Track
        {
            Id = 31,
            artist = "Above & Beyond",
            trackTitle = "Surge",
            trackLink = "https://www.beatport.com/track/surge-original-mix/9134872"
        };

        public static Track track32 = new Track
        {
            Id = 32,
            artist = "CamelPhat, Jem Cooke, Cristoph",
            trackTitle = "Breathe",
            trackLink = "https://www.beatport.com/track/breathe-original-mix/11213670"
        };

        public List<Track> cheatCodeVol1 = new List<Track>
        {
            track0,
            track1,
            track2,
            track3,
            track4,
            track5,
            track6,
            track7,
            track8,
            track9,
            track10,
            track11,
            track12,
            track13,
            track14,
            track15,
            track16,
            track17,
            track18,
            track19,
            track20,
            track21,
            track22,
            track23,
            track24,
            track25,
            track26,
            track27,
            track28,
            track29,
            track30,
            track31,
            track32
        };
       
        [Route("api/getmusic")]
        [HttpGet]
        public IActionResult GetMusic (string name)
        {
            JsonResult json = new JsonResult(cheatCodeVol1);
            if(name == "cheatCodeVol1")
            {
                return json;
            }

            return NotFound("No such tracklist");
        }
    }
}