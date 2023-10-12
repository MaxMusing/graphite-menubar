const { menubar } = require("menubar");

const baseUrl = "https://app.graphite.dev/";

const mb = menubar({
  browserWindow: {
    width: 500,
    height: 800,
  },
  icon: "./icon.png",
  index: baseUrl,
});

mb.on("show", () => {
  if (mb.window.webContents.getURL() !== baseUrl) {
    mb.window.webContents.loadURL(baseUrl);
  }
});
