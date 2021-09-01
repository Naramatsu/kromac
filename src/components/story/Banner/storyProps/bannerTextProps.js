const subTitle = "Banner text";
const importType = `import Banner from "kromac/lib/Banner";`;

const notes = `when the screen is <div class="chip">767px</div> the title will center and move to top`;

const bannerProps = {
  bannerType: "text",
  image: "https://images3.alphacoders.com/112/1121877.jpg",
  height: "300px",
  title: "Some title here"
};

const componentText = `<div>
  <Banner
    bannerType="text"
    title= "Some title here"
    image="image.png"
    height="300px"
  />
</div>`;

const propsDescription = [
  {
    name: "bannerType",
    type: "string",
    values: ["text", "default classic", "image", "classic"],
    description: "Banner type"
  },
  {
    name: "title",
    type: "string Required",
    values: [],
    description: "banner title"
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "banner image"
  },
  {
    name: "color",
    type: "string",
    values: [],
    description: "font color"
  },
  {
    name: "height",
    type: "string",
    values: ["default 500px"],
    description: "banner height"
  },
  {
    name: "order",
    type: "string",
    values: ["default right"],
    description: "side to appear the title"
  },
  {
    name: "attachment",
    type: "string",
    values: [],
    description: "background attachment"
  },
  {
    name: "textAlign",
    type: "string",
    values: ["default center"],
    description: "text align"
  }
];

const bannersProps = {
  subTitle,
  importType,
  bannerProps,
  propsDescription,
  componentText,
  notes
};

export default bannersProps;
