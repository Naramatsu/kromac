const subTitle = "";
const importType = `import Slider from "kromac/lib/Slider";`;

const sliderProp = {
  images: [
    "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg",
    "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://cdn.pixabay.com/photo/2016/07/15/16/50/man-1519667_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/07/15/16/49/man-1519665_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg"
  ],
  showPreview: true
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Slider</span>
      <br />
      <span className="component tab2">images</span>=<span>{`{[`}</span>
      <br />
      <span className="string tab3">"image.png"</span>,<br />
      <span className="string tab3">"image.png"</span>,<br />
      <span className="string tab3">"image.png"</span>,<br />
      <span className="string tab3">"image.png"</span>,<br />
      <span className="string tab3">"image.png"</span>,<br />
      <span className="string tab3">"image.png"</span>,<br />
      <span className="string tab3">"image.png"</span>,<br />
      <span className="string tab3">"image.png"</span>
      <br />
      <span className="tab2">{`]}`}</span>
      <br />
      <span className="tab2 var">showPreview</span>
      <br />
      <span className="react tab">/&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "images",
    type: "array Required",
    values: [],
    description: "Array list of strings"
  },
  {
    name: "height",
    type: "string",
    values: ["default 500px"],
    description: "height of the slider"
  },
  {
    name: "showPreview",
    type: "bool",
    values: [`default false`],
    description: "set to true will show a little preview below of each images"
  },
  {
    name: "autoPlay",
    type: "bool",
    values: [`default false`],
    description: "set to true will play to slide automatically"
  },
  {
    name: "timer",
    type: "number",
    values: [`default 5`],
    description: "timer in seconds auto slide"
  }
];

const sliderProps = {
  subTitle,
  importType,
  sliderProp,
  propsDescription,
  componentText
};

export default sliderProps;
