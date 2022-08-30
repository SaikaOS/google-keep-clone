import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import SearchedNotes from "./components/Workspace/SearchedNotes";
import Workspace from "./components/Workspace/Workspace";
import { useAppSelector } from "./store/store";

function App() {
  const state = useAppSelector(state => state.slice)
  return (
    <Box sx={{minHeight: '100vh'}}>
      <Header />
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <Sidebar />
      {state.isSearched ? <SearchedNotes /> : (
        <Workspace />
      )}
      </Box>
    </Box>
  )
}

export default App;
