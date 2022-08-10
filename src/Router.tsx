import { Routes, Route } from 'react-router-dom';
import { Playlist } from './pages/Playlist';
import { Subscribe } from './pages/Subscribe';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/playlist/music/:slug" element={<Playlist />} />
    </Routes>
  );
}
