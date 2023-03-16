class JenisHewan {
    constructor(nama, warna, habitat, makanan) {
        this.nama = nama;
        this.warna = warna;
        this.habitat = habitat;
        this.makanan = makanan;
    }
    pergi(tempat){
        return "kuda pergi ke " + tempat + " dengan nehan ";
    }
}

const kuda = new JenisHewan("Kuda", "Coklat", "Padang rumput", "Daun-daunan");

console.log(kuda.nama);
console.log(kuda.warna);
console.log(kuda.habitat);
console.log(kuda.makanan);

console.log(kuda.pergi("Padang rumput"));
console.table(kuda);


    