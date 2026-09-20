/**
 * Demo media, referenced by URL rather than downloaded.
 *
 * Nothing here is committed as a file: the visitor's browser fetches these
 * directly. That is deliberate for a presentation build — this container's
 * network policy blocks the hosts, and the bytes are not ours to ship anyway.
 *
 * TEMPORARY. When Katiana supplies photographs of her own work these all get
 * replaced by files under public/images/. The Wikimedia entries are CC BY-SA
 * and would require an attribution block if this were going live — it is not,
 * and the client has accepted that for the demo.
 */

export const HERO_VIDEO = "https://videos.pexels.com/video-files/3840442/3840442-uhd_2560_1440_30fps.mp4";
export const HERO_POSTER =
  "https://images.pexels.com/videos/3840442/aerial-barge-boat-business-3840442.jpeg?auto=compress&w=1600";

const px = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
const wm = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=1600`;

/** Generic container photography — the rotating drum and inventory cards. */
export const PEXELS = [
  "11804059", "12329126", "12329129", "13181168", "13415135", "13427763",
  "13600203", "16244327", "17835643", "17949905", "18838158", "20034017",
  "20513335", "22663779", "27130409", "28056979", "29690177", "33217534",
  "33675681", "34944609", "37007316", "3704162", "9694390",
].map(px);

/**
 * Converted containers. These are identifiable from their filenames, so each
 * is matched to the use case it actually shows rather than scattered at random.
 */
export const CONVERTED = {
  office: [
    wm("Container%20office%20in%20Ludwigshafen%2004.jpg"),
    wm("Container%20office%20in%20Ludwigshafen%2005.jpg"),
    wm("Containerdorf%20~%20Baustelle%20Aquis%20Plaza%20~%20Januar%202015.JPG"),
  ],
  workshop: [
    wm("Makerspace%20Container%20auf%20dem%20Theodor-Heuss-Platz%20M%C3%BCnchen-Perlach%20Bild%201%202024-08-30.jpg"),
    wm("Makerspace%20Container%20auf%20dem%20Theodor-Heuss-Platz%20M%C3%BCnchen-Perlach%20Bild%202%202024-08-30.jpg"),
  ],
  kiosk: [
    wm("Corona%20Walk-In%20Testzentrum%2C%20D%C3%BCsseldorf%2C%20August%202020%20%281%29.jpg"),
    wm("Corona%20Walk-In%20Testzentrum%2C%20D%C3%BCsseldorf%2C%20August%202020%20%282%29.jpg"),
  ],
  modular: [
    wm("20110929%20Containergebouw%20CiBoGa-terrein%20Groningen%20NL.jpg"),
    wm("Container%20architecture%20in%20Germany%2001.jpg"),
  ],
  dwelling: [
    wm("Container%20architecture%20in%20Germany%2002.jpg"),
    wm("Container%20architecture%20in%20Germany%2003.jpg"),
  ],
  storage: [PEXELS[0], PEXELS[3]],
};

/** Two conversion shots for the About band. */
export const ABOUT_IMAGES = [CONVERTED.office[0], CONVERTED.modular[0]];

/** The drum: every generic shot plus the conversions, for variety. */
export const SHOWCASE = [
  ...PEXELS,
  ...CONVERTED.office,
  ...CONVERTED.workshop,
  ...CONVERTED.kiosk,
  ...CONVERTED.modular,
  ...CONVERTED.dwelling,
];
