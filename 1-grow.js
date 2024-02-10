// WPU Coding Challenge 2024
// 1/366
function countBy(x, n) {

    // Buat array kosong untuk menyimpan hasil
    const result = [];

    // Loop dari satu hingga n
    for(let i = 1; i <= n; i++){
        // kalikan i dengan x
        const value = i * x;

        // Tambahkan nilai ke array hasil
        result.push(value);
    }
    // Kembalikan array hasil
    return result;
  }


    // ini kita coba cara yang lebih advance
    function countBy(x){
        const result = x.reduce((acc, curr) => acc * curr, 1);
        return result;
    }

    console.log(countBy([1,10]));
    console.log(countBy([2,10]));
