/**
 * Project page data source (content only).
 * Display and filtering rules are controlled by src/config/projectsConfig.ts.
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "analisis-pengeluaran-mahasiswa",
		title: "Analisis Pola Pengeluaran Mahasiswa",
		summary:
			"Proyek ini merupakan kegiatan survei yang bertujuan untuk mengetahui pola pengeluaran mahasiswa dalam memenuhi kebutuhan sehari-hari. Pengumpulan data dilakukan dengan menyusun kuesioner menggunakan Google Forms, kemudian menyebarkannya kepada mahasiswa untuk memperoleh tanggapan responden. Data yang terkumpul nantinya akan diolah dan dianalisis menggunakan Google Sheets dan Microsoft Excel untuk mengetahui rata-rata serta pola pengeluaran mahasiswa.",
		objective:
			"Proyek ini bertujuan untuk menerapkan pengetahuan dasar statistika melalui kegiatan survei dan pengumpulan data. Selain itu, proyek ini dilakukan untuk melatih kemampuan dalam menyusun kuesioner, memperoleh data dari responden, serta memahami bagaimana data dapat digunakan untuk menghasilkan informasi yang bermanfaat.",
		process: [
			"Menentukan topik survei dan menyusun pertanyaan kuesioner menggunakan Google Forms.",
			"Menyebarkan kuesioner kepada mahasiswa untuk memperoleh tanggapan responden.",
			"Mengumpulkan dan memeriksa tanggapan responden sebagai data penelitian.",
			"Mengolah dan menganalisis data menggunakan Google Sheets dan Microsoft Excel setelah data terkumpul.",
		],
		learning:
			"Melalui proyek ini, saya memperoleh pengalaman dalam menyusun kuesioner dan melakukan pengumpulan data melalui survei. Saya juga mempelajari tahapan awal penelitian sederhana, mulai dari menentukan informasi yang ingin diperoleh hingga mengumpulkan data dari responden. Karena proses pengumpulan data masih berlangsung, hasil analisis belum dapat disajikan.",
		category: "pengumpulan-analisis-data",
		phase: "building",
		technologies: ["Google Forms", "Google Sheets", "Microsoft Excel"],
		icon: "material-symbols:analytics-outline-rounded",
		year: "2026",
	},
	{
		key: "penyusunan-laporan-praktikum",
		title: "Penyusunan Laporan Praktikum",
		summary:
			"Proyek ini merupakan kegiatan penyusunan laporan berdasarkan percobaan dan pengamatan selama praktikum. Penulisan laporan mencakup penyusunan dasar teori, pencatatan hasil pengamatan, pembahasan, pencarian referensi ilmiah, dan penarikan kesimpulan.",
		objective:
			"Proyek ini bertujuan untuk menyelesaikan tugas perkuliahan dan praktikum sekaligus melatih kemampuan dalam memahami materi, mengolah hasil pengamatan, mencari referensi ilmiah, serta menyusun laporan secara sistematis sesuai dengan kaidah penulisan ilmiah.",
		process: [
			"Melaksanakan praktikum dan melakukan percobaan sesuai petunjuk yang diberikan.",
			"Mengumpulkan dan mencatat data hasil pengamatan sebagai bahan penyusunan laporan.",
			"Mencari referensi ilmiah untuk menyusun dasar teori dan mendukung pembahasan.",
			"Menyusun laporan yang mencakup dasar teori, hasil pengamatan, pembahasan, dan kesimpulan berdasarkan tujuan praktikum.",
		],
		learning:
			"Melalui kegiatan ini, saya memperoleh pengalaman dalam menyusun laporan ilmiah secara terstruktur. Saya juga belajar mencari dan menggunakan referensi ilmiah, memahami hubungan antara teori dan hasil percobaan, serta menyampaikan hasil pengamatan melalui pembahasan dan kesimpulan. Kegiatan ini membantu meningkatkan pemahaman terhadap materi perkuliahan sekaligus melatih ketelitian dalam mengolah dan menyajikan informasi.",
		category: "penulisan-ilmiah",
		phase: "completed",
		technologies: [
			"Buku Laporan Praktikum",
			"Alat Tulis",
			"Referensi Ilmiah",
		],
		icon: "material-symbols:description-outline-rounded",
		year: "2026",
	},
	{
		key: "pengolahan-data-excel",
		title: "Praktik Pengolahan Data dengan Microsoft Excel",
		summary:
			"Proyek ini merupakan kegiatan pembelajaran dan praktik penggunaan Microsoft Excel sebagai bagian dari tugas Mathematics Bootcamp. Kegiatan ini berpedoman pada modul pelatihan yang mencakup pengenalan lingkungan kerja Excel, pengaturan sel dan lembar kerja, pembuatan grafik, operasi matematika dasar, fungsi statistik, hingga fungsi pengolahan teks.",
		objective:
			"Proyek ini bertujuan untuk menyelesaikan tugas dalam modul bootcamp Microsoft Excel sekaligus meningkatkan pemahaman dan keterampilan dasar dalam menggunakan Microsoft Excel. Melalui kegiatan ini, saya mempelajari penerapan berbagai fitur dan fungsi Excel untuk membantu proses pengolahan data secara lebih terstruktur dan sistematis.",
		process: [
			"Mempelajari materi secara bertahap sesuai urutan pertemuan dalam modul.",
			"Mempraktikkan fitur dan fungsi Microsoft Excel berdasarkan penjelasan serta contoh yang tersedia.",
			"Mengerjakan latihan dan tugas yang diberikan dalam setiap materi modul.",
			"Menyelesaikan tugas dengan menerapkan fitur, rumus, dan fungsi yang telah dipelajari.",
		],
		learning:
			"Melalui proyek ini, saya memperoleh pemahaman dan pengalaman praktik dalam menggunakan Microsoft Excel untuk berbagai kebutuhan pengolahan data. Materi yang dipelajari membantu saya memahami penggunaan fitur lembar kerja, pembuatan tabel dan grafik, operasi matematika, fungsi statistik, serta fungsi pengolahan teks. Kegiatan ini juga memberikan dasar keterampilan yang dapat mendukung proses pembelajaran saya sebagai mahasiswa Statistika, khususnya dalam mengolah dan menyajikan data.",
		category: "pengolahan-data-teknologi",
		phase: "completed",
		technologies: ["Microsoft Excel", "Modul Pelatihan Microsoft Excel"],
		icon: "material-symbols:table-chart-outline-rounded",
		year: "2026",
	},
];

/** Get all project data */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}