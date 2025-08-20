import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";

function App() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Component Demo</h1>

      <InputField label="Username" placeholder="Enter your name" />
      <InputField
        type="password"
        label="Password"
        placeholder="••••••"
        invalid
        errorMessage="Password required"
      />

      <DataTable
        columns={[{ key: "name", label: "Name" }]}
        data={[{ name: "Alice" }, { name: "Bob" }]}
      />
    </div>
  );
}

export default App;
