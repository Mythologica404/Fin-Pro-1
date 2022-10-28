<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.hacktiv8.com">
    <img src="readme/hacktiv8.png" alt="Logo" width="280" height="280">
  </a>

  <h3 align="center">Intro To NodeJS - Final Project 1</h3>

  <p align="center">
    Salah satu final project sebagai tahapan akhir dari pembelajaran di Hacktiv8 - Intro To NodeJS
    <br />
  </p>
</div>

<details>
  <summary>Daftar Konten</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#endpoint-testing">Endpoint Testing</a></li>
    <li><a href="#anggota-kelompok">Anggota Kelompok</a></li>
  </ol>
</details>

## About The Project

Final Project 1 ini adalah salah satu dari empat Final Project yang ada dari tahapan akhir pembelajaran di Hacktiv8 - Intro To NodeJS.

Pada Final Project kali ini, peserta akan diminta untuk membuat aplikasi Reflection yang dimana aplikasi ini digunakan untuk mencatat dan mengukur target-target pencapaian seseorang. Dalam implementasinya project harus menggunakan package Nodepostgres untuk proses komunikasi dengan database.

`Requirement Project:`

- Membuat Rest API dengan menggunakan NodeJS, ExpressJS dengan databsae Postgres dan juga mengimplementasikan autentikasi dengan JWT.
- Dapat menggunakan query SQL untuk menyimpan, memodifikasi dan mendapatkan data menggunakan database Postgres
- Setiap User hanya dapat melakukan CRUD terhadap data Reflection miliknya sendiri
- Coba endpoint - endpoint yang telah dibuat menggunakan POSTMAN.

`Rest API Endpoint:`

- Membuat endpoint untuk registrasi user - <b>POST /api/v1/users/register</b>
- Membuat endpoint untuk proses login user - <b>POST /api/v1/users/login</b>
- Membuat endpoint untuk user membuat data Reflection - <b>POST /api/v1/reflections</b>
- Membuat endpoint untuk user mendapatkan seluruh data Reflection miliknya sendiri - <b>GET /api/v1/reflections</b>
- Membuat endpoint untuk user meng-edit data Reflection nya sendiri - <b>PUT /api/v1/reflections/:id</b>
- Membuat endpoint untuk user menghapus data Reflection nya sendiri - <b>DELETE /api/v1/reflections/:id</b>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

Aplikasi ini dibuat menggunakan NodeJS, ExpressJS, JWT dan PostgresSQL

- [![Node][node.js]][node-url]
- [![Node][express.js]][express-url]
- [![Node][jwt]][jwt-url]
- [![Node][postgre]][postgre-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Lakukan instalasi aplikasi dengan tahapan berikut:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- Menginstall semua dependencies dari package.json
  ```sh
  npm install
  ```
- Membuat file env berdasarkan <a href=".env.example">.env.example</a>
- Melakukan migration untuk membuat tabel dengan menjalankan command berikut
  ```sh
  npm run create-db
  ```
- Menjalankan aplikasi dengan nodemon
  ```sh
  npm run dev
  ```

## Endpoint Testing

`Register`

- URL: /api/v1/users/register
- Method: POST
- Success Response: <b>201</b>
<div align="center">
    <img src="readme/Register1.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>500</b>
<div align="center">
    <img src="readme/Register2.jpg" alt="Screenshoot" height="500px" >
</div>

`Login`

- URL: /api/v1/users/login
- Method: POST
- Success Response: <b>200</b>
<div align="center">
    <img src="readme/Login1.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>401</b>
<div align="center">
    <img src="readme/Login2.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>500</b>
<div align="center">
    <img src="readme/Login3.jpg" alt="Screenshoot" height="500px" >
</div>

`Add Reflection`

- URL: /api/v1/reflections
- Method: POST
- Success Response: <b>201</b>
<div align="center">
    <img src="readme/AddReflection1.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>401</b>
<div align="center">
    <img src="readme/AddReflection2.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>500</b>
<div align="center">
    <img src="readme/AddReflection3.jpg" alt="Screenshoot" height="500px" >
</div>

`Get All User's Reflection`

- URL: /api/v1/reflections
- Method: GET
- Success Response: <b>200</b>
<div align="center">
    <img src="readme/GetReflection1.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>401</b>
<div align="center">
    <img src="readme/GetReflection2.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>500</b>
<div align="center">
    <img src="readme/GetReflection3.jpg" alt="Screenshoot" height="500px" >
</div>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

`Edit Reflection`

- URL: /api/v1/reflections/:id
- Method: PUT
- Success Response: <b>201</b>
<div align="center">
    <img src="readme/EditReflection1.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>401</b>
<div align="center">
    <img src="readme/EditReflection2.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>403</b>
<div align="center">
    <img src="readme/EditReflection3.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>404</b>
<div align="center">
    <img src="readme/EditReflection4.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>500</b>
<div align="center">
    <img src="readme/EditReflection5.jpg" alt="Screenshoot" height="500px" >
</div>

`Delete Reflection`

- URL: /api/v1/reflections/:id
- Method: DELETE
- Success Response: <b>200</b>
<div align="center">
    <img src="readme/DeleteReflection1.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>401</b>
<div align="center">
    <img src="readme/DeleteReflection2.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>403</b>
<div align="center">
    <img src="readme/DeleteReflection3.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>404</b>
<div align="center">
    <img src="readme/DeleteReflection4.jpg" alt="Screenshoot" height="500px" >
</div>
- Error Response: <b>500</b>
<div align="center">
    <img src="readme/DeleteReflection5.jpg" alt="Screenshoot" height="500px" >
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Anggota Kelompok

<a href="https://github.com/Dani27-design"><b>Muhammad Daniansyah Chusyaidin</b></a> - INJS-KS04-023<br>
<a href="https://github.com/Mythologica404"><b>Muhammad Rizky Saputra</b></a> - INJS-KS04-011<br>
<a href="https://github.com/aenq"><b>Rachel Marta Maria</b></a> - INJS-KS04-020<br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org
[express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[express-url]: https://expressjs.com
[jwt]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[jwt-url]: https://jwt.io
[postgre]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[postgre-url]: https://www.postgresql.org
