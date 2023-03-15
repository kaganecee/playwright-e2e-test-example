import { useState } from 'react';
import Header from '../components/Header';
import ListBooks from '../components/ListBooks';

function Books() {
  const [showRecord, setShowRecord] = useState(false);
  return (
    <div>
      <Header />
      <div className="container flex-column  pt-3">
        <div className="d-flex gap-2">
          <button type="button" className="card" onClick={() => setShowRecord(true)}>Show Record</button>
          <button type="button" className="card" onClick={() => setShowRecord(false)}>Hide Record</button>
        </div>
        {showRecord && <ListBooks />}
      </div>
    </div>
  );
}
export default Books;
