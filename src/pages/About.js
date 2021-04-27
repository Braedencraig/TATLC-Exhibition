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
          Examining aspects of reciprocal care, Keeling seeks to understand how people form connections with each other and with nature, and how they capture and cherish memories and moments in time. In thinking through these concepts, the artist’s practice has shifted to include not only found images but also plants and flowers that she has grown herself or foraged from neighbours’ garden clippings. Hosted online within a virtual space evocative of a naturalistic outdoor landscape, The Advantages of Tender Loving Care features the first artworks in Keeling’s new series of moving images and collages that merge sourced imagery with scanned floral elements.
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
          </div>
        </div>
        <div className="flex-two">
          <div className="info">
          <img src={image} alt="The artist, Laura Kay Keeling" />
          <p className="infoText one"><a href="www.laurakaykeeling.com">www.laurakaykeeling.com</a></p>
          <p className="infoText">Contact: <a href="mailto:infolaurakk@gmail.com">infolaurakk@gmail.com</a></p>
          <div className="socials">
            <SocialIcon
              fgColor="black"
              bgColor="white"
              url="https://www.instagram.com/laurakaykeeling"
            />
            <SocialIcon
              fgColor="black"
              bgColor="white"
              url="https://twitter.com/laurakaykeeling"
            />
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
        <p>I (Laura Kay Keeling) am located on and create artwork in the territory of the Anishinaabe, Haudenosaunee and traditional territory of the Wendat. I also want to acknowledge that there were many other Indigenous peoples whose names were not recorded but who travelled through and cared for this territory.</p>
        <p>I am a settler and guest on these lands. Through personal learnings (which I am committed to this being a lifelong learning process) and through the creation of artworks, I strive to learn about, take care of, consider and give thanks to the land, sky, water and other sentient beings. I am incredibly grateful to be here working on this land and I often think about reciprocal relationships which leads me to reflect upon how I grew up admiring the garden at my grandparents house, all the different birds that would come visit and share their songs as well as the water that flowed (and continues to flow) through the Black River just down the hill from their house. Now that I am able to tend to a small garden myself, I think about the responsibilities that I have to care for this garden and the land, to the birds that come visit it, as well as the other neighbourhood visitors (including bees from our neighbours beehive which lend their talents and help pollinate the area).</p>
        <p>I also wish to acknowledge and thank the Indigenous peoples who have cared for and traveled through the land in the territories that the “image spheres” or the landscapes shown in this exhibition where the artwork is being displayed. These are all places that I have personally visited and have a connection with. One of my goals is to learn more about the Indigenous peoples and caretakers of these territories which I have been grateful to visit as a guest.</p>
        <p className="location">The locations are as follows:</p>
        <p>Tkaronto (Toronto), Ontario - The Anishinaabe, Haudenosaunee and the Wendat </p>
        <p>Scarborough Bluffs, Ontario - The Anishinaabe, Seneca, Haudenosaunee and the Wendat</p>
        <p>Baldwin, Ontario - The Anishinaabe</p>
        <p>Los Angeles, CA - The Chumash, Tongva and Kizh</p>
        <p>Portland, OR - Multnomah, Wasco, Cowlitz, Kathlamet, Clackamas, Bands of Chinook, Tualatin, Kalapuya & Molalla</p>
        <p>Picton, New Zealand - Te Atiawa</p>
        <p>Whangarei Falls, New Zealand - Te Atiawa</p>
      </div>
      <div className="divider"></div>
      <div className="image-details">
          IMAGE DETAILS WILL BE POPULATING LATER
      </div>
      <div className="divider"></div>
      <div className="about-blurb thanks">
          <div className="flex-contact">
            <p>
              Thank you to the <a href="https://scotiabankcontactphoto.com/about/">Scotiabank CONTACT Photography Festival </a> for including The Advantages of Tender Loving Care as a Featured Exhibition in this year's festival.
              </p>
              <p>Thank you to the <a href="https://www.arts.on.ca/">Ontario Arts Council</a> for their generous exhibition support.
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
