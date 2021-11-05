const subTitle = "Toggle switch";
const importType = `import Toggle from "kromac-ui/dist/Panel";`;

const toggleProp = {};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Toggle /&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "toggleType",
    type: "string",
    values: ["default switch", "power", "switch"],
    description: "Toggle type."
  },
  {
    name: "checked",
    type: "bool",
    values: ["default false"],
    description: "This prop indicates whether it is checked or not."
  },
  {
    name: "onColor",
    type: "string",
    values: [`default #28B463`],
    description: "Sets color when it is checked."
  },
  {
    name: "offColor",
    type: "string",
    values: [`default #CB4335`],
    description: "Sets color when it is not checked."
  },
  {
    name: "onChange",
    type: "function",
    values: [],
    description: ""
  }
];

const toggleProps = {
  componentText,
  importType,
  propsDescription,
  subTitle,
  toggleProp
};

export default toggleProps;
