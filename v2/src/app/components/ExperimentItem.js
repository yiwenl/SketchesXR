"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Experiments.module.css";
import { basePath } from "../../../next.config";

const ExperimentItem = ({ index, experiment: { cover, video, title } }) => {
  const [hovered, setHovered] = useState(false);
  const onMouseEnter = () => {
    setHovered(true);
  };
  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={styles.itemContainer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href="/exps/[id]" as={`/exps/${index}`}>
        <div
          className={styles.imageWrapper}
          style={{
            width: 280,
            height: 280,
          }}
        >
          <Image src={`/SketchesXR/${cover}`} alt="" fill />
          {hovered && (
            <Image
              src={`/SketchesXR/${video}`}
              className={styles.videoContainer}
              alt={title}
              autoPlay
              loop
              width={280}
              height={280}
              unoptimized={true}
            ></Image>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ExperimentItem;
