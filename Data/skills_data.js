
const frameworks = {
  React: {
    name: "React",
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
  },
  Next: {
    name: "Next js",
    img_src: "https://cdn.worldvectorlogo.com/logos/next-js.svg"
  },
  Express: {
    name: "Express",
    img_src: "https://skillshack.blob.core.windows.net/uploads/express.webp"
  },
  Laravel: {
    name: "Laravel",
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
  },
  Rails: {
    name: "Rails",
    img_src: "https://w7.pngwing.com/pngs/782/228/png-transparent-ruby-on-rails-rubygems-amazon-dynamodb-ruby-text-logo-ruby-thumbnail.png"
  },
  tailwind: {
    name: "Tailwind",
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
  },
  jquery: {
    name: "Jquery",
    img_src: "https://w7.pngwing.com/pngs/1004/13/png-transparent-jquery-hd-logo.png"
  },
};

//console.log(frameworks);

const frameworkArray = []

for (const x in frameworks) {
  console.log(x["name"]);
}

console.log(frameworkArray);

//export default frameworks;