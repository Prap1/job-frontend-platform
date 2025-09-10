import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import Hero from "./components/Hero";

function App() {
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      
      <Hero setSearch={setSearch} />

      <div className="max-w-3xl mx-auto p-6">
        
        <JobForm onJobAdded={() => setRefresh(!refresh)} />

        
        <JobList search={search} refresh={refresh} />
      </div>
    </div>
  );
}

export default App;
