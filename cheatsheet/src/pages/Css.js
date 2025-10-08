// Css.js
import "./Css.css";

export default function Css() {
  return (
    <div className="page-container">
      <h1>CSS Reference</h1>
      <h2>Box Model</h2>
      <div className="box-model-container">
        <div className="margin">
          <div className="border">
            <div className="padding">
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-model-description">
        <ul>
          <li>
            <b>Content</b> - The content of the box, where text and images
            appear
          </li>
          <li>
            <b>Padding</b> - Clears an area around the content. The padding is
            transparent
          </li>
          <li>
            <b>Border</b> - A border that goes around the padding and content
          </li>
          <li>
            <b>Margin</b> - Clears an area outside the border. The margin is
            transparent
          </li>
        </ul>
      </div>
    </div>
  );
}
