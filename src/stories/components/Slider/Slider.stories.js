import { Slider } from "./Slider";

export default {
  title: "Kromac UI: Slider",
  component: Slider,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
};

export const Default = {
  args: {
    content: [
      {
        img: "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
        caption: <h1>Slider 1</h1>,
      },
      {
        img: "https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg",
        caption: (
          <div>
            <h1>Slider 2</h1>
            <p>Caption 2</p>
          </div>
        ),
      },
      {
        img: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/07/15/16/50/man-1519667_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/07/15/16/49/man-1519665_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg",
      },
    ],
  },
};

export const Preview = {
  args: {
    showPreview: true,
    content: [
      {
        img: "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
        caption: <h1>Slider 1</h1>,
      },
      {
        img: "https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg",
        caption: (
          <div>
            <h1>Slider 2</h1>
            <p>Caption 2</p>
          </div>
        ),
      },
      {
        img: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/07/15/16/50/man-1519667_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/07/15/16/49/man-1519665_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg",
      },
    ],
  },
};

export const AutoPlay = {
  args: {
    autoPlay: true,
    content: [
      {
        img: "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
        caption: <h1>Slider 1</h1>,
      },
      {
        img: "https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg",
        caption: (
          <div>
            <h1>Slider 2</h1>
            <p>Caption 2</p>
          </div>
        ),
      },
      {
        img: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/07/15/16/50/man-1519667_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/07/15/16/49/man-1519665_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg",
      },
    ],
  },
};
