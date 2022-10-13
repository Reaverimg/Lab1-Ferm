import React from 'react';
import { Icon } from 'react-materialize';
export default function ModalCase({ setIsOpen, film }) {
  return (
    <div className="modal-show" onClick={() => setIsOpen(false)}>
      <div
        id="modal"
        className="modal"
        style={{ display: "block", top: "35%" }}
      >
        <div className="modal-content">
          <h4>{film.name} Official Trailer</h4>
          <a className="modal-close red-text"><Icon>cancel</Icon></a>
          <p>
            <iframe
              width="100%"
              height="400px"
              src={film.clip}
              title={film.name}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; emcrypted-media; gyroscpoe; picture-in-picture"
              allowfullscreen
            />
          </p>
        </div>

        <div className="modal-footer">          
        </div>

      </div>
    </div>
  );
}
