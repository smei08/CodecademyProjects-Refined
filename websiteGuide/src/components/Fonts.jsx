import "./Fonts.css";

export default function Fonts() {
  return (
    <div className="fonts-container">
      <h3>FONTS</h3>
      <div className="fonts">
        <div className="font f1">
          <p className="title">Font 1</p>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <p style={{ fontWeight: "bold" }}>
            The quick brown fox jumps over the lazy dog.
          </p>
          <p style={{ fontStyle: "italic" }}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div className="font f2">
          <p className="title">Font 2</p>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <p style={{ fontWeight: "bold" }}>
            The quick brown fox jumps over the lazy dog.
          </p>
          <p style={{ fontStyle: "italic" }}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div className="font f3">
          <p className="title">Font 3</p>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <p style={{ fontWeight: "bold" }}>
            The quick brown fox jumps over the lazy dog.
          </p>
          <p style={{ fontStyle: "italic" }}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </div>
    </div>
  );
}
