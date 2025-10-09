// Css.js
import "./Css.css";

export default function Css() {
  return (
    <div className="page-container">
      <h1>CSS Reference</h1>
      <hr></hr>
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
      <hr></hr>
      <h2>Positions</h2>
      <div className="position-description">
        <ul>
          <li>
            <b>position: static</b>, always positioned according to the normal
            flow of the page
          </li>
          <li>
            <b>position: relative</b>, is positioned relative to its normal
            position in the document flow.
          </li>
          <ul>
            <li>
              top, right, bottom, and left properties will cause the element to
              be adjusted away from its normal position. Other content will not
              be adjusted to fit into any gap left by the element.
            </li>
          </ul>
          <li>
            <b>position: fixed</b>, positioned relative to the viewport, which
            means it always stays in the same place even if the page is
            scrolled.
          </li>
          <ul>
            <li>
              top, right, bottom, and left properties are used set the final
              location of the element.
            </li>
          </ul>
          <li>
            <b>position: absolute</b>, positioned relative to the nearest
            positioned ancestor (with position other than static).
          </li>
          <ul>
            <li>
              if no positioned ancestors, it uses the document body, and moves
              along with page scrolling. are removed from the normal document
              flow, and can overlap other elements.
            </li>
          </ul>
          <li>
            <b>position: sticky</b>, positioned relative until a certain scroll
            position is reached - then it "sticks" in that place (like
            position:fixed)
          </li>
        </ul>
      </div>
      <div className="position-container">
        <div className="static-p">static, default</div>
        <div className="relative-p">relative</div>
        <div className="fixed-p">fixed</div>
        <div className="absolute-p">absolute</div>
        <div className="sticky-p">sticky</div>
      </div>
    </div>
  );
}
