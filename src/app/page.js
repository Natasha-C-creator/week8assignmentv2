//Home page, showing nav bar and a list of all of the

import Image from "next/image";
import Head from "next/head";
import navbar from "./components/navbar";
import Header from "./components/header";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: "1200px",
  },

  imageContainer: {
    textAlign: "center", // Center the text under each image
    width: "300px", // Make sure the container is the same width as the images
  },

  imageText: {
    marginTop: "10px", // Space between the image and text
    fontSize: "14px", // Adjust text size
    color: "#333", // Set text color
  },
};

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <navbar />
      <Header />
      <div style={styles.container}>
        <div style={styles.imageWrapper}>
          <div style={styles.imageContainer}>
            <Image
              src="/journal.jpeg"
              alt="Open journal on blanket with pen"
              width={300}
              height={300}
              priority="false"
              // placeholder="blur"
            />
            <p style={styles.imageText}>Cultivating an attitude of gratitude</p>
          </div>
          <div style={styles.imageContainer}>
            <Image
              src="/food.jpg"
              alt="Sandwich with boiled egg width={300}"
              width={300}
              height={300}
              priority="false"
              // placeholder="blur"
            />
            <p style={styles.imageText}>
              10 foods that nourish the soul, and 2 that will surprise you
            </p>
          </div>
          <div style={styles.imageContainer}>
            <Image
              src="/walking.jpg"
              alt="Two women walking in a forest"
              width={300}
              height={300}
              priority="false"
              // placeholder="blur"
            />
            <p style={styles.imageText}>Why it is time to try forest bathing</p>
          </div>
        </div>
      </div>
    </>
  );
}
