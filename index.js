const { menubar } = require("menubar");

menubar({
  browserWindow: {
    width: 500,
    height: 800,
  },
  icon: "./icon.png",
  index: "https://app.graphite.dev",
});
