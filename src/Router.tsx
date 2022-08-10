import { Routes, Route } from 'react-router-dom';
import { Playlist } from './pages/Playlist';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/playlist" element={<Playlist />} />
    </Routes>
  );
}
