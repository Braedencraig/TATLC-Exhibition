import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import image from "../assets/artistPhoto.jpg";
import contact from "../assets/contactLogo.png"
import oac from "../assets/oacLogo.jpg"

export default function About() {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'auto'
    const panolens = Array.from(document.getElementsByClassName('panolens-container'))
    panolens.map(pan => {
      return pan.parentNode.removeChild(pan);
    })
  })

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwaxszh9RJCfVBEihLF8TaoTfOJiQXf7MHSWRS-Vb6dC0TkOiIw2qhI6VhEqs1OTemx/exec";
  const form = document.forms["google-sheet"];

  return (
    <div className="fullpage">
      <div className="about-title">
        <h2>The Advantages Of Tender Loving Care</h2>
      </div>
      <div className="about-blurb">
        <p>
          Examining aspects of reciprocal care, Keeling seeks to understand how people form connections with each other and with nature, and how they capture and cherish memories and moments in time. In thinking through these concepts, the artist’s practice has shifted to include not only found images but also plants and flowers that she has grown herself or foraged from neighbours’ garden clippings. Hosted online within a virtual space evocative of a naturalistic outdoor landscape, <span>The Advantages of Tender Loving Care</span> features the first artworks in Keeling’s new series of moving images and collages that merge sourced imagery with scanned floral elements.
        </p>

        <p>
          Laura will host a virtual tour and artist talk on May 21st, 2021 from 12-1pm. You can learn more and register <a target="_blank" rel="noreferrer" href="https://www.eventbrite.ca/e/the-advantages-of-tender-loving-care-virtual-tour-artist-talk-tickets-151823976601">here</a>.
        </p>
        
      </div>
      <div className="divider"></div>
      <div className="artist-flex-big">
        <div className="flex-one">
          <div className="about-title artist">
            <h3>About The Artist</h3>
          </div>
          <div className="about-blurb artist-blurb">
            <p>Laura Kay Keeling is an artist whose work encompasses analog photography, video, collage and installation-based projects. Her work explores how we form connections with each other and nature. Exploring and unpacking emotions through the creation of new work, while examining concepts related to “the visitor” as spoken about in Rumi’s Poem ‘The Guest House’. Laura feels very connected to and at peace in nature; her new works explore ideas relating to plant sentience and reciprocal care.</p>
            <p>
              Please contact Laura directly if you are interested in a limited edition print from one of the exhibited artworks. 
            </p>
          </div>
        </div>
        <div className="flex-two">
          <div className="info">
          <img src={image} alt="The artist, Laura Kay Keeling" />
          <p className="infoText one"><a target="_blank" rel="noreferrer" href="https://www.laurakaykeeling.com/">laurakaykeeling.com</a></p>
          <p className="infoText">Contact: <a target="_blank" rel="noreferrer" href="mailto:infolaurakk@gmail.com">infolaurakk@gmail.com</a></p>
          <div className="socials">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/laurakaykeeling">
              <SocialIcon
                fgColor="black"
                bgColor="white"
                url="https://www.instagram.com/laurakaykeeling"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/laurakaykeeling">
              <SocialIcon
                fgColor="black"
                bgColor="white"
                url="https://twitter.com/laurakaykeeling"
              />
             </a>
          </div>
          <div className="mailing-list">
          <h3>Sign Up For Mailing List</h3>
          <p>{msg}</p>
          {!success && (
            <form method="post" name="google-sheet">
              <div className="form-group">
                <input
                  type="text"
                  name="Email"
                  placeholder="Your Email "
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className="submit-btn">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const validEmail = value.match(emailFormat);
                    if (validEmail === null) {
                      setMsg("Please enter a valid email address");
                    }
                    if (validEmail) {
                      fetch(scriptURL, {
                        method: "POST",
                        body: new FormData(form),
                      })
                        .then((response) => {
                          setMsg("Thanks for subscribing!");
                          setSuccess(true);
                        })
                        .catch((error) => {
                          setMsg("Please enter a valid email address");
                        });
                    } else {
                      setMsg("Please enter a valid email address");
                    }
                  }}
                  type="submit"
                  name="submit"
                  value="Submit"
                >
                  Submit
                </button>
              </div>
            </form>
            )}
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="about-title land">
        <h3>Land Acknowledgement</h3>
      </div>
      <div className="about-blurb land-blurb">
        <p>I (Laura Kay Keeling) am located on and create artwork in the territory of the Anishinaabe, Haudenosaunee and traditional territory of the Wendat. I also want to acknowledge that there were many other Indigenous peoples whose names were not recorded but who travelled through and cared for the land, waterways and creatures in and on this territory.</p>

        <p>I am a settler and guest on these lands. Through personal learnings (which I am committed to this being a lifelong learning process) and through the creation of artworks, I strive to learn about, take care of, consider and give thanks to the land, sky, water and other sentient beings. I am incredibly grateful to be here working on this land and I often think about reciprocal relationships which leads me to reflect upon how I grew up admiring the garden at my grandparents house, all the different birds that would come visit and share their songs as well as the water that flowed (and continues to flow) through the Black River just down the hill from their house. Now that I am able to tend to a small garden myself, I think about the responsibilities that I have to care for this garden and the land, to the birds that come visit it, as well as the other neighbourhood visitors (including bees from our neighbours beehive which lend their talents and help pollinate the area).</p>

        <p>I also wish to acknowledge and thank the Indigenous peoples who have cared for and traveled through the land in the territories that the “image spheres” or the landscapes shown in this exhibition where the artwork is being displayed. These are all places that I have personally visited and have a connection with. One of my goals is to learn more about the Indigenous peoples and caretakers of these territories which I have been grateful to visit as a guest.</p>

        <p className="location">The locations are as follows (in order of appearance):</p>

        <p>Tkaronto (Toronto), Ontario: The Anishinaabe, Haudenosaunee and the Wendat</p>
        <p>Scarborough Bluffs, Ontario: The Anishinaabe, Seneca, Haudenosaunee and the Wendat</p>
        <p>Los Angeles, CA: The Chumash, Tongva and Kizh</p>
        <p>Picton, New Zealand: Te Atiawa</p>
        <p>Whangarei Falls, New Zealand: Te Atiawa</p>
        <p>Portland, OR: Multnomah, Wasco, Cowlitz, Kathlamet, Clackamas, Bands of Chinook, Tualatin, Kalapuya & Molalla</p>
        <p>Baldwin, Ontario: The Anishinaabe</p>
        <p>The audio included in this exhibition was recorded by myself at Scarborough Bluffs as well as around the neighbourhood I live in located in Northern Toronto. Thank you to Nature for sharing your songs.</p>
      </div>
      <div className="divider"></div>
      <div className="image-details">
          <h3>Image List</h3>
          <div className="image-details-flex">
            <div className="image-detail">
              <p className="sphere-title">
                  Sphere 1
              </p>
              <p>
                Toronto Island, Ontario 
              </p>
              <p className="ital">
                All My Friends
              </p>
              <p>
                2021, Digital Collage
              </p>
            </div>

            <div className="image-detail">
              <p className="sphere-title">
                Sphere 2
              </p>
              <p>
                Scarborough Bluffs
              </p>
              <p className="ital">
                The Visit
              </p>
              <p>
                2021, Analog video over analog photos
              </p>
            </div>

            <div className="image-detail">
              <p className="sphere-title">
                Sphere 3
              </p>
              <p>
                Los Angeles, California 
              </p>
              <p className="ital">
                The Wave
              </p>
              <p>
                2021, Animated digital collage 
              </p>
            </div>

            <div className="image-detail">
              <p className="sphere-title">
                Sphere 4
              </p>
              <p>
                Picton Waterfront, New Zealand 
              </p>
              <p className="ital">
                The Dance 01
              </p>
              <p>
                2021, Digital Collage
              </p>

              <p className="ital">
                The Dance 02
              </p>
              <p>
                Digitally animated Orchids, 2021
              </p>
            </div>

            <div className="image-detail">
              <p className="sphere-title">
                Sphere 5
              </p>
              <p>
                Whangarei Falls, New Zealand 
              </p>
              <p className="ital">
                Double Rocks 01 & Double Rocks 02
              </p>
              <p>
                2021, Animated Digital collages
              </p>
            </div>

            <div className="image-detail">
              <p className="sphere-title">
                Sphere 6
              </p>
              <p>
                Portland Rose Garden, Oregon 
              </p>
              <p className="ital">
                When It Gets Dark, I Have Shallow Breath (and tears in my eyes) 
              </p>
              <p>
                2021, A reworked and animated version of When It Gets Dark, I Have Shallow Breath
              </p>
            </div>

            <div className="image-detail">
              <p className="sphere-title">
                Sphere 7
              </p>
              <p>
                Baldwin, Ontario
              </p>
              <p className="ital">
                What Floats, Will Sink
              </p>
              <p>
                Analog footage recorded in 2020 on a Sony Handycam in Baldwin Ontario, digitally edited and converted to gif for this exhibition.
              </p>
            </div>
          </div>
      </div>
      <div className="divider"></div>
      <div className="about-blurb thanks">
          <div className="flex-contact">
            <p>
              Thank you to the <a target="_blank" rel="noreferrer" href="https://scotiabankcontactphoto.com/about/">Scotiabank CONTACT Photography Festival </a> for including The Advantages of Tender Loving Care as a Featured Exhibition in this year's festival.
              </p>
              <p>Thank you to the <a target="_blank" rel="noreferrer" href="https://www.arts.on.ca/">Ontario Arts Council</a> for their generous exhibition support.
            </p>
            <p>Thank you to Braeden Craig for developing this virtual exhibition.
            </p>
            <div className="img-flex">
              <img src={contact} alt="Scotiabank CONTACT Photography Festival Logo"/>
              <img className="oac" src={oac} alt="Ontario Arts Council Logo"/>
            </div>
          </div>
        </div>
    </div>
  );
}
