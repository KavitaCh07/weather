import React from 'react';
import './favouritesTable.css';
import { useState } from 'react';
import Modal from '../modal/modal';
import Table from '../table/table';

const FavouritesTable = () => {
    const [modal, setModal] = useState(false);
  return (
    <div className='favourites-table'>
        <div className="favourites-top-bar">
            <div className="add">6 City added as favourite</div>
            <div className="remove" onClick={() => {setModal(true);}}>Remove All</div>
            {modal && <Modal setModal={setModal}/>}
        </div>

        <Table/>

    </div>
  )
}

export default FavouritesTable;
