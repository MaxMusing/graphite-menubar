const { menubar } = require("menubar");
const path = require("path");

const baseUrl = "https://app.graphite.dev/";

const mb = menubar({
  browserWindow: {
    width: 500,
    height: 800,
  },
  icon: path.join(__dirname, "icon.png"),
  index: baseUrl,
  showOnAllWorkspaces: false,
});

mb.on("show", () => {
  if (mb.window.webContents.getURL() !== baseUrl) {
    mb.window.webContents.loadURL(baseUrl);
  }
});
