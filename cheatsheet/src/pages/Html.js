// Html.js
import "./Html.css";

export default function Html() {
  return (
    <div className="page-container">
      <h1>HTML Reference</h1>
      <div className="table-container">
        <h2>Tables</h2>
        <table className="html-tables">
          <thead>
            <th>Tag</th>
            <th>Name</th>
            <th>Desciption</th>
          </thead>
          <tbody>
            <tr>
              <td>&lt;table&gt;</td>
              <td>table</td>
              <td>
                Defines a table, table wrapper element for all HTML tables
              </td>
            </tr>
            <tr>
              <td>&lt;th&gt;</td>
              <td>table header</td>
              <td>Defines a header cell in a table</td>
            </tr>
            <tr>
              <td>&lt;tr&gt;</td>
              <td>table row</td>
              <td>Defines a row in a table</td>
            </tr>
            <tr>
              <td>&lt;td&gt;</td>
              <td>table data</td>
              <td>Defines a cell in a table</td>
            </tr>
            <tr>
              <td>&lt;caption&gt;</td>
              <td>table caption</td>
              <td>Defines a table caption in a table</td>
            </tr>
            <tr>
              <td>&lt;colgroup&gt;</td>
              <td>table caption</td>
              <td>Defines a table caption in a table</td>
            </tr>
            <tr>
              <td>&lt;col&gt;</td>
              <td>column properties</td>
              <td>
                Specifies column properties for each column within a
                &lt;colgroup&gt; element
              </td>
            </tr>
            <tr>
              <td>&lt;thead&gt;</td>
              <td>table head</td>
              <td>Groups the header content in a table</td>
            </tr>
            <tr>
              <td>&lt;tbody&gt;</td>
              <td>table body</td>
              <td>Groups the body content in a table</td>
            </tr>
            <tr>
              <td>&lt;tfoot&gt;</td>
              <td>table footer</td>
              <td> Groups the footer content in a table</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

//
//
//
//
//
//
//
//
//
