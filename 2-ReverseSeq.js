// WPU Coding Challenge 2024
// 2/366
// const reverseSeq = n => {

//     // Periksa apakah n valid
//     if (n <= 0){
//         throw new Error("n harus bilangan bulat");
//     }

//     // buat array kosong
//     const result = [];

//     // Loop dari n ke 1, tambahkan setiap element ke array
//     for (let i = n; i >= 1; i-- ){
//         result.push(i);
//     }

//     // kembalikan array yang dihasilkan
//     return result;
//   }; 

    // Contoh penggunaan 
    // const reversedArray = reverseSeq(5);
    // console.info(reverseSeq);




        // Perbaikan lebih advance reverseSeq
    // const reverseSeq = n => {
    //     // membuat array baru bisa juga dengan spread operator
    //     // [...Array(n)]
    
    // // fungsi Array(n) akan membuat array baru dengan panjang n 
    // // fungsi fill untuk mengisi element dengan nilai static
    //     return Array(n)
    //     .fill()
    //     .map((el, i) => i + 1)
    //     .reverse();
    // }



    // tanpa reverse 
    const reverseSeq = n => {return Array(n).fill().map((el, i) => n - i);}
    
    console.log(reverseSeq(5));
    
