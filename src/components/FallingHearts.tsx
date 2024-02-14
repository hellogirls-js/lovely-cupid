import { IconHeart } from "@tabler/icons-react";
import clsx from "clsx";

export default function FallingHearts({ opacity }: { opacity?: number }) {
  return (
    <section
      id="falling-hearts"
      style={{
        opacity: opacity ?? 1,
      }}
    >
      {Array.from(new Array(30).keys()).map((heart) => (
        <div id={`heart-${heart}`} key={heart} className={clsx("heart", heart)}>
          <IconHeart size={30} />
        </div>
      ))}
    </section>
  );
}
