import { useEffect, useState } from "react";

import me1 from "../../images/me/1.jpeg";
import me2 from "../../images/me/2.jpeg";
import me3 from "../../images/me/3.JPG";
import me4 from "../../images/me/4.JPG";
import me5 from "../../images/me/5.JPG";
import me6 from "../../images/me/6.jpeg";
import me7 from "../../images/me/7.JPG";
import me8 from "../../images/me/8.JPG";
import me9 from "../../images/me/9.JPG";

export default function Home() {
  const images = [me1, me2, me3, me4, me5, me6, me7, me8, me9];
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setI((p) => (p + 1) % images.length),
      2000
    );
    return () => clearInterval(id);
  }, [paused, images.length]);

  return (
    <div
        className="home-me-photos"
        style={{ "--bg": `url(${images[i]})` }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
    >
        <div> hello! </div>
        <img src={images[i]} alt="" className="home-photos" />
    </div>
    );

}
