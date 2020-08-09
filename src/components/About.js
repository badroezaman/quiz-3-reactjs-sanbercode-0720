import React from "react";

const Data = {
  nama: "Badroe Zaman",
  email: "mail.badroe@gmail.com",
  os: "MacOS",
  akungit: "badroezaman",
  akuntele: "badroezaman",
};

function Detail(props) {
  return (
    <section>
      <div className="row">
        <div className="col-100">
          <h1 className="text-bold text-primary">
            data peserta sanbercode bootcamp reactjs
          </h1>
          <div style={{ padding: "1em", paddingBottom: "2em" }}>
            <ol id="data" style={{ padding: "0" }}>
              <li>
                <span className="text-bold">Nama :</span> {props.nama}
              </li>
              <li>
                <span className="text-bold">Email :</span> {props.email}
              </li>
              <li>
                <span className="text-bold">
                  Sistem Operasi yang digunakan :
                </span>
                {props.os}
              </li>
              <li>
                <span className="text-bold">Akun Github :</span> {props.akungit}
              </li>
              <li>
                <span className="text-bold">Akun Telegram :</span>{" "}
                {props.akuntele}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Detail
      nama={Data.nama}
      email={Data.email}
      os={Data.os}
      akungit={Data.akungit}
      akuntele={Data.akuntele}
    />
  );
}

export default About;
