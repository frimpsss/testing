function showWidget() {
  var widgetContainer = document.createElement("div");
  widgetContainer.innerHTML = `
    <div id="my-widget">
        <style>
        #my-widget{
            background: green;
        }
        <style>
      <h2>My Widget</h2>
      <p>This is my widget. It's really cool!</p>
    </div>
  `;
  document.body.appendChild(widgetContainer);
}


