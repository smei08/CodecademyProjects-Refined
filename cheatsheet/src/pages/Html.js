// Html.js
import "./Html.css";

export default function Html() {
  return (
    <div className="page-container">
      <h1>HTML Reference</h1>
      <hr></hr>
      <div className="table-container">
        <h2>Tables Elements</h2>
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
      <hr></hr>
      <div className="html-forms">
        <h2>Forms Elements</h2>
        <table>
          <thead>
            <th>Tag</th>
            <th>Name</th>
            <th>Desciption</th>
          </thead>
          <tbody>
            <tr>
              <td>&lt;form&gt;</td>
              <td>form element</td>
              <td>Defines an HTML form for user input</td>
            </tr>
            <tr>
              <td>&lt;input&gt;</td>
              <td>input control</td>
              <td>Defines an input control</td>
            </tr>
            <tr>
              <td>&lt;textarea&gt;</td>
              <td>textarea</td>
              <td>Defines a multiline input control (text area)</td>
            </tr>
            <tr>
              <td>&lt;label&gt;</td>
              <td>label description</td>
              <td>Defines a label for an &lt;input&gt; element</td>
            </tr>
            <tr>
              <td>&lt;label&gt;</td>
              <td>label description</td>
              <td>Defines a label for an &lt;input&gt; element</td>
            </tr>
            <tr>
              <td>&lt;fieldset&gt;</td>
              <td>fieldset</td>
              <td>Groups related elements in a form</td>
            </tr>
            <tr>
              <td>&lt;legend&gt;</td>
              <td>caption</td>
              <td>Defines a caption for a &lt;fieldset&gt; element</td>
            </tr>
            <tr>
              <td>&lt;select&gt;</td>
              <td>select</td>
              <td>Defines a drop-down list</td>
            </tr>
            <tr>
              <td>&lt;optgroup&gt;</td>
              <td>option group</td>
              <td>Defines a group of related options in a drop-down list</td>
            </tr>
            <tr>
              <td>&lt;option&gt;</td>
              <td>option</td>
              <td>Defines an option in a drop-down list, &lt;select&gt;</td>
            </tr>
            <tr>
              <td>&lt;button&gt;</td>
              <td>button</td>
              <td>Defines a clickable button</td>
            </tr>
            <tr>
              <td>&lt;datalist&gt;</td>
              <td>datalist</td>
              <td>
                Defines an "autocomplete" for &lt;input&gt; elements, a list of
                pre-defined options for input controls
              </td>
            </tr>
            <tr>
              <td>&lt;output&gt;</td>
              <td>output</td>
              <td>Defines the result of a calculation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// &lt; &gt;
