class Box {
  constructor() {
    this.ukuran = 50;
    this.pos = createVector(width/2, height/2);
    this.langkah = 5;
    this.tombolkiri = false;
    this.tombolkanan = false;
    this.tombolatas = false;
    this.tombolbawah = false;
  }
  
  tampilkan() {
    fill(250, 100, 100);
    noStroke();
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.ukuran, this.ukuran);
  }
  
  gerak() {
    if (this.tombolkanan) {
      this.pos.x += this.langkah;
    }
    if (this.tombolkiri) {
      this.pos.x -= this.langkah;
    }
    if (this.tombolatas) {
      this.pos.y -= this.langkah;
    }
    if (this.tombolbawah) {
      this.pos.y += this.langkah;
    }
  }
}
