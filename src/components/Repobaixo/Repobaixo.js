import React from 'react';
import './style.css';
export const Repobaixo = ({ repobaixo }) => {
  return (
    <div>
      <section className="sc-iqAbSa gfcIZQ">
        <section className="sc-eCApGN htLRdL">
          <div className="sc-bdnylx jMhaxE">
            <div className="sc-hKFyIo bdDYJz">
              <div className="sc-jSFkmK jGLdVH">
                <img src={repobaixo?.avatar_url} alt="" width="180"></img>
              </div>
              <div className="sc-gKAblj boPkKw">
                <h1>{repobaixo?.name}</h1>
                <a
                  href={repobaixo?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{repobaixo?.login}</p>
                </a>
              </div>
              <div className="sc-iCoHVE knnrxv">
                <p>{repobaixo?.bio}</p>
              </div>
              <div className="sc-fujyUd dAHnJY">
                <div className="sc-pNWxx dryRrI">
                  <p>{repobaixo?.public_repos}</p>
                  <h1>REPOSITÓRIOS</h1>
                </div>
                <div className="sc-pNWxx dryRrI">
                  <p>{repobaixo?.followers}</p>
                  <h1>SEGUINDO</h1>
                </div>
                <div className="sc-pNWxx dryRrI">
                  <p>{repobaixo?.following}</p>
                  <h1>SEGUINDO</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
