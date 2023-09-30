"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Experiments.module.css";

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
          <Image src={`/${cover}`} alt="" fill />
          {hovered && (
            <img
              src={`/${video}`}
              className={styles.videoContainer}
              alt={title}
              autoPlay
              loop
            ></img>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ExperimentItem;
