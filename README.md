# NextJSMoviesList

# npm init untuk install nodeJs

# Buat database Movies di Mysql

CREATE DATABASE `dbmovie`;
use dbmovie;
CREATE TABLE `movies` (
`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
`judul` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`rating` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`deskripsi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`foto` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`rilis` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`durasi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`sutradara` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`pemain` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`created_at` timestamp NULL DEFAULT NULL,
`updated_at` timestamp NULL DEFAULT NULL,
PRIMARY KEY (`id`)
);

# install library express, mysql dan body parser :

npm install express mysql body-parser
Bikin folder config, bikin file database.js // untuk koneksi ke database //

# untuk Add Data + Upload Image install

npm install multer
npm install path

# Upload Image

Buat folder public
Buat folder images didalam public

# test postmant

GET : http://localhost:5000/api/movies? / untuk melihat data yang ada di database

POST : http://localhost:5000/api/movies? / untuk memasukan data / input data + image / foto
Key value
image file : .jpg
judul text : tester
rating text : 5
deskripsi text : 5

PUT : http://localhost:5000/api/movies/:id // berdasarkan id yang ingin diupdate
{
"id": 1332,
"judul": "tester",
"rating": "5",
"deskripsi": "tester",
"foto": "http://localhost:5000/images/image-1648558929393.jpg",
"rilis": "",
"durasi": "",
"sutradara": "",
"pemain": "",
"created_at": null,
"updated_at": null
}

DELETE : localhost:5000/api/movies/:id // berdasarkan id yang ingin didelete
