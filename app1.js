function showWidget() {
  var widgetContainer = document.createElement("div");
  widgetContainer.innerHTML = `
    <div id="my-widget" style="backround: green;">
      <h2>My Widget</h2>
      <p>This is my widget. It's not  yes  really cool!</p>
    </div>
  `;
  document.body.appendChild(widgetContainer);
}


