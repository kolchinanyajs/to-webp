import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

imagemin(["./images/**/*.{jpg,png}"], {
  destination: "./webp/",
  plugins: [
    imageminWebp({
      quality: 90,
    }),
  ],
}).then(() => {
  console.log("🎉 Successfully");
});
